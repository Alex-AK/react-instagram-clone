import React from 'react';
import styles from 'styled-components';

import account from '../../assets/account.png';

const SidebarDiv = styles.div`
  width: 320px;
`;

const InnerContent = styles.div`
  position: fixed;
  width: 320px;
  height: 70vh;
`;

const Box = styles.div`
  height: 240px;
  border: 1px solid #D3D3D3;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .05);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  h5 {
    color: #B4B4B4;
    font-weight: 700;
    font-size: 14px;
    padding: 15px;
  }

  p {
    padding: 15px;
    font-size: 14px;
  }
`;

const AccountBox = styles(Box)`
  height: 80px;
  align-items: center;
  justify-content: flex-start
  border: none;
  box-shadow: none;

  p {
    font-weight: 700;
    font-size: 14px;
    display: inline-block;
  }

  img {
    width: 60px;
    padding-left: 10px;
  }
`;

const SmallText = styles.p`
  color: darkgrey;
  font-size: 13px;
  padding: 0 5px 20px 5px;
`;

const Sidebar = props => {
  const username = JSON.parse(localStorage.getItem('username'));

  return (
    <SidebarDiv>
      <InnerContent>
        <AccountBox>
          <img src={account} />
          <p>{username}</p>
        </AccountBox>
        <Box>
          <h5>Stories</h5>
          <p>Watch All</p>
        </Box>
        <Box>
          <h5>Suggestions</h5>
          <p>See All</p>
        </Box>
        <SmallText>
          About Us • Support • Press • API • Jobs • Privacy • Terms • Directory
          • Profiles • Hashtags • Language
        </SmallText>
        <SmallText>© 2018 Instagram</SmallText>
      </InnerContent>
    </SidebarDiv>
  );
};

export default Sidebar;
