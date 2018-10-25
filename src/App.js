import React, { Component } from 'react';
import Footer from './Footer'; 
import logo from './logo.svg';
import Grid from './grid/grid';

import './App.css';

class App extends Component {
    
  render() {
    var whoCreated = 'this app is created by nikhil, somewhat :D';
    return ( 
      <div className="App">
        <Grid></Grid>
        <header className="App-header">
        {whoCreated}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React sahi hai 
          </a>
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
