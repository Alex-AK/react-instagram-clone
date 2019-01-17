import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const PostHeaderStyles = styles.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styles.img`
  width: 38px;
  height: 38px;
  margin: 15px;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <PostHeaderStyles>
      <Thumbnail
        src={props.thumbnail}
        alt={`${props.username} User Thumbnail'`}
      />
      <h4>{props.username}</h4>
    </PostHeaderStyles>
  );
};

PostHeader.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default PostHeader;
