import React, { Component } from "react";
import * as bootstrap from "bootstrap";
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
    //Enabling bs tooltip
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    const res = appObj.makeXhrCall(
      "https://dog.ceo/api/breeds/image/random",
      function (err, res) {
        console.log("res:::::::", res);
      }
    );
  }

  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}

export default App;
