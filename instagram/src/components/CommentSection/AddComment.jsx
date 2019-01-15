import React from 'react';
import './AddComment.css';

const AddComment = props => {
  return (
    <div className="add-comment-container">
      <form>
        <input className="add-comment" placeholder="Add a comment..." />
      </form>
    </div>
  );
};

export default AddComment;
