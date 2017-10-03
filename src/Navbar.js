import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="gray-line"></div>
        <Paper className="navbar-link-container"><Link to="/about" className="navbar-link">About</Link></Paper>
        <Paper className="navbar-link-container"><Link to="/projects" className="navbar-link">Projects</Link></Paper>
        <Paper className="navbar-link-container"><Link to="/music" className="navbar-link">Music</Link></Paper>
        <Paper className="navbar-link-container"><a href="https://github.com/nickedwards109" className="navbar-link">Github</a></Paper>
        <Paper className="navbar-link-container"><a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a></Paper>
        <div className="gray-line"></div>
      </div>
    );
  }
}

export default Navbar;
