export const crossLine = (winningLine) => {
  const line = document.querySelector('.crossline');

  switch (winningLine) {
    case 0:
      return line.style.top = '50px';
    case 1:
      return line.style.top = '150px';
    default:
      return line.style.top = '50px';
  };

};
