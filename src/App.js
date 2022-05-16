import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter
          initialValue={10}
          incrementInterval={800}
          incrementAmount={2}
        />
        <ClickCounter />
      </div>
    );
  }
}
