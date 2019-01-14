import React from 'react';
import './MainContent.css';
import PostContainer from './PostContainer/PostContainer';

const MainContent = props => {
  return (
    <div className="main-content">
      <PostContainer />
    </div>
  );
};

export default MainContent;
