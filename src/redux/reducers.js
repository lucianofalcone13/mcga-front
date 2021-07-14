import {
  ADD_TASK_FULFILLED,
  ADD_TASK_PENDING,
  ADD_TASK_REJECTED,
  FETCH_TASKS_PENDING,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED,
} from "./constants";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  error: "",
};

export const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    case ADD_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
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
