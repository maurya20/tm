import { CREATE_TASK } from "../actions/actionTypes";

export const taskReducer = (state = { blTasks: [] }, action) => {
  const { type, payload } = action;
  console.log("Payload>>>>", payload);
  switch (type) {
    case CREATE_TASK:
      return {
        blTasks: [...state.blTasks, payload],
      };
    default:
      return state;
  }
};