import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

export const Signature = (props) => {
  const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  };
  const clearSignature = () => {
    toggleSig();
    sigRef.current.clear();
    setSignature(null);
  };

  useEffect(() => {}, [signature]);
  function toggleSig() {
    let upClass = "sig-toggle-up";
    let downClass = "sig-toggle-down";
    let square = document.querySelector(".sig-clear-btn");
    if (~square.className.indexOf(downClass)) {
      square.className = square.className.replace(downClass, upClass);
    } else {
      square.className = square.className.replace(upClass, downClass);
    }
  }
  return (
    <div className="sig-wrapper">
      {/* <h5 className="text-center">Signature</h5> */}

      <SignatureCanvas
        penColor="black"
        canvasProps={{ className: "signature" }}
        ref={sigRef}
        onEnd={handleSignatureEnd}
      />
      <div className="sig-btns-wrap">
        <i
          className="bi bi-arrow-clockwise sig-clear-btn sig-toggle-down"
          onClick={clearSignature}
        ></i>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => props.onSigSave(signature)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
