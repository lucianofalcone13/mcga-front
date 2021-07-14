import { ADD_TASK_FULFILLED, ADD_TASK_PENDING, ADD_TASK_REJECTED } from "./constants";

const INITIAL_STATE = {
    tasks: {
        list: [],
        isLoading: false,
        error: ''
    }
}

export const TaskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK_PENDING:
        return {
            ...state,
            isLoading: true
        }
        case ADD_TASK_FULFILLED:
        return {
            ...state,
            isLoading: false,
            list: [...state.list, action.payload]
        }
        case ADD_TASK_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
    
        default:
            return state
    }
}