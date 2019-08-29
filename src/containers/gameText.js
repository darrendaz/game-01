import React, { Component } from 'react'

export default class GameText extends Component {
  handleClick = (e) => {
    console.log(e.target.id + " clicked")
  }

  render() {
    return (
      <div>
        <div id="game-text" onClick={this.handleClick}>
          GameText
        </div>
      </div>
    )
  }
}
