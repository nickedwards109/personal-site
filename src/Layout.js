import React, { Component } from 'react';
import './Layout.css';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';
import axios from 'axios';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: []}
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let httpClient = axios.create();
    httpClient.get('http://localhost:3000/api/v1/projects').then((response) => {
      this.setState({ projects: response.data });
    });
  }

  render() {
    return (
      <div className="Layout">
        <Header />
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes content={this.state}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
