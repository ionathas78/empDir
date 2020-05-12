import React from "react";
// import Employee from "./employee";

const EmployeeTable = empList => {
    let html = [];
    empList.forEach(item => {
        html.push(item.toHTML_TableRow());
    })
    // console.log(empList);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Phone</th>
                    <th>Office</th>
                    <th>Computer</th>
                </tr>
            </thead>
            <tbody>
                {html}
            </tbody>
        </table>
    )
}

export default EmployeeTable;