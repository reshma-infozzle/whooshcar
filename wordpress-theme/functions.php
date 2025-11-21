<?php
/**
 * Whoosh Car Finance Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function whoosh_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('custom-background');
    add_theme_support('custom-header');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'whoosh'),
        'mobile' => __('Mobile Menu', 'whoosh'),
        'footer-quick' => __('Footer Quick Links', 'whoosh'),
        'footer-services' => __('Footer Services', 'whoosh'),
        'footer-legal' => __('Footer Legal Links', 'whoosh'),
    ));
}
add_action('after_setup_theme', 'whoosh_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function whoosh_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('whoosh-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style(
        'whoosh-fonts',
        'https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&family=Poppins:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );
    
    // Enqueue main JavaScript
    wp_enqueue_script('whoosh-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
    
    // Enqueue calculator script on calculator page
    if (is_page('calculator') || is_front_page()) {
        wp_enqueue_script('whoosh-calculator', get_template_directory_uri() . '/js/calculator.js', array(), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'whoosh_scripts');

/**
 * Fallback menu functions
 */
function whoosh_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '" class="nav-link">Home</a></li>';
    echo '<li><a href="' . esc_url(home_url('/how-it-works/')) . '" class="nav-link">How It Works</a></li>';
    echo '<li><a href="' . esc_url(home_url('/calculator/')) . '" class="nav-link">Calculator</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '" class="nav-link">About Us</a></li>';
    echo '<li><a href="' . esc_url(home_url('/faq/')) . '" class="nav-link">FAQ</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '" class="nav-link">Contact</a></li>';
    echo '</ul>';
}

function whoosh_fallback_mobile_menu() {
    echo '<ul class="mobile-nav-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
    echo '<li><a href="' . esc_url(home_url('/how-it-works/')) . '">How It Works</a></li>';
    echo '<li><a href="' . esc_url(home_url('/calculator/')) . '">Calculator</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '">About Us</a></li>';
    echo '<li><a href="' . esc_url(home_url('/faq/')) . '">FAQ</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '">Contact</a></li>';
    echo '</ul>';
}

function whoosh_fallback_footer_menu() {
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . esc_url(home_url('/how-it-works/')) . '" class="footer-link">How It Works</a></li>';
    echo '<li><a href="' . esc_url(home_url('/calculator/')) . '" class="footer-link">Calculator</a></li>';
    echo '<li><a href="' . esc_url(home_url('/locations/')) . '" class="footer-link">Locations</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '" class="footer-link">About Us</a></li>';
    echo '<li><a href="' . esc_url(home_url('/faq/')) . '" class="footer-link">FAQ</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '" class="footer-link">Contact</a></li>';
    echo '</ul>';
}

function whoosh_fallback_services_menu() {
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . esc_url(home_url('/car-finance/')) . '" class="footer-link">Car Finance</a></li>';
    echo '<li><a href="' . esc_url(home_url('/bad-credit-finance/')) . '" class="footer-link">Bad Credit Finance</a></li>';
    echo '<li><a href="' . esc_url(home_url('/business-finance/')) . '" class="footer-link">Business Finance</a></li>';
    echo '<li><a href="' . esc_url(home_url('/van-finance/')) . '" class="footer-link">Van Finance</a></li>';
    echo '<li><a href="' . esc_url(home_url('/motorbike-finance/')) . '" class="footer-link">Motorbike Finance</a></li>';
    echo '</ul>';
}

function whoosh_fallback_legal_menu() {
    echo '<ul class="footer-legal-menu">';
    echo '<li><a href="' . esc_url(home_url('/privacy-policy/')) . '" class="footer-link">Privacy Policy</a></li>';
    echo '<li><a href="' . esc_url(home_url('/terms-conditions/')) . '" class="footer-link">Terms & Conditions</a></li>';
    echo '<li><a href="' . esc_url(home_url('/cookie-policy/')) . '" class="footer-link">Cookie Policy</a></li>';
    echo '<li><a href="' . esc_url(home_url('/complaints/')) . '" class="footer-link">Complaints</a></li>';
    echo '<li><a href="' . esc_url(home_url('/initial-disclosure/')) . '" class="footer-link">Initial Disclosure</a></li>';
    echo '</ul>';
}

