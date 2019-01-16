import React from 'react';
import './Login.css';

const Login = props => {
  return (
    <div className="login-page">
      <div className="login-menu">
        <input className="login-input" type="text" placeholder="username" />
        <input className="login-input" type="text" placeholder="password" />
        <button className="login-button" onClick={props.handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
