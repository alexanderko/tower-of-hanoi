import React, { Component } from 'react'
import './App.css'

import Tower from './components/Tower/Tower.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      towers: {
        left: [
          { color: '#F3A712', width: 60 },
          { color: '#29335C', width: 80 },
          { color: '#E4572E', width: 100 }
        ],
        center: [
          { color: '#669BBC', width: 20 }],
        right: [
          { color: '#A8C686', width: 40 }
        ]
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
