<?php
/**
 * Template Name: FAQ
 * Description: Frequently asked questions page
 */

get_header(); ?>

<main style="padding-top: 120px;">
    <!-- Hero Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                    <span class="text-primary">ZAP!</span> Got Questions? We've Got <span class="text-secondary">ANSWERS!</span>
                </h1>
                <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Our superhero FAQ squad has assembled the most common questions! 
                    Find instant answers to all your car finance mysteries.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })" 
                            class="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
                        ❓ Browse FAQs
                    </button>
                    <a href="/contact" class="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors">
                        💬 Contact Support
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq-section" class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-2 sm:px-4 max-w-4xl">
            <div class="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
                <div class="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <span class="text-primary text-4xl">❓</span>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic text-black">
                        <span class="text-secondary">BAM!</span> Frequently Asked Questions
                    </h2>
                </div>

                <div class="space-y-3 sm:space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="comic-panel bg-primary/10 border-2 border-black">
                        <button class="w-full text-left p-3 sm:p-4 font-comic text-base sm:text-lg text-black hover:text-primary" 
                                onclick="toggleFaq(this)">
                            ⚡ What are the basic eligibility criteria for car finance?
                            <span class="float-right">+</span>
                        </button>
                        <div class="faq-content hidden px-3 sm:px-4 pb-3 sm:pb-4">
                            <p class="text-black/80 font-body text-sm sm:text-base">
                                <span class="text-primary font-comic">ZOOM!</span> To join our car finance adventure, you need to be: 18+ years old, 
                                a UK resident with 3 years of address history, have at least 12 months employment history, and hold a full UK driving licence. 
                                Don't worry if you have a European or International licence - we've got options for heroes from all backgrounds!
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="comic-panel bg-secondary/10 border-2 border-black">
                        <button class="w-full text-left p-3 sm:p-4 font-comic text-base sm:text-lg text-black hover:text-primary" 
                                onclick="toggleFaq(this)">
                            🚗 How quickly can I get approved for car finance?
                            <span class="float-right">+</span>
                        </button>
                        <div class="faq-content hidden px-3 sm:px-4 pb-3 sm:pb-4">
                            <p class="text-black/80 font-body text-sm sm:text-base">
                                <span class="text-secondary font-comic">WHOOSH!</span> Our lightning-fast approval process can get you a decision in principle within minutes! 
                                For straightforward applications, you could even drive away in your new car the same day. Our super-speedy team works around the clock to get you behind the wheel ASAP!
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="comic-panel bg-primary/10 border-2 border-black">
                        <button class="w-full text-left p-3 sm:p-4 font-comic text-base sm:text-lg text-black hover:text-primary" 
                                onclick="toggleFaq(this)">
                            💰 Do I need a deposit for car finance?
                            <span class="float-right">+</span>
                        </button>
                        <div class="faq-content hidden px-3 sm:px-4 pb-3 sm:pb-4">
                            <p class="text-black/80 font-body text-sm sm:text-base">
                                <span class="text-primary font-comic">KAPOW!</span> No deposit? No problem! We offer fantastic no-deposit options to get you zooming off without breaking the bank. 
                                Sometimes a small deposit might help secure better rates, but we'll always find options that work for YOUR budget!
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="comic-panel bg-secondary/10 border-2 border-black">
                        <button class="w-full text-left p-3 sm:p-4 font-comic text-base sm:text-lg text-black hover:text-primary" 
                                onclick="toggleFaq(this)">
                            💳 Can I get car finance with bad credit?
                            <span class="float-right">+</span>
                        </button>
                        <div class="faq-content hidden px-3 sm:px-4 pb-3 sm:pb-4">
                            <p class="text-black/80 font-body text-sm sm:text-base">
                                <span class="text-secondary font-comic">BAM!</span> Bad credit won't stop the WHOOSH! We work with specialist lenders who focus on helping people with all types of credit histories. 
                                These loans can even help boost your credit score for future applications. We believe everyone deserves a chance to get back on the road!
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="comic-panel bg-primary/10 border-2 border-black">
                        <button class="w-full text-left p-3 sm:p-4 font-comic text-base sm:text-lg text-black hover:text-primary" 
                                onclick="toggleFaq(this)">
                            📋 What types of car finance do you offer?
                            <span class="float-right">+</span>
                        </button>
                        <div class="faq-content hidden px-3 sm:px-4 pb-3 sm:pb-4">
                            <p class="text-black/80 font-body text-sm sm:text-base">
                                <span class="text-primary font-comic">ZOOM!</span> We've got all the finance superpowers you need! Hire Purchase (HP) - where you own the car at the end, 
                                Personal Contract Purchase (PCP) - with flexible end options, Conditional Sale, and Personal Loans. 
                                Our finance heroes will explain each option and help you pick the perfect one for your adventure!
                            </p>
                        </div>
                    </div>

                    <!-- Add more FAQ items following the same pattern -->
                    
                </div>
            </div>
        </div>
    </section>

    <!-- Still Have Questions -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-2 sm:px-4">
            <div class="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg text-center">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6 px-2">
                    <span class="text-primary">STILL</span> Got Questions? <span class="text-secondary">We're Here!</span>
                </h2>
                <p class="text-lg sm:text-xl text-black/80 font-body mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                    Our superhero support team is ready to swoop in and save the day! 
                    No question is too small, no problem too big!
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                    <a href="tel:08001234567" class="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                        📞 Call Our Heroes
                    </a>
                    <a href="/contact" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                        🚗 Get Your Quote
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('span');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}
</script>

<?php get_footer(); ?>