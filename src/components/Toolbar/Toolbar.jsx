import React, { Component } from 'react'
import store from '../../store';
import { startNewGame } from '../../actions/gameActions';
import './Toolbar.css'

const mapStoreState = () => {
  let { moves } = store.getState()
  return { moves }
}

export default class Toolbar extends Component {
  state = mapStoreState()

  updateState = () => {
    this.setState(mapStoreState())
  }

  componentDidMount() {
    store.subscribe(this.updateState)
  }

  onStartNewGame() {
    store.dispatch(startNewGame())
  }

  render() {
    return (
      <div className="Toolbar">
        <button onClick={this.onStartNewGame}>Start new game</button>
        <span>
          Moves: {this.state.moves}
        </span>
      </div>
    )
  }
}
