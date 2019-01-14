import React from 'react';
import './PostImage.css';

const PostImage = props => {
  return <img className="post-image" src={props.image} />;
};

export default PostImage;
