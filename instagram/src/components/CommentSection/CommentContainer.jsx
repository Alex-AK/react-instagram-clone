import React from 'react';
import './CommentContainer.css';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';
import AddComment from './AddComment';

const CommentContainer = props => {
  const createCommentComponents = props.comments.map((item, index) => {
    return (
      <Comments username={item.username} key={index} comment={item.text} />
    );
  });

  return (
    <div className="comment-container">
      <MetricsDisplay likes={props.likes} />
      {createCommentComponents}
      <AddComment />
    </div>
  );
};

// add type check here for data (username: string, comment: string) going into

export default CommentContainer;
