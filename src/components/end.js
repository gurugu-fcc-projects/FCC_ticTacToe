import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import '../style/end.css';

class End extends Component {
  componentWillMount() {
    this.props.prepareNextGame();
  }

  render() {
    const { winLoss, playerSymbol } = this.props;
    const gameStyle = playerSymbol === 'x'
      ? {backgroundColor: '#000', color: '#fff'}
      : {backgroundColor: '#fff', color: '#000'};
    const linkStyle = playerSymbol === 'x'
      ? {border: '1px solid #fff', color: '#fff'}
      : {border: '1px solid #000', color: '#000'};

    return (
      <div className="outer-shell game-over" style={gameStyle}>
        <h1>
          {winLoss === 'win'
            ? 'Congratulations! You won!'
            : winLoss === 'loss'
              ? 'Sorry, you lost!'
              : 'It\'s a draw, try again!'}
        </h1>
        <div>
          <Link className="game-over-link" style={linkStyle} to="/game">
            Another game
          </Link>
          <Link className="game-over-link" style={linkStyle} to="/">
            Change sides
          </Link>
        </div>
      </div>
    );
  }
}

End.propTypes = {
  playerSymbol: PropTypes.string,
  winLoss: PropTypes.string,
  prepareNextGame: PropTypes.func,
};

const mapStateToProps = (state) => ({
  playerSymbol: state.game.playerSymbol,
  winLoss: state.game.winLoss,
});

export default connect(mapStateToProps, actions)(End);
