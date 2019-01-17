import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  // adding user login data to window, switch isLoggedIn to true
  componentDidUpdate = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.state.isLoggedIn));
    localStorage.setItem('username', JSON.stringify(this.state.username));
    localStorage.setItem('password', JSON.stringify(this.state.password));
  };

  // switch for conditional component
  render() {
    return (
      <form className="login-page">
        <div className="login-menu">
          <input className="login-input" type="text" placeholder="username" />
          <input className="login-input" type="text" placeholder="password" />
          <button className="login-button" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </form>
    );
  }
}
export default Login;
