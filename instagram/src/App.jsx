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
    return (
      <div className="App">
        <NavigationContainer />
        <div className="main-container">
          <MainContent />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
