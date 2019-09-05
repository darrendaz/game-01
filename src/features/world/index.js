import React from "react"
import Map from "../map"
import Player from "../player"

import { tiles } from "../../data/maps/1"
import store from "../../config/store"
import { connect } from "react-redux"

// Props are throwing a propert of map error at line 12
function World(props) {
  const mapID = props.mapID
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: tiles[mapID]
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

function mapStateToProps(state) {
  return {
    ...state.map
  }
}

export default connect(mapStateToProps)(World)
