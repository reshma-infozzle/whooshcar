// Whoosh Car Finance Theme - Main JavaScript

(function() {
    'use strict';

    // Initialize theme functionality when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScroll();
        initAnimations();
    });

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                toggleMobileMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                    mobileMenu.style.display = 'none';
                }
            });
        }
    }

    // Toggle mobile menu visibility
    window.toggleMobileMenu = function() {
        const menu = document.getElementById('mobileMenu');
        if (menu) {
            menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
        }
    };

    // Smooth scrolling for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Initialize animations and effects
    function initAnimations() {
        // Add hover effects to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add pulse animation to CTA buttons
        const ctaButtons = document.querySelectorAll('.btn-primary');
        ctaButtons.forEach(button => {
            if (!button.classList.contains('animate-pulse')) {
                button.style.animation = 'pulse 2s infinite';
            }
        });
    }

    // Utility function to format currency
    window.formatCurrency = function(amount, decimals = 0) {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(amount);
    };

    // Show loading state
    window.showLoading = function(element) {
        if (element) {
            element.style.opacity = '0.6';
            element.style.pointerEvents = 'none';
        }
    };

    // Hide loading state
    window.hideLoading = function(element) {
        if (element) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        }
    };

})();