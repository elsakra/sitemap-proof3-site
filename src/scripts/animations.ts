import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Hero text animation
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButtons = document.querySelectorAll('.hero-button');
  
  if (heroTitle) {
    animate(heroTitle, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.2 });
  }
  
  if (heroSubtitle) {
    animate(heroSubtitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.4 });
  }
  
  if (heroButtons.length > 0) {
    animate(heroButtons, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: stagger(0.1, { start: 0.6 }) });
  }
  
  // Section reveal animations
  const sections = document.querySelectorAll('.animate-section');
  sections.forEach((section) => {
    inView(section, ({ target }) => {
      animate(target, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8 });
    }, { margin: '-100px' });
  });
  
  // Card stagger animations
  const cardGroups = document.querySelectorAll('.animate-cards');
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll('.card');
    inView(group, () => {
      animate(cards, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.1) });
    }, { margin: '-50px' });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        (navbar as HTMLElement).classList.add('navbar-scrolled');
      } else {
        (navbar as HTMLElement).classList.remove('navbar-scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }
  
  // Button hover animations
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });
  
  // Card hover effects
  const cards = document.querySelectorAll('.card-hover');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(card, { y: -8, scale: 1.02 }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { y: 0, scale: 1 }, { duration: 0.3 });
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    
    if (isOpen) {
      animate(mobileMenu, { opacity: [1, 0], y: [0, -10] }, { duration: 0.2 });
      setTimeout(() => {
        mobileMenu.classList.remove('open');
      }, 200);
    } else {
      mobileMenu.classList.add('open');
      animate(mobileMenu, { opacity: [0, 1], y: [-10, 0] }, { duration: 0.2 });
    }
  });
}

export {};