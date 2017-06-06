import React, { Component } from 'react';

// import Board from './board';
import { chooseCrossLine } from '../utils/crossline';
import '../style/game.css';

const setupBoard = () => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  //=== draw a board
  cx.beginPath();
  cx.moveTo(100, 0);
  cx.lineTo(100, 300);
  cx.moveTo(200, 0);
  cx.lineTo(200, 300);
  cx.moveTo(0, 100);
  cx.lineTo(300, 100);
  cx.moveTo(0, 200);
  cx.lineTo(300, 200);
  cx.stroke();
}

class Game extends Component{
  componentDidMount() {
    setupBoard();
    chooseCrossLine(7);
    // crossLine(1);
  }

  render() {
    return (
      <div className="outer-shell">
        <div className="game">
          <div className="game-score">
            <div className="game-score-title">Player</div>
            <div className="game-score-player">0</div>
          </div>
          <canvas className="game-board" height="300px" width="300px"></canvas>
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
