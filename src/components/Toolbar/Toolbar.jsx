import React, { Component } from 'react'
import store from '../../store';

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

  render() {
    return (
      <div>
        Moves: {this.state.moves}
      </div>
    )
  }
}
