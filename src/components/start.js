import React from 'react';
import { Link } from 'react-router-dom';
import '../style/start.css';

const Start = () => (
  <div className="outer-shell">
    <div className="start-screen">
      <h1>CHOOSE SIDE</h1>
      <div className="start-screen_selection">
        <Link to='/game' className="start-screen_selection_x">X</Link>
        <Link to='/game' className="start-screen_selection_y">O</Link>
      </div>
      <div className="start-screen_selection_legend">
        <span>:first</span><span>:second</span>
      </div>
    </div>
  </div>
);

export default Start;
