<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php if (get_theme_mod('whoosh_dev_banner', true)): ?>
<div class="development-banner">
    <div class="development-banner-content">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="m12 17 .01 0"/>
        </svg>
        <span>Website still in development</span>
    </div>
</div>
<?php endif; ?>

<header class="site-header">
    <div class="container">
        <div class="main-navigation">
            <div class="site-branding">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    echo '<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">W</div>';
                }
                ?>
                <h1 class="site-title">
                    <a href="<?php echo esc_url(home_url('/')); ?>" style="text-decoration: none; color: inherit;">
                        <?php bloginfo('name'); ?>
                    </a>
                </h1>
            </div>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav" style="display: none;">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                    'fallback_cb'    => 'whoosh_fallback_menu',
                ));
                ?>
            </nav>

            <!-- Desktop User Area -->
            <div class="user-area" style="display: none;">
                <a href="<?php echo home_url('/contact'); ?>" class="btn btn-secondary" style="margin-right: 1rem;">Contact Us</a>
                <a href="<?php echo home_url('/calculator'); ?>" class="btn btn-primary">Get Quote</a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            <!-- Mobile Navigation -->
            <div class="mobile-nav" id="mobileMenu" style="display: none; position: absolute; top: 100%; left: 0; right: 0; background: white; border: 3px solid #000; border-top: none; border-radius: 0 0 12px 12px; padding: 1rem; z-index: 1000;">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'mobile',
                    'menu_class'     => 'mobile-nav-menu',
                    'container'      => false,
                    'fallback_cb'    => 'whoosh_fallback_mobile_menu',
                ));
                ?>
                <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="<?php echo home_url('/contact'); ?>" class="btn btn-secondary">Contact Us</a>
                    <a href="<?php echo home_url('/calculator'); ?>" class="btn btn-primary">Get Quote</a>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
/* Desktop styles */
@media (min-width: 769px) {
    .desktop-nav {
        display: block !important;
    }
    
    .user-area {
        display: flex !important;
        align-items: center;
    }
    
    .mobile-menu-toggle {
        display: none;
    }
}

/* Mobile menu styles */
.mobile-nav-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.mobile-nav-menu a {
    display: block;
    padding: 0.75rem;
    text-decoration: none;
    color: hsl(222.2, 84%, 4.9%);
    font-weight: 500;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.mobile-nav-menu a:hover {
    background-color: hsl(39, 77%, 51%, 0.1);
    color: hsl(39, 77%, 51%);
}
</style>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.style.display = 'none';
    }
});
</script>