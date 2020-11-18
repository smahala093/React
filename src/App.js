import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./styles.css";

import Person from "./Person/Personn";
class App extends Component {
  //export default function App() {
  state = {
    persons: [
      { id: "suresh", name: "Srk", age: 45 },
      { id: "sunil", name: "Akki", age: 54 },
      { id: "viki", name: "Ran", age: 26 }
    ],
    otherPerson: "Some Other Person",
    showPerson: false
  };
  // switchNameHandler = (newName) => {
  //   // console.log("Was Clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 45 },
  //       { name: "Akki", age: 54 },
  //       { name: "Ran", age: 30 }
  //     ]
  //   });
  // };
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  togglePerosnsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello Sandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <p className={classes.join(" ")}>this is working</p>
          <button style={style} onClick={this.togglePerosnsHandler}>
            Toggle Persons
          </button>
          {person}
        </div>
      </StyleRoot>
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
export default Radium(App);
