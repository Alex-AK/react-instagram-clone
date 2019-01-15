import React from 'react';
import PropTypes from 'prop-types';
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

PostImage.propTypes = {
  image: PropTypes.string
};

export default PostImage;
