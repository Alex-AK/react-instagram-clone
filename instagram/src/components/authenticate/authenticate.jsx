import React, { Component } from 'react';

const authenticate = App => LoginPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        username: '',
        password: '',
        currentUsername: '',
        currentPassword: '',
        currentName: ''
      };
    }

    handleChange = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    };

    render() {
      return localStorage.getItem('isLoggedIn') ? (
        <App handleChange={this.handleChange} />
      ) : (
        <LoginPage
          handleChange={this.handleChange}
          currentUsername={this.state.currentUsername}
          currentName={this.currentName}
        />
      );
    }
  };

export default authenticate;
