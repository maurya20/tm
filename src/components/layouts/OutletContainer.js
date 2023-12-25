import React from "react";
import { Outlet } from "react-router-dom";

export const OutletContainer = (props) => {
  return (
    <main className={"flex-1"}>
      <Outlet />
    </main>
  );
};
