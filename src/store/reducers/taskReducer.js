import { defaultTmObj } from "../../constants";
import {
  CHANGE_TASK_STATUS,
  CREATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  UPDATE_TASK,
} from "../actions/actionTypes";
import {
  addIntoNewStatusCategory,
  deleteTaskInCategory,
  editTaskInCategory,
} from "../../helper/helper";

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
    case UPDATE_TASK:
      const editedState = editTaskInCategory(payload, state);
      return {
        ...editedState,
      };
    case DELETE_TASK:
      let oldState = JSON.parse(JSON.stringify(state));
      const stateAfterDeletion = deleteTaskInCategory(payload, oldState);
      return {
        ...stateAfterDeletion,
      };
    default:
      return state;
  }
};
