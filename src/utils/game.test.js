import * as fromGame from './game';

describe ('isWinning', () => {
  it ('returns TRUE if there is a winning combination for X', () => {
    const winningBoard1 = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'x', 'x', 'x', 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 'x', 'x', 'x'];
    const winningBoard4 = ['x', 0, 0, 'x', 0, 0, 'x', 0, 0];
    const winningBoard5 = [0, 'x', 0, 0, 'x', 0, 0, 'x', 0];
    const winningBoard6 = [0, 0, 'x', 0, 0, 'x', 0, 0, 'x'];
    const winningBoard7 = ['x', 0, 0, 0, 'x', 0, 0, 0, 'x'];
    const winningBoard8 = [0, 0, 'x', 0,'x', 0, 'x', 0, 0];

    expect(fromGame.isWinning(winningBoard1, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard2, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard3, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard4, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard5, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard6, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard7, 'x')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard8, 'x')).toBeTruthy();
  });
  it ('returns FALSE if there is no winning combination for X', () => {
    const winningBoard1 = ['o', 'o', 'o', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'x', 'x', 0, 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const winningBoard4 = ['x', 0, 0, 0, 0, 0, 0, 0, 'x'];

    expect(fromGame.isWinning(winningBoard1, 'x')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard2, 'x')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard3, 'x')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard4, 'x')).toBeFalsy();
  });
  it ('returns TRUE if there is a winning combination for O', () => {
    const winningBoard1 = ['o', 'o', 'o', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'o', 'o', 'o', 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 'o', 'o', 'o'];
    const winningBoard4 = ['o', 0, 0, 'o', 0, 0, 'o', 0, 0];
    const winningBoard5 = [0, 'o', 0, 0, 'o', 0, 0, 'o', 0];
    const winningBoard6 = [0, 0, 'o', 0, 0, 'o', 0, 0, 'o'];
    const winningBoard7 = ['o', 0, 0, 0, 'o', 0, 0, 0, 'o'];
    const winningBoard8 = [0, 0, 'o', 0,'o', 0, 'o', 0, 0];

    expect(fromGame.isWinning(winningBoard1, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard2, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard3, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard4, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard5, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard6, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard7, 'o')).toBeTruthy();
    expect(fromGame.isWinning(winningBoard8, 'o')).toBeTruthy();
  });
  it ('returns FALSE if there is no winning combination for O', () => {
    const winningBoard1 = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'o', 'o', 0, 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const winningBoard4 = ['o', 0, 0, 0, 0, 0, 0, 0, 'o'];

    expect(fromGame.isWinning(winningBoard1, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard2, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard3, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard4, 'o')).toBeFalsy();
  });
});

describe('makeMove', () => {
  it('returns board with X inserted in the specified board cell', () => {
    const inputBoard = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const outputBoard = ['x', 'x', 'x', 0, 0, 'x', 0, 0, 0];

    expect(fromGame.makeMove(inputBoard, 5, 'x')).toEqual(outputBoard);
  });
  it('returns board with O inserted in the specified board cell', () => {
    const inputBoard = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const outputBoard = ['x', 'x', 'x', 0, 0, 0, 'o', 0, 0];

    expect(fromGame.makeMove(inputBoard, 6, 'o')).toEqual(outputBoard);
  });
});

describe('winningMove', () => {
  it('returns TRUE if there is a winning move for X', () => {
    const inputBoard1 = ['x', 'x', 0, 0, 0, 0, 0, 0, 0];
    const inputBoard2 = ['x', 0, 'x', 0, 0, 0, 0, 0, 0];
    const inputBoard3 = ['x', 0, 0, 'x', 0, 0, 0, 0, 0];
    const inputBoard4 = ['x', 0, 0, 0, 0, 0, 'x', 0, 0];
    const inputBoard5 = ['x', 0, 0, 0, 0, 0, 0, 0, 'x'];
    const inputBoard6 = [0, 0, 'x', 0, 0, 0, 'x', 0, 0];

    expect(fromGame.winningMove(inputBoard1, 'x')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard2, 'x')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard3, 'x')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard4, 'x')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard5, 'x')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard6, 'x')).toBeTruthy();
  });

  it('returns TRUE if there is a winning move for O', () => {
    const inputBoard1 = ['o', 'o', 0, 0, 0, 0, 0, 0, 0];
    const inputBoard2 = ['o', 0, 'o', 0, 0, 0, 0, 0, 0];
    const inputBoard3 = ['o', 0, 0, 'o', 0, 0, 0, 0, 0];
    const inputBoard4 = ['o', 0, 0, 0, 0, 0, 'o', 0, 0];
    const inputBoard5 = ['o', 0, 0, 0, 0, 0, 0, 0, 'o'];
    const inputBoard6 = [0, 0, 'o', 0, 0, 0, 'o', 0, 0];

    expect(fromGame.winningMove(inputBoard1, 'o')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard2, 'o')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard3, 'o')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard4, 'o')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard5, 'o')).toBeTruthy();
    expect(fromGame.winningMove(inputBoard6, 'o')).toBeTruthy();
  });
});

describe('calculateMoveRatings', () => {
  it('returns 0 if there are no empty cells', () => {
    const inputBoard = ['o', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];

    expect(fromGame.calculateMoveRatings(inputBoard, 'x', 'x')).toEqual(0);
  });

  it('returns 10 if there is one empty cell that allows player to win', () => {
    const inputBoard = ['o', 'o', 'x', 'o', 'x', 'o', 'x', 0, 'x'];

    expect(fromGame.calculateMoveRatings(inputBoard, 'x', 'x')).toEqual(10);
  });

  it('returns -10 if there are two moves & one of them allows opponent to win', () => {
    const inputBoard = ['x', 'o', 0, 'o', 'o', 0, 'x', 'x', 'o'];

    expect(fromGame.calculateMoveRatings(inputBoard, 'x', 'x')).toEqual(-10);
  });

  it('returns -20 if there are two moves that allow opponent to win', () => {
    const inputBoard = ['x', 'o', 'o', 'o', 'o', 0, 0, 'x', 'o'];

    expect(fromGame.calculateMoveRatings(inputBoard, 'x', 'x')).toEqual(-20);
  });
});

