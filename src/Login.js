import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
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

  handleResetInput = (e) => {
    e.preventDefault();
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const ButtonStyle = {
      backgroundColor: this.state.password.length < 8 ? "red" : "green",
    };

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
        {this.state.username === "" || this.state.password === "" ? (
          <button disabled>Submit</button>
        ) : (
          <button style={ButtonStyle} onClick={this.handleSubmit}>
            Submit
          </button>
        )}
        <button onClick={this.handleResetInput}>Reset</button>
      </form>
    );
  }
}
