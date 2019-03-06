import React, { Component } from 'react';
import DataFormatter from './DataFormatter';

class About extends Component {
  // Render the collection of page section templates for the About page
  render () {
    return (
      <div>
        <div>{DataFormatter.displayPageSections(this.props.data, 'About')}</div>
      </div>
    );
  }
}

export default About;
