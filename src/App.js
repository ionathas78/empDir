import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Employee from "./components/employee";
import EmployeeTable from "./components/empTable";

class App extends React.Component {
  state = {
    employees: setupApp(),
    sortBy: ""
  }

  sortByName = event => {
    event.preventDefault();

    let newArr;
    let sortValue = (this.state.sortBy !== "NAME ASC") ? "NAME ASC" : "NAME DESC";

    if (this.state.sortBy !== "NAME ASC") {
      newArr = this.state.employees.sort((a, b) => a.lastFirstName() > b.lastFirstName() ? 1 : a.lastFirstName() === b.lastFirstName() ? 0 : -1);
    } else {
      newArr = this.state.employees.sort((a, b) => a.lastFirstName() > b.lastFirstName() ? -1 : a.lastFirstName() === b.lastFirstName() ? 0 : 1);
    }
    this.setState({ employees: newArr, sortBy: sortValue });
  }

  sortByDept = event => {
    event.preventDefault();
    let newArr = returnSorted(this.state.employees, "department", (this.state.sortBy !== "DEPT ASC"));
    let sortValue = (this.state.sortBy !== "DEPT ASC") ? "DEPT ASC" : "DEPT DESC";
    this.setState({ employees: newArr, sortBy: sortValue });
  }

  sortByPhone = event => {
    event.preventDefault();
    let newArr = returnSorted(this.state.employees, "phoneNumber", (this.state.sortBy !== "PHONE ASC"));
    let sortValue = (this.state.sortBy !== "PHONE ASC") ? "PHONE ASC" : "PHONE DESC";
    this.setState({ employees: newArr, sortBy: sortValue });
  }

  sortByOffice = event => {
    event.preventDefault();
    let newArr = returnSorted(this.state.employees, "officeNumber", (this.state.sortBy !== "OFFICE ASC"));
    let sortValue = (this.state.sortBy !== "OFFICE ASC") ? "OFFICE ASC" : "OFFICE DESC";
    this.setState({ employees: newArr, sortBy: sortValue });
  }

  sortByComputer = event => {
    event.preventDefault();
    let newArr = returnSorted(this.state.employees, "computerName", (this.state.sortBy !== "COMPUTER ASC"));
    let sortValue = (this.state.sortBy !== "COMPUTER ASC") ? "COMPUTER ASC" : "COMPUTER DESC";
    this.setState({ employees: newArr, sortBy: sortValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          {EmployeeTable({ 
            empList: this.state.employees,
            byNameSorter: this.sortByName,
            byComputerSorter: this.sortByComputer,
            byDeptSorter: this.sortByDept,
            byOfficeSorter: this.sortByOffice,
            byPhoneSorter: this.sortByPhone
            })}

        </header>
      </div>
    );
  }
}

/**
 * Populates the employee list
 */
function setupApp() {
  let maxEmployee = 10;
  let departments = ["Command", "Marine Command", "Security", "Medical", "Engineering & Maintenance"]
  let computerNames = ["black","blue","green","cyan","red","purple","orange",
        "lgrey","grey","lblue","lgreen","lcyan","lred","lpurple","yellow","white"]
  let employees = [];

  for (let i = 0; i < maxEmployee; i++) {
    let newEmployee = new Employee(i);

    newEmployee.generateName();
    newEmployee.generateDept(departments);
    newEmployee.generatePhoneExtension(4);
    newEmployee.generateComputerName(computerNames, 4, "_");
    newEmployee.generateOfficeNumber(2, "1", "ABCD"[Math.floor(Math.random() * 4)]);

    employees.push(newEmployee);
  }

  return employees;
}

/**
 * Sorts array on basic field name, ascending or descending
 * @param {Array} arr Array to Sort
 * @param {Text} sortField Field on which to sort array
 * @param {Boolean} sortAsc If TRUE, sort the array in ascending order. If FALSE, use descending order.
 */
function returnSorted(arr, sortField, sortAsc) {
  let newArr;
  if (sortAsc) {
    newArr = arr.sort((a, b) => a[sortField] > b[sortField] ? 1 : a[sortField] === b[sortField] ? 0 : -1);
  } else {
    newArr = arr.sort((a, b) => a[sortField] > b[sortField] ? -1 : a[sortField] === b[sortField] ? 0 : 1);
  }
  return newArr;
}

export default App;
