import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import CommentContainer from '../../CommentSection/CommentContainer';

const PostContainer = props => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.data;

  return (
    <div className="post-container">
      <PostHeader username={username} thumbnail={thumbnailUrl} />
      <PostImage image={imageUrl} />
      <CommentContainer
        likes={likes}
        timestamp={timestamp}
        comments={comments}
      />
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array,
    timestanp: PropTypes.string
  })
};

export default PostContainer;
