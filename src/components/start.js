import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { drawSelectionButtons } from '../utils/drawing';
import * as actions from '../actions';
import '../style/start.css';

class Start extends Component {
  componentDidMount() {
    drawSelectionButtons();
  }

  render() {
    const { chooseSide } = this.props;

    return (
      <div className="outer-shell">
        <div className="start-screen">
          <h1>CHOOSE SIDE</h1>
          <div className="start-screen_selection">
            <Link
              to="/game"
              className="start-screen_selection_x"
              onClick={() => chooseSide('x')}>
              <canvas
                className="select-x"
                height="120px"
                width="120px"></canvas>
            </Link>
            <Link
              to="/game"
              className="start-screen_selection_y"
              onClick={() => chooseSide('o')}>
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

Start = connect(
  null,
  actions
)(Start);

export default Start;
