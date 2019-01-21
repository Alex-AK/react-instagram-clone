import React from 'react';
import styles from 'styled-components';

import Posts from './Posts';
import Header from './NavContainer/Header';
// import Sidebar from './SideBar';

const MainContainerStyles = styles.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  margin: 3% auto;
  position: relative;
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
