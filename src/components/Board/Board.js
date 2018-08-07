import React, { Component } from 'react'
import './Board.css'

import Tower from '../Tower/Tower.jsx'
import Disk from '../Disk/Disk.jsx'

import store from '../../store'
import { completeMove, startMove } from '../../actions/moveActions'

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
    this.state = store.getState()
  }

  componentDidMount() {
    store.subscribe(() => {
      const { left, right, center, move} = store.getState();
      this.setState({ left, right, center, move})
    })
  }

  startMove(tower) {
    let disks = this.state[tower]
    if (disks.length) {
      let disk = disks[0]
      store.dispatch(startMove({ disk, tower }))
    }
  }

  updateMove = tower => () => {
    if (this.state.move) {
      this.setState({
        move: {...this.state.move, to: tower}
      })
    }
  }

  completeMove(tower) {
    let { disk }  = this.state.move
    store.dispatch(completeMove({ disk, tower }))
  }

  performMove = tower => () => {
    if (this.state.move) {
      this.completeMove(tower)
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
