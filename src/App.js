
import 'react-bootstrap/dist/react-bootstrap.min.js'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './components/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Here are the search results</h2>
        </div>
        <div className="row search-overlay">
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
