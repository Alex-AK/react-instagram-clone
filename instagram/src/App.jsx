import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import Login from './components/Login/Login';
import LoggedInComponents from './components/LoggedInComponents/LoggedInComponents';
import authenticate from './components/authenticate/authenticate';

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
      <LoggedInComponents
        handleChange={this.props.handleChange}
        handleSearch={this.handleSearch}
        data={this.state.searchData}
      />
    );
  }
}

const Authenticate = authenticate(App)(Login);

export default Authenticate;
