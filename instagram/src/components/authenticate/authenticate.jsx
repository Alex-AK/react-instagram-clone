import React, { Component } from 'react';

// build HOC for conditional rendering here
// HOC will accept two parameters ( components ie functions) and accept props

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: true
      };
    }

    handleLogin = e => {};

    render() {
      console.log(this.state.loggedIn);

      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

// passing App through and rendering App.
// To be added: functionality to App

export default authenticate;

// {props.isLoggedIn ? App : Login}
