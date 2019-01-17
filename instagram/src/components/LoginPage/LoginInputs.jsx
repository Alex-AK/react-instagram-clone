import React from 'react';
import styles from 'styled-components';

const LoginPageStyles = styles.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginMenuStyles = styles.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
`;

const LoginInputStyles = styles.input`
  margin-bottom: 20px;
  padding: 3px 0 3px 5px;
  width: 200px;
`;

const LoginButton = styles.button`
  width: 205px;
`;

const LoginInputs = props => {
  return (
    <LoginPageStyles onSubmit={props.handleUsername}>
      <LoginMenuStyles>
        <LoginInputStyles
          placeholder="username"
          onChange={props.handleChange}
          name="currentUsername"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <LoginInputStyles
          placeholder="password"
          onChange={props.handleChange}
          name="currentPassword"
          value={props.currentPassword}
          required
          minLength="6"
        />
        <LoginButton>Login</LoginButton>
      </LoginMenuStyles>
    </LoginPageStyles>
  );
};

export default LoginInputs;
