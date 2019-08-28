import React, { Component } from 'react';
import GameText from './containers/gameText'
import Map from './features/map'
import Player from './features/player'

class App extends Component {
  render() {
    return (
      <div className="App" >
        Awesome game
        <Map />
        <Player />
        <GameText />
      </div>
    )
  }
}

export default App;
