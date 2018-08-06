import React, { Component } from 'react'
import './App.css'

import Tower from './components/Tower/Tower.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      towers: {
        left: [
          { color: '#669BBC', width: 20 },
          { color: '#A8C686', width: 40 },
          { color: '#F3A712', width: 60 },
          { color: '#29335C', width: 80 },
          { color: '#E4572E', width: 100 }
        ],
        center: [],
        right: []
      }
    }
  }

  render() {
    const {left, center, right} = this.state.towers

    return (
      <div className="Board">
        <Tower disks={left}></Tower>
        <Tower disks={center}></Tower>
        <Tower disks={right}></Tower>
      </div>
    );
  }
}

export default App
