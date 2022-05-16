import React from "react";

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
        <button onClick={this.handleIncrementCounter}>Increment</button>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
