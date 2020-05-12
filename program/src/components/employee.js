import React from "react";
import nameMaker from "./nameMaker";

class Employee {
    constructor() {
        this.firstName = nameMaker.makeGivenName();
        this.lastName = nameMaker.makeSurname();
        this.department = "";
        this.phoneNumber = "";
        this.computerName = "";
        this.officeNumber = "";
        this.managerName = "";
    }

    initials() {
        return this.firstName + " " + this.lastName;
    }

    toHTML() {
        return (
            <div>
                <p>{this.lastName}, {this.firstName}</p>
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
            <tr>
                <td>{this.lastName}, {this.firstName}</td>
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
}

export default Employee;
