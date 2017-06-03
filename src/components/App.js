import React, { Component } from 'react';
import '../style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div className="start-screen_selection">
            <span className="start-screen_selection_x">X</span>
            <span className="start-screen_selection_y">O</span>
          </div>
          <div className="start-screen_selection_legend">
            <span>:first</span><span>:second</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
