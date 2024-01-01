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
