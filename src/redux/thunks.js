import axios from "axios"
import { addTaskFulfilled, addTaskRejected } from "./actions"

export const addTaskPending = (data) => async (dispatch, getState, {apiUrl}) => {
    try {
        dispatch(addTaskPending())
        const {data: response} = await axios.post(apiUrl, data)
        console.log(response)
        if (response.success) {
            dispatch(addTaskFulfilled(response.list))
        } else {
            dispatch(addTaskRejected(response.message))
        }
    } catch (error) {
        dispatch(addTaskRejected(error.message))
        console.log(error.message)
    }
}