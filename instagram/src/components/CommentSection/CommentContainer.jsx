import React from 'react';
import './CommentContainer.css';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';
import AddComment from './AddComment';

const CommentContainer = props => {
  console.log(props.comments[1].username);

  const commentData = props.comments.map(item => {
    return (
      <Comments
        username={item.username}
        key={item.username}
        comment={item.text}
      />
    );
  });

  return (
    <div className="comment-container">
      <MetricsDisplay />
      {commentData}
      <AddComment />
    </div>
  );
};

export default CommentContainer;
