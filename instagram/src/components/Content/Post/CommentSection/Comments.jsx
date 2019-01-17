import React from 'react';
import './Comments.css';

const Comments = props => {
  // console.log(props);
  return (
    <div className="comments">
      <h4 className="comment-username">{props.username}</h4>
      <p className="comment">{props.comment}</p>
    </div>
  );
};

export default Comments;
