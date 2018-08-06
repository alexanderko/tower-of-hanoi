import React, { Component } from 'react'
import './App.css'

import Tower from './components/Tower/Tower.jsx'

class App extends Component {
  render() {
    return (
      <div className="Board">
        <Tower></Tower>
        <Tower></Tower>
        <Tower></Tower>
      </div>
    );
  }
}

export default App
