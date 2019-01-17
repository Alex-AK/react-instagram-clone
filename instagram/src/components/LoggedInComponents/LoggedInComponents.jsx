import React from 'react';
import NavigationContainer from './NavContainer/NavigationContainer';
import MainContent from './MainContent/MainContent';
// import SideBar from './MainContent/SideBar';

const LoggedInComponents = props => {
  return (
    <div className="logged-in-components">
      <NavigationContainer
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        preventDefault={props.preventDefault}
      />
      <div className="main-container">
        <MainContent data={props.data} />
        {/* <SideBar /> */}
      </div>
    </div>
  );
};

export default LoggedInComponents;
