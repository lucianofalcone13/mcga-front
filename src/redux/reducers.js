import {
  ADD_TASK_FULFILLED,
  ADD_TASK_PENDING,
  ADD_TASK_REJECTED,
  FETCH_TASKS_PENDING,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED,
  EDIT_TASK_PENDING,
  EDIT_TASK_REJECTED,
  EDIT_TASK_FULFILLED
} from "./constants";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  error: "",
};

export const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_TASK_PENDING:
    case ADD_TASK_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TASK_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case EDIT_TASK_FULFILLED:
      console.log(action.payload)
      const idx = state.list.findIndex((t) => t._id === action.payload._id)
      const updatedList = [...state.list]
      if (idx !== -1) {
        updatedList.splice(idx, 1, {...action.payload})
        return {
          ...state,
          isLoading: false,
          list: updatedList
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: `An error has occurred while editing the task: ${action.payload._id}`
        }
      }
    case FETCH_TASKS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TASKS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case ADD_TASK_REJECTED:
    case EDIT_TASK_REJECTED:
    case FETCH_TASKS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
