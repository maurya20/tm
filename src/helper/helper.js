import { firstTaskId } from "../constants";

export function getNextTaskId(lastTaskId) {
  lastTaskId = lastTaskId || firstTaskId;
  let taskNumber = lastTaskId && parseInt(lastTaskId.slice(3));
  let newTaskNumber = taskNumber + 1;
  return "TM-" + String(newTaskNumber);
}
