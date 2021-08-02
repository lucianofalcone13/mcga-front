import {
  ADD_TASK_FULFILLED,
  ADD_TASK_PENDING,
  ADD_TASK_REJECTED,
  FETCH_TASKS_PENDING,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED,
  EDIT_TASK_PENDING,
  EDIT_TASK_REJECTED,
  EDIT_TASK_FULFILLED,
  DELETE_TASK_FULFILLED,
  DELETE_TASK_REJECTED,
  DELETE_TASK_PENDING,
} from "./constants";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  error: "",
};

export const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS_PENDING:
    case DELETE_TASK_PENDING:
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
    case DELETE_TASK_FULFILLED:
      const idx = state.list.findIndex((t) => t._id === action.payload._id);
      if (idx !== -1) {
        const updatedList = [...state.list];
        updatedList.splice(idx, 1);
        return {
          ...state,
          isLoading: false,
          list: updatedList,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: `An error has occurred while removing the task: ${action.payload._id}`,
        };
      }
    case EDIT_TASK_FULFILLED:
      const index = state.list.findIndex((t) => t._id === action.payload._id);
      if (index !== -1) {
        const editedList = [...state.list];
        editedList.splice(index, 1, action.payload);
        return {
          ...state,
          isLoading: false,
          list: editedList,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: `An error has occurred while editing the task: ${action.payload._id}`,
        };
      }
    case FETCH_TASKS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case ADD_TASK_REJECTED:
    case EDIT_TASK_REJECTED:
    case FETCH_TASKS_REJECTED:
    case DELETE_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
