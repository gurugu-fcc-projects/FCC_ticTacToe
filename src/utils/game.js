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

// const checkMoves = (board, cpuSymbol, currentSymbol, rating) => {
//   if (board.indexOf(0) === -1) {
//     // return 'none';
//     return rating;
//   } else {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i] === 0) {
//         const newBoard = makeMove(board, i, currentSymbol);
//
//         if (isWinning(newBoard, currentSymbol)) {
//           // return currentSymbol === cpuSymbol
//           //   ? 'cpu'
//           //   : 'player';
//           return currentSymbol === cpuSymbol
//             ? rating + 100
//             : rating - 100;
//         }
//
//         const newSymbol = currentSymbol === 'x' ? 'o' : 'x';
//         return checkMoves(newBoard, cpuSymbol, newSymbol, rating - 1);
//       }
//     }
//   }
// };

const calculateRating = (board, playerAi, playerCurrent) => {
  const playerHuman = playerAi === 'x' ? 'o' : 'x';
  const playerNext = playerCurrent === 'x' ? 'o' : 'x';

  // if (isWinning(board, playerAi)) {
  //   return 10;
  // } else if (isWinning(board, playerHuman)) {
  //   return -10;
  // } else if (board.indexOf(0) === -1) {
  //   return 0;
  // }

  if (board.indexOf(0) === -1) {
    return 0;
  }

  return board.reduce((totalScore, cell, index) => {
    if (cell === 0) {
      const newBoard = makeMove(board, index, playerCurrent);

      if (isWinning(board, playerAi)) {
        return 10;
      } else if (isWinning(board, playerHuman)) {
        return -10;
      }

      return totalScore + calculateRating(newBoard, playerAi, playerNext);
    } else {
      return totalScore + 0;
    }
  }, 0);
};

export const findMoveRatings = (board, playerAi) => {
  // const playerHuman = playerAi === 'x' ? 'o' : 'x';
  //
  // const result = calculateRating(makeMove(board, 2, playerAi), playerAi, playerHuman, 0)
  // console.log(result);

  const playerHuman = playerAi === 'x' ? 'o' : 'x';

  return board.map((cell, index) => {
    return cell === 0
      ? calculateRating(makeMove(board, index, playerAi), playerAi, playerHuman, 0)
      : cell;
  });
};
