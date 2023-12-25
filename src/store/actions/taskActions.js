import { CREATE_TASK } from "./actionTypes";

export const createTask = (task) => async (dispatch) => {
  dispatch({ type: CREATE_TASK, payload: task });
};
