    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <!-- Company Information -->
                <div class="footer-section">
                    <h3>WHOOSH!</h3>
                    <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                        Lightning-fast car finance that moves at your speed! We're here to help you get behind the wheel of your dream car.
                    </p>
                    <div style="display: flex; gap: 1rem;">
                        <a href="#" class="footer-link" aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="footer-link" aria-label="Twitter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="footer-link" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.508 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-quick',
                        'menu_class' => 'footer-menu',
                        'container' => false,
                        'fallback_cb' => 'whoosh_fallback_footer_menu',
                    ));
                    ?>
                </div>

                <!-- Services -->
                <div class="footer-section">
                    <h3>Services</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-services',
                        'menu_class' => 'footer-menu',
                        'container' => false,
                        'fallback_cb' => 'whoosh_fallback_services_menu',
                    ));
                    ?>
                </div>

                <!-- Contact Information -->
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <div style="margin-bottom: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <a href="tel:+441234567890" class="footer-link" style="display: inline;">0123 456 7890</a>
                    </div>
                    <div style="margin-bottom: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <a href="mailto:info@whooshfinance.com" class="footer-link" style="display: inline;">info@whooshfinance.com</a>
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: top; margin-right: 0.5rem; margin-top: 0.25rem;">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span style="color: rgba(255, 255, 255, 0.8);">
                            123 Finance Street<br>
                            London, UK<br>
                            SW1A 1AA
                        </span>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin-bottom: 1rem;">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-legal',
                        'menu_class' => 'footer-legal-menu',
                        'container' => false,
                        'fallback_cb' => 'whoosh_fallback_legal_menu',
                    ));
                    ?>
                </div>
                
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. | FCA Registration: 123456</p>
                
                <!-- Financial Disclosures -->
                <div style="font-size: 0.75rem; line-height: 1.4; margin-top: 1rem; color: rgba(255, 255, 255, 0.6);">
                    <p>
                        <?php bloginfo('name'); ?> is authorised and regulated by the Financial Conduct Authority (FCA). 
                        We are a credit broker, not a lender, and can introduce you to a limited number of lenders. 
                        We may receive a commission from the lenders we introduce you to.
                    </p>
                    <p style="margin-top: 0.5rem;">
                        If you have a complaint, please contact us. If we cannot resolve your complaint, you may be entitled to refer it to the Financial Ombudsman Service (FOS). 
                        Applicants must be 18 or over and UK residents. We are registered with the Information Commissioner's Office (ICO).
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <style>
    .footer-menu,
    .footer-legal-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-menu li,
    .footer-legal-menu li {
        margin-bottom: 0.5rem;
    }

    .footer-legal-menu {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .footer-legal-menu li {
        margin: 0;
    }

    .footer-menu a,
    .footer-legal-menu a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: var(--transition-smooth);
    }

    .footer-menu a:hover,
    .footer-legal-menu a:hover {
        color: hsl(var(--primary));
    }
    </style>

    <?php wp_footer(); ?>
</body>
</html>