import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
);
