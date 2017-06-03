import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Start from './start';
import Game from './game';
import End from './end';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={Start}>
        <Route path='/start' component={Start} />
        <Route path='/game' component={Game} />
        <Route path='/end' component={End} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
