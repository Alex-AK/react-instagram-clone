import React, { Component } from 'react';

import LoginInputs from './LoginInputs';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // if local storage has username and password, render content
  componentDidMount = () => {
    if (localStorage.getItem('username')) {
      this.setState({ isLoggedIn: true });
    }
  };

  // setState of username and password on submit, then store it in local storage
  handleUsername = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.state.isLoggedIn));
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
