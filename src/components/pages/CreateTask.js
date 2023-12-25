import React from "react";
import { TextEditor } from "../reusables/TextEditor";

export const CreateTask = (props) => {
  const emitEditorVal = (val) => {
    console.log("emitVal;", val);
  };
  return (
    <div className="editor">
      <h2>Using CKEditor&nbsp;5 build in React</h2>
      <TextEditor
        defaultVal={"<p>Hello from CKEditor&nbsp;5!</p>"}
        emitVal={emitEditorVal}
      />
    </div>
  );
};
