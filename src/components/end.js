import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link className="game-over-link" to="/game">Another game</Link>
          <Link className="game-over-link" to="/">Change sides</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  winLoss: state.game.winLoss,
});

End = connect(mapStateToProps, actions)(End);

export default End;
