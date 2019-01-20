import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Content.css';

const Content = (Component, data) => {
  return props => (
    <div className="content-container">
      <ReactCSSTransitionGroup
        transitionName="Fade"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionLeave={true}
        transitionLeaveTimeout={1000}
      >
        <Component data={data}/>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Content;
