import React from 'react';
import styles from 'styled-components';

const AddComment = props => {
  return (
    <DivAddCommentContainer>
      <form onSubmit={props.handleSubmit}>
        <InputAddComment
          className="add-comment"
          placeholder="Add comment..."
          value={props.currentComment}
          onChange={props.handleChange}
          name="currentComment"
        />
      </form>
    </DivAddCommentContainer>
  );
};

export default AddComment;

const DivAddCommentContainer = styles.div`
  border-top: 1px solid lightgrey;
  margin-top: 20px;
  padding-top: 10px;
`;

const InputAddComment = styles.input`
  margin-top: 10px;
  border: none;
  color: grey;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
