import React from "react"
import { MOVE_DISTANCE } from "../../config/constants"
import "./style.css"

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass"
    case 1:
      return "butter-robot"
    case 2:
      return "mr-poopy-butthole"
    case 3:
      return "portal"
    case 4:
      return "pickle-rick"
    case 5:
      return "rock"
    case 6:
      return "sauce"
    default:
      return "grass"
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: MOVE_DISTANCE,
        width: MOVE_DISTANCE
      }}
    >
      {props.tile}
    </div>
  )
}
function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map((tile, idx) => (
        <MapTile key={idx} tile={tile} />
      ))}
    </div>
  )
}

function Map(props) {
  return (
    <div
      style={{
        width: "1200px",
        height: "1000px",
        backgroundImage: "url('/tiles/grass.jpg')",
        backgroundSize: "10%",
        backgroundPositionY: "-20px",
        fontSize: 0,
        margin: "10px auto"
      }}
    >
      {props.tiles.map((row, idx) => (
        <MapRow key={idx} tiles={row} />
      ))}
    </div>
  )
}

export default Map
