
const getCoordinates = (evt, canvasName) => {
  const canvas = document.querySelector(canvasName);
  const rect = canvas.getBoundingClientRect();

  return {
    x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
    y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
  };
};

const findRow = (coordinates) => {
  if (coordinates.y < 100) {
    return 1;
  } else if (coordinates.y < 200) {
    return 2;
  } else {
    return 3;
  }
};

const findColumn = (coordinates) => {
  if (coordinates.x < 100) {
    return 1;
  } else if (coordinates.x < 200) {
    return 2;
  } else {
    return 3;
  }
};

const findCell = (row, column) => {
  switch (row) {
    case 1:
      return column;
    case 2:
      return column + 3;
    case 3:
      return column + 6;
    default:
      return 1;
  }
};

export const findCellCenter = (cell) => {
  switch (cell) {
    case 1:
      return {x: 50, y: 50};
    case 2:
      return {x: 150, y: 50};
    case 3:
      return {x: 250, y: 50};
    case 4:
      return {x: 50, y: 150};
    case 5:
      return {x: 150, y: 150};
    case 6:
      return {x: 250, y: 150};
    case 7:
      return {x: 50, y: 250};
    case 8:
      return {x: 150, y: 250};
    case 9:
      return {x: 250, y: 250};
    default:
      return {x: 50, y: 50};
  }
};

export const chooseCell = (evt) => {
  const coordinates = getCoordinates(evt, '.game-board');
  const row = findRow(coordinates);
  const column = findColumn(coordinates);

  return findCell(row, column);
};

export const chooseSide = (evt) => {
  const { x, } = getCoordinates(evt, '.selection-canvas');

  return x < 120 ? 'x' : 'o';
}
