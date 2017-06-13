import { CHOOSE_SIDE } from '../actions/types';

const INIT_STATE = {
  side: 'o',
  score: 0,
  isMoving: false,
};

const cpu = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        side: action.payload.side === 'x' ? 'o' : 'x',
        isMoving: action.payload.isMoving === true ? false : true,
      };
    default:
      return state;
  }
};

export default cpu;
