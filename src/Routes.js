import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Music from './Music';
import Projects from './Projects';
import Content from './Content';
import './Routes.css';

class Routes extends Component {
  render() {
    return (
      <div className="routes-container">
        <Route exact path="/" component={Content(About)} />
        <Route path="/about" component={Content(About)} />
        <Route path="/projects" component={Content(Projects, this.props.content.projects)} />
        <Route path="/music" component={Content(Music)} />
      </div>
    );
  }
}

export default Routes;
