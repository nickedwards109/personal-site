import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="gray-line"></div>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
        <Link to="/music" className="navbar-link">Music</Link>
        <a href="https://github.com/nickedwards109" className="navbar-link">Github</a>
        <a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a>
        <div className="gray-line"></div>
      </div>
    );
  }
}

export default Navbar;
