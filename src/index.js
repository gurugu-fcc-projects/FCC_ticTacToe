import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
/* not yet available!!! import '../style/index.css'; */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
