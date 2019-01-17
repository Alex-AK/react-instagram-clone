import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post/Post';

const Posts = props => {
  // loop through data and pass down information that's needed for each component
  /* return instance of each data set object */
  const post = props.data.map(item => {
    return <Post data={item} key={item.username} />;
  });
  return <div>{post}</div>;
};

Posts.propTypes = {
  data: PropTypes.array.isRequired
};

export default Posts;
