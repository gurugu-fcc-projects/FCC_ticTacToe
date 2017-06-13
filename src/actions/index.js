import { CHOOSE_SIDE } from './types';
import * as fromFinding from '../utils/finding';

export const chooseSide = (evt) => {
  return {
    type: CHOOSE_SIDE,
    payload: fromFinding.chooseSide(evt),
  };
};
