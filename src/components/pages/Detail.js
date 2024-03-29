import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskFromId } from "../../helper/helper";
import { useDispatch } from "react-redux";
import {
  changeTaskStatus,
  deleteTask,
  updateTask,
} from "../../store/actions/taskActions";
import { taskStatusObjMapping } from "../../constants";
import { TmModal } from "../layouts/TmModal";
import { Signature } from "../reusables/Signature";
import { useConfirmation } from "../../hooks/useConfirmation";

export const Detail = (props) => {
  const { taskId } = useParams();
  const [taskObj, setTaskObj] = useState(null);
  const [sigView, toggleSigView] = useState(false);
  const dispatch = useDispatch();
  const [modalOpened, setModalOpned] = useState(false);
  const [modalFor, setModalFor] = useState("title");
  const navigate = useNavigate();
  const { showModal } = useConfirmation();
  useEffect(() => {
    setTaskObj(getTaskFromId(taskId, props.tmObj));
  }, [taskId, props.tmObj?.lastTaskId]);

  const onStatusChange = (e, value) => {
    dispatch(changeTaskStatus(taskObj, value));
  };
  const openEditModal = (modalFor) => {
    setModalFor(modalFor);
    setModalOpned(true);
  };
  const onSave = (value) => {
    let editedTask = {
      ...taskObj,
    };
    if (modalFor == "title") {
      editedTask.title = value;
    } else if (modalFor == "description") {
      editedTask.description = value;
    }
    dispatch(updateTask(editedTask));
    setTimeout(() => {
      setTaskObj(editedTask);
    }, 100);
  };
  const onSigSave = (data) => {
    let editedTask = {
      ...taskObj,
    };
    editedTask.sign = data;
    dispatch(updateTask(editedTask));
    toggleSigView(false);
    setTimeout(() => {
      setTaskObj(editedTask);
    }, 100);
  };
  /**
   * Delete a task, ask confirmation
   */
  const onTaskDelete = (e) => {
    let deletionInProgress;
    showModal((result) => {
      if (result == "yes" && !deletionInProgress) {
        deletionInProgress = true;
        dispatch(deleteTask(taskObj));
        setTimeout(() => {
          navigate("/backlogs");
        }, 500);
      }
    });
  };
  useState(() => {
    console.log("first effect constructor>>>>>", taskId, taskObj);
  });
  return (
    <>
      {!taskObj ? (
        <div className="jumbotron jumbotron-fluid no-tasks-info">
          <div className="container">
            <h1 className="display-4">No task found with this id!</h1>
          </div>
        </div>
      ) : (
        <div className="container text-center">
          <div className="row">
            <div className="form-horizontal col-10">
              <div>
                <div className="edit-option-div m-2 p-1">
                  <h3>{taskObj?.title}</h3>
                  {!taskObj?.title && <p>Title</p>}
                  <TmModal
                    opened={modalOpened}
                    modalFor={modalFor}
                    onSave={onSave}
                    previousValue={
                      modalFor == "title"
                        ? taskObj?.title
                        : taskObj?.description
                    }
                  >
                    <i
                      className="bi bi-pencil-fill ms-5 edit-icon"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      title="Edit task title"
                      onClick={() => openEditModal("title")}
                    ></i>
                  </TmModal>
                </div>
              </div>
              <div className="edit-option-div m-2 p-1">
                <div
                  dangerouslySetInnerHTML={{ __html: taskObj?.description }}
                ></div>
                {!taskObj?.description && <p>Description</p>}
                <TmModal
                  opened={modalOpened}
                  modalFor={modalFor}
                  onSave={onSave}
                  previousValue={
                    modalFor == "title" ? taskObj?.title : taskObj?.description
                  }
                >
                  <i
                    className="bi bi-pencil-fill ms-5 edit-icon"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    title="Edit task description"
                    onClick={() => openEditModal("description")}
                  ></i>
                </TmModal>
              </div>
              <div>
                <div className="edit-option-div m-2 p-1">
                  <h6>Signature</h6>
                  <img
                    className="sig-img"
                    alt="signature"
                    src={taskObj?.sign}
                  />
                  <i
                    className="bi bi-pencil-fill ms-5 edit-icon"
                    type="button"
                    title="Add/Edit Signature"
                    data-bs-toggle="tooltip"
                    onClick={() => {
                      toggleSigView(!sigView);
                      setTimeout(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                      }, 300);
                    }}
                  ></i>
                </div>
                {sigView && <Signature onSigSave={onSigSave} />}
              </div>
            </div>
            <div className="col-2">
              <div
                className="btn-group float-end mt-2 me-2 mb-1 d-flex flex-column"
                role="group"
                aria-label="Button group with nested dropdown"
                data-bs-toggle="tooltip"
                title="Change Task Status"
              >
                <div className="btn-group rounded" role="group">
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
                <button
                  type="button"
                  className="btn btn-danger mt-5 rounded"
                  onClick={() => onTaskDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
