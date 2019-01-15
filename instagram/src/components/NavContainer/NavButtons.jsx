import React from 'react';
import './NavButtons.css';

import navButtons from './../../assets/ig-nav-buttons.png';

const NavButtons = () => {
  return (
    <div className="nav-button-container">
      <img className="nav-button" src={navButtons} alt="navigation buttons" />
    </div>
  );
};

// nav button component does not receive props

export default NavButtons;
