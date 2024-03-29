import React, { useState } from "react";
import { TextEditor } from "../reusables/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../store/actions/taskActions";
import { getNextTaskId } from "../../helper/helper";
import { useLoader } from "../../hooks/useLoader";
import { LoaderService } from "../../services/loader";
import { backlog } from "../../constants";
import { useNavigate } from "react-router-dom";

export const CreateTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [defaultEditorVal, setEditorDefautVal] = useState(
    "<p>Enter task description here...</p>"
  );
  const tm = useSelector((state) => state.tm);
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const emitEditorVal = (val) => {
    setDescription(val);
  };
  const createNewTask = (e) => {
    e.preventDefault();
    let newTask = {
      title: title,
      description: description,
      id: getNextTaskId(tm?.lastTaskId),
      status: backlog,
    };
    dispatch(createTask(newTask));
    setTitle("");
    setDescription("");
    setEditorDefautVal("");
    setTimeout(() => {
      navigate("/detail/" + newTask.id);
    }, 500);
  };
  return (
    <div className="editor">
      <form className="form-horizontal">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="htmlFm-label">
            Title
          </label>
          <input
            value={title}
            type="text"
            className="form-control"
            id="taskTitle"
            aria-describedby="titleHelp"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <TextEditor
            defaultVal={defaultEditorVal}
            emitVal={emitEditorVal}
            onFocus={() => setEditorDefautVal("")}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary float-end mb-2"
          onClick={createNewTask}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
