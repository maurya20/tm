import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskFromId } from "../../helper/helper";

export const Detail = (props) => {
  const { taskId } = useParams();
  const [taskObj, setTaskObj] = useState(null);

  useEffect(() => {
    setTaskObj(getTaskFromId(taskId, props.tmObj));
  }, [taskId, props.tmObj?.lastTaskId]);
  return (
    <div>
      <div
        className="btn-group float-end mt-2"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            value={"Backlog"}
          >
            Backlog
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">To Do</button>
            </li>
            <li>
              <button className="dropdown-item">In Progress</button>
            </li>
            <li>
              <button className="dropdown-item">In Review</button>
            </li>
            <li>
              <button className="dropdown-item">Done</button>
            </li>
            <li>
              <button className="dropdown-item">Archived</button>
            </li>
            <li>
              <button className="dropdown-item">Backlog</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="form-horizontal">
        <h3>{taskObj?.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: taskObj?.description }}></div>
      </div>
    </div>
  );
};
