import * as types from './types';
import * as fromFinding from '../utils/finding';

export const chooseSide = (evt) => {
  const side = fromFinding.chooseSide(evt);

  return {
    type: types.CHOOSE_SIDE,
    payload: {
      side: side,
      isMoving: side === 'x' ? true : false,
    },
  };
};

export const playerMove = (evt) => {
  const cell = fromFinding.chooseCell(evt);

  return {
    type: types.PLAYER_MOVE,
    payload: cell,
  };
};

export const cpuMove = (firstMove) => {
  return {
    type: types.CPU_MOVE,
    payload: firstMove,
  };
};
