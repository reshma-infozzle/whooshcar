<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <div class="hero-panel">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 2rem; text-align: center;">
                    <!-- Main Content -->
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <h1 class="hero-title">
                            <span class="text-primary">WHOOSH!</span> 
                            <span class="text-secondary">Fast Car Finance</span>
                        </h1>
                        
                        <p class="hero-description">
                            Lightning-fast car finance that moves at your speed! Compare deals instantly, get approved in a breeze.
                        </p>

                        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                            <a href="<?php echo home_url('/calculator'); ?>" class="btn btn-primary btn-xl animate-pulse">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M8 2v4"/>
                                    <path d="M16 2v4"/>
                                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                                    <path d="M3 10h18"/>
                                </svg>
                                WHOOSH ME A QUOTE!
                            </a>
                        </div>

                        <!-- Trust badges -->
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                            <div class="trust-badge trust-badge-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                                <span>FCA Regulated!</span>
                            </div>
                            <div class="trust-badge trust-badge-secondary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span>2-Minute App!</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hero Image -->
                    <div style="flex: 1; display: flex; justify-content: center; max-width: 500px;">
                        <?php $hero_image = get_theme_mod('whoosh_hero_image'); ?>
                        <?php if ($hero_image): ?>
                            <img src="<?php echo esc_url($hero_image); ?>" alt="Comic style couple in blue Mercedes convertible with WHOOSH text and sparkles" class="hero-image">
                        <?php else: ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/images/hero-comic-car.jpg" alt="Comic style couple in blue Mercedes convertible with WHOOSH text and sparkles" class="hero-image">
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Us Section -->
<section class="content-section halftone-dots-yellow">
    <div class="container">
        <div class="comic-panel bg-white p-8">
            <h2 class="section-title">
                Who Are <span class="text-primary">Whoosh?</span>
            </h2>

            <p style="text-align: center; max-width: 600px; margin: 0 auto 3rem; font-size: 1.125rem; color: rgba(0, 0, 0, 0.7);">
                We make car finance simple, fast, and fair. Here's why thousands choose us every month!
            </p>

            <!-- Benefits Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="gap: 2rem; margin-bottom: 3rem;">
                <!-- 2-Minute Application -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">2-Minute Application</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">Quick and easy online application with instant decision in most cases</p>
                </div>

                <!-- FCA Regulated -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(24, 70%, 56%)" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">FCA Regulated</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">Fully regulated by the Financial Conduct Authority for your peace of mind</p>
                </div>

                <!-- Best Rates -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(210, 70%, 58%)" stroke-width="2">
                            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">Best Rates Guaranteed</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">We compare 20+ lenders to find you the most competitive rates available</p>
                </div>

                <!-- All Credit Welcome -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">All Credit Welcome</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">Good, bad, or no credit history - we work with specialist lenders for everyone</p>
                </div>

                <!-- Amazing Customer Service -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(24, 70%, 56%)" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">Amazing Customer Service</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">Dedicated support team available 7 days a week to guide you through every step</p>
                </div>

                <!-- No Hidden Fees -->
                <div class="card text-center">
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(210, 70%, 58%)" stroke-width="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                    </div>
                    <h3 class="font-comic text-xl mb-2">No Hidden Fees</h3>
                    <p style="color: rgba(0, 0, 0, 0.7);">Transparent pricing with no arrangement fees, early repayment charges, or surprises</p>
                </div>
            </div>

            <!-- Values Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3" style="gap: 2rem; margin-bottom: 2rem;">
                <!-- Manchester Heritage -->
                <div class="comic-panel bg-primary p-6 text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="margin: 0 auto 1rem;">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <h3 class="font-comic text-lg mb-2">Born in Manchester</h3>
                    <p style="color: rgba(0, 0, 0, 0.8); font-size: 0.9rem;">
                        Proudly founded in the heart of Manchester, we understand what hardworking people need from their car finance.
                    </p>
                </div>

                <!-- Customer Focus -->
                <div class="comic-panel bg-secondary p-6 text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="margin: 0 auto 1rem;">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <h3 class="font-comic text-lg mb-2">Your Best Interest</h3>
                    <p style="color: rgba(0, 0, 0, 0.8); font-size: 0.9rem;">
                        We're not just another broker - we genuinely care about finding you the right deal, not the most profitable one for us.
                    </p>
                </div>

                <!-- Community Trust -->
                <div class="comic-panel bg-accent p-6 text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="margin: 0 auto 1rem;">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <h3 class="font-comic text-lg mb-2">Built on Trust</h3>
                    <p style="color: rgba(0, 0, 0, 0.8); font-size: 0.9rem;">
                        Every recommendation we make is based on what's truly best for you and your family's financial future.
                    </p>
                </div>
            </div>

            <!-- Bottom message -->
            <div style="text-align: center;">
                <p style="font-size: 1.125rem; color: rgba(0, 0, 0, 0.9); max-width: 600px; margin: 0 auto;">
                    When you choose <span class="font-comic text-primary">WHOOSH!</span>, you're choosing a team that puts your needs first, 
                    backed by Manchester values and genuine care for your financial wellbeing.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Finance Calculator Section -->
