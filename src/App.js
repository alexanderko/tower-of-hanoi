import React, { Component } from 'react'
import './App.css'

import Board from './components/Board/Board';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar></Toolbar>
        <Board></Board>
      </div>
    );
  }
}

export default App
