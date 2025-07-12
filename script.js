// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initFAQ();
    initSmoothScrolling();
    initAnimations();
    initParallax();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations and effects
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .workflow-step, .screenshot-card, .faq-item, .whitepaper-section');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Glitch effect for hero background
    const glitchOverlay = document.querySelector('.glitch-overlay');
    if (glitchOverlay) {
        setInterval(() => {
            glitchOverlay.style.opacity = Math.random() * 0.2;
        }, 2000);
    }
}

// Parallax effect for hero section
function initParallax() {
    const heroBackground = document.querySelector('.mesh-animation');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// CTA button interaction
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
                
                // Show "coming soon" message
                const originalText = this.querySelector('.button-text').textContent;
                this.querySelector('.button-text').textContent = 'Coming Soon...';
                
                setTimeout(() => {
                    this.querySelector('.button-text').textContent = originalText;
                }, 2000);
            }
        });
    }
});

// Mobile navigation styles are now in CSS file

// Performance optimization: Lazy load images and heavy content
function lazyLoadContent() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadContent);

// Add some terminal-style console logging for fun
console.log(`
%c🪐 Bitchat Landing Page Loaded
%c
%cWelcome to the decentralized future of messaging!
%cBuilt with ❤️ for privacy advocates and mesh network enthusiasts.

%cKey Features:
%c• Bluetooth LE Mesh Networking
%c• End-to-End Encryption
%c• Offline Communication
%c• Privacy-First Design

%cReady to chat without the internet? Literally.
`,
'color: #39FF14; font-size: 20px; font-weight: bold; font-family: "Space Grotesk", monospace;',
'',
'color: #00ffff; font-size: 14px; font-family: "Space Grotesk", monospace;',
'',
'color: #39FF14; font-size: 16px; font-weight: bold; font-family: "Space Grotesk", monospace;',
'color: #ffffff; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #00ffff; font-size: 16px; font-weight: bold; font-family: "Space Grotesk", monospace;'
); 