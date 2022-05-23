import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
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
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <Container title="React Exercises">
            <DisplayLanguage language={this.state.language} />
            <Hello />
            <Welcome name="Mario" />
            <Sum numbers={[1, 2, 3, 4, 5]} />
          </Container>
        </LanguageContext.Provider>
      </div>
    );
  }
}
