import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  state = {
    enable: false,
  };

  enableButton = () => {
    const username = this._formRef.current.elements.username.value;
    const password = this._formRef.current.elements.password.value;

    this.setState({
      enable: !!username && !!password,
    });
  };

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

  render() {
    return (
      <form ref={this._formRef} onSubmit={this.handleSubmitForm}>
        <h3>Uncontrolled Login</h3>
        <input name="username" />
        <input name="password" onChange={this.enableButton} type="password" />
        <input name="remember" onChange={this.enableButton} type="checkbox" />
        <button type="submit" disabled={!this.state.enable}>
          Submit
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
