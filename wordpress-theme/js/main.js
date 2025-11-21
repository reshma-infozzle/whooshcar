/**
 * Whoosh Car Finance Theme - Main JavaScript
 */

(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        
        // Initialize mobile menu
        initializeMobileMenu();
        
        // Initialize smooth scrolling
        initializeSmoothScrolling();
        
        // Initialize animations
        initializeAnimations();
        
        // Initialize form handling
        initializeFormHandling();
        
    });

    /**
     * Mobile Menu Functionality
     */
    function initializeMobileMenu() {
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (toggleButton && mobileMenu) {
            toggleButton.addEventListener('click', function(e) {
                e.preventDefault();
                toggleMobileMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
                    mobileMenu.style.display = 'none';
                }
            });

            // Close menu when pressing escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                }
            });
        }
    }

    /**
     * Toggle Mobile Menu
     */
    window.toggleMobileMenu = function() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
                mobileMenu.style.display = 'block';
            } else {
                mobileMenu.style.display = 'none';
            }
        }
    };

    /**
     * Smooth Scrolling for Anchor Links
     */
    function initializeSmoothScrolling() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerOffset = 100; // Account for fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Initialize Animations
     */
    function initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe elements with animation class
        const animatedElements = document.querySelectorAll('.card, .trust-badge, .hero-image');
        animatedElements.forEach(function(element) {
            observer.observe(element);
        });

        // Add CSS for fade-in animation
        if (!document.querySelector('#whoosh-animations')) {
            const style = document.createElement('style');
            style.id = 'whoosh-animations';
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                .card,
                .trust-badge,
                .hero-image {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Form Handling
     */
    function initializeFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                // Add basic form validation
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(function(field) {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                        
                        // Remove error class on input
                        field.addEventListener('input', function() {
                            this.classList.remove('error');
                        });
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    showNotification('Please fill in all required fields.', 'error');
                }
            });
        });
        
        // Add error styling
        if (!document.querySelector('#whoosh-form-styles')) {
            const style = document.createElement('style');
            style.id = 'whoosh-form-styles';
            style.textContent = `
                .form-input.error,
                .form-select.error,
                .form-textarea.error {
                    border-color: hsl(var(--destructive)) !important;
                    box-shadow: 0 0 0 2px hsl(var(--destructive) / 0.2);
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Show Notification
     */
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.whoosh-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'whoosh-notification whoosh-notification-' + type;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: type === 'error' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            border: '3px solid black',
            boxShadow: '4px 4px 0px rgba(0,0,0,1)',
            zIndex: '9999',
            fontWeight: '600',
            fontFamily: '"Poppins", sans-serif',
            animation: 'slideInRight 0.3s ease-out'
        });
        
        // Add animation styles if not already added
        if (!document.querySelector('#whoosh-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'whoosh-notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(function() {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
        
        // Click to dismiss
        notification.addEventListener('click', function() {
            this.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 300);
        });
    }

    /**
     * Utility Functions
     */
    
    // Format currency
    window.formatCurrency = function(amount) {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Format currency with decimals
    window.formatCurrencyDecimal = function(amount) {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    // Debounce function
    window.debounce = function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Make showNotification globally available
    window.showNotification = showNotification;

})();