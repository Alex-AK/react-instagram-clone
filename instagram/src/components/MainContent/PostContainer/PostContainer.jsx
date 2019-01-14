import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import CommentContainer from '../../CommentSection/CommentContainer';

const PostContainer = props => {
  return (
    <div className="post-container">
      <h1>Post Container</h1>
      <PostHeader />
      <PostImage />
      <CommentContainer />
    </div>
  );
};

export default PostContainer;
