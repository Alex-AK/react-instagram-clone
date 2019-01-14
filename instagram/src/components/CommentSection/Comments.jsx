import React from 'react';
import './Comments.css';

const Comments = props => {
  return (
    <div className="comments">
      <h4>
        {props.username} : {props.comment}
      </h4>
    </div>
  );
};

export default Comments;
