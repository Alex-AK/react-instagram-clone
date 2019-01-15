import React from 'react';
import './MetricsDisplay.css';

const MetricsDisplay = props => {
  return (
    <div className="metrics-display">
      <p>{props.likes} likes</p>
    </div>
  );
};

export default MetricsDisplay;
