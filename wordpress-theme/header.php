<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header class="site-header">
        <div class="header-container">
            <!-- Logo and Site Title -->
            <div class="site-logo">
                <?php if (has_custom_logo()): ?>
                    <?php the_custom_logo(); ?>
                <?php else: ?>
                    <div class="logo-img" style="background: hsl(var(--primary)); display: flex; align-items: center; justify-content: center; font-family: 'Bangers', cursive; font-size: 1.5rem; color: black;">W</div>
                <?php endif; ?>
                <div>
                    <h1 class="site-title">
                        <a href="<?php echo esc_url(home_url('/')); ?>" style="text-decoration: none; color: inherit;">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>
                </div>
            </div>

            <!-- Desktop Navigation -->
            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu',
                    'container' => false,
                    'fallback_cb' => 'whoosh_fallback_menu',
                ));
                ?>
            </nav>

            <!-- Desktop User Area -->
            <div class="user-area" style="display: none;">
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                        Contact Us
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('calculator'))); ?>" class="btn btn-primary" style="padding: 0.5rem 1rem;">
                        Get Quote
                    </a>
                </div>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu" style="display: none; background: white; border-top: 3px solid black; padding: 1rem;">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'mobile',
                'menu_class' => 'mobile-nav-menu',
                'container' => false,
                'fallback_cb' => 'whoosh_fallback_mobile_menu',
            ));
            ?>
            
            <div style="margin-top: 1rem; display: flex; flex-col; gap: 0.5rem;">
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="btn btn-secondary" style="text-align: center;">
                    Contact Us
                </a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('calculator'))); ?>" class="btn btn-primary" style="text-align: center;">
                    Get Quote
                </a>
            </div>
        </div>
    </header>

    <style>
    @media (min-width: 768px) {
        .user-area {
            display: block !important;
        }
    }

    .mobile-nav-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .mobile-nav-menu li {
        margin-bottom: 0.5rem;
    }

    .mobile-nav-menu a {
        display: block;
        padding: 0.75rem 1rem;
        color: black;
        text-decoration: none;
        font-weight: 600;
        border: 2px solid transparent;
        border-radius: 0.5rem;
        transition: var(--transition-smooth);
    }

    .mobile-nav-menu a:hover {
        background: hsl(var(--primary));
        border-color: black;
    }
    </style>

    <script>
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.style.display === 'none') {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (!mobileMenu.contains(event.target) && !toggle.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });
    </script>