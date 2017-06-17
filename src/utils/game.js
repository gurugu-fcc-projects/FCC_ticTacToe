const winningCombinations = [
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

const makeMove = (board, cell, symbol) => {
  return [...board.slice(0, cell), symbol, ...board.slice(cell + 1)];
};

const checkMoves = (board, cpuSymbol, currentSymbol, rating) => {
  if (board.indexOf(0) === -1) {
    // return 'none';
    return rating;
  } else {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 0) {
        const newBoard = makeMove(board, i, currentSymbol);

        if (isWinning(newBoard, currentSymbol)) {
          // return currentSymbol === cpuSymbol
          //   ? 'cpu'
          //   : 'player';
          return currentSymbol === cpuSymbol
            ? rating + 100
            : rating - 100;
        }

        const newSymbol = currentSymbol === 'x' ? 'o' : 'x';
        return checkMoves(newBoard, cpuSymbol, newSymbol, rating - 1);
      }
    }
  }
};

const calculateRating = (board, cpuSymbol, currentSymbol, rating) => {
  return 100;
};

export const findMoveRatings = (board, cpuSymbol) => {
  const playerSymbol = cpuSymbol === 'x' ? 'o' : 'x';

  return board.map((cell, index) => {
    return cell === 0
      ? calculateRating(makeMove(board, index, cpuSymbol), cpuSymbol, playerSymbol, 0)
      : cell;
  });
};
