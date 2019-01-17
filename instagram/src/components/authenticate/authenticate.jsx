import React, { Component } from 'react';

const authenticate = App => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        username: 'TEST USER',
        password: '',
        currentUsername: '',
        currentPassword: '',
        name: 'currentPassword'
      };
    }

    // if local storage, set isLoggedIn to true
    // componentDidMount = () => {
    //   let storedUsername = localStorage.getItem('username');

    //   if (storedUsername) {
    //     this.setState({ isLoggedIn: true });
    //   }
    // };

    // componentDidMount = () => {
    //   this.setState({
    //     isLoggedIn: localStorage.getItem('isLoggedIn')
    //   });
    // };

    handleChange = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    };

    render() {
      let userLoggedIn = localStorage.getItem('isLoggedIn');

      if (userLoggedIn) {
        return <App handleChange={this.handleChange} />;
      } else {
        return (
          <Login
            handleChange={this.handleChange}
            currentUsername={this.state.currentUsername}
          />
        );
      }
    }
  };

export default authenticate;
