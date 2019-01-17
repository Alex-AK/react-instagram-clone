import React from 'react';
import styles from 'styled-components';

const SidebarDiv = styles.div`
  border: 1px solid blue;
  width: 300px;
  height: 70vh;
`;

const Sidebar = props => {
  return (
    <SidebarDiv>
      <h1>Side Container</h1>
    </SidebarDiv>
  );
};

export default Sidebar;
