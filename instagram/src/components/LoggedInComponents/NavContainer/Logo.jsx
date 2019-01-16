import React from 'react';
import './Logo.css';

import logoIcon from '../../../assets/ig-logo.svg';
import logoText from '../../../assets/instagram-text-logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo logo-icon" src={logoIcon} alt="instagram logo" />
      <img
        className="logo logo-text"
        src={logoText}
        alt="insatragram text logo"
      />
    </div>
  );
};

// logo component does not receive props

export default Logo;
