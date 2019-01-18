import React from 'react';
import styles from 'styled-components';

import navButtons from '../../../assets/ig-nav-buttons.png';

const NavButtonDiv = styles.div`
  margin-right: 40px;
`;

const NavButtonImg = styles.img`
  height: 25px;
  margin: 0 5px;
`;

const NavButtons = props => {
  return (
    <NavButtonDiv>
      <NavButtonImg src={navButtons} alt="navigation buttons" />
    </NavButtonDiv>
  );
};

// nav button component does not receive props

export default NavButtons;
