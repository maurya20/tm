import React from "react";
import { useNavigate } from "react-router-dom";

export const Archived = ({ archivedTasks }) => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate("/detail/" + id);
  };
  return (
    <>
      {archivedTasks?.length ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SL. No.</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {archivedTasks.map((task, index) => {
              return (
                <tr
                  key={task.id}
                  onClick={() => goToDetail(task.id)}
                  className="cursor-pointer"
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
            <h1 className="display-4">No archived tasks found!</h1>
          </div>
        </div>
      )}
    </>
  );
};
