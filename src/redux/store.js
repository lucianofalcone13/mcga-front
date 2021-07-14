import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TaskReducer } from "./reducers";
const apiUrl = "http://localhost/3000"
export const store = createStore(combineReducers(TaskReducer), applyMiddleware(thunk.withExtraArgument({apiUrl})))