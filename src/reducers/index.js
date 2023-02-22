export default function globalTask(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      var newState = [action.task, ...state];
      return newState;
    case "DELETE_TASK":
      var newDeletedState = state.filter(
        (currTask) => currTask !== action.task
      );
      return newDeletedState;
    default:
      return state;
  }
}
