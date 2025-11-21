# WHOOSH WordPress Page Templates

This folder contains individual WordPress page templates converted from React components. Each template is designed to work with the `whoosh-theme` header and footer structure.

## Page Templates Included

1. **page-calculator.php** - Interactive car finance calculator
2. **page-about.php** - About us page with company story
3. **page-faq.php** - Frequently asked questions with expandable sections
4. **page-contact.php** - Contact form and support information
5. **page-car-finance.php** - Car finance options and information
6. **page-bad-credit-finance.php** - Bad credit car finance solutions
7. **page-business-finance.php** - Business vehicle finance information
8. **page-van-finance.php** - Van finance options and benefits
9. **page-motorbike-finance.php** - Motorcycle finance solutions

## Additional Templates to be Created

- **page-privacy-policy.php** - Privacy policy information
- **page-terms-conditions.php** - Terms and conditions
- **page-terms-of-business.php** - Terms of business
- **page-cookie-policy.php** - Cookie policy
- **page-initial-disclosure.php** - Initial disclosure document
- **page-complaints.php** - Complaints procedure
- **page-lenders.php** - Lender partners presentation
- **page-ads-content.php** - Marketing assets and content
- **page-sitemap.php** - Site navigation and links
- **page-how-it-works.php** - Process explanation
- **page-locations.php** - Service areas and locations
- **page-blog.php** - Blog template

## Installation Instructions

1. Copy all `.php` files to your WordPress theme directory
2. Ensure `whoosh-theme` is active
3. Create WordPress pages with matching slugs:
   - Calculator → slug: `calculator`
   - About Us → slug: `about`
   - FAQ → slug: `faq`
   - Contact → slug: `contact`
   - Car Finance → slug: `car-finance`
   - etc.

## Features Preserved

- Comic book styling and animations  
- Interactive calculator functionality
- Responsive design
- Form handling capabilities
- SEO-friendly structure
- WordPress integration (menus, headers, footers)

## JavaScript Dependencies

Some templates require JavaScript for:
- Calculator functionality
- FAQ accordion behavior
- Form validation
- Interactive elements

The JavaScript is included in the `whoosh-theme/js/` directory.

## Custom Fields Support

Templates support WordPress custom fields for:
- Hero images
- Contact information
- Calculator settings
- Form configurations

## Browser Compatibility

All templates are tested and compatible with:
- Chrome/Edge 90+
- Firefox 85+
- Safari 14+
- Mobile browsers

## Notes

- All templates use the `whoosh-theme` header and footer
- Styling matches the original React component design
- Interactive elements preserved with vanilla JavaScript
- Forms include WordPress security (nonces)
- SEO meta tags properly configured