export const drawBoard = () => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  //=== draw a board
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

const drawCrossLine = (coordinates) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  cx.strokeStyle = 'red';
  cx.beginPath();
  cx.moveTo(coordinates.start.x, coordinates.start.y);
  cx.lineTo(coordinates.end.x, coordinates.end.y);
  cx.stroke();
};

export const chooseCrossLine = (winningLine) => {
  const coordinates = [
    { start: {x:0,   y:50},  end: {x:300, y:50} },
    { start: {x:0,   y:150}, end: {x:300, y:150} },
    { start: {x:0,   y:250}, end: {x:300, y:250} },
    { start: {x:50,  y:0},   end: {x:50,  y:300} },
    { start: {x:150, y:0},   end: {x:150, y:300} },
    { start: {x:250, y:0},   end: {x:250, y:300} },
    { start: {x:0,   y:0},   end: {x:300, y:300} },
    { start: {x:300, y:0},   end: {x:0,   y:300} },
  ];

  switch (winningLine) {
    case 0:
      return drawCrossLine(coordinates[0]);
    case 1:
      return drawCrossLine(coordinates[1]);
    case 2:
      return drawCrossLine(coordinates[2]);
    case 3:
      return drawCrossLine(coordinates[3]);
    case 4:
      return drawCrossLine(coordinates[4]);
    case 5:
      return drawCrossLine(coordinates[5]);
    case 6:
      return drawCrossLine(coordinates[6]);
    case 7:
      return drawCrossLine(coordinates[7]);
    default:
      return null;
  }
};

const getCoordinatesOnBoard = (evt) => {
  const canvas = document.querySelector('.game-board');
  const rect = canvas.getBoundingClientRect();

  return {
    x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
    y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
  };
};

const findRow = (coordinates) => {
  switch (coordinates) {
    case coordinates.y < 100:
      return 1;
    case coordinates.y < 200:
      return 2;
    case coordinates.y > 200:
      return 3;
    default:
      return 1;
  }
};

const findColumn = (coordinates) => {
  switch (coordinates) {
    case coordinates.x < 100:
      return 1;
    case coordinates.x < 200:
      return 2;
    case coordinates.x > 200:
      return 3;
    default:
      return 1;
  }
};

export const chooseCell = (evt) => {
  const coordinates = getCoordinatesOnBoard(evt);
  const row = findRow(coordinates);
  const column = findColumn(coordinates);
  
  console.log(coordinates);
};
