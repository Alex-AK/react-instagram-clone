import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

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
        <header className="App-header">
          <h1>{this.state.data[0].username}</h1>
        </header>
      </div>
    );
  }
}

export default App;
