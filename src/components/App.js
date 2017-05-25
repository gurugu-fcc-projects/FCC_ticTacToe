import React, { Component } from 'react';
import '../style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div className="start-screen_x-y">
            <span><i className="fa fa-remove"></i></span>
            <span><i className="fa fa-circle-thin"></i></span>
          </div>
          <div className="start-screen_x-y_legend">
            <span>:first</span><span>:second</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
