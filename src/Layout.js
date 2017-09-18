import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout-header">
          <h2>Nick Edwards</h2>
          <div className="navbar-container">
            <div className="gray-line"></div>
            <div className="navbar-link">About</div>
            <div className="navbar-link">Music</div>
            <div className="navbar-link">Github</div>
            <div className="navbar-link">LinkedIn</div>
            <div className="gray-line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
