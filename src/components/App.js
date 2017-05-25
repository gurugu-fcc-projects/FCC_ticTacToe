import React, { Component } from 'react';
import '../style/app.css';

class App extends Component {
  componentDidMount = () => {
    // const canvas = document.querySelector('.start-screen_selection_x');
    // const ctx = canvas.getContext('2d');
    //
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(80, 80);
    // ctx.stroke();

  }

  render() {
    return (
      <div className="app">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div className="start-screen_selection">
            <span className="start-screen_selection_x">X</span>
            <span className="start-screen_selection_y">O</span>
            {/* <canvas className="start-screen_selection_x"></canvas>
            <canvas className="start-screen_selection_y"></canvas> */}
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
