import React from "react";
import logo from "../../../assets/tm-logo.png";

export const Header = (props) => {
  console.log("::::::props", props);
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="logo-img" width={68} height={36} />
        </a>
        <button className="btn btn-outline-success" type="submit">
          Home
        </button>

        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
    </nav>
  );
};
