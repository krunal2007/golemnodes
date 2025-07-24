// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
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

// Apply fade-in animation to pricing cards
document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Apply fade-in animation to feature items
document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Enhanced pricing card interactions
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
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
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
        
        // Enhance icon animation on hover
        const icon = this.querySelector('.plan-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotateY(360deg)';
            icon.style.filter = 'drop-shadow(0 0 20px rgba(0, 212, 170, 0.6))';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.plan-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotateY(0deg)';
            icon.style.filter = 'drop-shadow(0 0 10px rgba(0, 212, 170, 0.3))';
        }
    });
});

// Add ripple animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Price hover effect with number animation
document.querySelectorAll('.plan-price').forEach(priceElement => {
    const amount = priceElement.querySelector('.amount');
    const originalPrice = amount.textContent;
    
    priceElement.addEventListener('mouseenter', function() {
        // Add pulsing effect to price
        amount.style.animation = 'priceGlow 1s ease-in-out infinite';
    });
    
    priceElement.addEventListener('mouseleave', function() {
        amount.style.animation = 'none';
    });
});

// Add price glow animation
const priceStyle = document.createElement('style');
priceStyle.textContent = `
    @keyframes priceGlow {
        0%, 100% { 
            color: #00d4aa;
            text-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
            transform: scale(1);
        }
        50% { 
            color: #4ecdc4;
            text-shadow: 0 0 20px rgba(0, 212, 170, 0.8);
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(priceStyle);

// Special effects for Beast plan
const beastPlan = document.querySelector('.beast-plan');
if (beastPlan) {
    // Add special particle effect for beast plan
    function createBeastParticles() {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = '#FFD700';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random();
            particle.style.animation = `beastParticle ${2 + Math.random() * 3}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            beastPlan.appendChild(particle);
        }
    }
    
    // Add beast particle animation
    const beastStyle = document.createElement('style');
    beastStyle.textContent = `
        @keyframes beastParticle {
            0%, 100% { 
                transform: translateY(0px) scale(1);
                opacity: 0;
            }
            50% { 
                transform: translateY(-20px) scale(1.5);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(beastStyle);
    
    // Create particles on hover
    beastPlan.addEventListener('mouseenter', createBeastParticles);
    
    // Remove particles on leave
    beastPlan.addEventListener('mouseleave', function() {
        const particles = this.querySelectorAll('div[style*="beastParticle"]');
        particles.forEach(particle => {
            if (particle.style.animation.includes('beastParticle')) {
                particle.remove();
            }
        });
    });
}

// Button click effects
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create click effect
        const clickEffect = document.createElement('div');
        clickEffect.style.position = 'absolute';
        clickEffect.style.left = e.offsetX + 'px';
        clickEffect.style.top = e.offsetY + 'px';
        clickEffect.style.width = '0';
        clickEffect.style.height = '0';
        clickEffect.style.borderRadius = '50%';
        clickEffect.style.background = 'rgba(255, 255, 255, 0.5)';
        clickEffect.style.transform = 'translate(-50%, -50%)';
        clickEffect.style.animation = 'clickWave 0.6s ease-out';
        clickEffect.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.appendChild(clickEffect);
        
        setTimeout(() => {
            if (clickEffect.parentNode) {
                clickEffect.remove();
            }
        }, 600);
    });
});

// Add click wave animation
const clickStyle = document.createElement('style');
clickStyle.textContent = `
    @keyframes clickWave {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickStyle);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add floating effect to popular badge
const popularBadge = document.querySelector('.plan-badge.popular');
if (popularBadge) {
    setInterval(() => {
        popularBadge.style.transform = 'translateY(-2px) scale(1.05)';
        setTimeout(() => {
            popularBadge.style.transform = 'translateY(0) scale(1)';
        }, 1000);
    }, 3000);
}

// Console log for successful load
console.log('💎 GoleMNodes Pricing Page loaded successfully!');
console.log('🎮 All interactive features initialized!');

// Add special glow effect to premium plans
document.querySelectorAll('.premium-plan, .beast-plan').forEach(plan => {
    setInterval(() => {
        plan.style.boxShadow = '0 0 30px rgba(0, 212, 170, 0.3)';
        setTimeout(() => {
            plan.style.boxShadow = 'none';
        }, 2000);
    }, 5000);
});