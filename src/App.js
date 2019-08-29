import React, { Component } from 'react';
import GameText from './containers/gameText'
import World from './features/world'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <GameText />
        <World />
      </div>
    )
  }
}

export default App;
