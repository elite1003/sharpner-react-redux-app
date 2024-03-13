import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.value,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
