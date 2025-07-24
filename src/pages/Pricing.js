import React, { useEffect } from 'react';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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

    // Add animation classes to all elements
    setTimeout(() => {
      // Animate pricing section
      const pricingSection = document.querySelector('.pricing');
      if (pricingSection) {
        pricingSection.classList.add('fade-in');
        observer.observe(pricingSection);
      }

      // Animate all pricing cards with stagger
      document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.classList.add('scale-in', `delay-${(index % 6) + 1}`);
        observer.observe(card);
      });

      // Animate section titles
      document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('fade-in');
        observer.observe(title);
      });

      // Animate feature items alternating left/right
      document.querySelectorAll('.feature-item').forEach((item, index) => {
        if (index % 2 === 0) {
          item.classList.add('fade-in-left');
        } else {
          item.classList.add('fade-in-right');
        }
        item.classList.add(`delay-${(index % 4) + 1}`);
        observer.observe(item);
      });

      // Animate features section
      const featuresSection = document.querySelector('.features');
      if (featuresSection) {
        featuresSection.classList.add('fade-in');
        observer.observe(featuresSection);
      }
    }, 100);

    // Enhanced pricing card interactions
    const handleCardHover = (e) => {
      const card = e.currentTarget;
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(0, 212, 170, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.marginLeft = '-10px';
      ripple.style.marginTop = '-10px';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = '1';
      
      card.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);

      // Enhance icon animation on hover
      const icon = card.querySelector('.plan-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotateY(360deg)';
        icon.style.filter = 'drop-shadow(0 0 20px rgba(0, 212, 170, 0.6))';
      }
    };

    const handleCardLeave = (e) => {
      const icon = e.currentTarget.querySelector('.plan-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotateY(0deg)';
        icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 212, 170, 0.3))';
      }
    };

    // Add event listeners to pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
      card.addEventListener('mouseenter', handleCardHover);
      card.addEventListener('mouseleave', handleCardLeave);
    });

    // Cleanup function
    return () => {
      document.querySelectorAll('.pricing-card').forEach(card => {
        card.removeEventListener('mouseenter', handleCardHover);
        card.removeEventListener('mouseleave', handleCardLeave);
      });
      observer.disconnect();
    };
  }, []);

  const plans = [
    {
      name: "Shield Plan",
      icon: "🛡️",
      badge: { text: "Starter", class: "starter" },
      price: 75,
      features: [
        { icon: "💾", text: "2GB Allocated Memory" },
        { icon: "🗄️", text: "100 CPU (1v Core CPU)" },
        { icon: "⚙️", text: "10GB SSD Storage" }
      ]
    },
    {
      name: "Cookie Plan",
      icon: "🍪",
      price: 95,
      features: [
        { icon: "💾", text: "4GB Allocated Memory" },
        { icon: "🗄️", text: "125 CPU (1.25v Core CPU)" },
        { icon: "⚙️", text: "15GB SSD Storage" }
      ]
    },
    {
      name: "Heart Plan",
      icon: "❤️",
      badge: { text: "Most Popular", class: "popular" },
      price: 150,
      isPopular: true,
      features: [
        { icon: "💾", text: "6GB Allocated Memory" },
        { icon: "🗄️", text: "175 CPU (1.75v Core CPU)" },
        { icon: "⚙️", text: "30GB SSD Storage" }
      ]
    },
    {
      name: "Totem Plan",
      icon: "🗿",
      price: 210,
      features: [
        { icon: "💾", text: "8GB Allocated Memory" },
        { icon: "🗄️", text: "250 CPU (2.50v Core CPU)" },
        { icon: "⚙️", text: "45GB SSD Storage" }
      ]
    },
    {
      name: "Villager Plan",
      icon: "🧑‍🌾",
      price: 300,
      features: [
        { icon: "💾", text: "10GB Allocated Memory" },
        { icon: "🗄️", text: "300 CPU (3v Core CPU)" },
        { icon: "⚙️", text: "55GB SSD Storage" }
      ]
    },
    {
      name: "Diamond Plan",
      icon: "💎",
      badge: { text: "Premium", class: "premium" },
      price: 460,
      features: [
        { icon: "💾", text: "16GB Allocated Memory" },
        { icon: "🗄️", text: "350 CPU (3.5v Core CPU)" },
        { icon: "⚙️", text: "60GB SSD Storage" }
      ]
    },
    {
      name: "Emerald Plan",
      icon: "💚",
      price: 780,
      features: [
        { icon: "💾", text: "32GB Allocated Memory" },
        { icon: "🗄️", text: "625 CPU (6.25v Core CPU)" },
        { icon: "⚙️", text: "150GB SSD Storage" }
      ]
    },
    {
      name: "Bedrock Plan",
      icon: "🪨",
      price: 1200,
      features: [
        { icon: "💾", text: "64GB Allocated Memory" },
        { icon: "🗄️", text: "1000 CPU (10v Core CPU)" },
        { icon: "⚙️", text: "200GB SSD Storage" }
      ]
    },
    {
      name: "Beast Plan",
      icon: "🐉",
      badge: { text: "Ultimate", class: "beast" },
      price: 1700,
      isBeast: true,
      features: [
        { icon: "💾", text: "∞ GB Allocated Memory" },
        { icon: "🗄️", text: "∞ CPU (∞v Core CPU)" },
        { icon: "⚙️", text: "∞ GB SSD Storage" }
      ]
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section - Stable (No animation) */}
      <section className="hero">
        <div className="hero-container">
          <h1>🎮 GoleMNodes Minecraft Hosting Plans</h1>
          <p className="hero-subtitle">☀️ GoleMNodes, Minecraft best performance 24/7 No Lag Hosting with custom Locations - don't forget to review our host!</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.isPopular ? 'popular-plan' : ''} ${plan.isBeast ? 'beast-plan' : ''} ${plan.badge?.class === 'starter' ? 'starter-plan' : ''} ${plan.badge?.class === 'premium' ? 'premium-plan' : ''}`}
              >
                <div className="plan-header">
                  <div className="plan-icon">{plan.icon}</div>
                  <h3>{plan.name}</h3>
                  {plan.badge && (
                    <div className={`plan-badge ${plan.badge.class}`}>
                      {plan.badge.text}
                    </div>
                  )}
                </div>
                
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                
                <ul className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-icon">{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                
                {plan.isBeast && (
                  <div className="minecraft-image">
                    <img src="https://wallpapercave.com/wp/wp2722636.jpg" alt="Minecraft Beast Plan" />
                  </div>
                )}
                
                <a 
                  href="https://discord.gg/u3T3yyy8mj" 
                  className={`plan-button ${plan.isBeast ? 'beast-button' : ''}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {plan.isBeast ? 'Get Ultimate Power' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose GoleMNodes Minecraft Hosting?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>24/7 No Lag</h3>
              <p>Premium performance with zero downtime guarantee</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Custom Locations</h3>
              <p>Choose from multiple server locations worldwide</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>DDoS Protection</h3>
              <p>Enterprise-grade security for your server</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎮</div>
              <h3>Instant Setup</h3>
              <p>Get your server running in seconds</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;