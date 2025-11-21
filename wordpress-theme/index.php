<?php get_header(); ?>

<main id="main-content">
    <?php if (is_home() || is_front_page()): ?>
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <div class="comic-panel" style="background: rgba(255, 255, 255, 0.95); padding: 2rem; margin-top: 2rem;">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title">
                                <span class="primary-text">WHOOSH!</span> 
                                <span class="secondary-text">Fast Car Finance</span>
                            </h1>
                            
                            <p class="hero-description">
                                Lightning-fast car finance that moves at your speed! Compare deals instantly, get approved in a breeze.
                            </p>

                            <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                                <a href="<?php echo esc_url(get_permalink(get_page_by_path('calculator'))); ?>" class="btn btn-primary btn-xl animate-pulse">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10V6l-2-2H8l-2 2v4l-2.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/>
                                        <path d="M7 17v5c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-5"/>
                                        <path d="M9 6h6"/>
                                        <path d="M9 10h6"/>
                                    </svg>
                                    WHOOSH ME A QUOTE!
                                </a>
                            </div>

                            <!-- Trust badges -->
                            <div class="trust-badges">
                                <div class="trust-badge primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                    <span>FCA Regulated!</span>
                                </div>
                                <div class="trust-badge secondary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12,6 12,12 16,14"/>
                                    </svg>
                                    <span>2-Minute App!</span>
                                </div>
                            </div>
                        </div>

                        <div class="hero-image">
                            <?php 
                            $hero_image = get_theme_mod('whoosh_hero_image', get_template_directory_uri() . '/assets/hero-image.jpg');
                            ?>
                            <div class="comic-panel" style="overflow: hidden; background: white; padding: 0.75rem;">
                                <img src="<?php echo esc_url($hero_image); ?>" alt="Comic style couple in blue Mercedes convertible with WHOOSH text and sparkles" style="width: 100%; height: auto; border-radius: 0.5rem;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section class="content-section" id="about">
            <div class="container">
                <h2 class="section-title">Why Choose WHOOSH! Car Finance?</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="card">
                        <h3 class="card-title">Lightning Fast Applications</h3>
                        <div class="card-content">
                            <p>Our streamlined process means you can get pre-approved in just 2 minutes! No lengthy paperwork or waiting around.</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Compare Multiple Lenders</h3>
                        <div class="card-content">
                            <p>We work with over 30+ trusted lenders to find you the best deal. One application, multiple offers!</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Bad Credit? No Problem!</h3>
                        <div class="card-content">
                            <p>Even if you've been refused elsewhere, we specialize in helping people with poor credit history get approved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Finance Calculator Section -->
        <section class="content-section" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05));">
            <div class="container">
                <h2 class="section-title">Car Finance Calculator</h2>
                
                <div class="comic-panel" style="max-width: 800px; margin: 0 auto; background: white;">
                    <div id="finance-calculator">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                            <div class="form-group">
                                <label for="loan-amount" class="form-label">Loan Amount: £<span id="loan-amount-display">15000</span></label>
                                <input type="range" id="loan-amount" min="1000" max="50000" step="500" value="15000" class="form-input" style="height: 2.5rem;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: rgba(0,0,0,0.6);">
                                    <span>£1,000</span>
                                    <span>£50,000</span>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="loan-term" class="form-label">Loan Term</label>
                                <select id="loan-term" class="form-select">
                                    <option value="12">12 months</option>
                                    <option value="24">24 months</option>
                                    <option value="36" selected>36 months</option>
                                    <option value="48">48 months</option>
                                    <option value="60">60 months</option>
                                    <option value="72">72 months</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="credit-rating" class="form-label">Credit Rating</label>
                                <select id="credit-rating" class="form-select">
                                    <option value="excellent">Excellent (750+)</option>
                                    <option value="good" selected>Good (700-749)</option>
                                    <option value="fair">Fair (650-699)</option>
                                    <option value="poor">Poor (600-649)</option>
                                    <option value="bad">Bad Credit (Below 600)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                            <div class="card" style="text-align: center; background: hsl(var(--primary)); margin: 0;">
                                <div class="card-title" style="color: black;">Monthly Payment</div>
                                <div id="monthly-payment" style="font-size: 2rem; font-weight: bold; color: black;">£425</div>
                            </div>
                            
                            <div class="card" style="text-align: center; background: hsl(var(--secondary)); margin: 0;">
                                <div class="card-title" style="color: black;">Total Repayable</div>
                                <div id="total-repayable" style="font-size: 2rem; font-weight: bold; color: black;">£15,300</div>
                            </div>
                            
                            <div class="card" style="text-align: center; background: hsl(var(--accent)); margin: 0;">
                                <div class="card-title" style="color: black;">Total Interest</div>
                                <div id="total-interest" style="font-size: 2rem; font-weight: bold; color: black;">£300</div>
                            </div>
                        </div>
                        
                        <div style="text-align: center;">
                            <a href="<?php echo esc_url(get_permalink(get_page_by_path('apply'))); ?>" class="btn btn-primary btn-xl">
                                Apply for This Deal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="content-section">
            <div class="container">
                <h2 class="section-title">How WHOOSH! Works</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                    <div class="card" style="text-align: center;">
                        <div style="width: 4rem; height: 4rem; background: hsl(var(--primary)); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bangers', cursive; font-size: 1.5rem; color: black;">1</div>
                        <h3 class="card-title">Apply Online</h3>
                        <div class="card-content">
                            <p>Fill out our quick 2-minute application form with your basic details and finance requirements.</p>
                        </div>
                    </div>
                    
                    <div class="card" style="text-align: center;">
                        <div style="width: 4rem; height: 4rem; background: hsl(var(--secondary)); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bangers', cursive; font-size: 1.5rem; color: black;">2</div>
                        <h3 class="card-title">Get Matched</h3>
                        <div class="card-content">
                            <p>Our smart system matches you with the best lenders from our panel of 30+ trusted partners.</p>
                        </div>
                    </div>
                    
                    <div class="card" style="text-align: center;">
                        <div style="width: 4rem; height: 4rem; background: hsl(var(--accent)); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bangers', cursive; font-size: 1.5rem; color: black;">3</div>
                        <h3 class="card-title">Choose Your Deal</h3>
                        <div class="card-content">
                            <p>Compare offers and choose the best deal for you. Then WHOOSH! - you're ready to buy your car!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <?php else: ?>
        <!-- Regular WordPress content for other pages -->
        <div class="container content-section">
            <?php if (have_posts()): ?>
                <?php while (have_posts()): the_post(); ?>
                    <article class="card">
                        <h1 class="card-title"><?php the_title(); ?></h1>
                        <div class="card-content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php else: ?>
                <div class="card">
                    <h1 class="card-title">No Content Found</h1>
                    <div class="card-content">
                        <p>Sorry, no content was found for this page.</p>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>