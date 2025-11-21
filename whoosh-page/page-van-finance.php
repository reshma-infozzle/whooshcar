<?php
/**
 * Template Name: Van Finance
 * Description: Van finance information and options
 */

get_header(); ?>

<main style="padding-top: 120px;">
    <!-- Hero Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                    <span class="text-primary">WHOOSH!</span> Van <span class="text-secondary">FINANCE</span>
                </h1>
                <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Get the commercial vehicle your business needs with our flexible van finance options! 
                    Competitive rates, lightning-fast decisions, and 100% VAT recovery available.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" class="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                        🚛 Apply Now
                    </a>
                    <a href="/calculator" class="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                        📊 Calculate Payments
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Van Types Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                We Finance <span class="text-primary">All Van Types</span>
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Small vans (Ford Transit Connect, VW Caddy)</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Medium vans (Ford Transit Custom, Mercedes Sprinter)</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Large vans (Ford Transit, Iveco Daily)</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Pickup trucks (Ford Ranger, Isuzu D-Max)</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Refrigerated vans</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Tipper vans</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Crew vans</span>
                    </div>
                    <div class="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                        <span class="text-primary text-xl">✅</span>
                        <span class="font-medium">Electric and hybrid vans</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Industries Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                Perfect for <span class="text-primary">Your Industry</span>
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-lg text-center mb-2">Tradespeople</h3>
                    <p class="text-muted-foreground text-sm text-center mb-4">Plumbers, electricians, builders, and other trades</p>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold mb-1">Ideal for:</p>
                        <p class="text-xs text-muted-foreground">Tool storage, equipment transport</p>
                    </div>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-lg text-center mb-2">Delivery Services</h3>
                    <p class="text-muted-foreground text-sm text-center mb-4">Courier services, food delivery, e-commerce</p>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold mb-1">Ideal for:</p>
                        <p class="text-xs text-muted-foreground">Cargo space, fuel efficiency</p>
                    </div>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-lg text-center mb-2">Cleaning Services</h3>
                    <p class="text-muted-foreground text-sm text-center mb-4">Commercial and domestic cleaning companies</p>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold mb-1">Ideal for:</p>
                        <p class="text-xs text-muted-foreground">Equipment storage, professional appearance</p>
                    </div>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-lg text-center mb-2">Catering & Mobile Food</h3>
                    <p class="text-muted-foreground text-sm text-center mb-4">Mobile catering, food trucks, event services</p>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold mb-1">Ideal for:</p>
                        <p class="text-xs text-muted-foreground">Refrigeration, custom fittings</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                Van Finance <span class="text-primary">Benefits</span>
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6 text-center">
                    <div class="text-5xl text-primary mb-4">📦</div>
                    <h3 class="font-comic text-lg mb-4">100% VAT Recovery</h3>
                    <p class="text-muted-foreground text-sm">Reclaim all VAT on commercial vehicle purchases and monthly payments.</p>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6 text-center">
                    <div class="text-5xl text-primary mb-4">🔧</div>
                    <h3 class="font-comic text-lg mb-4">Business Tax Relief</h3>
                    <p class="text-muted-foreground text-sm">Monthly payments are 100% tax deductible as a business expense.</p>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6 text-center">
                    <div class="text-5xl text-primary mb-4">📊</div>
                    <h3 class="font-comic text-lg mb-4">Preserve Cash Flow</h3>
                    <p class="text-muted-foreground text-sm">Affordable monthly payments instead of large upfront capital outlay.</p>
                </div>
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6 text-center">
                    <div class="text-5xl text-primary mb-4">🚛</div>
                    <h3 class="font-comic text-lg mb-4">Latest Vehicles</h3>
                    <p class="text-muted-foreground text-sm">Access to newest, most fuel-efficient vans with latest safety features.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Finance Options Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                Van Finance <span class="text-primary">Options</span>
            </h2>
            <div class="grid lg:grid-cols-3 gap-8">
                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Hire Purchase</h3>
                    <p class="text-muted-foreground text-center text-sm mb-6">Own the van at the end with fixed monthly payments</p>
                    <div class="space-y-3 mb-6">
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Own the van outright</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Fixed monthly payments</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">No mileage restrictions</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">100% VAT recovery</span>
                        </div>
                    </div>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold">Best for: Businesses wanting to own their vans</p>
                    </div>
                </div>

                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Finance Lease</h3>
                    <p class="text-muted-foreground text-center text-sm mb-6">Use the van with option to purchase at the end</p>
                    <div class="space-y-3 mb-6">
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Lower monthly payments</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">100% tax allowable</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Purchase option available</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Flexible end-of-term options</span>
                        </div>
                    </div>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold">Best for: Businesses wanting flexibility</p>
                    </div>
                </div>

                <div class="comic-panel hover:shadow-lg transition-all duration-300 p-6">
                    <h3 class="font-comic text-xl text-center mb-4">Operating Lease</h3>
                    <p class="text-muted-foreground text-center text-sm mb-6">All-inclusive rental with maintenance included</p>
                    <div class="space-y-3 mb-6">
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Maintenance included</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Fixed monthly costs</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">No depreciation risk</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-primary">✅</span>
                            <span class="text-sm">Latest vehicles</span>
                        </div>
                    </div>
                    <div class="bg-primary/10 p-3 rounded">
                        <p class="text-xs text-primary font-semibold">Best for: Hassle-free van usage</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div class="container mx-auto px-4 text-center">
            <div class="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
                <h2 class="text-3xl md:text-5xl font-comic text-black mb-6">
                    Get Your <span class="text-primary">VAN FINANCE</span> Quote Today
                </h2>
                <p class="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                    Lightning-fast decisions, competitive rates, and expert advice for your commercial vehicle needs!
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="/calculator" class="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] inline-flex items-center gap-2">
                        📊 CALCULATE MY VAN PAYMENTS!
                    </a>
                    <a href="/contact" class="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] inline-flex items-center gap-2">
                        👥 Speak to Van Heroes!
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>