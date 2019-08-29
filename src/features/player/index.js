import React from 'react'
import walkSprite from './walkSprite.png'
import { connect } from 'react-redux'
import handleMovement from './movement'

function Player(props) {
  return (
    <div style={{
      position: 'absolute',
      margin: 'auto',
      top: props.position[1],
      left: props.position[0],
      backgroundPosition: '16px -355px',
      backgroundImage: `url(${walkSprite})`,
      backgroundSize: '300%',
      backgroundRepeat: 'no-repeat',
      clip: `rect(0px, 100px,100px,0px)`,
      width: '100px',
      height: '100px',
      transform: 'scaleX(-1)',
    }}>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state.player,
    position: state.player.position,
  }
}

export default connect(mapStateToProps)(handleMovement(Player))