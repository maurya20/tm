import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskFromId } from "../../helper/helper";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../store/actions/taskActions";
import { taskStatusObjMapping } from "../../constants";
import { TmModal } from "../layouts/TmModal";

export const Detail = (props) => {
  const { taskId } = useParams();
  const [taskObj, setTaskObj] = useState(null);
  const dispatch = useDispatch();
  const [modalOpened, setModalOpned] = useState(false);
  const [modalFor, setModalFor] = useState("title");
  useEffect(() => {
    setTaskObj(getTaskFromId(taskId, props.tmObj));
  }, [taskId, props.tmObj?.lastTaskId]);

  const onStatusChange = (e, value) => {
    dispatch(changeTaskStatus(taskObj, value));
  };
  const openEditModal = (modalFor) => {
    setModalFor("description");
    setModalOpned(true);
  };
  const onSave = (value) => {
    console.log("inonSave>>>>", value, modalFor);
  };
  return (
    <div>
      <div
        className="btn-group float-end mt-2 me-2 mb-1"
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
        <div className="title-div m-2 p-1">
          <h3>{taskObj?.title}</h3>
          <i
            className="bi bi-pencil-fill ms-5 edit-icon"
            type="button"
            data-bs-toggle="tooltip"
            title="Edit task title"
            onClick={() => openEditModal("title")}
          ></i>
        </div>
        <div dangerouslySetInnerHTML={{ __html: taskObj?.description }}></div>
      </div>
      {modalOpened && (
        <TmModal
          modalFor={modalFor}
          onSave={onSave}
          previousValue={
            modalFor == "title" ? taskObj?.title : taskObj?.description
          }
        />
      )}
    </div>
  );
};
