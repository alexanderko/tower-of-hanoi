import { COMPLETE_MOVE, START_MOVE, UPDATE_MOVE } from "./types";

export const startMove = (move) => ({
  type: START_MOVE,
  payload: move
})

export const completeMove = (move) => ({
  type: COMPLETE_MOVE,
  payload: move
})
