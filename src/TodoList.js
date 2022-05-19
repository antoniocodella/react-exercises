import React from "react";

export class TodoList extends React.Component {
  state = {
    username: "",
    items: [
      "Learning Html",
      "Learning Css",
      "Learning JavaScript",
      "Learning React",
    ],
  };

  handleInputChagne = (e) => {
    this.setState(() => {
      return { username: e.target.value };
    });
  };

  handleAddItem = (e) => {
    const newItem = this.state.username;
    this.setState(() => {
      return {
        items: [...this.state.items, newItem],
        username: "",
      };
    });
  };

  handleClearItems = () => {
    this.setState(() => {
      return { items: [] };
    });
  };

  handleRemoveItem = (index) => {
    const listItems = this.state.items;
    listItems.splice(index, 1);
    this.setState({
      listItems,
    });
    console.log(this.state.items);
  };

  // handleRemoveItem = (e) => {
  //   let x = e.target.getAttribute("id");
  //   console.log(x);
  //   console.log(this.state.items);
  //   this.setState(() => {
  //     return {
  //       items: this.state.items.filter((item, index, array) => item !== x),
  //     };
  //   });
  // };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInputChagne}
        ></input>
        <button onClick={this.handleAddItem}>Add Item</button>
        <button onClick={this.handleClearItems}>Reset</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemoveItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
