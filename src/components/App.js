import React, { Component } from "react";
import * as bootstrap from "bootstrap";
import { connect } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./layouts/Header";
import { CreateTask } from "./pages/CreateTask";
import { Backlogs } from "./pages/Backlogs";
import { Detail } from "./pages/Detail";
import { Archived } from "./pages/Archived";
import ErrorBoundary from "../containers/ErrorBoundry";
import { TMAlert } from "../services/alertService";

class App extends Component {
  options = ["One", "Two", "Three", "Four", "Five"];
  constructor() {
    super();
    this.state = {
      stepArr: [],
      currentComponent: "home",
      hasError: false,
    };
  }
  componentDidMount() {
    ///detect device type
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Take the user to a different screen here.
      appObj.isMobile = true;
      TMAlert.showAlert(
        "danger",
        "This is desktop only app, UI may look wiered on mobile!!!!!"
      );
    } else {
      appObj.isMobile = false;
    }
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
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<Home tmObj={this.props.tm} />} />
              <Route
                path="/backlogs"
                element={<Backlogs blTasks={this.props.tm?.blTasks} />}
              />
              <Route path="create" element={<CreateTask />} />
              <Route
                path="detail/:taskId"
                element={<Detail tmObj={this.props.tm} />}
              />
              <Route
                path="/archived"
                element={
                  <Archived archivedTasks={this.props.tm?.archivedTasks} />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}
function mapStateToProps(state) {
  return {
    tm: state?.tm,
  };
}
export default connect(mapStateToProps)(App);
