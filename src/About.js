import React, { Component } from 'react';

class About extends Component {
  // A page section has many children (a title, many paragraphs, and many images).
  // Aggregate them into a single data structure, sort them in order, and
  // generate HTML templates to render.
  displayAboutPageSections() {
    // When the component is first mounted, props will not have data in it
    // because the API won't have responded yet. Once the API responds, state
    // will be set in the top-level component and passed down as props. If there
    // isn't yet any data in props, don't try to make templates for the UI.
    if (this.props.data.length !== 0) {
      let aboutPage = this.props.data.find(page => {
        return page.title === "About";
      });
      let sections = aboutPage.sections.map(section => {
        let children = this.generateStackOfChildren(section);
        let sortedChildren = this.sortChildren(children);
        let sortedChildrenTemplates = this.generateSectionChildrenTemplates(sortedChildren);
        if (section.alignment === "center") {
          // A section whose display is aligned on the center doesn't need any
          // further processing beyond sorting the children in order and putting
          // them in templates. This page section is ready to display.
          return sortedChildrenTemplates;
        }
        else {
          // A section whose display is not aligned on the center needs to have
          // its title separated from the rest of the paragraphs and images. The
          // title would be displayed in the center, and the paragraphs and images
          // would be ordered in a stack and placed with a specified number
          // of elements on the left side and the remaining elements on the
          // right side.
          let leftTemplate = this.generateLeftTemplate(sortedChildrenTemplates, section);
          let rightTemplate = this.generateRightTemplate(sortedChildrenTemplates, section);
          let combinedLeftAndRightTemplates = this.combine(leftTemplate, rightTemplate);
          let aboutTemplateWithTitle = this.addTitle(combinedLeftAndRightTemplates, section);
          return aboutTemplateWithTitle;
        }
      });

      return this.generateFinalAboutTemplates(sections);
    }
  }

  // This method aggregates all of the children in one data structure so that
  // they can be sorted according to the order they are intended to be displayed in.
  generateStackOfChildren(section) {
    let sectionChildren = [];
    sectionChildren.push(section.title)
    section.paragraphs.forEach(paragraph => {
      sectionChildren.push(paragraph);
    });
    section.images.forEach(image => {
      sectionChildren.push(image);
    });
    return sectionChildren;
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

  // Each child of a section has an order_index indicating where in the sequence
  // of children it should be displayed.
  // This method sorts the children to put them in the correct sequence.
  sortChildren(children) {
    return children.sort(
      function(a, b) {return a.order_index - b.order_index}
    );
  }

  // Make an array containing an HTML template for each child
  generateSectionChildrenTemplates(sortedChildren) {
    return sortedChildren.map(child => {
       if (child.sentence_groups) {
         let paragraph = child;
         // It is a paragraph
         // Sort its children
         let paragraphChildren = this.generateStackOfParagraphChildren(paragraph);
         let sortedSentencesAndLinks = this.sortChildren(paragraphChildren);
         return this.generateParagraphTemplate(sortedSentencesAndLinks);
       }
       else if (child.url) {
         // It is an image
         return <img src={child.url} alt="About" className="image"></img>
       }
       else {
         // It is the title
         return <h3>{child}</h3>
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

  generateLeftTemplate(sortedChildrenTemplates, section) {
    return <div className="about-copy-left">
             {sortedChildrenTemplates.slice(1, section.number_of_left_aligned_elements + 1)}
           </div>;
  }

  generateRightTemplate(sortedChildrenTemplates, section) {
    return <div className="about-copy-right">
             {sortedChildrenTemplates.slice(section.number_of_left_aligned_elements + 1, sortedChildrenTemplates.length)}
           </div>;
  }

  combine(leftTemplate, rightTemplate) {
    return <div className="split-container">
             {leftTemplate}
             {rightTemplate}
           </div>
  }

  addTitle(combinedLeftAndRightTemplates, section) {
    let title = section.title;
    return <div>
             <h3>{title}</h3>
             <div>{combinedLeftAndRightTemplates}</div>
           </div>
  }

  // Make an array containing an HTML template for each section of the page
  generateFinalAboutTemplates(sections) {
    return sections.map(section =>
      <div className="about-container">
        <div className="about-body">
          {section}
        </div>
        <div className="content-divider"></div>
      </div>
    );
  }

  // Render the collection of about page section templates
  render () {
    return (
      <div>
        <div>{this.displayAboutPageSections()}</div>
      </div>
    );
  }
}

export default About;
