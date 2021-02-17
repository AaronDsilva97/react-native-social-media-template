import { TOGGLE_THEME } from "../action";
import { Color_Light, Color_Dark } from "../../theme";
const INITIAL_STATE = {
  color: Color_Light,
};

export const ThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (action.payload) {
        return {
          ...state,
          color: Color_Light,
        };
      } else {
        return {
          ...state,
          color: Color_Dark,
        };
      }

    default:
      return state;
  }
};
