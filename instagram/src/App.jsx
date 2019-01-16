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
      mutedData: [],
      searchInput: '',
      name: 'searchInput'
    };
  }

  componentDidMount = () => {
    this.setState({ data: dummyData, mutedData: dummyData });
  };

  handleSearch = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let input = this.state.searchInput;

    // if exact match, filter matches
    this.setState({
      data: this.state.data.filter(data => data.username === input)
    });
  };

  // add condition to display

  render() {
    return (
      <div className="App">
        <NavigationContainer
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />
        <div className="main-container">
          <MainContent
            data={this.state.data}
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
