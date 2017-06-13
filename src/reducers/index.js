import { combineReducers } from 'redux';

import player from './player';
import cpu from './cpu';

const rootReducer = combineReducers({
  player,
  cpu,
});

export default rootReducer;
