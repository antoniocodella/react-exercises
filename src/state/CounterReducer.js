const defaultState = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

export function incrementCounter(by = 1) {
  return {
    type: INCREMENT,
    paylod: by,
  };
}

export function decrementCounter(by = 1) {
  return {
    type: DECREMENT,
    paylod: by,
  };
}

export function resetCounter() {
  return {
    type: RESET,
  };
}

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + action.paylod;
    }
    case DECREMENT: {
      return state - action.paylod;
    }
    case RESET: {
      return defaultState;
    }
    default:
      return state;
  }
}
