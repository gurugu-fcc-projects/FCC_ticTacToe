import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/root';
import { configureStore } from './configureStore';
import './style/global.css';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
