import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <img
        className="thumbnail"
        src={props.thumbnail}
        alt={`${props.username} User Thumbnail'`}
      />
      <h4>{props.username}</h4>
    </div>
  );
};

export default PostHeader;
