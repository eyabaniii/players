import React from 'react'

import Player from './Player.jsx';
import Players from '../Players';
const PlayerList = () => {
  return (
    <div>
      {Players.map(joueur=> <Player joueur={joueur} key={joueur.id} />)  }
    </div>
  )
}

export default PlayerList
