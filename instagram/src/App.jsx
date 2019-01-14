import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import NavigationContainer from './components/NavContainer/NavigationContainer';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/MainContent/SideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <NavigationContainer />
        <div className="main-container">
          <MainContent data={this.state.data} />
          <SideBar />
        </div>
      </div>
    );
  }
}

// add type check here for data (array of objects) going into main content

export default App;
