import React from "react";
import { TextEditor } from "../reusables/TextEditor";

export const CreateTask = (props) => {
  const emitEditorVal = (val) => {
    console.log("emitVal;", val);
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <TextEditor
            defaultVal={"<p>Hello from CKEditor&nbsp;5!</p>"}
            emitVal={emitEditorVal}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
