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
        this.props.gameOver();
      }, 2000);
    }
  }

  render() {
    const {
      playerMove,
      gameOn,
      scoreWin,
      scoreLoss,
      scoreDraw,
    } = this.props;

    if (!gameOn) {
      return <Redirect to='/end' />
    }

    return (
      <div className="outer-shell">
        <div className="game">
          <div className="game-score">
            <div className="score-win">
              <h4>Player</h4>
              {scoreWin}
            </div>
            <div className="score-draw">
              <h4>Draw</h4>
              {scoreDraw}
            </div>
            <div className="score-loss">
              <h4>Computer</h4>
              {scoreLoss}
            </div>
          </div>
          <canvas
            onClick={playerMove}
            className="game-board"
            height="300px"
            width="300px"></canvas>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isMoving: state.game.isMoving,
  winLoss: state.game.winLoss,
  gameOn: state.game.gameOn,
  scoreWin: state.game.scoreWin,
  scoreLoss: state.game.scoreLoss,
  scoreDraw: state.game.scoreDraw,
});

Game = connect(
  mapStateToProps,
  actions
)(Game);

export default Game;
