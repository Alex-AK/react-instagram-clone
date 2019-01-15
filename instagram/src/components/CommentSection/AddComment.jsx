import React from 'react';
import './AddComment.css';

const AddComment = props => {
  return (
    <div className="add-comment-container">
      <form onSubmit={props.handleSubmit}>
        <input
          className="add-comment"
          placeholder="Add comment..."
          value={props.currentComment}
          onChange={props.handleChange}
          name="currentComment"
        />
      </form>
    </div>
  );
};

export default AddComment;
