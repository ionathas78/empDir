import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Employee from "./components/employee";

function App() {
  let newEmployee = new Employee();
  console.log(newEmployee);
  newEmployee.generateName();
  console.log(newEmployee);
  let html = newEmployee.toHTML();
  console.log(html);

  return (
    <div className="App">
      <header className="App-header">

        {html}

      </header>
    </div>
  );
}

export default App;
