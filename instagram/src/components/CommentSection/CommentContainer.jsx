import React from 'react';
import './CommentContainer.css';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';
import AddComment from './AddComment';

const CommentContainer = props => {
  return (
    <div className="comment-container">
      <MetricsDisplay />
      <Comments />
      <AddComment />
    </div>
  );
};

export default CommentContainer;
