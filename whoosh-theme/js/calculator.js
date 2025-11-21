// Whoosh Car Finance Calculator

(function() {
    'use strict';

    // Credit rating to APR mapping
    const creditRatingAPR = {
        soaringHigh: 6.9,        // 725+ (Excellent credit)
        lookingBright: 9.9,      // 605-724 (Good credit) 
        onGoodGround: 15.9,      // 520-604 (Fair credit)
        movingOnUp: 19.9,        // 410-519 (Poor credit)
        letsStartClimbing: 24.9  // 0-409 (Bad credit)
    };

    // Initialize calculator when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('calculator-container')) {
            initializeCalculator();
        }
    });

    function initializeCalculator() {
        const loanAmountSlider = document.getElementById('loan-amount');
        const loanTermSelect = document.getElementById('loan-term');
        const creditRatingSelect = document.getElementById('credit-rating');

        if (loanAmountSlider) {
            loanAmountSlider.addEventListener('input', updateCalculations);
        }
        if (loanTermSelect) {
            loanTermSelect.addEventListener('change', updateCalculations);
        }
        if (creditRatingSelect) {
            creditRatingSelect.addEventListener('change', updateCalculations);
        }

        // Initial calculation
        updateCalculations();
        enhanceRangeSlider();
    }

    function updateCalculations() {
        const loanAmount = document.getElementById('loan-amount')?.value || 15000;
        const loanTerm = document.getElementById('loan-term')?.value || '48';
        const creditRating = document.getElementById('credit-rating')?.value || 'onGoodGround';

        const principal = parseFloat(loanAmount);
        const termMonths = parseInt(loanTerm);
        const annualRate = creditRatingAPR[creditRating] / 100;
        const monthlyRate = annualRate / 12;

        // Calculate monthly payment using standard loan formula
        const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                              (Math.pow(1 + monthlyRate, termMonths) - 1);
        
        const totalRepayable = monthlyPayment * termMonths;
        const totalInterest = totalRepayable - principal;

        // Update display elements
        const loanAmountDisplay = document.getElementById('loan-amount-display');
        const monthlyPaymentDisplay = document.getElementById('monthly-payment');
        const totalRepayDisplay = document.getElementById('total-repay');
        const totalInterestDisplay = document.getElementById('total-interest');
        const aprDisplay = document.getElementById('display-apr');
        const paymentTermDisplay = document.getElementById('payment-term');

        if (loanAmountDisplay) {
            loanAmountDisplay.textContent = window.formatCurrency(principal);
            animateUpdate(loanAmountDisplay);
        }

        if (monthlyPaymentDisplay) {
            monthlyPaymentDisplay.textContent = window.formatCurrency(monthlyPayment, 2);
            animateUpdate(monthlyPaymentDisplay);
        }

        if (totalRepayDisplay) {
            totalRepayDisplay.textContent = window.formatCurrency(totalRepayable);
            animateUpdate(totalRepayDisplay);
        }

        if (totalInterestDisplay) {
            totalInterestDisplay.textContent = window.formatCurrency(totalInterest);
            animateUpdate(totalInterestDisplay);
        }

        if (aprDisplay) {
            aprDisplay.textContent = creditRatingAPR[creditRating];
            animateUpdate(aprDisplay);
        }

        if (paymentTermDisplay) {
            paymentTermDisplay.textContent = `per month for ${loanTerm} months`;
        }
    }

    function animateUpdate(element) {
        if (element) {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Global function for apply button
    window.applyForFinance = function() {
        const loanAmount = document.getElementById('loan-amount')?.value || 15000;
        const loanTerm = document.getElementById('loan-term')?.value || '48';
        const creditRating = document.getElementById('credit-rating')?.value || 'onGoodGround';
        
        console.log('Apply for finance clicked:', {
            loanAmount: loanAmount,
            loanTerm: loanTerm,
            creditRating: creditRating
        });

        // Show notification
        alert('🚀 WHOOSH! Thanks for your interest! We\'ll redirect you to our secure application form.');
        
        // In a real implementation, this would redirect to the application form
        // window.location.href = '/apply?amount=' + loanAmount + '&term=' + loanTerm + '&credit=' + creditRating;
    };

    function enhanceRangeSlider() {
        // Add custom styling for range slider
        const style = document.createElement('style');
        style.textContent = `
            input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                background: transparent;
                cursor: pointer;
            }
            input[type="range"]::-webkit-slider-track {
                background: #ddd;
                height: 8px;
                border-radius: 4px;
                border: 1px solid #000;
            }
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                background: hsl(39, 77%, 51%);
                height: 24px;
                width: 24px;
                border-radius: 50%;
                border: 2px solid #000;
                cursor: pointer;
                box-shadow: 2px 2px 0px rgb(0 0 0 / 1);
            }
            input[type="range"]::-moz-range-track {
                background: #ddd;
                height: 8px;
                border-radius: 4px;
                border: 1px solid #000;
            }
            input[type="range"]::-moz-range-thumb {
                background: hsl(39, 77%, 51%);
                height: 20px;
                width: 20px;
                border-radius: 50%;
                border: 2px solid #000;
                cursor: pointer;
                box-shadow: 2px 2px 0px rgb(0 0 0 / 1);
            }
        `;
        document.head.appendChild(style);
    }

})();