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
          <Link
            to="/game"
            className="selection"
            onClick={chooseSide}>
            <canvas
              className="selection-canvas"
              height="120px"
              width="240px"></canvas>
          </Link>
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
