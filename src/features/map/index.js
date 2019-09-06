import React from "react"
import { connect } from "react-redux"
import { MOVE_DISTANCE } from "../../config/constants"
import "./style.css"

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass"
    case 1:
      return "butter-robot"
    case 2:
      return "tree"
    case 3:
      return "portal"
    case 4:
      return "pickle-rick"
    case 5:
      return "rock"
    case 6:
      return "rock"
    case 7:
      return "sauce"
    case 8:
      return "tree"
    default:
      return "grass"
  }
}

function MapRow(props) {
  return (
    <div className="row">
      {props.area.map((tile, idx) => (
        <MapTile key={idx} tile={tile} />
      ))}
    </div>
  )
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile.type)}`}
      style={{
        height: MOVE_DISTANCE,
        width: MOVE_DISTANCE
      }}
    >
      {props.tile.type}
    </div>
  )
}

function Map(props) {
  return (
    <div
      style={{
        width: "1200px",
        height: "1000px",
        // backgroundImage: "url('/tiles/grass.jpg')",
        // backgroundSize: "10%",
        // backgroundPositionY: "-20px",
        backgroundColor: "green",
        fontSize: 0,
        margin: "10px auto"
      }}
    >
      {props.tiles.map((area, idx) => (
        <MapRow key={idx} area={area} />
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state.map
  }
}

export default connect(mapStateToProps)(Map)
