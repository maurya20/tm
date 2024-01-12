import React from "react";
import { useNavigate } from "react-router-dom";

export const Backlogs = ({ blTasks }) => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate("/detail/" + id);
  };
  return (
    <>
      {blTasks?.length ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SL. No.</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {blTasks.map((task, index) => {
              return (
                <tr
                  key={task.id}
                  onClick={() => goToDetail(task.id)}
                  className="cursor-pointer"
                  data-bs-toggle="tooltip"
                  title="Task details"
                >
                  <th scope="row">{index + 1}</th>
                  <td>{task.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="jumbotron jumbotron-fluid no-tasks-info">
          <div className="container">
            <h1 className="display-4">No backlog tasks found!</h1>
          </div>
        </div>
      )}
    </>
  );
};
