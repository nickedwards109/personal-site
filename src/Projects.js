import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  displayProjects() {
    // TODO: refactor into single-responsibility methods
    let projects = this.props.data.map(project => {
      let projectChildren = [];
      projectChildren.push(project.title)
      project.paragraphs.forEach(paragraph => {
        projectChildren.push(paragraph);
      });
      project.images.forEach(image => {
        projectChildren.push(image);
      });
      let sortedProjectChildren = projectChildren.sort(
        function(a, b) {return a.order_index - b.order_index}
      );
      let sortedProjectChildrenTemplates = sortedProjectChildren.map(projectChild => {
         if (projectChild.copy) {
           // It is a paragraph
           return <p>{projectChild.copy}</p>
         }
         else if (projectChild.url) {
           // it is an image
           return <img src={projectChild.url} alt="Project" className="full-size"></img>
         }
         else {
           // It is the title
           return <h3>{projectChild}</h3>
         }
      });
      return sortedProjectChildrenTemplates;
    });

    return projects.map(project =>
      <div className="project-container">
        <div className="project-body">
          {project}
        </div>
        <div className="content-divider"></div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div>{this.displayProjects()}</div>
      </div>
    );
  }
}

export default Projects;
