import store from "../../config/store"
import { MOVE_DISTANCE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants"

export default function handleMovement(player) {
  function getNewPosition(oldPos, direction) {
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

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex
    return walkIndex >= 3 ? 0 : walkIndex + 1
  }

  function getSpriteLocation(direction) {
    let keyframes = {
      eastwest: [
        "16px -450px",
        "-55px -450px",
        "-128px -450px",
        "-200px -450px"
      ],
      north: ["15px -545px", "15px -545px", "15px -545px", "15px -545px"],
      south: ["16px -355px", "-56px -355px", "-128px -355px", "-200px -355px"]
    }

    switch (direction) {
      case "SOUTH":
        return ["16px -355px", "scaleX(-1)"]
      case "EAST":
        return ["16px -450px", "scaleX(-1)"]
      case "WEST":
        return ["16px -450px", "scaleX(1)"]
      case "NORTH":
        return ["15px -545px", "scaleX(-1)"]
      default:
        return ["16px -355px", "scaleX(-1)"]
    }
  }

  function observeBoundaries(oldPos, newPos) {
    let pyInRange = newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT
    let pxInRange = newPos[0] >= 0 && newPos[0] <= MAP_WIDTH

    return pxInRange && pyInRange
  }

  function observeObstruction(oldPos, newPos) {
    const tiles = store.getState().map.tiles
    const y = newPos[1] / MOVE_DISTANCE
    const x = newPos[0] / MOVE_DISTANCE
    const nextTile = tiles[y][x]
    console.log(tiles[y][x])
    return nextTile < 5
  }

  function dispatchMove(direction, newPos) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos,
        direction,
        spriteLocation: getSpriteLocation(direction),
        walkIndex: getWalkIndex()
      }
    })
  }

  function tryMove(direction) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos, direction)

    if (
      observeBoundaries(oldPos, newPos) &&
      observeObstruction(oldPos, newPos)
    ) {
      dispatchMove(direction, newPos)
    } else {
      dispatchMove(direction, oldPos)
    }
  }

  function handleKeyDown(e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 38:
      case 87:
        return tryMove("NORTH")
      case 40:
      case 83:
        return tryMove("SOUTH")
      case 37:
      case 65:
        return tryMove("WEST")
      case 39:
      case 68:
        return tryMove("EAST")
      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e)
  })

  return player
}
