import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import tictactoe from './reducers/index';

export const configureStore = () => {
  const middlewares = [];

  if (process.env.MODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    tictactoe,
    applyMiddleware(...middlewares)
  );
};
