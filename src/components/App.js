import React, { Component } from 'react';
import '../style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div>
            <span>X</span><span>O</span>
          </div>
          <div>
            <span>:first</span><span>:second</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
