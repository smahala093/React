import React, { Component } from "react";

import "./styles.css";

import Person from "./Person/Person";
class App extends Component {
  //export default function App() {
  state = {
    persons: [
      { name: "Srk", age: 45 },
      { name: "Akki", age: 54 },
      { name: "Ran", age: 26 }
    ],
    otherPerson: "Some Other Person"
  };
  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    this.setState({
      persons: [
        { name: newName, age: 45 },
        { name: "Akki", age: 54 },
        { name: "Ran", age: 30 }
      ]
    });
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maxi", age: 45 },
        { name: event.target.value, age: 54 },
        { name: "Ran", age: 30 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hello Sandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>this is working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Ranbeersss")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Ranbeer!!")}
          changed={this.changeNameHandler}
        >
          My Hobby Running
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // render() {
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", { className: "App" }, "Is does work now")
  //   );
  // }
}
export default App;
