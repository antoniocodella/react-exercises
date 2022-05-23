import React from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import { Hello } from "./Hello";

export class App extends React.Component {
  render() {
    return (
      <Container title="React Exercises">
        <Hello />
        <GithubUser username="antoniocodella" />
      </Container>
    );
  }
}
