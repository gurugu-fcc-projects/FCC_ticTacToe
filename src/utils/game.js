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

export const checkForVictory = (board, symbol) => {
  return winningCombinations.some(combination => {
    return combination.every(cell => board[cell - 1] !== symbol ? false : true);
  });
};

export const calculateCpuMove = (board, cpuSymbol) => {
  for (let i = 0, len = board.length; i < len; i++) {

  }
  return board;
};
