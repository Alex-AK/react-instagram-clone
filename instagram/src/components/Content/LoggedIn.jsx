import React from 'react';
import styles from 'styled-components';

import Posts from './Posts';
import Header from './NavContainer/Header';
// import Sidebar from './SideBar';

const MainContainerStyles = styles.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
`;

const LoggedIn = props => {
  return (
    <div>
      <Header
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        preventDefault={props.preventDefault}
      />
      <MainContainerStyles>
        <Posts data={props.data} />
        {/* <Sidebar /> */}
      </MainContainerStyles>
    </div>
  );
};

export default LoggedIn;
