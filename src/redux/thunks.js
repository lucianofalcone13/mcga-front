import axios from "axios";
import {
  addTaskPending,
  addTaskFulfilled,
  addTaskRejected,
  fetchTasksFulfilled,
  fetchTasksPending,
  fetchTasksRejected,
  editTaskFulfilled,
  editTaskRejected,
  editTaskPending
} from "./actions";

export const addTask =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(addTaskPending());
      const { data: response } = await axios.post(apiUrl, data);
      if (response.success) {
        dispatch(addTaskFulfilled(response.list));
      } else {
        dispatch(addTaskRejected(response.message));
      }
    } catch (error) {
      dispatch(addTaskRejected(error.message));
    }
  };

export const fetchTasks =
  () =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(fetchTasksPending());
      const { data: response } = await axios.get(`${apiUrl}/tasks`);
      if (response.success) {
        dispatch(fetchTasksFulfilled(response.data));
      } else {
        dispatch(fetchTasksRejected(response.message));
      }
    } catch (error) {
      dispatch(fetchTasksRejected(error.message));
    }
  };

export const editTask =
  (id, value) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(editTaskPending());
      const { data: response } = await axios.put(`${apiUrl}/tasks/edit/${id}`, {id: id, description: value});
      if (response.success) {
        dispatch(editTaskFulfilled(response.data));
      } else {
        dispatch(editTaskRejected(response.message));
      }
    } catch (error) {
      dispatch(editTaskRejected(error.message));
    }
  };
