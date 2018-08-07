import { COMPLETE_MOVE, START_MOVE } from "../actions/types";

export default tower => (disks = [], action) => {
  let move = action.payload
  if (!move || move.tower !== tower) return disks

  switch (action.type) {

  case START_MOVE:
    return disks.slice(1)
  
  case COMPLETE_MOVE:
    return [ move.disk, ...disks ]

  default:
    return disks
  }
}
