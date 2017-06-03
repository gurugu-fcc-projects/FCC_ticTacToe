import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Start from './start';
import Game from './game';
import End from './end';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Start} />
        <Route path='/game' component={Game} />
        <Route path='/end' component={End} />
      </div>
    </Router>
  </Provider>
);

export default Root;
