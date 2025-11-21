<?php
/**
 * Template Name: Car Finance
 * Description: Car finance options and information page
 */

get_header(); ?>

<main style="padding-top: 120px;">
    <!-- Hero Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                    Car <span class="text-primary">FINANCE</span>
                </h1>
                <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Find the perfect car finance deal with rates from 3.9% APR. 
                    Compare deals from 30+ lenders and get approved in minutes.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/calculator" class="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                        📊 Calculate Payments
                    </a>
                    <a href="/contact" class="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                        🚗 Apply Now
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Finance Types Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-2 sm:px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                Choose Your <span class="text-primary">Finance Type</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <!-- Hire Purchase -->
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Hire Purchase (HP)</h3>
                    <p class="text-muted-foreground text-center mb-6">Spread the cost with fixed monthly payments, and own the car outright at the end.</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Own the car at the end</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Fixed monthly payments</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">No mileage restrictions</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Simple and straightforward</span>
                        </li>
                    </ul>
                </div>

                <!-- PCP -->
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Personal Contract Purchase (PCP)</h3>
                    <p class="text-muted-foreground text-center mb-6">Lower monthly payments with the option to buy, return, or exchange your car at the end.</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Lower monthly payments</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Flexible end options</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Mileage allowance</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Optional final payment</span>
                        </li>
                    </ul>
                </div>

                <!-- Personal Loan -->
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Personal Loan</h3>
                    <p class="text-muted-foreground text-center mb-6">Borrow money to buy your car outright, then pay back in fixed monthly installments.</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Immediate ownership</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">No restrictions</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Competitive rates</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Flexible terms</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/30">
        <div class="container mx-auto px-2 sm:px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                Why Choose Our <span class="text-primary">Car Finance?</span>
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div class="text-center">
                    <div class="comic-panel bg-background p-4 sm:p-6 mb-3 sm:mb-4">
                        <div class="text-4xl text-primary mb-4">🛡️</div>
                        <h3 class="font-comic font-bold text-base sm:text-lg mb-2">FCA Regulated</h3>
                        <p class="text-muted-foreground text-sm sm:text-sm">We're fully regulated by the Financial Conduct Authority for your protection.</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="comic-panel bg-background p-4 sm:p-6 mb-3 sm:mb-4">
                        <div class="text-4xl text-primary mb-4">💰</div>
                        <h3 class="font-comic font-bold text-base sm:text-lg mb-2">Competitive Rates</h3>
                        <p class="text-muted-foreground text-sm sm:text-sm">Access to exclusive rates from 3.9% APR through our network of lenders.</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="comic-panel bg-background p-4 sm:p-6 mb-3 sm:mb-4">
                        <div class="text-4xl text-primary mb-4">⏰</div>
                        <h3 class="font-comic font-bold text-base sm:text-lg mb-2">Quick Decisions</h3>
                        <p class="text-muted-foreground text-sm sm:text-sm">Get a decision in minutes and funding within 24 hours of acceptance.</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="comic-panel bg-background p-4 sm:p-6 mb-3 sm:mb-4">
                        <div class="text-4xl text-primary mb-4">📊</div>
                        <h3 class="font-comic font-bold text-base sm:text-lg mb-2">Flexible Terms</h3>
                        <p class="text-muted-foreground text-sm sm:text-sm">Choose from 12 to 84 months repayment terms to suit your budget.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Rates Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-2 sm:px-4">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                    Representative <span class="text-primary">Rates</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                    <div class="text-center comic-panel bg-primary/5 p-4 sm:p-6 md:p-8">
                        <div class="text-3xl sm:text-4xl font-comic font-black text-primary mb-2">3.9%</div>
                        <div class="text-base sm:text-lg font-semibold text-foreground">Representative APR</div>
                        <div class="text-muted-foreground mt-2 text-sm sm:text-base">For customers with excellent credit</div>
                    </div>
                    <div class="text-center comic-panel bg-secondary/5 p-4 sm:p-6 md:p-8">
                        <div class="text-3xl sm:text-4xl font-comic font-black text-secondary mb-2">£0</div>
                        <div class="text-base sm:text-lg font-semibold text-foreground">Application Fee</div>
                        <div class="text-muted-foreground mt-2 text-sm sm:text-base">No upfront costs or hidden charges</div>
                    </div>
                    <div class="text-center comic-panel bg-accent/5 p-4 sm:p-6 md:p-8">
                        <div class="text-3xl sm:text-4xl font-comic font-black text-accent mb-2">84</div>
                        <div class="text-base sm:text-lg font-semibold text-foreground">Max Term (Months)</div>
                        <div class="text-muted-foreground mt-2 text-sm sm:text-base">Flexible repayment periods</div>
                    </div>
                </div>
                
                <div class="text-center text-xs sm:text-sm text-muted-foreground px-2">
                    <p class="mb-2">
                        Representative example: Borrowing £10,000 over 48 months with a representative APR of 3.9%, 
                        you would make 48 monthly payments of £226.58. Total amount payable £10,876.
                    </p>
                    <p>
                        The rate you'll be offered will depend on your personal circumstances and credit history. 
                        Terms and conditions apply.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div class="container mx-auto px-2 sm:px-4 text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic font-black mb-4 sm:mb-6 px-2">
                Ready to Finance Your Car?
            </h2>
            <p class="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
                Get a personalised quote in just 2 minutes without affecting your credit score.
            </p>
            <a href="/calculator" class="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                📊 Get Your Quote
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>