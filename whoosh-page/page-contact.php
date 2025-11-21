<?php
/**
 * Template Name: Contact
 * Description: Contact page with form and support information
 */

get_header(); ?>

<main style="padding-top: 120px;">
    <!-- Hero Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                    BAM! Get in <span class="text-primary">Touch!</span> 💥
                </h1>
                <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Whether you have questions about car loans, need assistance with your application, 
                    or want to discuss your options, our team of car finance experts is ready to help you 
                    <span class="font-comic font-bold text-primary"> WHOOSH </span> 
                    into your dream car every step of the way!
                </p>
            </div>
        </div>
    </section>

    <div class="container mx-auto px-4 py-16">
        <div class="max-w-7xl mx-auto">
            <!-- Contact Methods Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <!-- Phone Support -->
                <div class="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full">
                    <div class="text-center pb-4 p-6">
                        <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                            <span class="text-white text-2xl">📞</span>
                        </div>
                        <h3 class="text-lg font-comic mb-4">Phone Support</h3>
                        <div class="space-y-2 flex-1 flex flex-col justify-center">
                            <p class="font-semibold text-foreground text-sm leading-tight break-words">0800 123 WHOOSH (0800 123 9466)</p>
                            <p class="text-xs text-muted-foreground leading-relaxed">Speak to our car finance experts</p>
                        </div>
                        <a href="tel:08001239466" class="bg-primary text-primary-foreground px-4 py-2 rounded text-xs mt-4 inline-block hover:bg-primary/90 transition-colors">
                            Call Now
                        </a>
                    </div>
                </div>

                <!-- Email Support -->
                <div class="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full">
                    <div class="text-center pb-4 p-6">
                        <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                            <span class="text-white text-2xl">📧</span>
                        </div>
                        <h3 class="text-lg font-comic mb-4">Email Support</h3>
                        <div class="space-y-2 flex-1 flex flex-col justify-center">
                            <p class="font-semibold text-foreground text-sm leading-tight break-words">hello@whooshcarfinance.co.uk</p>
                            <p class="text-xs text-muted-foreground leading-relaxed">Email us your questions anytime</p>
                        </div>
                        <a href="mailto:hello@whooshcarfinance.co.uk" class="bg-primary text-primary-foreground px-4 py-2 rounded text-xs mt-4 inline-block hover:bg-primary/90 transition-colors">
                            Send Email
                        </a>
                    </div>
                </div>

                <!-- Complaints -->
                <div class="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full">
                    <div class="text-center pb-4 p-6">
                        <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                            <span class="text-white text-2xl">⚠️</span>
                        </div>
                        <h3 class="text-lg font-comic mb-4">Complaints</h3>
                        <div class="space-y-2 flex-1 flex flex-col justify-center">
                            <p class="font-semibold text-foreground text-sm leading-tight break-words">complaints@whooshcarfinance.co.uk</p>
                            <p class="text-xs text-muted-foreground leading-relaxed">For complaints and feedback</p>
                        </div>
                        <a href="mailto:complaints@whooshcarfinance.co.uk" class="bg-primary text-primary-foreground px-4 py-2 rounded text-xs mt-4 inline-block hover:bg-primary/90 transition-colors">
                            Contact Complaints
                        </a>
                    </div>
                </div>

                <!-- Live Chat -->
                <div class="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full">
                    <div class="text-center pb-4 p-6">
                        <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                            <span class="text-white text-2xl">💬</span>
                        </div>
                        <h3 class="text-lg font-comic mb-4">Live Chat</h3>
                        <div class="space-y-2 flex-1 flex flex-col justify-center">
                            <p class="font-semibold text-foreground text-sm leading-tight break-words">Available Mon-Sat 9AM-6PM</p>
                            <p class="text-xs text-muted-foreground leading-relaxed">Get instant help from our team</p>
                        </div>
                        <button onclick="startChat()" class="bg-primary text-primary-foreground px-4 py-2 rounded text-xs mt-4 hover:bg-primary/90 transition-colors">
                            Start Chat
                        </button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
                <!-- Contact Form -->
                <div class="w-full">
                    <div class="comic-panel bg-card/50 backdrop-blur-sm h-full p-6">
                        <div class="mb-6">
                            <h2 class="text-2xl font-comic flex items-center gap-2 mb-2">
                                <span class="text-primary">📨</span>
                                Send us a Message
                            </h2>
                            <p class="text-muted-foreground">
                                Fill out the form below and we'll get back to you faster than you can say WHOOSH!
                            </p>
                        </div>
                        
                        <form id="contact-form" class="space-y-6" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                            <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
                            <input type="hidden" name="action" value="submit_contact_form">
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">Full Name *</label>
                                    <input type="text" name="full_name" placeholder="Your full name" required
                                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">Email Address *</label>
                                    <input type="email" name="email" placeholder="your.email@example.com" required
                                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">Phone Number</label>
                                    <input type="tel" name="phone" placeholder="Your phone number"
                                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">Department</label>
                                    <select name="department" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        <option value="">Choose department</option>
                                        <option value="general">General Enquiry</option>
                                        <option value="sales">New Applications</option>
                                        <option value="existing">Existing Customers</option>
                                        <option value="complaints">Complaints</option>
                                        <option value="technical">Technical Support</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Subject *</label>
                                <input type="text" name="subject" placeholder="What's your question about?" required
                                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Message *</label>
                                <textarea name="message" placeholder="Tell us how we can help you..." rows="5" required
                                          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                            </div>

                            <button type="submit" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold w-full hover:bg-primary/90 transition-colors">
                                📨 Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Office Information -->
                <div class="w-full space-y-6">
                    <!-- Opening Hours -->
                    <div class="comic-panel bg-card/50 backdrop-blur-sm p-6">
                        <h3 class="text-xl font-comic flex items-center gap-2 mb-4">
                            <span class="text-primary">🕐</span>
                            Opening Hours
                        </h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Monday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Tuesday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Wednesday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Thursday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Friday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-border/30">
                                <span class="font-medium">Saturday</span>
                                <span class="text-sm text-primary font-medium">9:00 – 18:00</span>
                            </div>
                            <div class="flex justify-between items-center py-2">
                                <span class="font-medium">Sunday</span>
                                <span class="text-sm text-muted-foreground">Closed</span>
                            </div>
                        </div>
                    </div>

                    <!-- Emergency Contact -->
                    <div class="comic-panel bg-gradient-to-r from-red-50 to-orange-50 border-red-200 p-6">
                        <h3 class="text-lg font-comic text-red-700 flex items-center gap-2 mb-4">
                            <span>⚠️</span>
                            Emergency Support
                        </h3>
                        <p class="text-sm text-red-600 mb-3">
                            For urgent payment issues or account emergencies outside business hours:
                        </p>
                        <a href="tel:0800HELPNOW" class="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2">
                            📞 Emergency Line: 0800 HELP NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
function startChat() {
    alert('Live chat is currently being set up. Please call us or send an email for immediate assistance!');
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // You can add client-side validation here if needed
            console.log('Contact form submitted');
        });
    }
});
</script>

<?php get_footer(); ?>