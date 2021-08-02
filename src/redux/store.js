import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TaskReducer } from "./tasks/reducers";
import { LoginReducer } from "./auth/reducers";
import { apiUrl } from "../helpers/contants";

export const store = createStore(
  combineReducers({ tasks: TaskReducer, auth: LoginReducer }),
  applyMiddleware(thunk.withExtraArgument({ apiUrl }))
);
