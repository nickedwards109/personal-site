import React, { Component } from 'react';
import './Layout.css';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
