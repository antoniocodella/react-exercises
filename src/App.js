import React from "react";

import { Container } from "./Container";

import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { Hello } from "./Hello";
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
        <GithubUserList />
      </Container>
    );
  }
}
