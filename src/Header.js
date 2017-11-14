import React, { Component } from 'react';
import './Header.css';
import avatar from './img/avatar.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h2>Nick Edwards</h2>
        <img src={avatar} alt="Avatar" className="avatar"/>
      </div>
    )
  }
}

export default Header;
