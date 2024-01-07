import React from "react";
export const Board = (props) => {
  const {
    blTasks,
    doneTasks,
    inProgressTasks,
    inReviewTasks,
    archivedTasks,
    toDoTasks,
  } = props.tmObj;
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col tm-col">
          <h4>To Do</h4>
          {toDoTasks &&
            toDoTasks.map((item) => {
              return (
                <div
                  className="card mb-1"
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <div className="card-header">{item.id}</div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col tm-col">
          <h4>In Progress</h4>
          {inProgressTasks &&
            inProgressTasks.map((item) => {
              return (
                <div
                  className="card mb-1"
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <div className="card-header">{item.id}</div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col tm-col">
          <h4>In Review</h4>
          {inReviewTasks &&
            inReviewTasks.map((item) => {
              return (
                <div
                  className="card mb-1"
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <div className="card-header">{item.id}</div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col tm-col">
          <h4>Done</h4>
          {doneTasks &&
            doneTasks.map((item) => {
              return (
                <div
                  className="card mb-1"
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <div className="card-header">{item.id}</div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
