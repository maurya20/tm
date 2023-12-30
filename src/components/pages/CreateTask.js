import React, { useEffect, useState } from "react";
import { TextEditor } from "../reusables/TextEditor";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/actions/taskActions";
import { useLocalDb } from "../../hooks/useLocalDb";
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
    };
    console.log("taskObj???", newTask);
    dispatch(createTask(newTask));
    setItem(
      "tm",
      { tm: { tasks: [newTask] }, logo: "bhdcbhbch" },
      getItem
    ).then((data) => {
      console.log("dat>>>>>", data);
    });
  };

  useEffect(() => {
    getItem("tm", (items) => {
      // console.log("localeDb::::", items);
    });
  }, [getItem]);

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