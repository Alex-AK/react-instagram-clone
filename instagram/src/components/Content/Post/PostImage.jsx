import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const PostImageStyles = styles.img`
  width: 100%;
`;

const PostImage = props => {
  return (
    <PostImageStyles src={props.image} alt="placeholder text for alt text" />
  );
};

PostImage.propTypes = {
  image: PropTypes.string
};

export default PostImage;
