import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

export const Signature = () => {
  const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  };
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  };

  useEffect(() => {
    console.log("END<>>>>>>>", signature);
  }, [signature]);
  return (
    <div className="sig-wrapper">
      <h5 className="text-center">Signature</h5>
      <i
        className="bi bi-arrow-clockwise sig-clear-btn"
        onClick={clearSignature}
      ></i>
      <SignatureCanvas
        penColor="black"
        canvasProps={{ className: "signature" }}
        ref={sigRef}
        onEnd={handleSignatureEnd}
      />
    </div>
  );
};
