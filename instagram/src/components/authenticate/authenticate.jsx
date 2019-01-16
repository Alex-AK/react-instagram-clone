import React, { Component } from 'react';

// build HOC for conditional rendering here
// HOC will accept two parameters ( components ie functions) and accept props

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    handleLogin = () => {
      this.setState({ loggedIn: true });
    };

    render() {
      if (this.state.loggedIn) {
        return <App handleLogin={this.handleLogin} />;
      } else {
        return <Login handleLogin={this.handleLogin} />;
      }
    }
  };

// passing App through and rendering App.
// To be added: functionality to App

export default authenticate;
