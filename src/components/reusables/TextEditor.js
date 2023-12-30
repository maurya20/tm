import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const TextEditor = ({ defaultVal, emitVal, onFocus }) => {
  //const [text, setText] = React.useState("<p>Hello from CKEditor&nbsp;5!</p>");
  return (
    <CKEditor
      editor={ClassicEditor}
      data={defaultVal}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        //console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        emitVal(editor.getData());
      }}
      //   onBlur={(event, editor) => {
      //     console.log("Blur.", editor);
      //   }}
      onFocus={(event, editor) => {
        onFocus();
      }}
    />
  );
};
