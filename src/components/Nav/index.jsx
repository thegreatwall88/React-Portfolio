import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
