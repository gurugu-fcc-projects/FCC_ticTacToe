export const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export const isWinning = (board, symbol) => {
  return winningCombinations.some(combination => {
    return combination.every(cell => board[cell - 1] !== symbol ? false : true);
  });
};

export const whichCombination = (board, symbol) => {
  return winningCombinations.reduce((winningCombination, combination, index) => {
    return combination.every(cell => board[cell - 1] !== symbol ? false : true)
      ? index
      : winningCombination;
  }, null);
};

export const winningCells = (board, symbol) => {
  return winningCombinations.reduce((winningCombination, combination, index) => {
    return combination.every(cell => board[cell - 1] !== symbol ? false : true)
      ? combination
      : winningCombination;
  }, null);
};

export const makeMove = (board, cell, symbol) => {
  return [...board.slice(0, cell), symbol, ...board.slice(cell + 1)];
};

export const winningMove = (board, player) => {
  return board.some((cell, index) => {
    if (cell === 0) {
      const newBoard = makeMove(board, index, player);

      if (isWinning(newBoard, player)) {
        return true;
      }
      return false;
    }
    return false;
  });
}

export const calculateMoveRatings = (board, playerAi, playerCurrent) => {
  const playerNext = playerCurrent === 'x' ? 'o' : 'x';
  // return if there are no free cells on a board
  if (board.indexOf(0) === -1) {
    return 0;
  }
  // return if current player has a winning move
  if (winningMove(board, playerCurrent)) {
    return playerCurrent === playerAi ? 10 : -10;
  }

  return board.reduce((totalScore, cell, index) => {
    if (cell === 0) {
      const newBoard = makeMove(board, index, playerCurrent);

      return totalScore + calculateMoveRatings(newBoard, playerAi, playerNext);
    }
    return totalScore;
  }, 0);
};

export const findMoveRatings = (board, playerAi) => {
  const playerHuman = playerAi === 'x' ? 'o' : 'x';

  return board.map((cell, index) => {
    if (cell === 0) {
      const newBoard = makeMove(board, index, playerAi);

      return isWinning(newBoard, playerAi)
        ? 10000
        : winningMove(newBoard, playerHuman)
          ? -10000
          : calculateMoveRatings(newBoard, playerAi, playerHuman);
    }
    return -10000;
  });
};

export const findBestCell = (ratings) => {
  let testRating = -10000;

  return ratings.reduce((best, rating, index) => {
    if (rating > testRating) {
      testRating = rating
      return index + 1;
    } else if (rating === testRating) {
      return Math.random > 0.5 ? index + 1 : best;
    }
    return best;
  }, 1);
};

export const returnBestCell = (board, playerAi) => {
  const moveRatings = findMoveRatings(board, playerAi);

  return findBestCell(moveRatings);
};
