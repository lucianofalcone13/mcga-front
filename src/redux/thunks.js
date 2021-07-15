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
  editTaskPending,
  deleteTaskFulfilled,
  deleteTaskRejected,
  deleteTaskPending,
} from "./actions";

export const addTask =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(addTaskPending());
      const { data: response } = await axios.post(apiUrl, data);
      if (response.success) {
        dispatch(addTaskFulfilled(response.data));
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
        console.log(response)
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
      const { data: response } = await axios.put(`${apiUrl}/tasks/edit/${id}`, {
        id: id,
        description: value,
      });
      if (response.success) {
        dispatch(editTaskFulfilled(response.data));
      } else {
        dispatch(editTaskRejected(response.message));
      }
    } catch (error) {
      dispatch(editTaskRejected(error.message));
    }
  };

export const deleteTask =
  (id) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(deleteTaskPending());
      console.log(`${apiUrl}/tasks/${id}`);
      const { data: response } = await axios.delete(`${apiUrl}/tasks/${id}`);
      if (response.success) {
        dispatch(deleteTaskFulfilled(response.data));
      } else {
        dispatch(deleteTaskRejected(response.message));
      }
    } catch (error) {
      dispatch(deleteTaskRejected(error.message));
    }
  };
