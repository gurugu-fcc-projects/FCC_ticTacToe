import { combineReducers } from 'redux';

import player from './player';

const INIT_STATE = {
  board: [0,0,0,0,0,0,0,0,0],
  game: {
    player: {
      side: 'X',
      score: 0,
      isMoving: true,
    },
    cpu: {
      side: 'O',
      score: 0,
      isMoving: false,
    },
  },
};

const rootReducer = combineReducers({
  player,
});

export default rootReducer;
