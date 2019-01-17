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

  preventDefault = e => {
    e.preventDefault();
  };

  // returns exact match only
  // if exact match does not exist, returns full dataset
  // alternate approach with this guide - https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j

  handleSearch = e => {
    e.preventDefault();
    const input = this.state.searchInput;
    const originalData = this.state.data;
    const username = originalData
      .filter(data => data.username === input)
      .map(array => array.username)
      .toString();

    // set state based on input
    // this component always renders searchData
    if (input === '') {
      this.setState({ searchData: originalData });
    } else if (username === input) {
      this.setState({
        searchData: originalData.filter(data => data.username === input)
      });
    } else if (username !== input || input === `''`) {
      this.setState({ searchData: originalData });
    }
  };

  render() {
    return (
      <div className="App">
        <LoggedInComponents
          handleChange={this.props.handleChange}
          handleSearch={this.handleSearch}
          preventDefault={this.preventDefault}
          data={this.state.searchData}
        />
      </div>
    );
  }
}

const Authenticate = authenticate(App)(Login);

export default Authenticate;
