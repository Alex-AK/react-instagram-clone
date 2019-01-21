import React, { Component } from 'react';
import styles from 'styled-components';

import navButtons from '../../../assets/ig-nav-buttons.png';
import logoutButton from '../../../assets/logout.png';

const NavButtonDiv = styles.div`
  margin-right: 40px;
`;

const NavButtonImg = styles.img`
  height: 25px;
  margin: 0 5px;
`;
const LogoutButtonImg = styles.img`
  height: 24px;
  margin: 3px 0 0 15px;

  &:hover {
    cursor: pointer
  };
`;

class NavButtons extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <NavButtonDiv>
        <NavButtonImg src={navButtons} alt="navigation buttons" />
        <LogoutButtonImg
          src={logoutButton}
          alt="navigation buttons"
          onClick={this.handleLogout}
        />
      </NavButtonDiv>
    );
  }
}

// nav button component does not receive props

export default NavButtons;
