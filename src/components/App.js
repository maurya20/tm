import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Header } from "./layouts/Header";

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
      <>
        <Header />
        <h1>Hello world! Test</h1>
        <Home />
      </>
    );
  }
}

export default App;
