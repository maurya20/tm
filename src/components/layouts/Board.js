import React from "react";
import { useNavigate } from "react-router-dom";
export const Board = (props) => {
  const {
    blTasks,
    doneTasks,
    inProgressTasks,
    inReviewTasks,
    archivedTasks,
    toDoTasks,
  } = props.tmObj;

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate("/detail/" + id);
  };
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
                  <div className="card-header">
                    <span
                      className="tm-link"
                      role="button"
                      onClick={() => goToDetail(item.id)}
                    >
                      {item.id}
                    </span>
                  </div>
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
                  <div className="card-header">
                    <span
                      className="tm-link"
                      role="button"
                      onClick={() => goToDetail(item.id)}
                    >
                      {item.id}
                    </span>
                  </div>
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
                  <div className="card-header">
                    <span
                      className="tm-link"
                      role="button"
                      onClick={() => goToDetail(item.id)}
                    >
                      {item.id}
                    </span>
                  </div>
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
                  <div className="card-header">
                    <span
                      className="tm-link"
                      role="button"
                      onClick={() => goToDetail(item.id)}
                    >
                      {item.id}
                    </span>
                  </div>
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
