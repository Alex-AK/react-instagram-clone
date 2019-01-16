import React from 'react';
import './MetricsDisplay.css';

const MetricsDisplay = props => {
  return (
    <div className="metrics-display">
      <div className="metrics-buttons">
        <i
          className={`far fa-heart ${props.likeActive ? 'active' : null}`}
          onClick={props.likeActive ? props.decrement : props.increment}
        />
        <p>comment</p>
      </div>

      <p>{props.likes} likes</p>
    </div>
  );
};

export default MetricsDisplay;
