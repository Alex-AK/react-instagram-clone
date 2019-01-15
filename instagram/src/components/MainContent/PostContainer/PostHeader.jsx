import React from 'react';
import PropTypes from 'prop-types';
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

PostHeader.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default PostHeader;
