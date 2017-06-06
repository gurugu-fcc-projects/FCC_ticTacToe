// export const crossLine = (winningLine) => {
//   const line = document.querySelector('.crossline');
//
//   switch (winningLine) {
//     case 0:
//       return line.style.top = '50px';
//     case 1:
//       return line.style.top = '150px';
//     default:
//       return line.style.top = '50px';
//   };
//
// };

const drawCrossLine = (coordinates) => {
  const canvas = document.querySelector('.game-board');
  const cx = canvas.getContext('2d');

  cx.strokeStyle = 'red';
  cx.beginPath();
  cx.moveTo(coordinates.start.x, coordinates.start.y);
  cx.lineTo(coordinates.end.x, coordinates.end.y);
  cx.stroke();
}

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
