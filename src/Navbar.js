import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = { active: "about" };
    this.setActive = this.setActive.bind(this);
  }

  setActive(link_name) {
    this.setState({ active: link_name });
  }

  Paper(link) {
    const isActive = (this.state.active === link.props.name);

    return(
      <div className={`navbar-link-container active-${isActive}`}>
        {link}
      </div>
    );
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="gray-line"></div>
          {this.Paper(<Link to="/about" className="navbar-link" name="about" onClick={() => this.setActive("about")}>About</Link>)}
          {this.Paper(<Link to="/projects" className="navbar-link" name="projects" onClick={() => this.setActive("projects")}>Projects</Link>)}
          {this.Paper(<Link to="/music" className="navbar-link" name="music" onClick={() => this.setActive("music")}>Music</Link>)}
          {this.Paper(<a href="https://github.com/nickedwards109" className="navbar-link">Github</a>)}
          {this.Paper(<a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a>)}
        <div className="gray-line"></div>
      </div>
    );
  }
}

export default Navbar;
