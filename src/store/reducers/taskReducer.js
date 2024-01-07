import { defaultTmObj } from "../../constants";
import {
  CHANGE_TASK_STATUS,
  CREATE_TASK,
  GET_TASKS,
} from "../actions/actionTypes";
import { addIntoNewStatusCategory } from "../../helper/helper";

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
    case CHANGE_TASK_STATUS:
      const updatedState = addIntoNewStatusCategory(
        payload.task,
        payload.newStatus,
        state
      );
      return {
        ...updatedState,
      };
    default:
      return state;
  }
};
