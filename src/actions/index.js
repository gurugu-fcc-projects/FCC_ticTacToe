import { CHOOSE_SIDE } from './types';

export const chooseSide = (side) => {
  console.log(side);
  return {
    type: CHOOSE_SIDE,
    payload: side,
  };
};
