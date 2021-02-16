import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./index";

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});
