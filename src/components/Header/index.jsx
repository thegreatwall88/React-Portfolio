
import React from 'react';
import Nav from '../Nav';
import './style.css';
import headerImage from '../../assets/portfolio-background-header.jpg';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <h1>Khoi Mai</h1>
      <Nav />
    </header>
  );
}

export default Header;
