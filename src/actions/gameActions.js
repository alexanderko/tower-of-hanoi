import { START_NEW_GAME } from "./types";

export const startNewGame = (options) => ({
  type: START_NEW_GAME,
  payload: options
})
