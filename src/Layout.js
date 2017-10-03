import React, { Component } from 'react';
import './Layout.css';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Routes from './Routes';

class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Layout">
          <div className="Layout-header">
            <h2>Nick Edwards</h2>
          </div>
          <BrowserRouter>
            <div>
              <Navbar />
              <Routes />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
