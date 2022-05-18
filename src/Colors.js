import React from "react";

export class Colors extends React.Component {
  render() {
    const color = this.props.items.map((item) => <li key={item}>{item}</li>);

    return <ul>{color}</ul>;
  }
}
