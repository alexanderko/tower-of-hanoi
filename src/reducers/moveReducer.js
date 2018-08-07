import { START_MOVE, COMPLETE_MOVE, UPDATE_MOVE } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {

  case START_MOVE:
    return {
      disk: action.payload.disk,
      from: action.payload.tower,
      to: action.payload.tower
    }

  case COMPLETE_MOVE:
    return null

  default:
    return state
  }
}
