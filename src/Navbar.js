import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './Navbar.css';

class Navbar extends Component {
  Paper(link, isActive) {
    return(
      <div className={`navbar-link-container active-${isActive}`}>
        {link}
      </div>
    );
  }

  render() {
    const location = browserHistory.getCurrentLocation().pathname.slice(1);
    const aboutActive = (location === "about" || location === "");
    const projectsActive = (location === "projects");
    const musicActive = (location === "music");

    return (
      <div className="navbar-container">
        <div className="gray-line"></div>
          {this.Paper(<Link to="/about" className="navbar-link" name="about" >About</Link>, aboutActive)}
          {this.Paper(<Link to="/projects" className="navbar-link" name="projects" >Projects</Link>, projectsActive)}
          {this.Paper(<Link to="/music" className="navbar-link" name="music" >Music</Link>, musicActive)}
          {this.Paper(<a href="https://github.com/nickedwards109" className="navbar-link">Github</a>)}
          {this.Paper(<a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a>)}
        <div className="gray-line"></div>
      </div>
    );
  }
}

export default Navbar;
