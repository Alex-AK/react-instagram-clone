import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

import CommentContainer from './CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const PostContainerStyles = styles.div`
  border: 1px solid lightgrey;
  margin-bottom: 50px;
  width: 600px;
  background: white;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .15)
`;

const Post = props => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.data;

  return (
    <PostContainerStyles>
      <PostHeader username={username} thumbnail={thumbnailUrl} />
      <PostImage image={imageUrl} />
      <CommentContainer
        // converted this to a class component, manages it's own state
        likes={likes}
        timestamp={timestamp}
        comments={comments}
        username={username}
        imageUrl={imageUrl}
      />
    </PostContainerStyles>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array,
    timestamp: PropTypes.string
  })
};

export default Post;
