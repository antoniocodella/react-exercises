import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _inputRef = createRef();

  handleSubmitForm = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  componentDidMount() {
    this._inputRef.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <h3>Uncontrolled Login</h3>
        <input ref={this._inputRef} name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit" onClick={this.handleResetInput}>
          Submit
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
