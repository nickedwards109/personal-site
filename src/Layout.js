import React, { Component } from 'react';
import './Layout.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './About';
import Music from './Music';
import Projects from './Projects';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout-header">
          <h2>Nick Edwards</h2>
          <BrowserRouter>
            <div>
              <div className="navbar-container">
                <div className="gray-line"></div>
                <Link to="/about" className="navbar-link">About</Link>
                <Link to="/projects" className="navbar-link">Projects</Link>
                <Link to="/music" className="navbar-link">Music</Link>
                <a href="https://github.com/nickedwards109" className="navbar-link">Github</a>
                <a href="https://linkedin.com/in/nickedwards109" className="navbar-link">LinkedIn</a>
                <div className="gray-line"></div>
              </div>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/music" component={Music} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Layout;
