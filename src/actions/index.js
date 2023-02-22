export function addTaskAction(task) {
  return {
    type: "ADD_TASK",
    task,
  };
}
export function deleteTaskAction(task) {
  return {
    type: "DELETE_TASK",
    task,
  };
}
