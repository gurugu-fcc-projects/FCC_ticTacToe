import React from 'react';

import '../style/board.css';

const Board = () => {
  const boardData = ['X','O','O','X',0,0,'X',0,'X'];

  return (
    <div className="game-screen-board">
      { boardData.map((cell, index) =>
        <div key={index}>{cell === 0 ? '' : cell}</div>) }
    </div>
  );
};

export default Board;
