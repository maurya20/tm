import React, { useEffect, useState } from "react";
import { TextEditor } from "../reusables/TextEditor";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/actions/taskActions";
import { useLocalDb } from "../../hooks/useLocalDb";
import { getNextTaskId } from "../../helper/helper";
import { firstTaskId } from "../../constants";
export const CreateTask = (props) => {
  const { getItem, setItem } = useLocalDb({ fallbackValue: [] });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const emitEditorVal = (val) => {
    setDescription(val);
  };
  const createNewTask = (e) => {
    e.preventDefault();
    let newTask = {
      title: title,
      description: description,
      id: getNextTaskId(firstTaskId),
    };
    console.log("taskObj???", newTask);
    dispatch(createTask(newTask));
  };
  return (
    <div className="editor">
      <form className="form-horizontal">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="htmlFm-label">
            Title
          </label>
          <input
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
            defaultVal={"<p>Enter task description here...</p>"}
            emitVal={emitEditorVal}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary float-end"
          onClick={createNewTask}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
