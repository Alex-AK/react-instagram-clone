import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import LoggedInComponents from './components/LoggedInComponents/LoggedInComponents';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchData: [],
      searchInput: '',
      name: 'searchInput'
    };
  }

  componentDidMount = () => {
    this.setState({ data: dummyData, searchData: dummyData });
  };

  preventDefault = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
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
    // conditional rendering HERE
    return (
      // this needs to hold conditional rendering component ran through HOC
      // pass LoggedInComponent props
      <div className="App">
        <LoggedInComponents
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          preventDefault={this.preventDefault}
          data={this.state.searchData}
        />
      </div>
    );
  }
}

export default App;
