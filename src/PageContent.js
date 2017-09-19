import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Music from './Music';
import Projects from './Projects';

class PageContent extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/music" component={Music} />
      </div>
    );
  }
}

export default PageContent;
