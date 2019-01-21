import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

import AddComment from './AddComment';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      likes: this.props.likes,
      timestamp: this.props.timestamp,
      likeActive: false,
      name: 'currentComment',
      currentComment: '',
      imageUrl: this.props.imageUrl
    };
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem(this.state.imageUrl));
    console.log(storedData);
    this.setState({ comments: storedData });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.state.imageUrl,
      JSON.stringify(this.state.comments)
    );
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

    this.setState({
      comments: newComments,
      currentComment: ''
    });

    localStorage.setItem(
      this.state.imageUrl,
      JSON.stringify(this.state.comments)
    );
  };

  render() {
    if (!localStorage.getItem(this.state.imageUrl)) {
      localStorage.setItem(
        this.state.imageUrl,
        JSON.stringify(this.state.comments)
      );
    }
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