/**
 * Customizer Settings
 */
function whoosh_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('whoosh_hero', array(
        'title' => __('Hero Section', 'whoosh'),
        'priority' => 30,
    ));

    // Hero Image
    $wp_customize->add_setting('whoosh_hero_image', array(
        'default' => get_template_directory_uri() . '/assets/hero-image.jpg',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'whoosh_hero_image', array(
        'label' => __('Hero Image', 'whoosh'),
        'section' => 'whoosh_hero',
        'settings' => 'whoosh_hero_image',
    )));

    // Contact Information
    $wp_customize->add_section('whoosh_contact', array(
        'title' => __('Contact Information', 'whoosh'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('whoosh_phone', array(
        'default' => '0123 456 7890',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('whoosh_phone', array(
        'label' => __('Phone Number', 'whoosh'),
        'section' => 'whoosh_contact',
        'type' => 'text',
    ));

    $wp_customize->add_setting('whoosh_email', array(
        'default' => 'info@whooshfinance.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('whoosh_email', array(
        'label' => __('Email Address', 'whoosh'),
        'section' => 'whoosh_contact',
        'type' => 'email',
    ));
}
add_action('customize_register', 'whoosh_customize_register');

/**
 * Widget Areas
 */
function whoosh_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'whoosh'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here.', 'whoosh'),
        'before_widget' => '<section id="%1$s" class="widget %2$s card">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title card-title">',
        'after_title' => '</h2>',
    ));
}
add_action('widgets_init', 'whoosh_widgets_init');

/**
 * Add custom body classes
 */
function whoosh_body_classes($classes) {
    if (!is_multi_author()) {
        $classes[] = 'single-author';
    }

    if (is_front_page()) {
        $classes[] = 'home-page';
    }

    return $classes;
}
add_filter('body_class', 'whoosh_body_classes');

/**
 * Custom excerpt length
 */
function whoosh_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'whoosh_excerpt_length');

/**
 * Custom excerpt more
 */
function whoosh_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'whoosh_excerpt_more');

/**
 * Add admin styles
 */
function whoosh_admin_styles() {
    echo '<style>
        .wrap h1 { font-family: "Bangers", cursive; }
        .comic-admin-notice {
            border: 3px solid #000;
            border-radius: 8px;
            background: #f9f9f9;
            box-shadow: 4px 4px 0px rgba(0,0,0,1);
        }
    </style>';
}
add_action('admin_head', 'whoosh_admin_styles');

/**
 * Security enhancements
 */
// Remove WordPress version number
remove_action('wp_head', 'wp_generator');

// Remove Windows Live Writer manifest
remove_action('wp_head', 'wlwmanifest_link');

// Remove RSD link
remove_action('wp_head', 'rsd_link');

/**
 * SEO enhancements
 */
function whoosh_add_meta_tags() {
    if (is_front_page()) {
        echo '<meta name="keywords" content="car finance, auto loans, vehicle financing, bad credit car finance, car loans UK, fast approval">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:site_name" content="' . get_bloginfo('name') . '">' . "\n";
        echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
        echo '<meta name="robots" content="index, follow">' . "\n";
    }
}
add_action('wp_head', 'whoosh_add_meta_tags');

/**
 * Theme activation hook
 */
function whoosh_theme_activation() {
    // Create default pages if they don't exist
    $pages = array(
        'calculator' => 'Calculator',
        'how-it-works' => 'How It Works',
        'about' => 'About Us',
        'contact' => 'Contact',
        'faq' => 'FAQ',
        'privacy-policy' => 'Privacy Policy',
        'terms-conditions' => 'Terms & Conditions',
        'cookie-policy' => 'Cookie Policy',
    );

    foreach ($pages as $slug => $title) {
        if (!get_page_by_path($slug)) {
            wp_insert_post(array(
                'post_title' => $title,
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => '<p>This page needs content.</p>',
            ));
        }
    }
}
add_action('after_switch_theme', 'whoosh_theme_activation');