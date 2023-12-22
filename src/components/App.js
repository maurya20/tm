import React, { Component } from "react";

class App extends Component {
  options = ["One", "Two", "Three", "Four", "Five"];
  constructor() {
    super();
    this.state = {
      stepArr: [],
      currentComponent: "home",
    };
  }
  componentDidMount() {
    // window.onbeforeunload = function (e) {
    //   e && e.preventDefault();
    //   setTimeout(() => {
    //     window.onbeforeunload = function () {
    //       return "";
    //     };
    //     console.log("user stays?????");
    //   }, 500);
    //   return "";
    // };
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello world! Test</h1>
      </div>
    );
  }
}

export default App;
