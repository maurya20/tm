import React from "react";
import { TMAlert } from "../../services/alertService";
import { Board } from "../layouts/Board";
export const Home = (props) => {
  const openAlert = () => {
    TMAlert.showAlert("danger", "I am danger alert!!!!");
  };
  return (
    <>
      {/* <h3 className="mike">Home Component</h3>
      <div id="liveAlertPlaceholder"></div>
      <button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={() => openAlert()}
      >
        Show live alert
      </button> */}
      <Board />
    </>
  );
};
