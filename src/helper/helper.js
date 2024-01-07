import { firstTaskId } from "../constants";

export function getNextTaskId(lastTaskId) {
  lastTaskId = lastTaskId || firstTaskId;
  let taskNumber = lastTaskId && parseInt(lastTaskId.slice(3));
  let newTaskNumber = taskNumber + 1;
  return "TM-" + String(newTaskNumber);
}

export function getTaskFromId(taskId, tmObj) {
  const { blTasks, doneTasks, toDoTasks, inProgressTasks, archivedTasks } =
    tmObj;

  if (taskId && blTasks?.length) {
    let foundTask = blTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  if (taskId && toDoTasks?.length) {
    let foundTask = toDoTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  if (taskId && inProgressTasks?.length) {
    let foundTask = inProgressTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  if (taskId && doneTasks?.length) {
    let foundTask = doneTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  if (taskId && archivedTasks?.length) {
    let foundTask = archivedTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  return null;
}

export function addIntoNewStatusCategory(task, newStatus, oldState) {
  let state = JSON.parse(JSON.stringify(oldState));
  console.log("state????", state);
  if (task.status == "bklg") {
    const index = state.blTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.blTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "toDo") {
    const index = state.toDoTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.blTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "done") {
    const index = state.blTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.doneTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "inPg") {
    const index = state.blTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.inProgressTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "inRe") {
    const index = state.blTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.inReviewTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "archived") {
    const index = state.blTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.archivedTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
}

function pushIntoNewCategory(task, newStatus, state) {
  if (newStatus == "toDo") {
    state.toDoTasks.push(task);
  }
  if (newStatus == "bklg") {
    state.blTasks.push(task);
  }
  if (newStatus == "done") {
    state.doneTasks.push(task);
  }
  if (newStatus == "inPg") {
    state.inProgressTasks.push(task);
  }
  if (newStatus == "inRe") {
    state.inReviewTasks.push(task);
  }
  if (newStatus == "archived") {
    state.archivedTasks.push(task);
  }
  return state;
}
