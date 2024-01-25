import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

export const Signature = (props) => {
  const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  };
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  };

  useEffect(() => {}, [signature]);
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
          className="bi bi-arrow-clockwise sig-clear-btn"
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
