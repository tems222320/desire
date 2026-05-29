// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navButtons = navLinks?.querySelectorAll('a');

// Initialize mobile menu
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    
    if (!toggle || !links) return;
    
    // Toggle menu on button click
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        links.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu when link is clicked
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            links.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

// Initialize menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// Active Navigation Highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Reveal Animation Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: stop observing after revealed
            // revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

// Add reveal class and observe elements
document.querySelectorAll('.section, .hero-copy, .hero-panel, .project-card, .skill-card, .contact-card, .stat-card').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerOffset = 96;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Interactive Card Hover Effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const videoUrl = this.getAttribute('data-video');
        if (videoUrl && videoUrl !== '#') {
            openVideoModal(videoUrl);
        }
    });
});

// Video Modal Functions
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    if (!videoUrl || videoUrl === '#') {
        alert('Video URL not configured');
        return;
    }
    
    // Set video source
    video.src = videoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Ensure video plays with a small delay for rendering
    setTimeout(() => {
        video.play().catch(err => {
            console.log('Video playback error:', err);
        });
    }, 100);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.classList.remove('active');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = '';
}

// Modal close button
document.getElementById('videoModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

document.querySelector('.modal-close')?.addEventListener('click', closeVideoModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('videoModal')?.classList.contains('active')) {
        closeVideoModal();
    }
});

// Skills Card Animation on Hover
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 28px 90px rgba(15, 23, 42, 0.12)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(18px)';
        navbar.style.boxShadow = '0 28px 90px rgba(15, 23, 42, 0.08)';
    }
});

// Stat Counter Animation
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card strong');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const element = entry.target;
                const finalValue = element.textContent;
                element.dataset.animated = 'true';
                
                // Extract number and unit
                const match = finalValue.match(/(\d+)(.*)/);
                if (match) {
                    const number = parseInt(match[1]);
                    const unit = match[2];
                    let current = 0;
                    const increment = Math.ceil(number / 30);
                    
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            element.textContent = number + unit;
                            clearInterval(interval);
                        } else {
                            element.textContent = current + unit;
                        }
                    }, 30);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => counterObserver.observe(card));
}

// Call counter animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateCounters);
} else {
    animateCounters();
}

// Form mailto enhancement
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow default behavior but can add tracking here
        console.log('Email link clicked:', this.href);
    });
});

// Prevent body scroll when mobile menu is open
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Listen for mobile menu toggle
document.addEventListener('click', (e) => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        if (navToggle.classList.contains('active') || navLinks.classList.contains('active')) {
            toggleBodyScroll(true);
        } else {
            toggleBodyScroll(false);
        }
    }
});

// Also listen on window resize to ensure proper state
window.addEventListener('resize', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth > 720 && navLinks) {
        navLinks.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        toggleBodyScroll(false);
    }
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        toggleBodyScroll(false);
    }
});

console.log('🚀 SiteSavvy portfolio is now interactive!');
