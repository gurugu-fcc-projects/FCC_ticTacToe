import { CHOOSE_SIDE } from '../actions/types';

const INIT_STATE = {
  side: 'x',
  score: 0,
  isMoving: true,
};

const player = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        side: action.payload,
      };
    default:
      return state;
  }
};

export default player;
