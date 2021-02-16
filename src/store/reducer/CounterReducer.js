import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../action";

const INITIAL_STATE = {
  count: 0,
};

export const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      const increase = state.count + 1;

      return {
        ...state,
        count: increase,
      };

    case DECREMENT_COUNTER:
      const decrease = state.count - 1;

      return {
        ...state,
        count: decrease,
      };

    default:
      return state;
  }
};
