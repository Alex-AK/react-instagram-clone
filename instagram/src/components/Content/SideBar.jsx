import React from 'react';
import styles from 'styled-components';

const SidebarDiv = styles.div`
  width: 300px;
`;

const InnerContent = styles.div`
  position: fixed;
  width: 300px;
  height: 70vh;
  border: 1px solid red;
`;

const Sidebar = props => {
  return (
    <SidebarDiv>
      <InnerContent>test</InnerContent>
    </SidebarDiv>
  );
};

export default Sidebar;
