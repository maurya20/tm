import React, { Component } from "react";
import * as bootstrap from "bootstrap";
import { connect } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./layouts/Header";
import { CreateTask } from "./pages/CreateTask";
import { Backlogs } from "./pages/Backlogs";
import { Detail } from "./pages/Detail";

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
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: "hover",
      });
    });

    // const res = appObj.makeXhrCall(
    //   "https://dog.ceo/api/breeds/image/random",
    //   function (err, res) {
    //     console.log("res:::::::", res);
    //   }
    // );
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/backlogs"
              element={<Backlogs blTasks={this.props.tm?.blTasks} />}
            />
            <Route path="create" element={<CreateTask />} />
            <Route path="detail/:taskId" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    tm: state?.tm,
  };
}
export default connect(mapStateToProps)(App);
