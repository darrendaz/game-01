import store from "../../config/store"
import { MOVE_DISTANCE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants"

export default function handleMovement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position

    switch (direction) {
      case "WEST":
        return [oldPos[0] - MOVE_DISTANCE, oldPos[1]]
      case "EAST":
        return [oldPos[0] + MOVE_DISTANCE, oldPos[1]]
      case "SOUTH":
        return [oldPos[0], oldPos[1] + MOVE_DISTANCE]
      case "NORTH":
        return [oldPos[0], oldPos[1] - MOVE_DISTANCE]
      default:
        return [0, 0]
    }
  }

  function observeBoundaries(oldPos, newPos) {
    let pyInRange = newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT
    let pxInRange = newPos[0] >= 0 && newPos[0] <= MAP_WIDTH

    return pxInRange && pyInRange ? newPos : oldPos
  }

  function dispatchMove(direction) {
    const oldPos = store.getState().player.position

    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: observeBoundaries(oldPos, getNewPosition(direction))
      }
    })
  }

  function handleKeyDown(e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 87:
        return dispatchMove("NORTH")
      case 83:
        return dispatchMove("SOUTH")
      case 65:
        return dispatchMove("WEST")
      case 68:
        return dispatchMove("EAST")
      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e)
  })
  return player
}
