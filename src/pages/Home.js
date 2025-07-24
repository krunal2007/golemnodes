import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const interactiveBgRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Interactive Background Tiles
    const createInteractiveTiles = () => {
      const bg = interactiveBgRef.current;
      if (!bg) return;
      
      const tilesX = Math.ceil(window.innerWidth / 50);
      const tilesY = Math.ceil(window.innerHeight / 50);
      
      for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
          const tile = document.createElement('div');
          tile.className = 'tile';
          tile.style.left = x * 50 + 'px';
          tile.style.top = y * 50 + 'px';
          bg.appendChild(tile);
        }
      }
    };

    // Random tile activation for ambient effect
    const randomTileActivation = setInterval(() => {
      const tiles = document.querySelectorAll('.tile');
      if (tiles.length > 0) {
        const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
        randomTile.classList.add('active');
        setTimeout(() => {
          randomTile.classList.remove('active');
        }, 300);
      }
    }, 2000);

    // Scroll reveal animation for all elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Add scroll animations to all sections and cards
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .scale-in'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Initialize tiles
    createInteractiveTiles();

    // Cleanup function
    return () => {
      clearInterval(randomTileActivation);
      if (interactiveBgRef.current) {
        interactiveBgRef.current.innerHTML = '';
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-page">
      {/* Interactive Background */}
      <div className="interactive-bg" ref={interactiveBgRef}></div>

      {/* Hero Section - This should show first */}
      <section className="hero" id="home">
        <div className="hero-container">
          <h1>GoleMNodes - #1 Ranked Game Server Hosting Provider</h1>
          <p className="hero-subtitle">Experience Unbeatable Performance with Premium Game Server Hosting</p>
          <div className="cta-buttons">
            <a href="https://discord.gg/u3T3yyy8mj" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join Discord</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features fade-in" id="services">
        <div className="container">
          <h2 className="section-title fade-in">Why Choose GoleMNodes?</h2>
          <div className="features-grid">
            <div className="feature-card fade-in scale-in fade-in-delay-1">
              <div className="feature-icon">⚡</div>
              <h3>NVME SSD Storage</h3>
              <p>All our Servers Come with Fast & Latest Raid 1 NVME SSD Storage Drives for maximum performance and lightning-fast loading times.</p>
            </div>
            <div className="feature-card fade-in scale-in fade-in-delay-2">
              <div className="feature-icon">🛡️</div>
              <h3>DDOS Protection</h3>
              <p>All GoleMNodes Servers with Advanced DDOS Protection. Keeping your servers up 24/7 with enterprise-grade security.</p>
            </div>
            <div className="feature-card fade-in scale-in fade-in-delay-3">
              <div className="feature-icon">🚀</div>
              <h3>Instant Setup</h3>
              <p>Your Ordered Server/Service will be setup in seconds after payment, truly rapid deployment for immediate gaming experience.</p>
            </div>
            <div className="feature-card fade-in scale-in fade-in-delay-4">
              <div className="feature-icon">⭐</div>
              <h3>5.0/5 Rating</h3>
              <p>We maintain a perfect 5.0/5 rating, making us the most trusted and reliable game server hosting solution available.</p>
            </div>
            <div className="feature-card fade-in scale-in fade-in-delay-5">
              <div className="feature-icon">🔧</div>
              <h3>High Performance</h3>
              <p>Our Servers are Equipped with High Performance Intel & AMD Processors including Intel I9/Ryzen9 for optimal gaming performance.</p>
            </div>
            <div className="feature-card fade-in scale-in fade-in-delay-6">
              <div className="feature-icon">🎧</div>
              <h3>24/7 Support</h3>
              <p>GoleMNodes ensures Customer Satisfaction by providing lightning-fast Support 24/7 with expert technical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits fade-in">
        <div className="container">
          <div className="benefits-content fade-in">
            <h2 className="section-title fade-in">Benefits of being a GoleMNodes Customer</h2>
            <div className="benefits-list">
              <div className="benefit-item fade-in-left fade-in-delay-1">
                <h4>Premium Storage</h4>
                <p>All our Servers Come with Fast & Latest Raid 1 NVME SSD Storage Drives for unmatched performance.</p>
              </div>
              <div className="benefit-item fade-in-left fade-in-delay-2">
                <h4>Advanced Protection</h4>
                <p>All GoleMNodes Servers with enterprise-grade DDOS Protection. Keeping your servers online 24/7.</p>
              </div>
              <div className="benefit-item fade-in-left fade-in-delay-3">
                <h4>Lightning Setup</h4>
                <p>Your Ordered Server/Service will be setup in seconds after payment, truly instant deployment.</p>
              </div>
              <div className="benefit-item fade-in-right fade-in-delay-1">
                <h4>Perfect Rating</h4>
                <p>We maintain a 5.0/5 rating, making us the most trusted game server hosting solution.</p>
              </div>
              <div className="benefit-item fade-in-right fade-in-delay-2">
                <h4>Ultimate Performance</h4>
                <p>Our Servers feature High Performance Intel & AMD Processors including Intel I9/Ryzen9 CPUs.</p>
              </div>
              <div className="benefit-item fade-in-right fade-in-delay-3">
                <h4>Discord-Based Service</h4>
                <p>We provide all our server hosting services directly through our Discord server for instant support and easy management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minecraft Section */}
      <section className="minecraft-section fade-in">
        <div className="container">
          <div className="minecraft-content">
            <div className="minecraft-text fade-in-left">
              <h2>Minecraft Hosting</h2>
              <p>Anyone can create their own Minecraft server easily. Change server configuration, switch server versions (Vanilla, Snapshot, Modpacks, Paper, Forge, Mohist, Spigot, etc.), modify server settings or install plugins and mods whenever you want with our premium Minecraft hosting.</p>
              <p>Your Minecraft server hosted by GoleMNodes comes with exclusive TOP-tier features and unmatched performance!</p>
              <p>Choose from our multiple locations with ultra-low ping and blazing-fast network connections.</p>
            </div>
            <div className="minecraft-features fade-in-right">
              <h3>Minecraft Server Features</h3>
              <ul>
                <li>One-click server creation and management</li>
                <li>Support for all server versions and modpacks</li>
                <li>Easy plugin and mod installation</li>
                <li>Custom server configurations</li>
                <li>Multiple global locations available</li>
                <li>Ultra-low latency connections</li>
                <li>Instant server version switching</li>
                <li>Real-time server monitoring</li>
                <li>Automatic backups and restoration</li>
                <li>Advanced control panel access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats fade-in">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item scale-in fade-in-delay-1">
              <h3>99%</h3>
              <p>Uptime</p>
            </div>
            <div className="stat-item scale-in fade-in-delay-2">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
            <div className="stat-item rating-item scale-in fade-in-delay-3">
              <h3>5.0/5</h3>
              <p>Rating</p>
            </div>
            <div className="stat-item scale-in fade-in-delay-4">
              <h3>∞</h3>
              <p>Gaming Possibilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;