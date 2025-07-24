import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">GoleMNodes</div>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><a href="https://discord.gg/u3T3yyy8mj" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;