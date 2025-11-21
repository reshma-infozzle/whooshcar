<?php
/**
 * Whoosh Car Finance Theme functions and definitions
 *
 * @package Whoosh
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function whoosh_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ));
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
        'primary' => __('Primary Menu', 'whoosh-theme'),
        'mobile' => __('Mobile Menu', 'whoosh-theme'),
        'footer-quick' => __('Footer Quick Links', 'whoosh-theme'),
        'footer-services' => __('Footer Services', 'whoosh-theme'),
        'footer-legal' => __('Footer Legal', 'whoosh-theme'),
    ));
}
add_action('after_setup_theme', 'whoosh_theme_setup');

/**
 * Enqueue scripts and styles
 */
function whoosh_scripts() {
    // Main stylesheet
    wp_enqueue_style('whoosh-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts
    wp_enqueue_style('whoosh-fonts', 'https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&family=Poppins:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    
    // Main JavaScript
    wp_enqueue_script('whoosh-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
    
    // Calculator script (only on calculator and front page)
    if (is_page('calculator') || is_front_page()) {
        wp_enqueue_script('whoosh-calculator', get_template_directory_uri() . '/js/calculator.js', array(), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'whoosh_scripts');

/**
 * Fallback for primary menu
 */
function whoosh_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . home_url('/how-it-works') . '">How It Works</a></li>';
    echo '<li><a href="' . home_url('/calculator') . '">Calculator</a></li>';
    echo '<li><a href="' . home_url('/about') . '">About Us</a></li>';
    echo '<li><a href="' . home_url('/faq') . '">FAQ</a></li>';
    echo '<li><a href="' . home_url('/contact') . '">Contact</a></li>';
    echo '</ul>';
}

/**
 * Fallback for mobile menu
 */
function whoosh_fallback_mobile_menu() {
    echo '<ul class="mobile-nav-menu">';
    echo '<li><a href="' . home_url('/how-it-works') . '">How It Works</a></li>';
    echo '<li><a href="' . home_url('/calculator') . '">Calculator</a></li>';
    echo '<li><a href="' . home_url('/about') . '">About Us</a></li>';
    echo '<li><a href="' . home_url('/car-finance') . '">Car Finance</a></li>';
    echo '<li><a href="' . home_url('/bad-credit-finance') . '">Bad Credit Finance</a></li>';
    echo '<li><a href="' . home_url('/business-finance') . '">Business Finance</a></li>';
    echo '<li><a href="' . home_url('/van-finance') . '">Van Finance</a></li>';
    echo '<li><a href="' . home_url('/motorbike-finance') . '">Motorbike Finance</a></li>';
    echo '<li><a href="' . home_url('/faq') . '">FAQ</a></li>';
    echo '<li><a href="' . home_url('/contact') . '">Contact</a></li>';
    echo '</ul>';
}

/**
 * Fallback for footer menus
 */
function whoosh_fallback_footer_menu() {
    echo '<ul>';
    echo '<li><a href="' . home_url('/how-it-works') . '">How It Works</a></li>';
    echo '<li><a href="' . home_url('/calculator') . '">Calculator</a></li>';
    echo '<li><a href="' . home_url('/about') . '">About Us</a></li>';
    echo '<li><a href="' . home_url('/contact') . '">Contact</a></li>';
    echo '</ul>';
}

function whoosh_fallback_services_menu() {
    echo '<ul>';
    echo '<li><a href="' . home_url('/car-finance') . '">Car Finance</a></li>';
    echo '<li><a href="' . home_url('/bad-credit-finance') . '">Bad Credit Finance</a></li>';
    echo '<li><a href="' . home_url('/business-finance') . '">Business Finance</a></li>';
    echo '<li><a href="' . home_url('/van-finance') . '">Van Finance</a></li>';
    echo '<li><a href="' . home_url('/motorbike-finance') . '">Motorbike Finance</a></li>';
    echo '</ul>';
}

function whoosh_fallback_legal_menu() {
    echo '<ul>';
    echo '<li><a href="' . home_url('/privacy-policy') . '">Privacy Policy</a></li>';
    echo '<li><a href="' . home_url('/terms-conditions') . '">Terms & Conditions</a></li>';
    echo '<li><a href="' . home_url('/terms-of-business') . '">Terms of Business</a></li>';
    echo '<li><a href="' . home_url('/cookie-policy') . '">Cookie Policy</a></li>';
    echo '<li><a href="' . home_url('/complaints') . '">Complaints</a></li>';
    echo '<li><a href="' . home_url('/initial-disclosure') . '">Initial Disclosure</a></li>';
    echo '</ul>';
}

/**
 * Customizer additions
 */
function whoosh_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('whoosh_hero', array(
        'title'    => __('Hero Section', 'whoosh-theme'),
        'priority' => 30,
    ));

    // Hero image
    $wp_customize->add_setting('whoosh_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'whoosh_hero_image', array(
        'label'    => __('Hero Image', 'whoosh-theme'),
        'section'  => 'whoosh_hero',
        'settings' => 'whoosh_hero_image',
    )));

    // Contact Information
    $wp_customize->add_section('whoosh_contact', array(
        'title'    => __('Contact Information', 'whoosh-theme'),
        'priority' => 35,
    ));

    // Phone number
    $wp_customize->add_setting('whoosh_phone', array(
        'default'           => '0800 123 WHOOSH',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('whoosh_phone', array(
        'label'   => __('Phone Number', 'whoosh-theme'),
        'section' => 'whoosh_contact',
        'type'    => 'text',
    ));

    // Email address
    $wp_customize->add_setting('whoosh_email', array(
        'default'           => 'hello@whooshcarfinance.co.uk',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('whoosh_email', array(
        'label'   => __('Email Address', 'whoosh-theme'),
        'section' => 'whoosh_contact',
        'type'    => 'email',
    ));
    
    // Development banner toggle
    $wp_customize->add_setting('whoosh_dev_banner', array(
        'default'           => true,
        'sanitize_callback' => 'wp_validate_boolean',
    ));

    $wp_customize->add_control('whoosh_dev_banner', array(
        'label'   => __('Show Development Banner', 'whoosh-theme'),
        'section' => 'whoosh_contact',
        'type'    => 'checkbox',
    ));
}
add_action('customize_register', 'whoosh_customize_register');

/**
 * Widget areas
 */
function whoosh_widgets_init() {
    register_sidebar(array(
        'name'          => __('Primary Sidebar', 'whoosh-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'whoosh-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'whoosh_widgets_init');

/**
 * Custom body classes
 */
function whoosh_body_classes($classes) {
    // Adds a class of hfeed to non-singular pages
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    // Adds a class of no-sidebar when there is no sidebar present
    if (is_front_page()) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter('body_class', 'whoosh_body_classes');

/**
 * Custom excerpt handling
 */
function whoosh_excerpt_length() {
    return 30;
}
add_filter('excerpt_length', 'whoosh_excerpt_length');

function whoosh_excerpt_more() {
    return '...';
}
add_filter('excerpt_more', 'whoosh_excerpt_more');

/**
 * Admin styles
 */
function whoosh_admin_styles() {
    echo '<style>
        .wp-admin h1 {
            font-family: "Bangers", cursive !important;
        }
        .whoosh-admin-notice {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            border-left: 4px solid #92400e;
        }
    </style>';
}
add_action('admin_head', 'whoosh_admin_styles');

/**
 * Remove WordPress version from head for security
 */
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

/**
 * SEO enhancements for front page
 */
function whoosh_add_meta_tags() {
    if (is_front_page()) {
        echo '<meta name="keywords" content="car finance, car loans, vehicle finance, bad credit car loans, UK car finance">' . "\n";
        echo '<meta property="og:title" content="WHOOSH! Fast Car Finance - Lightning Fast Approvals">' . "\n";
        echo '<meta property="og:description" content="Get approved for car finance in minutes! Compare deals from 20+ lenders. Bad credit welcome. FCA regulated.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
        echo '<meta name="robots" content="index, follow">' . "\n";
    }
}
add_action('wp_head', 'whoosh_add_meta_tags');

/**
 * Theme activation - create default pages
 */
function whoosh_theme_activation() {
    $pages = array(
        'Calculator' => 'calculator',
        'How It Works' => 'how-it-works',
        'About Us' => 'about',
        'FAQ' => 'faq',
        'Contact' => 'contact',
        'Car Finance' => 'car-finance',
        'Bad Credit Finance' => 'bad-credit-finance',
        'Business Finance' => 'business-finance',
        'Van Finance' => 'van-finance',
        'Motorbike Finance' => 'motorbike-finance',
        'Privacy Policy' => 'privacy-policy',
        'Terms & Conditions' => 'terms-conditions',
        'Terms of Business' => 'terms-of-business',
        'Cookie Policy' => 'cookie-policy',
        'Initial Disclosure' => 'initial-disclosure',
        'Complaints' => 'complaints',
        'Lenders' => 'lenders',
        'Marketing Assets' => 'ads-content',
        'Sitemap' => 'sitemap',
    );

    foreach ($pages as $title => $slug) {
        if (!get_page_by_path($slug)) {
            wp_insert_post(array(
                'post_title'     => $title,
                'post_name'      => $slug,
                'post_content'   => '<p>This page was automatically created by the Whoosh theme. Please add your content here.</p>',
                'post_status'    => 'publish',
                'post_type'      => 'page',
                'post_author'    => 1,
            ));
        }
    }
}
add_action('after_switch_theme', 'whoosh_theme_activation');