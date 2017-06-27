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
    const { winLoss } = this.props;

    return (
      <div className="outer-shell">
        <h1>
          {winLoss === 'win'
            ? 'Congratulations! You won!'
            : winLoss === 'loss'
              ? 'Sorry, you lost!'
              : 'It\'s a draw, try again!'}
        </h1>
        <div>
          <Link className="game-over-link" to="/game">
            Another game
            <span></span>
          </Link>
          <Link className="game-over-link" to="/">
            Change sides
            <span></span>
          </Link>
        </div>
      </div>
    );
  }
}

End.propTypes = {
  winLoss: PropTypes.string,
  prepareNextGame: PropTypes.func,
};

const mapStateToProps = (state) => ({
  winLoss: state.game.winLoss,
});

export default connect(mapStateToProps, actions)(End);
