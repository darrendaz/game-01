import React from 'react'
import walkSprite from './walkSprite.png'
import { connect } from 'react-redux'

function Player(props) {
  return (
    <div style={{
      position: 'absolute',
      margin: '500px auto',
      top: props.position[1],
      left: props.position[0],
      backgroundPosition: '20px -570px',
      backgroundImage: `url(${walkSprite})`,
      backgroundSize: '300%',
      backgroundRepeat: 'no-repeat',
      clip: `rect(0px, 100px,100px,0px)`,
      width: '125px',
      height: '125px',
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

export default connect(mapStateToProps)(Player)