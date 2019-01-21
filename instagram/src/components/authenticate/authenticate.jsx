import React, { Component } from 'react';

const authenticate = App => LoginPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentName: '',
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
      return localStorage.getItem('username') ? (
        <App handleChange={this.handleChange} />
      ) : (
        <LoginPage
          handleChange={this.handleChange}
          currentUsername={this.state.currentUsername}
        />
      );
    }
  };

export default authenticate;
