# Whoosh Car Finance WordPress Theme

A custom WordPress theme converted from React components, featuring comic book styling and car finance functionality.

## Installation Instructions

1. **Upload Theme**:
   - Zip the `wordpress-theme` folder
   - Go to WordPress Admin > Appearance > Themes
   - Click "Add New" > "Upload Theme"
   - Upload the zip file and activate

2. **Required Setup**:
   - Create pages: Calculator, How It Works, About, Contact, FAQ
   - Set up navigation menus in Appearance > Menus
   - Upload hero image in Customizer > Hero Section
   - Configure contact info in Customizer > Contact Information

## Theme Structure

### Static Components:
- **Header** (`header.php`) - Navigation and branding
- **Footer** (`footer.php`) - Links and contact info  
- **Hero Section** (in `index.php`) - Main landing area
- **Trust Badges** - FCA regulation, timing info

### Dynamic Content Areas:
- **Homepage** (`index.php`) - Main landing page
- **Pages** (`page.php`) - Static pages like About, Contact
- **Posts** (`single.php`) - Blog posts and articles
- **Calculator** (JavaScript) - Interactive finance calculator

## Key Features

✅ **Modular Structure** - Easy to map to WordPress templates
✅ **Comic Book Design** - Preserved from React version
✅ **Mobile Responsive** - Works on all devices  
✅ **SEO Optimized** - Meta tags, semantic HTML
✅ **Interactive Calculator** - Car finance calculations
✅ **Menu Management** - WordPress native menus
✅ **Customizer Options** - Easy theme customization

## File Breakdown

- `style.css` - Main theme styles with design system
- `functions.php` - Theme setup, menus, scripts
- `index.php` - Homepage template  
- `page.php` - Static page template
- `single.php` - Blog post template
- `header.php` - Site header
- `footer.php` - Site footer
- `js/main.js` - Core JavaScript functionality
- `js/calculator.js` - Finance calculator logic

Ready for WordPress installation and customization!