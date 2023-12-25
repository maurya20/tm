export function getNextTaskId(lastTaskId) {
  let taskNumber = lastTaskId && parseInt(lastTaskId.slice(3));
  let newTaskNumber = taskNumber + 1;
  return "TM-" + String(newTaskNumber);
}
