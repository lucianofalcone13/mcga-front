import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TaskReducer } from "./reducers";
import { apiUrl } from "./constants";

export const store = createStore(
  combineReducers({ tasks: TaskReducer }),
  applyMiddleware(thunk.withExtraArgument({ apiUrl }))
);