<section class="content-section">
    <div class="container">
        <h2 class="section-title">
            How much can you afford to spend on a car?
        </h2>
        <p style="text-align: center; max-width: 600px; margin: 0 auto 3rem; font-size: 1.125rem; color: rgba(0, 0, 0, 0.7);">
            Use our interactive calculator to find your perfect monthly payment
        </p>

        <div id="calculator-container" class="grid grid-cols-1 lg:grid-cols-2" style="gap: 2rem; max-width: 1200px; margin: 0 auto;">
            <!-- Calculator Controls -->
            <div class="comic-panel bg-white p-8">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                        <rect x="4" y="2" width="16" height="20" rx="2"/>
                        <line x1="8" y1="6" x2="16" y2="6"/>
                        <line x1="8" y1="10" x2="16" y2="10"/>
                        <line x1="8" y1="14" x2="16" y2="14"/>
                        <line x1="8" y1="18" x2="16" y2="18"/>
                    </svg>
                    <h2 class="font-comic" style="font-size: 2rem; margin: 0;">
                        <span class="text-primary">ZAP!</span> Car Finance Calculator
                    </h2>
                </div>

                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <!-- Loan Amount -->
                    <div>
                        <label class="form-label font-comic" style="font-size: 1.25rem; margin-bottom: 1rem;">
                            How much do you want to borrow? <span class="text-primary">WHOOSH!</span>
                        </label>
                        <div class="comic-panel" style="background: hsl(39, 77%, 51%, 0.1); padding: 1rem; margin-bottom: 1rem;">
                            <div style="text-align: center; margin-bottom: 1rem;">
                                <span id="loan-amount-display" class="font-comic" style="font-size: 2rem;">£15,000</span>
                            </div>
                            <input type="range" id="loan-amount" min="3000" max="50000" value="15000" step="500" 
                                   style="width: 100%; height: 8px; border-radius: 5px; background: #ddd; outline: none;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: rgba(0, 0, 0, 0.6); margin-top: 0.5rem;">
                                <span>£3,000</span>
                                <span>£50,000</span>
                            </div>
                        </div>
                    </div>

                    <!-- Loan Term -->
                    <div>
                        <label class="form-label font-comic" style="font-size: 1.25rem; margin-bottom: 1rem;">
                            How long do you want to pay it back? <span class="text-secondary">POW!</span>
                        </label>
                        <select id="loan-term" class="form-select font-body" style="font-size: 1.125rem;">
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
                        <label class="form-label font-comic" style="font-size: 1.25rem; margin-bottom: 1rem;">
                            What's your credit rating like? <span class="text-primary">BAM!</span>
                        </label>
                        <select id="credit-rating" class="form-select font-body" style="font-size: 1.125rem;">
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
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <!-- Monthly Payment -->
                <div class="card" style="border: 4px solid #000;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                        </svg>
                        <h3 class="font-comic" style="font-size: 1.5rem; margin: 0;">
                            <span class="text-primary">WHOOSH!</span> Monthly Payment
                        </h3>
                    </div>
                    <div style="text-align: center;">
                        <div id="monthly-payment" class="font-comic" style="font-size: 3rem; margin-bottom: 0.5rem;">£375.50</div>
                        <p style="font-size: 1.125rem; color: rgba(0, 0, 0, 0.7);" id="payment-term">per month for 48 months</p>
                    </div>
                </div>

                <!-- Key Details -->
                <div class="grid grid-cols-2" style="gap: 1rem;">
                    <div class="card" style="background: hsl(210, 70%, 58%, 0.1); text-align: center;">
                        <div class="font-comic" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Total to Repay</div>
                        <div id="total-repay" class="font-comic" style="font-size: 1.5rem;">£18,024</div>
                    </div>
                    
                    <div class="card" style="background: hsl(39, 77%, 51%, 0.1); text-align: center;">
                        <div class="font-comic" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Total Interest</div>
                        <div id="total-interest" class="font-comic" style="font-size: 1.5rem;">£3,024</div>
                    </div>
                </div>

                <!-- APR Info -->
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        <span class="font-comic" style="font-size: 1.125rem;">Estimated APR: <span id="display-apr">15.9</span>%</span>
                    </div>
                    <p style="font-size: 0.875rem; color: rgba(0, 0, 0, 0.7);">
                        This is an estimate based on your credit rating. Actual rates may vary.
                    </p>
                </div>

                <!-- Get Quote Button -->
                <div class="comic-panel text-center" style="background: hsl(39, 77%, 51%, 0.2); padding: 2rem;">
                    <h3 class="font-comic" style="font-size: 1.5rem; margin-bottom: 1rem;">
                        Ready to <span class="text-primary">SUPERCHARGE</span> Your Journey?
                    </h3>
                    <button onclick="applyForFinance()" class="btn btn-primary btn-lg animate-pulse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8 2v4"/>
                            <path d="M16 2v4"/>
                            <rect width="18" height="18" x="3" y="4" rx="2"/>
                            <path d="M3 10h18"/>
                        </svg>
                        GET MY WHOOSH QUOTE NOW!
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="content-section halftone-dots-yellow">
    <div class="container">
        <h2 class="section-title">How WHOOSH Works!</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; font-size: 1.125rem; color: rgba(0, 0, 0, 0.7);">
            Getting your car finance has never been easier! Follow these simple steps to drive away in your dream car and start whooshing around town.
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4" style="gap: 2rem; max-width: 1200px; margin: 0 auto 3rem;">
            <!-- Step 1 -->
            <div class="card text-center" style="transition: all 0.3s ease;">
                <div class="comic-panel bg-primary" style="width: 60px; height: 60px; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                    <span class="font-comic" style="font-size: 1.5rem;">1</span>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                </div>
                <h3 class="font-comic text-xl mb-2">Apply Online</h3>
                <p style="color: rgba(0, 0, 0, 0.7); font-size: 0.875rem; display: none;" class="desktop-description">
                    Complete our simple 2-minute application form with basic details about yourself and your car requirements.
                </p>
            </div>

            <!-- Step 2 -->
            <div class="card text-center" style="transition: all 0.3s ease;">
                <div class="comic-panel bg-secondary" style="width: 60px; height: 60px; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                    <span class="font-comic" style="font-size: 1.5rem;">2</span>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(210, 70%, 58%)" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                    </svg>
                </div>
                <h3 class="font-comic text-xl mb-2">We Search & Compare</h3>
                <p style="color: rgba(0, 0, 0, 0.7); font-size: 0.875rem; display: none;" class="desktop-description">
                    Our smart technology searches across many lenders to find the best deals matching your profile and credit score.
                </p>
            </div>

            <!-- Step 3 -->
            <div class="card text-center" style="transition: all 0.3s ease;">
                <div class="comic-panel bg-accent" style="width: 60px; height: 60px; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                    <span class="font-comic" style="font-size: 1.5rem;">3</span>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(24, 70%, 56%)" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                </div>
                <h3 class="font-comic text-xl mb-2">Choose Your Deal</h3>
                <p style="color: rgba(0, 0, 0, 0.7); font-size: 0.875rem; display: none;" class="desktop-description">
                    Review personalized quotes with clear terms, monthly payments, and APR rates. No hidden surprises.
                </p>
            </div>

            <!-- Step 4 -->
            <div class="card text-center" style="transition: all 0.3s ease;">
                <div class="comic-panel bg-primary" style="width: 60px; height: 60px; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                    <span class="font-comic" style="font-size: 1.5rem;">4</span>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(39, 77%, 51%)" stroke-width="2">
                        <path d="M8 2v4"/>
                        <path d="M16 2v4"/>
                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                        <path d="M3 10h18"/>
                    </svg>
                </div>
                <h3 class="font-comic text-xl mb-2">Get Your Car</h3>
                <p style="color: rgba(0, 0, 0, 0.7); font-size: 0.875rem; display: none;" class="desktop-description">
                    Once approved, collect your car from any FCA regulated dealer or have it delivered to your door. Drive away happy!
                </p>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="comic-panel text-center bg-primary p-8">
            <h3 class="font-comic" style="font-size: 2rem; margin-bottom: 1rem;">
                Ready to Get Started?
            </h3>
            <p style="font-size: 1.125rem; margin-bottom: 2rem; color: rgba(0, 0, 0, 0.8);">
                Join thousands of happy customers and get your car finance sorted today!
            </p>
            <a href="<?php echo home_url('/calculator'); ?>" class="btn btn-secondary btn-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 2v4"/>
                    <path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                </svg>
                Start My WHOOSH Journey!
            </a>
        </div>
    </div>
</section>

<style>
@media (min-width: 1024px) {
    .desktop-description {
        display: block !important;
    }
}

@media (max-width: 1023px) {
    .grid-cols-2.lg\:grid-cols-4 .card:nth-child(n+3) {
        margin-top: 1rem;
    }
}
</style>

<?php get_footer(); ?>