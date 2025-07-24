import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GoleMNodes</h3>
            <p>GoleMNodes features its own advanced Game Panel. Our Panel is Extremely Modern, Lightning-Fast, Fully Responsive and packed with Features to meet All Your Gaming Needs. Join our Discord to get started!</p>
            <p style={{ marginTop: '15px' }}>
              <a 
                href="https://discord.gg/u3T3yyy8mj" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#00d4aa', fontWeight: '600' }}
              >
                🎮 Join our Discord Server
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <p><a href="#services">Game Server Hosting</a></p>
            <p><Link to="/pricing">Minecraft Hosting</Link></p>
            <p><a href="#services">Discord Bot Hosting</a></p>
            <p><a href="#services">Web Hosting</a></p>
          </div>
          <div className="footer-section">
            <h3>Get Started</h3>
            <p><a href="https://discord.gg/u3T3yyy8mj" target="_blank" rel="noopener noreferrer">Discord Server</a></p>
            <p><a href="#support">Server Setup Guide</a></p>
            <p><a href="#support">Payment Methods</a></p>
            <p><a href="#support">Server Locations</a></p>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <p><Link to="/">About GoleMNodes</Link></p>
            <p><a href="#terms">Terms of Service</a></p>
            <p><a href="#privacy">Privacy Policy</a></p>
            <p><a href="#refund">Refund Policy</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GoleMNodes. All rights reserved. Gaming redefined!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;