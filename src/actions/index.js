import {
  CHOOSE_SIDE,
  PLAYER_MOVE,
  CPU_MOVE,
  GAME_OVER,
  PREPARE_NEXT_GAME,
} from './types';
import * as fromFinding from '../utils/finding';

export const chooseSide = (evt) => {
  const side = fromFinding.chooseSide(evt);

  return {
    type: CHOOSE_SIDE,
    payload: {
      side: side,
      isMoving: side === 'x' ? true : false,
    },
  };
};

export const playerMove = (evt) => {
  const cell = fromFinding.chooseCell(evt);

  return {
    type: PLAYER_MOVE,
    payload: cell,
  };
};

export const cpuMove = (firstMove) => {
  return {
    type: CPU_MOVE,
    payload: firstMove,
  };
};

export const gameOver = () => {
  return {
    type: GAME_OVER,
  };
};

export const prepareNextGame = () => {
  return {
    type: PREPARE_NEXT_GAME,
  };
};
