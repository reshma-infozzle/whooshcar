/**
 * Car Finance Calculator
 */

(function() {
    'use strict';

    // Credit Rating APR Mapping
    const creditRatingAPR = {
        'excellent': 3.9,
        'good': 5.9,
        'fair': 8.9,
        'poor': 12.9,
        'bad': 18.9
    };

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeCalculator();
    });

    /**
     * Initialize Calculator
     */
    function initializeCalculator() {
        const calculator = document.getElementById('finance-calculator');
        if (!calculator) return;

        const loanAmountSlider = document.getElementById('loan-amount');
        const loanAmountDisplay = document.getElementById('loan-amount-display');
        const loanTermSelect = document.getElementById('loan-term');
        const creditRatingSelect = document.getElementById('credit-rating');
        
        const monthlyPaymentDisplay = document.getElementById('monthly-payment');
        const totalRepayableDisplay = document.getElementById('total-repayable');
        const totalInterestDisplay = document.getElementById('total-interest');

        if (!loanAmountSlider || !loanAmountDisplay || !loanTermSelect || 
            !creditRatingSelect || !monthlyPaymentDisplay || 
            !totalRepayableDisplay || !totalInterestDisplay) {
            console.warn('Calculator elements not found');
            return;
        }

        // Event listeners
        loanAmountSlider.addEventListener('input', debounce(updateCalculations, 100));
        loanTermSelect.addEventListener('change', updateCalculations);
        creditRatingSelect.addEventListener('change', updateCalculations);

        // Initial calculation
        updateCalculations();

        /**
         * Update Calculations
         */
        function updateCalculations() {
            const loanAmount = parseFloat(loanAmountSlider.value);
            const loanTerm = parseInt(loanTermSelect.value);
            const creditRating = creditRatingSelect.value;
            const apr = creditRatingAPR[creditRating];

            // Update loan amount display
            loanAmountDisplay.textContent = loanAmount.toLocaleString();

            // Calculate monthly payment using standard loan formula
            const monthlyRate = apr / 100 / 12;
            const numberOfPayments = loanTerm;
            
            let monthlyPayment;
            if (monthlyRate === 0) {
                monthlyPayment = loanAmount / numberOfPayments;
            } else {
                monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            }

            const totalRepayable = monthlyPayment * numberOfPayments;
            const totalInterest = totalRepayable - loanAmount;

            // Update displays
            monthlyPaymentDisplay.textContent = formatCurrency(monthlyPayment);
            totalRepayableDisplay.textContent = formatCurrency(totalRepayable);
            totalInterestDisplay.textContent = formatCurrency(totalInterest);

            // Add visual feedback for calculation update
            animateUpdate(monthlyPaymentDisplay);
            animateUpdate(totalRepayableDisplay);
            animateUpdate(totalInterestDisplay);
        }

        /**
         * Animate Update
         */
        function animateUpdate(element) {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease-out';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }

    /**
     * Apply for Finance
     */
    window.applyForFinance = function() {
        const calculator = document.getElementById('finance-calculator');
        if (!calculator) return;

        const loanAmount = document.getElementById('loan-amount').value;
        const loanTerm = document.getElementById('loan-term').value;
        const creditRating = document.getElementById('credit-rating').value;
        const monthlyPayment = document.getElementById('monthly-payment').textContent;

        // Log application details
        console.log('Finance Application:', {
            loanAmount: parseInt(loanAmount),
            loanTerm: parseInt(loanTerm),
            creditRating: creditRating,
            monthlyPayment: monthlyPayment
        });

        // Show notification
        if (window.showNotification) {
            window.showNotification(
                'Redirecting to application form with your calculated quote...', 
                'info'
            );
        }

        // Redirect to application page (you can customize this URL)
        setTimeout(() => {
            const applicationUrl = '/apply/?' + 
                'amount=' + encodeURIComponent(loanAmount) + 
                '&term=' + encodeURIComponent(loanTerm) + 
                '&credit=' + encodeURIComponent(creditRating) + 
                '&payment=' + encodeURIComponent(monthlyPayment);
            
            window.location.href = applicationUrl;
        }, 1500);
    };

    /**
     * Enhanced Range Slider Styling
     */
    function enhanceRangeSlider() {
        const sliders = document.querySelectorAll('input[type="range"]');
        
        sliders.forEach(slider => {
            // Create custom styling for WebKit browsers
            const style = document.createElement('style');
            style.textContent = `
                input[type="range"] {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                    cursor: pointer;
                }

                input[type="range"]::-webkit-slider-track {
                    background: #f0f0f0;
                    height: 8px;
                    border-radius: 4px;
                    border: 2px solid black;
                }

                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    background: hsl(var(--primary));
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    border: 3px solid black;
                    cursor: pointer;
                    box-shadow: 2px 2px 0px rgba(0,0,0,1);
                }

                input[type="range"]::-moz-range-track {
                    background: #f0f0f0;
                    height: 8px;
                    border-radius: 4px;
                    border: 2px solid black;
                }

                input[type="range"]::-moz-range-thumb {
                    background: hsl(var(--primary));
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    border: 3px solid black;
                    cursor: pointer;
                    box-shadow: 2px 2px 0px rgba(0,0,0,1);
                }
            `;
            
            if (!document.querySelector('#range-slider-styles')) {
                style.id = 'range-slider-styles';
                document.head.appendChild(style);
            }
        });
    }

    // Initialize range slider styling when DOM is ready
    document.addEventListener('DOMContentLoaded', enhanceRangeSlider);

})();