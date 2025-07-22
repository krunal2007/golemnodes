// Interactive Background Tiles - REMOVED CURSOR INTERACTION
function createInteractiveTiles() {
    const bg = document.getElementById('interactive-bg');
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
}

// Mouse movement tile activation - REMOVED TO PREVENT LAG
// document.addEventListener('mousemove', (e) => {
//     const tiles = document.querySelectorAll('.tile');
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     
//     tiles.forEach(tile => {
//         const rect = tile.getBoundingClientRect();
//         const tileX = rect.left + rect.width / 2;
//         const tileY = rect.top + rect.height / 2;
//         const distance = Math.sqrt(Math.pow(mouseX - tileX, 2) + Math.pow(mouseY - tileY, 2));
//         
//         if (distance < 100) {
//             tile.classList.add('active');
//             setTimeout(() => {
//                 tile.classList.remove('active');
//             }, 500);
//         }
//     });
// });

// Initialize tiles
createInteractiveTiles();

// Recreate tiles on window resize
window.addEventListener('resize', () => {
    const bg = document.getElementById('interactive-bg');
    bg.innerHTML = '';
    createInteractiveTiles();
});

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

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px) scale(0.95)';
    section.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(section);
});

// Enhanced feature cards interaction
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateX(10deg) scale(1.03)';
        
        // Create ripple effect
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
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) rotateX(0deg) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Random tile activation for ambient effect
setInterval(() => {
    const tiles = document.querySelectorAll('.tile');
    if (tiles.length > 0) {
        const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
        randomTile.classList.add('active');
        setTimeout(() => {
            randomTile.classList.remove('active');
        }, 300);
    }
}, 2000);

// Benefit items stagger animation
const benefitItems = document.querySelectorAll('.benefit-item');
benefitItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('float-in');
});

// Minecraft features list animation
const minecraftFeatures = document.querySelectorAll('.minecraft-features li');
minecraftFeatures.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('float-in');
});

// Stats counter animation - REMOVED (show direct values)
// const statsItems = document.querySelectorAll('.stat-item h3');
// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const target = entry.target;
//             const finalValue = target.textContent;
//             // Animation code removed - shows direct values
//         }
//     });
// }, { threshold: 0.5 });

// statsItems.forEach(item => {
//     statsObserver.observe(item);
// });

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00d4aa';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random();
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Console log for successful load
console.log('🎮 GoleMNodes website loaded successfully!');