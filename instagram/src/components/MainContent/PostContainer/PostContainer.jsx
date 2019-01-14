import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import CommentContainer from '../../CommentSection/CommentContainer';

const PostContainer = props => {
  const { username, thumbnail, image, likes, timestamp, comments } = props.data;

  return (
    <div className="post-container">
      <PostHeader username={username} thumbnail={thumbnail} />
      <PostImage image={image} />
      <CommentContainer
        likes={likes}
        timestamp={timestamp}
        comments={comments}
      />
    </div>
  );
};

// add type check here for data (thumbnail url: string, username: string) going into PostHeader
// add type check here for data (imgUrl: string) going into PostImage
// add type check here for data (comments: array, likes: number, timestamp: string) going into CommentContainer

export default PostContainer;
