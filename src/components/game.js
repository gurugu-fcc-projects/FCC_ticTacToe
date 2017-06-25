import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { drawBoard } from '../utils/drawing';
import * as actions from '../actions';
import '../style/game.css';

class Game extends Component{

  componentDidMount() {
    drawBoard();
    if (this.props.isMoving === 'cpu') {
      this.props.cpuMove(true);
    }
  }

  componentDidUpdate() {
    if (this.props.isMoving === 'cpu') {
      this.props.cpuMove(false);
    }
    if (this.props.winLoss !== 'none') {
      setTimeout(() => {
        console.log('BOOM!');
        this.props.gameOver();
      }, 2000);
    }
  }

  render() {
    const { playerMove, gameOn } = this.props;

    if (!gameOn) {
      return <Redirect to='/end' />
    }

    return (
      <div className="outer-shell">
        <div className="game">
          <div className="game-score">
            <div className="game-score-title">Player</div>
            <div className="game-score-player">0</div>
          </div>
          <canvas
            onClick={playerMove}
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

const mapStateToProps = (state) => ({
  isMoving: state.game.isMoving,
  winLoss: state.game.winLoss,
  gameOn: state.game.gameOn,
  // playerScore: state.player.score,
  // cpuScore: state.cpu.score,
});

Game = connect(
  mapStateToProps,
  actions
)(Game);

export default Game;
