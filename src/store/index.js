import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { allReducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
