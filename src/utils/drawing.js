import { findCellCenter } from './finding';

/*=============================================
Preparation Functions
=============================================*/
export const drawBoard = () => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

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

/*=============================================
In-game drawing functions
=============================================*/

const drawCross = (coordinates) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');
  const {x, y} = coordinates;

  cx.beginPath();
  cx.moveTo(x-38, y-38);
  cx.lineTo(x+38, y+38);
  cx.moveTo(x+38, y-38);
  cx.lineTo(x-38, y+38);
  cx.stroke();
};

const drawCircle = (coordinates) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');
  const {x, y} = coordinates;

  cx.beginPath();
  cx.arc(x, y, 38, 0, 7);
  cx.stroke();
};

export const drawCrossLine = (coordinates) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  cx.strokeStyle = 'red';
  cx.beginPath();
  cx.moveTo(coordinates.start.x, coordinates.start.y);
  cx.lineTo(coordinates.end.x, coordinates.end.y);
  cx.stroke();
};

export const drawInCell = (cell, symbol) => {
  symbol === 1
    ? drawCross(findCellCenter(cell))
    : drawCircle(findCellCenter(cell));
}
