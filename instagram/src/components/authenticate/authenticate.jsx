import React, { Component } from 'react';

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        username: '',
        password: ''
      };
    }

    // if local storage, set isLoggedIn to true
    componentDidMount = () => {
      if (localStorage.getItem('isLoggedIn')) {
        this.setState({ isLoggedIn: true });
      }

      // conditional login access
      // const username = this.state.username;
      // const password = this.state.password;

      // if (username !== '' && password !== '') {}
    };

    render() {
      if (this.state.isLoggedIn) {
        return <App handleLogin={this.handleLogin} />;
      } else {
        return <Login handleLogin={this.handleLogin} />;
      }
    }
  };

export default authenticate;
