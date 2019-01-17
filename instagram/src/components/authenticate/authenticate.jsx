import React, { Component } from 'react';

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: '',
        password: ''
      };
    }

    // if local storage, load data from local storage
    componentDidMount = () => {
      localStorage.getItem('loggedIn') &&
        this.setState({
          loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
        });
    };

    // save state into local storage
    componentDidUpdate = () => {
      localStorage.setItem('loggedIn', JSON.stringify(this.state.loggedIn));
      localStorage.setItem('username', JSON.stringify(this.state.username));
      localStorage.setItem('password', JSON.stringify(this.state.password));
    };

    // switch for conditional component
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

export default authenticate;
