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
  (params) =>
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(addTaskPending());
      const authState = getState().auth;
      const { data: response } = await axios.post(
        `${apiUrl}/tasks/add`,
        params,
        {
          headers: {
            authorization: authState.jwt,
          },
        }
      );
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
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(fetchTasksPending());
      const authState = getState().auth;
      console.log(authState);
      const { data: response } = await axios.get(`${apiUrl}/tasks`, {
        headers: {
          authorization: authState.jwt,
        },
      });
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
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(editTaskPending());
      const authState = getState().auth;
      const { data: response } = await axios.put(
        `${apiUrl}/tasks/edit/${id}`,
        {
          id: id,
          description: value,
        },
        {
          headers: {
            authorization: authState.jwt,
          },
        }
      );
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
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(deleteTaskPending());
      const authState = getState().auth;
      const { data: response } = await axios.delete(`${apiUrl}/tasks/${id}`, {
        headers: {
          authorization: authState.jwt,
        },
      });
      if (response.success) {
        dispatch(deleteTaskFulfilled(response.data));
      } else {
        dispatch(deleteTaskRejected(response.message));
      }
    } catch (error) {
      dispatch(deleteTaskRejected(error.message));
    }
  };
