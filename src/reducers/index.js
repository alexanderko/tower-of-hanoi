import { combineReducers } from 'redux'

import moves from './movesReducer'
import move from './moveReducer'
import gameReducer from './gameReducer'
import towerReducer from './towerReducer';

const chainReducers = (...reducers) => {
  return (state, action) => {
    const applyReducer = (newState, reducer) => reducer(newState, action)
    return reducers.reduce(applyReducer, state)
  }
}

export default chainReducers(
  gameReducer,
  combineReducers({
    moves,
    move,
    left: towerReducer('left'),
    center: towerReducer('center'),
    right: towerReducer('right')
  })
)