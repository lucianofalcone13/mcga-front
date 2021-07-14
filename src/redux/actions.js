import { ADD_TASK_PENDING, ADD_TASK_FULFILLED, ADD_TASK_REJECTED } from "./constants"

export const addTaskPending = () => ({
    type: ADD_TASK_PENDING
})

export const addTaskFulfilled = (payload) => ({
    type: ADD_TASK_FULFILLED,
    payload: payload
})

export const addTaskRejected = (err) => ({
    type: ADD_TASK_REJECTED,
    error: err
})
