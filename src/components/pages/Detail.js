import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskFromId } from "../../helper/helper";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../store/actions/taskActions";
import { taskStatusObjMapping } from "../../constants";

export const Detail = (props) => {
  const { taskId } = useParams();
  const [taskObj, setTaskObj] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setTaskObj(getTaskFromId(taskId, props.tmObj));
  }, [taskId, props.tmObj?.lastTaskId]);

  const onStatusChange = (e, value) => {
    dispatch(changeTaskStatus(taskObj, value));
  };
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
          >
            {taskStatusObjMapping[taskObj?.status]}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "toDo")}
              >
                To Do
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "inPg")}
              >
                In Progress
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "inReview")}
              >
                In Review
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "done")}
              >
                Done
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "archived")}
              >
                Archived
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => onStatusChange(e, "bklg")}
              >
                Backlog
              </button>
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
