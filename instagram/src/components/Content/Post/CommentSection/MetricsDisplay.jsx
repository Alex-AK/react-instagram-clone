import React from 'react';
import styles from 'styled-components';

const MetricsDisplay = props => {
  return (
    <DivMetrics>
      <DivButtons>
        <i
          className={`far fa-heart ${props.likeActive ? 'active' : null}`}
          onClick={props.likeActive ? props.decrement : props.increment}
        />
        <p>comment</p>
      </DivButtons>

      <p>{props.likes} likes</p>
    </DivMetrics>
  );
};

export default MetricsDisplay;

const DivMetrics = styles.div`
  margin-bottom: 15px;
  font-weight: 700;
`;

const DivButtons = styles.div`
  display: flex;
  margin-bottom: 10px;
`;
