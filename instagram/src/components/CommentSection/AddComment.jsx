import React from 'react';
import './AddComment.css';

const AddComment = props => {
  return (
    <div className="add-comment-container">
      <form onSubmit={props.handleSubmit}>
        <input
          className="add-comment"
          name="currentComment"
          placeholder="Add comment..."
          value={props.currentComment}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default AddComment;
