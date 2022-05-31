import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./state/CounterReducer";
import { store } from "./state/Store";

const root = document.querySelector("#root");

// ReactDOM.render(<App />, root);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(2));
store.dispatch(decrementCounter(4));
store.dispatch(incrementCounter(1));
store.dispatch(resetCounter());
