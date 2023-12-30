import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Import our custom CSS
import "./scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import all of Bootstrap's JS
import App from "./components/App";
import { Loader } from "./components/reusables/Loader";
import { store } from "./store";
import { TmDb } from "./localDb/tmdb";
import { getTasks } from "./store/actions/taskActions";

function appRenderer() {
  if (window.configLoded) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  } else {
    ReactDOM.render(<Loader />, document.getElementById("loading"));
  }
}

const intervalId = setInterval(() => {
  appRenderer();
  if (window.configLoded) {
    clearInterval(intervalId);
    const loaderEl = document.getElementById("loading");
    if (loaderEl) {
      loaderEl.remove();
      //Intialize redux state first time if dbObj is present
      store.dispatch(getTasks());
    }
  }
}, 1000);
store.subscribe(async () => {
  await TmDb.updateInToDb(store.getState());
});
