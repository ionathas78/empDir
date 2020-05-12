import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Employee from "./components/employee";
import EmployeeTable from "./components/empTable";

function App() {
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

  return (
    <div className="App">
      <header className="App-header">

        {EmployeeTable(employees)}

      </header>
    </div>
  );
}

export default App;
