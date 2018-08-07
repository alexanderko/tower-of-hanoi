import React, { Component } from 'react'
import './App.css'

import Tower from './components/Tower/Tower.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      left: [
        { color: '#F3A712', width: 60 },
        { color: '#29335C', width: 80 },
        { color: '#E4572E', width: 100 }
      ],
      center: [
        { color: '#669BBC', width: 20 }
      ],
      right: [
        { color: '#A8C686', width: 40 }
      ],
      move: null
    }
  }

  startMove(tower) {
    let disks = [...this.state[tower]]
    if (disks.length) {
      let disk = disks.shift()
      this.setState({
        [tower]: disks,
        move: { disk, from: tower }
      })
    }
  }

  updateMove = tower => () => {
    if (this.state.move) {
      let move = { ...this.state.move, to: tower }
      this.setState({ move })
    }
  }

  completeMove() {
    let move  = this.state.move
    let disks = [...this.state[move.to]]
    disks.unshift(move.disk)
    this.setState({
      [move.to]: disks,
      move: null
    })
  }

  performMove = tower => () => {
    if (this.state.move) {
      this.completeMove()
    } else {
      this.startMove(tower)
    }
  }

  render() {
    const {left, center, right} = this.state

    return (
      <div className="Board">
        <Tower 
          disks={left}
          onClick={this.performMove('left')}
          onEnter={this.updateMove('left')}
          >
        </Tower>
        <Tower 
          disks={center}
          onClick={this.performMove('center')}
          onEnter={this.updateMove('center')}
          >
        </Tower>
        <Tower 
          disks={right}
          onClick={this.performMove('right')}
          onEnter={this.updateMove('right')}
          >
        </Tower>
      </div>
    );
  }
}

export default App
