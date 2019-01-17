import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // if local storage has username and password, render content
  componentDidMount = () => {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');

    if (username !== '') {
      this.setState({ isLoggedIn: true });
    }
  };

  // componentDidUpdate = () => {
  //   localStorage.setItem(
  //     'username',
  //     JSON.stringify(this.props.currentUsername)
  //   );
  // };

  // setState of username and password on submit, then store it in local storage
  handleUsername = e => {
    // e.preventDefault();
    // set current input values to state if value is longer than 4
    // setting input data to local storage if conditions are met
    localStorage.setItem('isLoggedIn', JSON.stringify(this.state.isLoggedIn));
    localStorage.setItem(
      'username',
      JSON.stringify(this.props.currentUsername)
    );
    // localStorage.setItem('username', JSON.stringify(this.state.password));

    // this.setState({ isLoggedIn: true });
    if (this.props.currentUsername.length > 4) {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <form className="login-page" onSubmit={this.handleUsername}>
        <div className="login-menu">
          <input
            className="login-input"
            type="text"
            placeholder="username"
            onChange={this.props.handleChange}
            name="currentUsername"
            value={this.state.currentUsername}
            required
          />
          <input
            className="login-input"
            type="text"
            placeholder="password"
            onChange={this.props.handleChange}
            name="currentPassword"
            value={this.state.currentPassword}
            required
          />
          <button className="login-button">Login</button>
        </div>
      </form>
    );
  }
}
export default Login;
