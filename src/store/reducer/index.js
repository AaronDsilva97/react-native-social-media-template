import { CounterReducer } from "./CounterReducer.js";
import { ThemeReducer } from "./ThemeReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: CounterReducer,
  theme: ThemeReducer,
});
