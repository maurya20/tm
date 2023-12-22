import React from "react";
import logo from "../../../assets/tm-logo.png";

export const Header = (props) => {
  console.log("::::::props", props);
  return (
    <nav className="navbar bg-body-tertiary navwrap">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="logo-img" width={80} height={36} />
        </a>
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="tooltip"
          title="Go to home"
        >
          Home
        </button>

        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="tooltip"
          title="Create a new task"
        >
          Create <i className="bi bi-plus-square-fill"></i>
        </button>
      </div>
    </nav>
  );
};
