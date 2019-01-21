import React, { Component } from 'react';

import dummyData from './dummy-data';

import authenticate from './components/authenticate/authenticate';
import LoggedIn from './components/Content/LoggedIn';
import LoginPage from './components/LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchData: [],
      searchInput: '',
      name: 'searchInput',
      isLoggedIn: true
    };
  }

  componentDidMount = () => {
    this.setState({ data: dummyData, searchData: dummyData });
  };

  //

  // search feature written by https://github.com/KieranVieira
  handleSearch = e => {
    this.setState({
      searchData: this.state.data.filter(post => {
        return post.username.includes(e.target.value);
      })
    });
  };

  render() {
    return (
      <LoggedIn
        handleChange={this.props.handleChange}
        handleSearch={this.handleSearch}
        data={this.state.searchData}
      />
    );
  }
}

export default authenticate(App)(LoginPage);
