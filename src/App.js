import React from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import { Hello } from "./Hello";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";

export class App extends React.Component {
  render() {
    return (
      <Container title="React Exercises">
        <Hello />
        <GithubUser username="antoniocodella" />
        <Counter initialValue={10} />
        <FilteredList
          list={[
            { name: "Antonio", id: 1, age: 20 },
            { name: "Marco", id: 2, age: 15 },
            { name: "Chiara", id: 3, age: 22 },
            { name: "Mario", id: 4, age: 16 },
            { name: "Giovanni", id: 5, age: 32 },
          ]}
        />
      </Container>
    );
  }
}
