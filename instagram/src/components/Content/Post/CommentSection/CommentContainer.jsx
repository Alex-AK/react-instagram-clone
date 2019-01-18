import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

import AddComment from './AddComment';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';

// convert this to a class, store comments in state
// add methods to handleChange (ie add text in value to state)
// add method to handle submit (ie add value (comment) and logged in username to array of comments)

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0,
      timestamp: '',
      likeActive: false,
      name: 'currentComment',
      currentComment: ''
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
      timestamp: this.props.timestamp
    });
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes,
      likeActive: true
    });
  };

  decrementLike = () => {
    let likes = this.state.likes - 1;
    this.setState({
      likes,
      likeActive: false
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let loggedInUser = JSON.parse(localStorage.getItem('username'));
    const newComments = [
      ...this.state.comments,
      {
        username: loggedInUser,
        text: this.state.currentComment
      }
    ];
    this.setState({ comments: newComments, currentComment: '' });
  };

  render() {
    const createCommentComponents = this.state.comments.map((item, index) => {
      return (
        <Comments username={item.username} comment={item.text} key={index} />
      );
    });

    return (
      <DivCommentContainer>
        <MetricsDisplay
          likes={this.state.likes}
          increment={this.incrementLike}
          decrement={this.decrementLike}
          likeActive={this.state.likeActive}
        />
        {createCommentComponents}
        <AddComment
          currentComment={this.state.currentComment}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </DivCommentContainer>
    );
  }
}

CommentContainer.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.array,
  timestamp: PropTypes.string
};

export default CommentContainer;

const DivCommentContainer = styles.div`
  padding: 20px;
`;
