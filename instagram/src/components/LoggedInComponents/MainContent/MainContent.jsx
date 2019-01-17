import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import PostContainer from './PostContainer/PostContainer';

const MainContent = props => {
  // loop through data and pass down information that's needed for each component
  /* return instance of each data set object */
  const post = props.data.map(item => {
    return <PostContainer data={item} key={item.username} />;
  });
  return <div>{post}</div>;
};

MainContent.propTypes = {
  data: PropTypes.array.isRequired
};

export default MainContent;
