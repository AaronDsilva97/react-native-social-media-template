import { CounterReducer } from "./CounterReducer.js";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: CounterReducer,
});
