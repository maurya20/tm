import React from "react";
import logo from "../../../assets/tm-logo.png";
import { NavLink } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";

export const Header = (props) => {
  console.log("::::::props", props);
  return (
    <>
      <nav className="navbar bg-body-tertiary navwrap">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="logo-img" width={80} height={36} />
          </a>
          <NavLink to="/">
            <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              title="Go to home"
            >
              Home
            </button>
          </NavLink>
          <NavLink to="create">
            <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              title="Create a new task"
            >
              Create <i className="bi bi-plus-square-fill"></i>
            </button>
          </NavLink>
        </div>
        {/* <main className={"flex-1"}>
        <Outlet />
      </main> */}
      </nav>
      <OutletContainer />
    </>
  );
};
