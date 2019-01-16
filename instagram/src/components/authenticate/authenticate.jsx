import React, { Component } from 'react';
// import App from '../../App';

// build HOC for conditional rendering here
// HOC will accept two parameters ( components ie functions) and accept props

const authenticate = App =>
  class extends Component {
    render() {
      return <h1>test</h1>;
    }
  };

export default authenticate;
