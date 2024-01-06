import React from "react";
export const Board = (props) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col tm-col">
          <h4>To Do</h4>
        </div>
        <div className="col tm-col">
          <h4>In Progress</h4>
        </div>
        <div className="col tm-col">
          <h4>In Review</h4>
        </div>
        <div className="col tm-col">
          <h4>Done</h4>
        </div>
      </div>
    </div>
  );
};
