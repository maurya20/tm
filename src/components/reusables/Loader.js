import React from "react";

export const Loader = () => {
  return (
    <div id="overlay">
      <div id="spinner" className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    </div>
  );
};
