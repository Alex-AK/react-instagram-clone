import React from 'react';
import styles from 'styled-components';

const Comments = props => {
  // console.log(props);
  return (
    <DivComments>
      <H4Username>{props.username}</H4Username>
      <p className="comment">{props.comment}</p>
    </DivComments>
  );
};

export default Comments;

const DivComments = styles.div`
  display: flex;
  align-items: center;
`;

const H4Username = styles.h4`
  margin: 5px 10px 5px 0;
`;
