import React from "react";
import nameMaker from "./nameMaker";

class Employee {
    constructor(id) {
        this.key = id;
        this.firstName = nameMaker.makeGivenName();
        this.lastName = nameMaker.makeSurname();
        this.department = "";
        this.phoneNumber = "";
        this.computerName = "";
        this.officeNumber = "";
        this.managerName = "";
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    lastFirstName() {
        return this.lastName + ", " + this.firstName;
    }

    initials() {
        return this.firstName[0] + " " + this.lastName[0];
    }

    toHTML() {
        return (
            <div key={this.key}>
                <p>{this.lastFirstName()}</p>
                <ul>
                    <li><span style={{ fontWeight: 200 }}>Department:</span> {this.department}</li>
                    <li><span style={{ fontWeight: 200 }}>Manager:</span> {this.managerName}</li>
                    <li><span style={{ fontWeight: 200 }}>Phone:</span> {this.phoneNumber}</li>
                    <li><span style={{ fontWeight: 200 }}>Office Number:</span> {this.officeNumber}</li>
                    <li><span style={{ fontWeight: 200 }}>Computer:</span> {this.computerName}</li>
                </ul>
            </div>
        );
    }

    toHTML_TableRow() {
        return (
            <tr key={this.key}>
                <td>{this.lastFirstName()}</td>
                <td>{this.department}</td>
                <td>{this.phoneNumber}</td>
                <td>{this.officeNumber}</td>
                <td>{this.computerName}</td>
            </tr>
        )
    }

    generateName() {
        this.firstName = nameMaker.makeGivenName();
        this.surname = nameMaker.makeSurname();
        return true;
    }

    generateDept(departmentList) {
        if (departmentList) {
            this.department = departmentList[Math.floor(Math.random() * departmentList.length)];
        }
    }

    generatePhoneNumber(areaCode, prefix, lineNumber) {
        this.phoneNumber = makePhoneNumber(areaCode, prefix, lineNumber, ".");
    }

    generatePhoneExtension(length) {
        this.phoneNumber = makeNumber(length);
    }

    generateOfficeNumber(length, prefix = "", suffix = "") {
        this.officeNumber = prefix + makeNumber(length) + suffix;
    }

    generateComputerName(prefixList, suffixLength, separator = "_") {
        this.computerName = makeComputerName(prefixList, suffixLength, separator);
    }
}

function makePhoneNumber(areaCode = "", prefix = "", lineNumber = "", separator = "-") {
    //  Doesn't include the country code.
    if (areaCode === "") {
        areaCode = Math.floor(Math.random() * 1000).toString();
    }
    while (areaCode.length < 3) areaCode = "0" + areaCode;
    areaCode = areaCode.substr(0, 3);

    if (prefix === "") {
        prefix = Math.floor(Math.random() * 1000).toString();
    }
    while (prefix.length < 3) prefix = "0" + prefix;
    prefix = prefix.substr(0, 3);

    if (lineNumber === "") {
        lineNumber = Math.floor(Math.random() * 10000).toString();
    }
    while (lineNumber.length < 4) lineNumber = "0" + lineNumber;
    lineNumber = lineNumber.substr(0, 4);

    return areaCode + separator + prefix + separator + lineNumber;
}

function makeNumber(length) {
    let returnString = "";
    for (let i = 0; i < length; i++) {
        returnString += Math.floor(Math.random() * 10).toString();
    }
    return returnString;
}

function makeComputerName(prefixList, suffixLength, separator = "_") {
    let prefix = prefixList[Math.floor(Math.random() * prefixList.length)].toUpperCase();
    let suffix = "";
    for (let i = 0; i < suffixLength; i++) {
        suffix += Math.floor(Math.random() * 10).toString();
    }
    return prefix + separator + suffix;
}


export default Employee;
