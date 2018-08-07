import { COMPLETE_MOVE } from "./types";

export const completeMove = (move) => ({
  type: COMPLETE_MOVE,
  payload: move
})
