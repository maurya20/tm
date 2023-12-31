import { LoaderService } from "../../services/loader";
import { TmDb } from "../../services/tmdb";
import { CREATE_TASK, GET_TASKS } from "./actionTypes";

export const createTask = (task) => async (dispatch) => {
  LoaderService.showLoader();
  dispatch({ type: CREATE_TASK, payload: task });
  //No required just to show loader for more time
  setTimeout(() => {
    LoaderService.hideLoader();
  }, 2000);
};

export const getTasks = () => async (dispatch) => {
  const tmObj = await TmDb.readFromTmDb();
  if (tmObj) {
    dispatch({ type: GET_TASKS, payload: tmObj?.tm });
  }
};
