import React from 'react';

import Board from './board';
import '../style/game.css';

const Game = () => (
  <div className="outer-shell">
    <div className="game-screen">
      <div className="game-screen-score">
        <div className="game-screen-score-title">Player</div>
        <div className="game-screen-score-player">0</div>
      </div>
      <Board />
      <div className="game-screen-score">
        <div className="game-screen-score-title">CPU</div>
        <div className="game-screen-score-cpu">0</div>
      </div>
    </div>
  </div>
);

export default Game;
