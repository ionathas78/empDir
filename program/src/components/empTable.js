import React from "react";

const EmployeeTable = props => {
    let html = [];
    props.empList.forEach(item => {
        html.push(item.toHTML_TableRow());
    })
    return (
        <div>
            <h1>Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{ padding: "2px 5px" }}>
                            <a 
                                href="/sortby/name"
                                style={{ cursor: "pointer", color: "#aaaaff" }}
                                onClick={props.byNameSorter}
                            >
                                Name
                            </a>
                        </th>
                        <th style={{ padding: "2px 5px" }}>
                            <a 
                                href="/sortby/dept"
                                style={{ cursor: "pointer", color: "#aaaaff" }}
                                onClick={props.byDeptSorter}
                            >
                                Department
                            </a>
                        </th>
                        <th style={{ padding: "2px 10px" }}>
                            <a 
                                href="/sortby/phone"
                                style={{ cursor: "pointer", color: "#aaaaff" }}
                                onClick={props.byPhoneSorter}
                            >
                                Phone
                            </a>
                        </th>
                        <th style={{ padding: "2px 10px" }}>
                            <a 
                                href="/sortby/office"
                                style={{ cursor: "pointer", color: "#aaaaff" }}
                                onClick={props.byOfficeSorter}
                            >
                                Office
                            </a>
                        </th>
                        <th style={{ padding: "2px 5px" }}>
                            <a 
                                href="/sortby/computer"
                                style={{ cursor: "pointer", color: "#aaaaff" }}
                                onClick={props.byComputerSorter}
                            >
                                Computer
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;