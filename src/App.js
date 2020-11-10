import React, { Component } from "react";

import "./styles.css";

import Person from "./Person/Person";
class App extends Component {
  //export default function App() {
  render() {
    return (
      <div className="App">
        <h1>Hello Sandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>this is working</p>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
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
