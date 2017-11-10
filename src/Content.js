import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Content.css';

const Content = (Content) => {
  return props => (
    <div className="content-container">
      <ReactCSSTransitionGroup
        transitionName="Fade"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionLeave={true}
        transitionLeaveTimeout={1000}
      >
        <Content />
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Content;
