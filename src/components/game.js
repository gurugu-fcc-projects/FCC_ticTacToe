import React, { Component } from 'react';

// import Board from './board';
import { drawBoard, chooseCrossLine, chooseCell } from '../utils/drawing';
import '../style/game.css';

class Game extends Component{
  componentDidMount() {
    drawBoard();
  }

  render() {
    return (
      <div className="outer-shell">
        <div className="game">
          <div className="game-score">
            <div className="game-score-title">Player</div>
            <div className="game-score-player">0</div>
          </div>
          <canvas
            onClick={chooseCell}
            className="game-board"
            height="300px"
            width="300px"></canvas>
          <div className="game-score">
            <div className="game-score-title">CPU</div>
            <div className="game-score-cpu">0</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Game;
