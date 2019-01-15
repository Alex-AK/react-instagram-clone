import React from 'react';
import PropTypes from 'prop-types';
import './CommentContainer.css';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';
import AddComment from './AddComment';

// convert this to a class, store comments in state
// add methods to handleChange (ie add text in value to state)
// add method to handle submit (ie add value (comment) and logged in username to array of comments)

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

CommentContainer.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.array,
  timestamp: PropTypes.string
};

export default CommentContainer;
