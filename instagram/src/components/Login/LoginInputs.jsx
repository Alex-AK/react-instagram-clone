import React from 'react';
import './Login.css';
const LoginInputs = props => {
  return (
    <form className="login-page" onSubmit={props.handleUsername}>
      <div className="login-menu">
        <input
          className="login-input"
          placeholder="username"
          onChange={props.handleChange}
          name="currentUsername"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <input
          className="login-input"
          placeholder="password"
          onChange={props.handleChange}
          name="currentPassword"
          value={props.currentPassword}
          required
          minLength="6"
        />
        <button className="login-button">Login</button>
      </div>
    </form>
  );
};

export default LoginInputs;
