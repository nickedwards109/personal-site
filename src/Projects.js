import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  // A project has many children (a title, many paragraphs, and many images).
  // Aggregate them into a single data structure, sort them in order, and
  // generate HTML templates to render.
  displayProjects() {
    let projects = this.props.data.map(project => {
      let children = this.generateStackOfProjectChildren(project);
      let sortedChildren = this.sortChildren(children);
      let sortedChildrenTemplates = this.generateProjectChildrenTemplates(sortedChildren);
      return sortedChildrenTemplates;
    });

    return this.generateFinalProjectTemplates(projects);
  }

  // This method aggregates all of the children in one data structure so that
  // they can be sorted according to the order they are intended to be displayed in.
  generateStackOfProjectChildren(project) {
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

  generateStackOfParagraphChildren(paragraph) {
    let paragraphChildren = [];
    paragraph.sentence_groups.forEach(sentenceGroup => {
      paragraphChildren.push(sentenceGroup);
    });
    paragraph.links.forEach(link => {
      paragraphChildren.push(link);
    });
    return paragraphChildren;
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
  generateProjectChildrenTemplates(sortedProjectChildren) {
    return sortedProjectChildren.map(projectChild => {
       if (projectChild.sentence_groups) {
         let paragraph = projectChild;
         // It is a paragraph
         // Sort its children
         let paragraphChildren = this.generateStackOfParagraphChildren(paragraph);
         let sortedSentencesAndLinks = this.sortChildren(paragraphChildren);
         return this.generateParagraphTemplate(sortedSentencesAndLinks);
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

  generateParagraphTemplate(paragraphElements) {
    let templates = paragraphElements.map(element => {
      if (element.copy) {
        // It is a group of sentences
        return <p>{element.copy}</p>
      }
      else if (element.url) {
        // It is a link
        return <a href={element.url}>{element.url}</a>
      }
    });
    return templates;
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
