import { createStore } from "redux";
import { rootReducer } from "../store/reducer";

export const store = createStore(rootReducer);
