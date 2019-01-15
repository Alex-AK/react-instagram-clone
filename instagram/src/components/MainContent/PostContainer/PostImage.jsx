import React from 'react';
import './PostImage.css';

const PostImage = props => {
  return (
    <img
      className="post-image"
      src={props.image}
      alt="placeholder text for alt text"
    />
  );
};

export default PostImage;
