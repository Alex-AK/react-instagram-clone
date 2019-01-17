import React from 'react';
import styles from 'styled-components';
import logoText from '../../assets/instagram-text-logo.png';
import loginImage from '../../assets/login-main-photo.png';
import githubLogo from '../../assets/github-logo.svg';

const LoginInputs = props => {
  return (
    <LoginPageStyles>
      <LoginImage src={loginImage} />
      <LoginMenuStyles onSubmit={props.handleUsername}>
        <LogoText src={logoText} />
        <LoginInputStyles
          placeholder="Full Name"
          onChange={props.handleChange}
          name="currentName"
          value={props.currentName}
          required
          minLength="2"
        />
        <LoginInputStyles
          placeholder="Username"
          onChange={props.handleChange}
          name="currentUsername"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <LoginInputStyles
          placeholder="Password"
          onChange={props.handleChange}
          name="currentPassword"
          value={props.currentPassword}
          required
          minLength="6"
        />
        <LoginButton>Login</LoginButton>
        <LoginPageText>
          This Instagram clone is a personal project. No data is collected.
        </LoginPageText>
        <a href="https://github.com/Alex-AK" target="_blank">
          <GitHubLink src={githubLogo} />
        </a>
      </LoginMenuStyles>
    </LoginPageStyles>
  );
};

export default LoginInputs;

const LoginPageStyles = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #FAFAFA;
 `;

const LoginImage = styles.img`
  margin-right: 50px;
`;

const LoginMenuStyles = styles.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
`;

const LogoText = styles.img`
  height: 70px;
  margin: 50px 0 30px 0;
`;

const LoginInputStyles = styles.input`
  border: 1px solid #EFEFEF;
  border-radius: 3px;
  margin-bottom: 7px;
  padding: 10px 0 10px 7px;
  width: 270px;
  background: #FAFAFA;

  &:focus {
    outline: none;
  }
`;

const LoginButton = styles.button`
  width: 272px;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background: #3797F0;
`;

const LoginPageText = styles.h2`
  font-size: 14px;
  font-weight: 700;
  color: #9A9A9A;
  margin: 10px 0 20px 0;
  padding: 0 30px;
  text-align: center;
  line-height: 1.5;
`;

const GitHubLink = styles.img`
  width: 30px;
  margin-bottom: 30px;
`;
