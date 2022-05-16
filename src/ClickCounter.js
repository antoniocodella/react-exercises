import React from "react";
import { CounterButton } from "./CounterButton";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrementCounter = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <CounterButton handleIncrementCounter={this.handleIncrementCounter} />
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
