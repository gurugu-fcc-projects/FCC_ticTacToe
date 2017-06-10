import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { drawSelectionButtons } from '../utils/drawing';
import '../style/start.css';

class Start extends Component {
  componentDidMount() {
    drawSelectionButtons();
  }

  render() {
    return (
      <div className="outer-shell">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div className="start-screen_selection">
            <Link to="/game" className="start-screen_selection_x">
              <canvas
                className="select-x"
                height="120px"
                width="120px"></canvas>
            </Link>
            <Link to="/game" className="start-screen_selection_y">
              <canvas
                className="select-y"
                height="120px"
                width="120px"></canvas>
            </Link>
          </div>
          <div className="start-screen_selection_legend">
            <span>:first</span><span>:second</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
