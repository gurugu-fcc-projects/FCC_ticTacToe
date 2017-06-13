import { CHOOSE_SIDE } from '../actions/types';

const INIT_STATE = {
  side: 'o',
  score: 0,
  isMoving: true,
};

const cpu = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        side: action.payload === 'x' ? 'x' : 'o',
      };
    default:
      return state;
  }
};

export default cpu;