describe('findMoveRatings', () => {
  it('returns -100000 for all taken cells', () => {
    const inputBoard = ['x', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'o'];
    const outputBoard = [-100000, -100000, -100000, -100000, -100000, -100000, -100000, -100000, -100000];

    expect(fromGame.findMoveRatings(inputBoard, 'x', true)).toEqual(outputBoard);
  });

  it('returns 10000 for all empty cells that will bring victory', () => {
    const inputBoard = ['x', 'x', 0, 0, 'o', 'x', 'x', 'x', 0];
    const outputBoard = [-100000, -100000, 10000, 10000, -100000, -100000, -100000, -100000, 10000];

    expect(fromGame.findMoveRatings(inputBoard, 'x', true)).toEqual(outputBoard);
  });
});

describe('findBestCell', () => {
  it('returns index of a cell with the highest rating', () => {
    const inputRatings1 = [10, 20, 0, 0, -40, 100, 30, -100000, 150];
    const inputRatings2 = [-10, -20, 0, -1000, -40, -100, -30, -100000, -150];
    const inputRatings3 = [-10, -20, -90, -1000, -40, -100, -30, -100000, -150];

    expect(fromGame.findBestCell(inputRatings1)).toEqual(9);
    expect(fromGame.findBestCell(inputRatings2)).toEqual(3);
    expect(fromGame.findBestCell(inputRatings3)).toEqual(1);
  });
  it('returns index of the only empty cell', () => {
    const inputRatings = [-100000, -100000, -100000, -100000, -100000, -100000, -100000, -10000, -100000];

    expect(fromGame.findBestCell(inputRatings)).toEqual(8);
  });
});

describe('returnBestCell', () => {
  it('returns the best cell given current board', () => {
    const inputBoard1 = ['x', 0, 'x', 'o', 'o', 0, 'o', 'x', 0];
    const inputBoard2 = ['o', 0, 'o', 'x', 0, 0, 0, 'x', 0];
    const inputBoard3 = ['o', 'x', 'o', 0, 0, 0, 0, 'x', 0];


    expect(fromGame.returnBestCell(inputBoard1, 'x')).toEqual(2);
    expect(fromGame.returnBestCell(inputBoard2, 'x')).toEqual(2);
    expect(fromGame.returnBestCell(inputBoard3, 'x')).toEqual(5);
  });
});

describe('whichCombination', () => {
  it('returns a winning combination number', () => {
    const winningBoard1 = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'x', 'x', 'x', 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 'x', 'x', 'x'];
    const winningBoard4 = ['x', 0, 0, 'x', 0, 0, 'x', 0, 0];
    const winningBoard5 = [0, 'x', 0, 0, 'x', 0, 0, 'x', 0];
    const winningBoard6 = [0, 0, 'x', 0, 0, 'x', 0, 0, 'x'];
    const winningBoard7 = ['x', 0, 0, 0, 'x', 0, 0, 0, 'x'];
    const winningBoard8 = [0, 0, 'x', 0,'x', 0, 'x', 0, 0];

    expect(fromGame.whichCombination(winningBoard1, 'x')).toEqual(0);
    expect(fromGame.whichCombination(winningBoard2, 'x')).toEqual(1);
    expect(fromGame.whichCombination(winningBoard3, 'x')).toEqual(2);
    expect(fromGame.whichCombination(winningBoard4, 'x')).toEqual(3);
    expect(fromGame.whichCombination(winningBoard5, 'x')).toEqual(4);
    expect(fromGame.whichCombination(winningBoard6, 'x')).toEqual(5);
    expect(fromGame.whichCombination(winningBoard7, 'x')).toEqual(6);
    expect(fromGame.whichCombination(winningBoard8, 'x')).toEqual(7);
  });
});

describe('winningCells', () => {
  it('returns numbers of winning cells', () => {
    const winningBoard1 = ['x', 'x', 'x', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'x', 'x', 'x', 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 'x', 'x', 'x'];
    const winningBoard4 = ['x', 0, 0, 'x', 0, 0, 'x', 0, 0];
    const winningBoard5 = [0, 'x', 0, 0, 'x', 0, 0, 'x', 0];
    const winningBoard6 = [0, 0, 'x', 0, 0, 'x', 0, 0, 'x'];
    const winningBoard7 = ['x', 0, 0, 0, 'x', 0, 0, 0, 'x'];
    const winningBoard8 = [0, 0, 'x', 0,'x', 0, 'x', 0, 0];

    expect(fromGame.winningCells(winningBoard1, 'x')).toEqual([1, 2, 3]);
    expect(fromGame.winningCells(winningBoard2, 'x')).toEqual([4, 5, 6]);
    expect(fromGame.winningCells(winningBoard3, 'x')).toEqual([7, 8, 9]);
    expect(fromGame.winningCells(winningBoard4, 'x')).toEqual([1, 4, 7]);
    expect(fromGame.winningCells(winningBoard5, 'x')).toEqual([2, 5, 8]);
    expect(fromGame.winningCells(winningBoard6, 'x')).toEqual([3, 6, 9]);
    expect(fromGame.winningCells(winningBoard7, 'x')).toEqual([1, 5, 9]);
    expect(fromGame.winningCells(winningBoard8, 'x')).toEqual([3, 5, 7]);
  });
});
