import {
  ADD_TASK_PENDING,
  ADD_TASK_FULFILLED,
  ADD_TASK_REJECTED,
  FETCH_TASKS_FULFILLED,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_PENDING,
  EDIT_TASK_FULFILLED,
  EDIT_TASK_REJECTED,
  EDIT_TASK_PENDING,
} from "./constants";

export const addTaskPending = () => ({
  type: ADD_TASK_PENDING,
});

export const addTaskFulfilled = (payload) => ({
  type: ADD_TASK_FULFILLED,
  payload: payload,
});

export const addTaskRejected = (err) => ({
  type: ADD_TASK_REJECTED,
  error: err,
});

export const fetchTasksPending = () => ({
  type: FETCH_TASKS_PENDING,
});

export const fetchTasksFulfilled = (payload) => ({
  type: FETCH_TASKS_FULFILLED,
  payload: payload,
});

export const fetchTasksRejected = (err) => ({
  type: FETCH_TASKS_REJECTED,
  error: err,
});

export const editTaskPending = () => ({
  type: EDIT_TASK_PENDING,
});

export const editTaskFulfilled = (payload) => ({
  type: EDIT_TASK_FULFILLED,
  payload: payload,
});

export const editTaskRejected = (err) => ({
  type: EDIT_TASK_REJECTED,
  error: err,
});
