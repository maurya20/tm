import { TmDb } from "../../localDb/tmdb";
import { CREATE_TASK, GET_TASKS } from "./actionTypes";

export const createTask = (task) => async (dispatch) => {
  dispatch({ type: CREATE_TASK, payload: task });
};

export const getTasks = () => async (dispatch) => {
  const tmObj = await TmDb.readFromTmDb();
  if (tmObj) {
    dispatch({ type: GET_TASKS, payload: tmObj?.tm });
  }
};
