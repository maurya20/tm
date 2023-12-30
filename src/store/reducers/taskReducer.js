import { defaultTmObj } from "../../constants";
import { CREATE_TASK, GET_TASKS } from "../actions/actionTypes";

export const taskReducer = (state = defaultTmObj, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK:
      return {
        ...state,
        blTasks: [...state.blTasks, payload],
        lastTaskId: payload.id,
      };
    case GET_TASKS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
