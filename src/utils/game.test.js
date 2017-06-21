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
    const winningBoard1 = ['x', 'x','x', 0, 0, 0, 0, 0, 0];
    const winningBoard2 = [0, 0, 0, 'o', 'o', 0, 0, 0, 0];
    const winningBoard3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const winningBoard4 = ['o', 0, 0, 0, 0, 0, 0, 0, 'o'];

    expect(fromGame.isWinning(winningBoard1, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard2, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard3, 'o')).toBeFalsy();
    expect(fromGame.isWinning(winningBoard4, 'o')).toBeFalsy();
  });
});
