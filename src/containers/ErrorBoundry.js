import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="jumbotron jumbotron-fluid no-tasks-info err-bg">
          <div className="container">
            <h1 className="display-4">Something went wrong!!</h1>
            <h3>Need to reload</h3>
            <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              title="Reload"
              onClick={() => location.reload()}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
