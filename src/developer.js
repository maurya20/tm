import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Import our custom CSS
import "./scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import all of Bootstrap's JS
import App from "./components/App";
import { Loader } from "./components/reusables/Loader";
import { store } from "./store";
import { TmDb } from "./services/tmdb";
import { getTasks } from "./store/actions/taskActions";

function appRenderer() {
  if (window.configLoded) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  } else {
    const loading = ReactDOM.createRoot(document.getElementById("loading"));
    loading.render(<Loader />);
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
