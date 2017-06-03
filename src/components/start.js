import React, { Component } from 'react';
import '../style/start.css';

const Start = () => (
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

export default Start;
