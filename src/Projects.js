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
      if (project.alignment === "center") {
        // A project whose display is aligned on the center doesn't need any
        // further processing beyond sorting the children in order and putting
        // them in templates. This project is ready to display.
        return sortedChildrenTemplates;
      }
      else {
        // A project whose display is not aligned on the center needs to have
        // its title separated from the rest of the paragraphs and images, and
        // the paragraphs and
        let leftTemplate = this.generateLeftTemplate(sortedChildrenTemplates, project);
        let rightTemplate = this.generateRightTemplate(sortedChildrenTemplates, project);
        let combinedLeftAndRightTemplates = this.combine(leftTemplate, rightTemplate);
        let projectTemplateWithTitle = this.addTitle(combinedLeftAndRightTemplates, project);
        return projectTemplateWithTitle;
      }
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
         return <img src={projectChild.url} alt="Project" className="image"></img>
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
        return <span>{element.copy}</span>
      }
      else if (element.url) {
        // It is a link
        return <span> <a className="external-link" href={element.url}>{element.url}</a> </span>
      }
    });
    return <p>{templates}</p>;
  }

  generateLeftTemplate(sortedChildrenTemplates, project) {
    return <div className="project-copy-left">
             {sortedChildrenTemplates.slice(1, project.number_of_left_aligned_elements + 1)}
           </div>;
  }

  generateRightTemplate(sortedChildrenTemplates, project) {
    return <div className="project-copy-right">
             {sortedChildrenTemplates.slice(project.number_of_left_aligned_elements + 1, sortedChildrenTemplates.length)}
           </div>;
  }

  combine(leftTemplate, rightTemplate) {
    return <div className="split-container">
             {leftTemplate}
             {rightTemplate}
           </div>
  }

  addTitle(combinedLeftAndRightTemplates, project) {
    let title = project.title;
    return <div>
             <h3>{title}</h3>
             <div>{combinedLeftAndRightTemplates}</div>
           </div>
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
