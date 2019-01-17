import React from 'react';
import styles from 'styled-components';

import logoIcon from '../../../assets/ig-logo.svg';
import logoText from '../../../assets/instagram-text-logo.png';

const LogoContainer = styles.div`  
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 40px;
`;

const LogoIcon = styles.img`  
  border-right: 1px solid grey;
  padding-right: 20px;
  margin-right: 15px;
  height: 30px;
`;

const LogoText = styles.img`  
  height: 35px;
  padding-top: 6px;
`;

const Logo = () => {
  return (
    <LogoContainer className="logo-container">
      <LogoIcon src={logoIcon} alt="instagram logo" />
      <LogoText src={logoText} alt="insatragram text logo" />
    </LogoContainer>
  );
};

// logo component does not receive props

export default Logo;
