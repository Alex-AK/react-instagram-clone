import React, { Component } from 'react';

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        username: '',
        password: '',
        currentUsername: '',
        currentPassword: ''
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
        <Login
          handleChange={this.handleChange}
          currentUsername={this.state.currentUsername}
        />
      );
    }
  };

export default authenticate;
