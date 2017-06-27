import { findCellCenter } from './finding';
import { winningCells } from './game';

export const drawBoard = (playerSymbol = 'x') => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  cx.strokeStyle = playerSymbol === 'x' ? 'white' : 'black';
  cx.beginPath();
  cx.moveTo(100, 0);
  cx.lineTo(100, 300);
  cx.moveTo(200, 0);
  cx.lineTo(200, 300);
  cx.moveTo(0, 100);
  cx.lineTo(300, 100);
  cx.moveTo(0, 200);
  cx.lineTo(300, 200);
  cx.stroke();
};

export const drawSelectionButtons = (canvasName) => {
  const canvas = document.querySelector('.selection-canvas');
  const cx = canvas.getContext('2d');

  // draw "X"
  cx.lineWidth = 4;
  cx.beginPath();
  cx.moveTo(5, 10);
  cx.lineTo(85, 90);
  cx.moveTo(85, 10);
  cx.lineTo(5, 90);
  cx.moveTo(5, 10);
  cx.stroke();

  // draw "O"
  cx.beginPath();
  cx.arc(195, 50, 40, 0, 7);
  cx.stroke();
};

const drawCross = (coordinates, color = 'black') => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');
  const {x, y} = coordinates;

  cx.strokeStyle = color;
  cx.beginPath();
  cx.moveTo(x-38, y-38);
  cx.lineTo(x+38, y+38);
  cx.moveTo(x+38, y-38);
  cx.lineTo(x-38, y+38);
  cx.stroke();
};

const drawCircle = (coordinates, color = 'black') => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');
  const {x, y} = coordinates;

  cx.strokeStyle = color;
  cx.beginPath();
  cx.arc(x, y, 38, 0, 7);
  cx.stroke();
};

// const drawCrossLine = (coordinates) => {
//   const canvas = document.querySelector('.game-board');
//   const cx = canvas.getContext('2d');
//
//   cx.strokeStyle = 'red';
//   cx.beginPath();
//   cx.moveTo(coordinates.start.x, coordinates.start.y);
//   cx.lineTo(coordinates.end.x, coordinates.end.y);
//   cx.stroke();
// };

export const drawInCell = (cell, symbol, color) => {
  symbol === 'x'
    ? drawCross(findCellCenter(cell), color)
    : drawCircle(findCellCenter(cell), color);
}

// const drawWinningLine = (winningLine) => {
//   const coordinates = [
//     { start: {x:0,   y:50},  end: {x:300, y:50} },
//     { start: {x:0,   y:150}, end: {x:300, y:150} },
//     { start: {x:0,   y:250}, end: {x:300, y:250} },
//     { start: {x:50,  y:0},   end: {x:50,  y:300} },
//     { start: {x:150, y:0},   end: {x:150, y:300} },
//     { start: {x:250, y:0},   end: {x:250, y:300} },
//     { start: {x:0,   y:0},   end: {x:300, y:300} },
//     { start: {x:300, y:0},   end: {x:0,   y:300} },
//   ];
//
//   switch (winningLine) {
//     case 0:
//       return drawCrossLine(coordinates[0]);
//     case 1:
//       return drawCrossLine(coordinates[1]);
//     case 2:
//       return drawCrossLine(coordinates[2]);
//     case 3:
//       return drawCrossLine(coordinates[3]);
//     case 4:
//       return drawCrossLine(coordinates[4]);
//     case 5:
//       return drawCrossLine(coordinates[5]);
//     case 6:
//       return drawCrossLine(coordinates[6]);
//     case 7:
//       return drawCrossLine(coordinates[7]);
//     default:
//       return null;
//   }
// };
//
// export const drawWin = (board, player) => {
//   const combination = whichCombination(board, player);
//   drawWinningLine(combination);
// };

// const clearCells = (cells) => {
//   const cellCoords = [
//     {x: 0, y: 0},
//     {x: 100, y: 0},
//     {x: 200, y: 0},
//     {x: 0, y: 100},
//     {x: 100, y: 100},
//     {x: 200, y: 100},
//     {x: 0, y: 200},
//     {x: 100, y: 200},
//     {x: 200, y: 200},
//   ];
//   const canvas = document.querySelector('.game-board');
//   const cx = canvas.getContext('2d');
//
//   cells.forEach(cell => {
//     cx.clearRect(cellCoords[cell].x, cellCoords[cell].y, 100, 100);
//   });
// };

export const drawWinCells = (board, player) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');
  const cells = winningCells(board, player);
  const cellCoords = [
    {x: 5, y: 5},
    {x: 105, y: 5},
    {x: 205, y: 5},
    {x: 5, y: 105},
    {x: 105, y: 105},
    {x: 205, y: 105},
    {x: 5, y: 205},
    {x: 105, y: 205},
    {x: 205, y: 205},
  ];

  cells.forEach(cell => {
    cx.clearRect(cellCoords[cell - 1].x, cellCoords[cell - 1].y, 90, 90);
    drawInCell(cell, player, 'red');
  });
};
