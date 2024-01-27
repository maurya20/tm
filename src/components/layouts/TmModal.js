import React, { useEffect, useState } from "react";
import { TextEditor } from "../reusables/TextEditor";

export const TmModal = (props) => {
  const [content, setContent] = useState(props.previousValue);
  useEffect(() => {
    setContent(props.previousValue);
    setTimeout(() => {
      var modalEl = document.getElementById("staticBackdrop");
      console.log("??????", modalEl);
    }, 260);
  }, [props.previousValue]);
  return (
    <main>
      {props.children}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        data-bs-focus="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Edit {props.modalFor}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.modalFor == "title" && (
                <div className="mb-3">
                  <textarea
                    rows={3}
                    value={content}
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    aria-describedby="titleHelp"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              )}

              {props.modalFor == "description" && (
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">
                    Description
                  </label>
                  <TextEditor
                    defaultVal={props.previousValue}
                    emitVal={(val) => setContent(val)}
                    onFocus={() => void null}
                  />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={() => props.onSave(content)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
