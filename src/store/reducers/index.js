import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";

export const allReducers = combineReducers({
  task: taskReducer,
});
