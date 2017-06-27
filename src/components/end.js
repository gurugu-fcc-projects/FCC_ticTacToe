import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../style/end.css';

let End = ({ winLoss }) => (
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
      <Link className="game-over-link" to="/start">Change side</Link>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  winLoss: state.game.winLoss,
});

End = connect(mapStateToProps)(End);

export default End;
