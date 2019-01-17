import React, { Component } from 'react';

import LoginInputs from './LoginInputs';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUsername = () => {
    localStorage.setItem(
      'username',
      JSON.stringify(this.props.currentUsername)
    );
  };

  render() {
    return (
      <LoginInputs
        handleUsername={this.handleUsername}
        handleChange={this.props.handleChange}
        currentUsername={this.props.currentUsername}
        currentPassword={this.props.currentPassword}
      />
    );
  }
}

export default LoginPage;
