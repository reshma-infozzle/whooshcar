<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <!-- Company Information -->
            <div class="footer-section">
                <h3>WHOOSH!</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                    Lightning-fast car finance that moves at your speed! Get approved in minutes with our superhero team.
                </p>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <a href="#" style="color: hsl(39, 77%, 51%); text-decoration: none; font-size: 1.2rem;" aria-label="Facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="#" style="color: hsl(39, 77%, 51%); text-decoration: none; font-size: 1.2rem;" aria-label="Twitter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                    <a href="#" style="color: hsl(39, 77%, 51%); text-decoration: none; font-size: 1.2rem;" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                    'menu_class'     => 'footer-menu',
                    'container'      => false,
                    'fallback_cb'    => 'whoosh_fallback_footer_menu',
                ));
                ?>
            </div>

            <!-- Services -->
            <div class="footer-section">
                <h3>Services</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-services',
                    'menu_class'     => 'footer-menu',
                    'container'      => false,
                    'fallback_cb'    => 'whoosh_fallback_services_menu',
                ));
                ?>
            </div>

            <!-- Contact Information -->
            <div class="footer-section">
                <h3>Contact Info</h3>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span style="color: rgba(255, 255, 255, 0.8);"><?php echo esc_html(get_theme_mod('whoosh_phone', '0800 123 WHOOSH')); ?></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span style="color: rgba(255, 255, 255, 0.8);"><?php echo esc_html(get_theme_mod('whoosh_email', 'hello@whooshcarfinance.co.uk')); ?></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span style="color: rgba(255, 255, 255, 0.8);">Manchester, UK</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                <!-- Legal Links -->
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-legal',
                        'menu_class'     => 'footer-legal-menu',
                        'container'      => false,
                        'fallback_cb'    => 'whoosh_fallback_legal_menu',
                        'items_wrap'     => '%3$s',
                    ));
                    ?>
                </div>

                <!-- Copyright -->
                <div style="text-align: center;">
                    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                </div>

                <!-- Financial Disclosures -->
                <div style="max-width: 800px; text-align: center; font-size: 0.75rem; line-height: 1.4;">
                    <p>
                        <strong>WHOOSH Car Finance</strong> is a trading name. We are authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number ZB989798. 
                        We act as a credit broker, not a lender, and work with a panel of lenders. We may receive commission for successful introductions, 
                        but this does not affect the cost of your finance or our advice to you.
                    </p>
                    <p>
                        All finance is subject to status and affordability. Terms and conditions apply. You must be 18+ and a UK resident. 
                        Guarantees may be required. We are committed to responsible lending practices.
                    </p>
                    <p>
                        If you have a complaint, please contact us at complaints@whooshcarfinance.co.uk. 
                        If we cannot resolve your complaint, you may refer it to the Financial Ombudsman Service at 
                        <a href="https://www.financial-ombudsman.org.uk" style="color: hsl(39, 77%, 51%);">www.financial-ombudsman.org.uk</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
.footer-legal-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.footer-legal-menu a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
}

.footer-legal-menu a:hover {
    color: hsl(39, 77%, 51%);
}
</style>

<?php wp_footer(); ?>
</body>
</html>