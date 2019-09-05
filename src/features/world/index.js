import React from "react"
import Map from "../map"
import Player from "../player"

import { tiles } from "../../data/maps/1"
import store from "../../config/store"

function World(props) {
  const pop = 1
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: tiles[pop]
    }
  })

  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "1000px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  )
}

export default World
