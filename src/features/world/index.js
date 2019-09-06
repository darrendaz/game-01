import React from "react"
import Map from "../map"
import Player from "../player"

import { tiles } from "../../data/maps/1"
import store from "../../config/store"
import { connect } from "react-redux"

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      mapID: props.mapID,
      tiles: tiles[props.mapID]
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
