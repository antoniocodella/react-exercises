import React from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import { Hello } from "./Hello";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";
import { Login } from "./Login";
import { CarDetail } from "./CarDetail";

export class App extends React.Component {
  render() {
    return (
      <Container title="React Exercises">
        <Hello />
        <GithubUser username="antoniocodella" />
        <CarDetail
          initialData={{ model: "fiat", year: "1992", color: "red" }}
        />
      </Container>
    );
  }
}
