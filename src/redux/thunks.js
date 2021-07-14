import axios from "axios";
import {
  addTaskPending,
  addTaskFulfilled,
  addTaskRejected,
  fetchTasksFulfilled,
  fetchTasksPending,
  fetchTasksRejected,
} from "./actions";

export const addTask =
  (data) =>
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(addTaskPending());
      const { data: response } = await axios.post(apiUrl, data);
      console.log(response);
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
      console.log({ response });
      if (response.success) {
        dispatch(fetchTasksFulfilled(response.data));
      } else {
        dispatch(fetchTasksRejected(response.message));
      }
    } catch (error) {
      dispatch(fetchTasksRejected(error.message));
    }
  };
