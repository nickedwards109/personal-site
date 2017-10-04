import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = { active: "about" }
  }

  Paper(link) {
    const depth = (this.state.active === link.props.name) ? 2 : 1;
    return(
      <Paper className="navbar-link-container" zDepth={depth}>
        {link}
      </Paper>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="gray-line"></div>
          {this.Paper(<Link to="/about" className="navbar-link" name="about" onClick={() => this.setState({ active: "about"})}>About</Link>)}
          {this.Paper(<Link to="/projects" className="navbar-link" name="projects" onClick={() => this.setState({ active: "projects"})}>Projects</Link>)}
          {this.Paper(<Link to="/music" className="navbar-link" name="music" onClick={() => this.setState({ active: "music"})}>Music</Link>)}
          {this.Paper(<a href="https://github.com/nickedwards109" className="navbar-link">Github</a>)}
          {this.Paper(<a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a>)}
        <div className="gray-line"></div>
      </div>
    );
  }
}

export default Navbar;
