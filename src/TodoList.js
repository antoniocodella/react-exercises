import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["aaaaaa", "bbbbbbb", "cccccc", "dddddd"],
  };

  handleAddItem = () => {
    this.setState(() => {
      this.state.items.push("ciao");
    });
  };

  render() {
    return (
      <div>
        <input></input>
        <button onClick={this.handleAddItem}>Add Item</button>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
