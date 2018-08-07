import { START_NEW_GAME } from "../actions/types";

const initialState = {
  left: [],
  center: [],
  right: [],
  moves: 0
}

const createDisks = () => {
  return [
    { color: '#669BBC', width: 20 },
    { color: '#A8C686', width: 40 },
    { color: '#F3A712', width: 60 },
    { color: '#29335C', width: 80 },
    { color: '#E4572E', width: 100 }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case START_NEW_GAME:
    return {
      left: createDisks(action.payload),
      center: [],
      right: [],
      moves: 0
    }

  default:
    return state
  }
}
