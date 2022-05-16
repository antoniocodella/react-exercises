import React from "react";

export class ClickTracker extends React.Component {
  state = {
    name: "",
  };

  handleClickEvent = (event) => {
    this.setState({ name: event.target.name });
  };

  render() {
    return (
      <div>
        <button name="button 1" onClick={this.handleClickEvent}>
          Button 1
        </button>
        <button name="button 2" onClick={this.handleClickEvent}>
          Button 2
        </button>
        <button name="button 3" onClick={this.handleClickEvent}>
          Button 3
        </button>
        <h1>Button: {this.state.name}</h1>
      </div>
    );
  }
}
