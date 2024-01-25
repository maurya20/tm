import { firstTaskId } from "../constants";

export function getNextTaskId(lastTaskId) {
  lastTaskId = lastTaskId || firstTaskId;
  let taskNumber = lastTaskId && parseInt(lastTaskId.slice(3));
  let newTaskNumber = taskNumber + 1;
  return "TM-" + String(newTaskNumber);
}

export function getTaskFromId(taskId, tmObj) {
  const {
    blTasks,
    doneTasks,
    toDoTasks,
    inProgressTasks,
    archivedTasks,
    inReviewTasks,
  } = tmObj;

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
  if (taskId && inReviewTasks?.length) {
    let foundTask = inReviewTasks.find((task) => task.id === taskId);
    if (foundTask) return foundTask;
  }
  return null;
}

export function addIntoNewStatusCategory(task, newStatus, oldState) {
  let state = JSON.parse(JSON.stringify(oldState));
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
      state.toDoTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "done") {
    const index = state.doneTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.doneTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "inPg") {
    const index = state.inProgressTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.inProgressTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "inReview") {
    const index = state.inReviewTasks.findIndex((t) => t.id == task.id);
    if (index > -1) {
      state.inReviewTasks.splice(index, 1);
      task.status = newStatus;
      return pushIntoNewCategory(task, newStatus, state);
    }
  }
  if (task.status == "archived") {
    const index = state.archivedTasks.findIndex((t) => t.id == task.id);
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
  if (newStatus == "inReview") {
    state.inReviewTasks.push(task);
  }
  if (newStatus == "archived") {
    state.archivedTasks.push(task);
  }
  return state;
}

export function editTaskInCategory(updatedTask, oldState) {
  let state = { ...oldState };
  if (updatedTask.status == "bklg") {
    const index = state.blTasks.findIndex((t) => t.id == updatedTask.id);
    if (index > -1) {
      state.blTasks[index].title = updatedTask.title;
      state.blTasks[index].description = updatedTask.description;
      state.blTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else if (updatedTask.status == "toDo") {
    const index = state.toDoTasks.findIndex((t) => t.id == updatedTask.id);
    if (index > -1) {
      state.toDoTasks[index].title = updatedTask.title;
      state.toDoTasks[index].description = updatedTask.description;
      state.toDoTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else if (updatedTask.status == "done") {
    const index = state.doneTasks.findIndex((t) => t.id == updatedTask.id);
    if (index > -1) {
      state.doneTasks[index].title = updatedTask.title;
      state.doneTasks[index].description = updatedTask.description;
      state.doneTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else if (updatedTask.status == "inPg") {
    const index = state.inProgressTasks.findIndex(
      (t) => t.id == updatedTask.id
    );
    if (index > -1) {
      state.inProgressTasks[index].title = updatedTask.title;
      state.inProgressTasks[index].description = updatedTask.description;
      state.inProgressTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else if (updatedTask.status == "inReview") {
    const index = state.inReviewTasks.findIndex((t) => t.id == updatedTask.id);
    if (index > -1) {
      state.inReviewTasks[index].title = updatedTask.title;
      state.inReviewTasks[index].description = updatedTask.description;
      state.inReviewTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else if (updatedTask.status == "archived") {
    const index = state.archivedTasks.findIndex((t) => t.id == updatedTask.id);
    if (index > -1) {
      state.archivedTasks[index].title = updatedTask.title;
      state.archivedTasks[index].description = updatedTask.description;
      state.archivedTasks[index].sign = updatedTask.sign;
      return state;
    }
  } else {
    return state;
  }
}
