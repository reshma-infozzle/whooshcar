<?php
/**
 * Template Name: Finance Calculator
 * Description: Car finance calculator page with interactive functionality
 */

get_header(); ?>

<main style="padding-top: 120px;">
    <!-- Hero Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-2 sm:px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-3xl sm:text-4xl md:text-6xl font-comic font-black text-foreground mb-4 sm:mb-6 px-2">
                    <span class="text-primary">CALCULATE</span> Your Car Finance <span class="text-secondary">POWER!</span>
                </h1>
                <p class="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                    Use our superhero calculator to discover your monthly payments and total costs! 
                    Get instant results and see exactly what you can afford.
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                    <button onclick="document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })" 
                            class="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-primary/90 transition-colors">
                        📊 Start Calculating
                    </button>
                    <a href="/contact" class="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-secondary/90 transition-colors">
                        🚗 Apply Now
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Calculator Section -->
    <section id="calculator" class="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div class="container mx-auto px-2 sm:px-4">
            <div class="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                <!-- Calculator Controls -->
                <div class="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
                    <div class="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                        <span class="text-primary text-4xl">📊</span>
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-comic text-black">
                            <span class="text-primary">ZAP!</span> Car Finance Calculator
                        </h2>
                    </div>

                    <div class="space-y-6 sm:space-y-8">
                        <!-- Loan Amount -->
                        <div>
                            <label class="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                                How much do you want to borrow? <span class="text-primary">WHOOSH!</span>
                            </label>
                            <div class="comic-panel bg-primary/10 p-3 sm:p-4 border-2 border-black mb-4">
                                <div class="text-center mb-3 sm:mb-4">
                                    <span id="loan-amount-display" class="text-2xl sm:text-3xl font-comic text-black">£15,000</span>
                                </div>
                                <input type="range" id="loan-amount" min="3000" max="50000" step="500" value="15000" 
                                       class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                                <div class="flex justify-between text-sm text-black/60 mt-2">
                                    <span>£3,000</span>
                                    <span>£50,000</span>
                                </div>
                            </div>
                        </div>

                        <!-- Loan Term -->
                        <div>
                            <label class="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                                How long do you want to pay it back? <span class="text-secondary">POW!</span>
                            </label>
                            <select id="loan-term" class="comic-panel border-2 border-black text-lg font-body w-full p-3 rounded">
                                <option value="24">24 months (2 years)</option>
                                <option value="36">36 months (3 years)</option>
                                <option value="48" selected>48 months (4 years)</option>
                                <option value="60">60 months (5 years)</option>
                                <option value="72">72 months (6 years)</option>
                                <option value="84">84 months (7 years)</option>
                            </select>
                        </div>

                        <!-- Credit Rating -->
                        <div>
                            <label class="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                                What's your credit rating like? <span class="text-primary">BAM!</span>
                            </label>
                            <select id="credit-rating" class="comic-panel border-2 border-black text-lg font-body w-full p-3 rounded">
                                <option value="soaringHigh">Soaring High (725+)</option>
                                <option value="lookingBright">Looking Bright (605-724)</option>
                                <option value="onGoodGround" selected>On Good Ground (520-604)</option>
                                <option value="movingOnUp">Moving On Up (410-519)</option>
                                <option value="letsStartClimbing">Let's Start Climbing (0-409)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Results -->
                <div class="space-y-4 sm:space-y-6">
                    <!-- Monthly Payment -->
                    <div class="comic-panel border-2 sm:border-4 border-black shadow-comic-lg bg-white/95 p-4 sm:p-6">
                        <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                            <span class="text-primary text-2xl">📈</span>
                            <h3 class="text-lg sm:text-xl md:text-2xl font-comic text-black">
                                <span class="text-primary">WHOOSH!</span> Monthly Payment
                            </h3>
                        </div>
                        <div class="text-center">
                            <div id="monthly-payment" class="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-2">
                                £375.50
                            </div>
                            <p id="payment-term" class="text-base sm:text-lg text-black/70 font-body">per month for 48 months</p>
                        </div>
                    </div>

                    <!-- Key Details -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div class="comic-panel border-2 border-black bg-secondary/10 p-3 sm:p-4 text-center">
                            <div class="text-lg sm:text-xl font-comic text-black mb-1">Total to Repay</div>
                            <div id="total-repayable" class="text-xl sm:text-2xl font-comic text-black">£18,024</div>
                        </div>
                        
                        <div class="comic-panel border-2 border-black bg-primary/10 p-3 sm:p-4 text-center">
                            <div class="text-lg sm:text-xl font-comic text-black mb-1">Total Interest</div>
                            <div id="total-interest" class="text-xl sm:text-2xl font-comic text-black">£3,024</div>
                        </div>
                    </div>

                    <!-- APR Info -->
                    <div class="comic-panel border-2 border-black bg-white/95 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-primary">ℹ️</span>
                            <span id="apr-display" class="text-lg font-comic text-black">Estimated APR: 15.9%</span>
                        </div>
                        <p class="text-sm text-black/70 font-body">
                            This is an estimate based on your credit rating. Actual rates may vary.
                        </p>
                    </div>

                    <!-- Get Quote Button -->
                    <div class="comic-panel bg-primary/20 p-4 sm:p-6 border-2 sm:border-4 border-black shadow-comic-lg text-center">
                        <h3 class="text-lg sm:text-xl md:text-2xl font-comic text-black mb-3 sm:mb-4">
                            Ready to <span class="text-primary">SUPERCHARGE</span> Your Journey?
                        </h3>
                        <button onclick="applyForFinance()" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-base sm:text-lg md:text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                            🚗 GET MY WHOOSH QUOTE NOW!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Representative Example -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-2 sm:px-4">
            <div class="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg max-w-4xl mx-auto">
                <div class="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <span class="text-primary text-2xl">⚡</span>
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-comic text-black">
                        <span class="text-secondary">BAM!</span> Representative Example
                    </h2>
                </div>
                
                <div class="bg-primary/10 p-4 sm:p-6 border-2 border-black rounded-lg">
                    <p class="font-body text-black text-base sm:text-lg leading-relaxed">
                        <strong>Representative Example:</strong> Borrowing £15,000 over 48 months with a representative APR of 15.9%, 
                        you would make 48 monthly payments of £375.50. The total amount repayable would be £18,024, 
                        with a total cost of credit of £3,024.
                    </p>
                    
                    <div class="mt-4 pt-4 border-t border-black/20">
                        <p class="text-sm text-black/70 font-body">
                            <strong>WHOOSH Car Finance</strong> is a trading name. We are authorised and regulated by the Financial Conduct Authority. 
                            All finance is subject to status, terms and conditions apply. We act as a credit broker, not a lender. 
                            We work with a panel of lenders and may receive commission for successful introductions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});
</script>

<?php get_footer(); ?>