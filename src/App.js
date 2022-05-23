import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { CounterUseEffect } from "./CounterUseEffect02";
import { DisplayLanguage } from "./DisplayLanguage";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  onCounterChange = (value) => {
    console.log(value);
  };

  state = {
    toggle: true,
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <Container title="React Exercises">
        <Hello />
        <Welcome name="Mario" />
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.toggle && <CounterUseEffect />}
      </Container>
    );
  }
}
