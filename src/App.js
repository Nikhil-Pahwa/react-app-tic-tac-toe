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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
