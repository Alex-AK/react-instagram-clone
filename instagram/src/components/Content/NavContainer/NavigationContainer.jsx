import React from 'react';
import styles from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavButtons from './NavButtons';

const NavigationWrapper = styles.div`
  border-bottom: 1px solid #E2E1E2;
  background: white;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const NavigationContainer = props => {
  return (
    <NavigationWrapper>
      <Logo />
      <SearchBar
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        preventDefault={props.preventDefault}
      />
      <NavButtons />
    </NavigationWrapper>
  );
};

export default NavigationContainer;
