import React, { Component } from 'react';
import DataFormatter from './DataFormatter';

class Projects extends Component {
  // Render the collection of page section templates for the Projects page
  render () {
    return (
      <div>
        <div>{DataFormatter.displayPageSections(this.props.data, 'Projects')}</div>
      </div>
    );
  }
}

export default Projects;
