import React from 'react';
import { connect } from 'react-redux';

let End = ({ winLoss }) => (
  <div className="outer-shell">
    <h1>
      {winLoss === 'win'
        ? 'Congratulations! You won!'
        : 'Sorry, but you lost!'}
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
