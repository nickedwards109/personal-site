import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  // A project has many children (a title, many paragraphs, and many images).
  // Aggregate them into a single data structure, sort them in order, and
  // generate HTML templates to render.
  displayProjects() {
    let projects = this.props.data.map(project => {
      let children = this.generateStackOfChildren(project);
      let sortedChildren = this.sortChildren(children);
      let sortedChildrenTemplates = this.generateChildrenTemplates(sortedChildren);
      return sortedChildrenTemplates;
    });

    return this.generateFinalProjectTemplates(projects);
  }

  // This method aggregates all of the children in one data structure so that
  // they can be sorted according to the order they are intended to be displayed in.
  generateStackOfChildren(project) {
    let projectChildren = [];
    projectChildren.push(project.title)
    project.paragraphs.forEach(paragraph => {
      projectChildren.push(paragraph);
    });
    project.images.forEach(image => {
      projectChildren.push(image);
    });
    return projectChildren;
  }

  // Each child of a project has an order_index indicating where in the sequence
  // of children it should be displayed.
  // This method sorts the children to put them in the correct sequence.
  sortChildren(children) {
    return children.sort(
      function(a, b) {return a.order_index - b.order_index}
    );
  }

  // Make an array containing an HTML template for each child
  generateChildrenTemplates(sortedProjectChildren) {
    return sortedProjectChildren.map(projectChild => {
       if (projectChild.copy) {
         // It is a paragraph
         return <p>{projectChild.copy}</p>
       }
       else if (projectChild.url) {
         // It is an image
         return <img src={projectChild.url} alt="Project" className="full-size"></img>
       }
       else {
         // It is the title
         return <h3>{projectChild}</h3>
       }
    });
  }

  // Make an array containing an HTML template for each project
  generateFinalProjectTemplates(projects) {
    return projects.map(project =>
      <div className="project-container">
        <div className="project-body">
          {project}
        </div>
        <div className="content-divider"></div>
      </div>
    );
  }

  // Render the collection of project templates
  render () {
    return (
      <div>
        <div>{this.displayProjects()}</div>
      </div>
    );
  }
}

export default Projects;
