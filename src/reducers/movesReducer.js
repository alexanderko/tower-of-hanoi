import { COMPLETE_MOVE } from "../actions/types";

export default (moves = 0, action) => {
  switch (action.type) {

  case COMPLETE_MOVE:
    return moves + 1

  default:
    return moves
  }
}
