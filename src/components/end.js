import React from 'react';
import { connect } from 'react-redux';

let End = ({ winLoss }) => (
  <div className="outer-shell">
    <h1>
      {winLoss === 'win'
        ? 'Congratulations! You won!'
        : winLoss === 'loss'
          ? 'Sorry, but you lost!'
          : 'It\'s a draw, try again!'}
    </h1>
    <div>Another game</div>
    <div>Change side</div>
  </div>
);

const mapStateToProps = (state) => ({
  winLoss: state.game.winLoss,
});

End = connect(mapStateToProps)(End);

export default End;
