import React, { Component } from 'react';
import './Layout.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import PageContent from './PageContent';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout-header">
          <h2>Nick Edwards</h2>
        </div>
        <BrowserRouter>
          <div>
            <Navbar />
            <PageContent />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
