import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';
import game from './reducers/game';

export const configureStore = () => {
  const middlewares = [];

  if (process.env.MODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    game,
    applyMiddleware(...middlewares)
  );
};
