import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <h4>{props.username}</h4>
    </div>
  );
};

export default PostHeader;
