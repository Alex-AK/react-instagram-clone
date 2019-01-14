import React from 'react';
import './MainContent.css';
import PostContainer from './PostContainer/PostContainer';

const MainContent = props => {
  // loop through data and pass down information that's needed for each component
  /* return instance of each data set object */
  const post = props.data.map(item => {
    return <PostContainer data={item} key={item.username} />;
  });
  // console.log(props.data[1].username);
  return <div className="main-content">{post}</div>;
};

// add type check here for data (data: object) going into PostContainer

export default MainContent;
