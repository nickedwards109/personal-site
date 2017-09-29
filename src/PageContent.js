import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Music from './Music';
import Projects from './Projects';
import Content from './Content';

class PageContent extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={Content(About)} />
        <Route path="/projects" component={Content(Projects)} />
        <Route path="/music" component={Content(Music)} />
      </div>
    );
  }
}

export default PageContent;
