import { TMAlert } from "../../services/alertService";
import { LoaderService } from "../../services/loader";
import { TmDb } from "../../services/tmdb";
import {
  CHANGE_TASK_STATUS,
  CREATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  RE_ORDER_TASKS,
  UPDATE_TASK,
} from "./actionTypes";

export const createTask = (task) => async (dispatch) => {
  LoaderService.showLoader();
  dispatch({ type: CREATE_TASK, payload: task });
  //No required just to show loader for more time
  setTimeout(() => {
    LoaderService.hideLoader();
    TMAlert.showAlert("success", "Task created successfully.");
  }, 2000);
};

export const getTasks = () => async (dispatch) => {
  const tmObj = await TmDb.readFromTmDb();
  if (tmObj) {
    dispatch({ type: GET_TASKS, payload: tmObj?.tm });
  }
};

export const changeTaskStatus = (task, newStatus) => async (dispatch) => {
  dispatch({
    type: CHANGE_TASK_STATUS,
    payload: { task: task, newStatus: newStatus },
  });
};

export const updateTask = (updatedTask) => async (dispatch) => {
  dispatch({
    type: UPDATE_TASK,
    payload: updatedTask,
  });
};

export const deleteTask = (task) => async (dispatch) => {
  LoaderService.showLoader();
  dispatch({
    type: DELETE_TASK,
    payload: task,
  });
  //No required just to show loader for more time
  setTimeout(() => {
    LoaderService.hideLoader();
    TMAlert.showAlert("success", "Task deleted successfully.");
  }, 2000);
};

export const reorderTasks =
  (fromIndex, toIndex, status) => async (dispatch) => {
    dispatch({
      type: RE_ORDER_TASKS,
      payload: { fromIndex: fromIndex, toIndex: toIndex, status: status },
    });
  };
