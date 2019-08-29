const initialState = {
  position: [0, 0],
  spriteLocation: ["16px -355px", "scaleX(-1)"]
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default playerReducer
