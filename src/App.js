import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    const items = [
      { id: 1, name: "blue" },
      { id: 2, name: "yellow" },
      { id: 3, name: "green" },
    ];

    return (
      <Container title="React Exercises">
        <Hello />

        <TodoList
          render={(items, removeItems) => {
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button id={item} onClick={removeItems}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        ></TodoList>
      </Container>
    );
  }
}
