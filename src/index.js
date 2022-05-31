import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./state/CounterReducer";
import { store } from "./state/Store";
import { addTodo, editTodo, removeTodo } from "./state/TodosReducer";

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
store.dispatch(addTodo({ id: 1, title: "Studying React", completed: true }));
store.dispatch(addTodo({ id: 2, title: "Studying Redux", completed: true }));
store.dispatch(removeTodo(2));
store.dispatch(editTodo(1, { title: "Studying Angular" }));
