import React, { Component } from 'react'
import './Board.css'

import Tower from '../Tower/Tower.jsx'
import Disk from '../Disk/Disk.jsx'

import store from '../../store'
import { completeMove } from '../../actions/moveActions'

const styles = {
  air: {
    width: '100%'
  },
  move: {
    height: '2vw',
    width: '33.333%',
    boxSizing: 'border-box',
    padding: '0 7vw'
  }
}

const moveStyle = move => {
  if (!move) return styles.move;
  switch (move.to) {
    case 'left': return styles.move
    case 'center': return {...styles.move, margin: '0 auto'}
    case 'right': return {...styles.move, marginLeft: 'auto'}
  }
}

class Board extends Component {
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
        move: { disk, from: tower, to: tower }
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

    store.dispatch(completeMove(move))
  }

  performMove = tower => () => {
    if (this.state.move) {
      this.completeMove()
    } else {
      this.startMove(tower)
    }
  }

  render() {
    const {left, center, right, move} = this.state

    return (
      <div className="Board">
        <div style={styles.air}>
          <div style={moveStyle(move)}>
            {move && <Disk disk={move.disk}></Disk>}
          </div>
        </div>
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

export default Board
