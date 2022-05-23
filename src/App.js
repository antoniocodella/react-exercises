import React from "react";

import { Container } from "./Container";
import { Counter } from "./Counter";

import { GithubUser } from "./GithubUser";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <Container title="React Exercises">
        <Hello />
        <Counter initialValue={15} />
      </Container>
    );
  }
}
