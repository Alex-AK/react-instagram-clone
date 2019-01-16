import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import NavigationContainer from './components/NavContainer/NavigationContainer';
import MainContent from './components/MainContent/MainContent';
// import SideBar from './components/MainContent/SideBar';

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
  handleSearch = e => {
    e.preventDefault();
    const username = this.state.data
      .filter(data => data.username === this.state.searchInput)
      .map(array => array.username)
      .toString();
    if (this.state.searchInput === '') {
      this.setState({ searchData: this.state.data });
    } else if (username === this.state.searchInput) {
      this.setState({
        searchData: this.state.data.filter(
          data => data.username === this.state.searchInput
        )
      });
    } else if (
      username !== this.state.searchInput ||
      this.state.searchInput === `' '`
    ) {
      this.setState({ searchData: this.state.data });
    }
  };

  render() {
    // conditional rendering HERE
    return (
      <div className="App">
        <NavigationContainer
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          preventDefault={this.preventDefault}
        />
        <div className="main-container">
          <MainContent
            data={this.state.searchData}
            // filtered={filtered}
            handleChange={this.handleChange}
          />
          {/* <SideBar /> */}
        </div>
      </div>
    );
  }
}

export default App;
