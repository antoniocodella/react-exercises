import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    const items = [
      { id: 1, name: "blue" },
      { id: 2, name: "yellow" },
      { id: 3, name: "green" },
    ];

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
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <UncontrolledLogin />
      </div>
    );
  }
}
