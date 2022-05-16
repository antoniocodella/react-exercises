import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />
        {this.state.username === "" && this.state.password === "" ? (
          <button type="submit" disabled>
            Submit
          </button>
        ) : (
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        )}
      </form>
    );
  }
}
