const INIT_STATE = {
  board: [0,0,0,0,0,0,0,0,0],
  game: {
    player: {
      side: 'X',
      score: 0,
      isMoving: true
    },
    cpu: {
      side: 'O',
      score: 0,
      isMoving: false
    }
  }
};

const tictactoe = (state = INIT_STATE, action) => {
  return state;
}

export default tictactoe;
