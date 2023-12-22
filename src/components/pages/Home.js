import React from "react";
import { Header } from "../reusables/Header";

export const Home = (props) => {
  return (
    <>
      <Header />
      <h3 className="mike">Home Component</h3>
      <button className="btn btn-primary">Primary button</button>
    </>
  );
};
