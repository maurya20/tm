export const getMyDate = () => {
  return new Date();
};

export const dbName = "tm";
export const firstTaskId = "TM-10000";
export const backlog = "bklg";
export const toDo = "todo";

export const defaultTmObj = {
  blTasks: [],
  toDoTasks: [],
  inProgressTasks: [],
  inReviewTasks: [],
  doneTasks: [],
  archivedTasks: [],
  lastTaskId: "",
};

export const taskStatusObjMapping = {
  bklg: "BackLog",
  toDo: "To Do",
  done: "Done",
  inPg: "In Progress",
  inReview: "In Review",
  archived: "Archived",
};
