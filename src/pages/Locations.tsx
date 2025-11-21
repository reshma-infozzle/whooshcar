import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Car, Clock, Shield, Star, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { locations } from "@/data/locations";
import { Link } from "react-router-dom";

export default function Locations() {
  return (
    <div className="min-h-screen bg-background halftone-dots-yellow relative">
      <Header />
      <ScrollToTop />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-comic font-black text-foreground mb-4 sm:mb-6 px-2">
                <span className="text-primary">WHOOSH!</span> Car Finance <span className="text-secondary">Across the UK</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                From bustling cities to market towns, find competitive car finance solutions wherever you are in the United Kingdom!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find My Area
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <Car className="w-5 h-5 mr-2" />
                  Get Finance
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4">
                  Find <span className="text-primary">WHOOSH!</span> Finance in Your Area
                </h2>
                <p className="text-lg md:text-xl text-black/80 font-body">
                  We serve customers across {locations.length} locations in the UK
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {locations.map((location) => (
                  <div key={location.city} className="comic-panel bg-white hover:shadow-comic-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-comic text-black mb-1 group-hover:text-primary transition-colors">{location.city}</h3>
                          <p className="text-sm text-black/70 flex items-center font-body">
                            <MapPin className="w-4 h-4 mr-1 text-secondary" />
                            {location.region}
                          </p>
                        </div>
                      </div>
                      <p className="text-black/80 mb-4 text-sm leading-relaxed font-body">
                        {location.description}
                      </p>
                      <Button asChild className="w-full font-comic shadow-comic hover:shadow-comic-lg transition-all text-center justify-center">
                        <Link to={`/locations/${location.slug}`}>
                          Get Finance Here!
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4">
                  Why Choose <span className="text-primary">WHOOSH</span> Finance?
                </h2>
                <p className="text-lg md:text-xl text-black/80 font-body">
                  The same great service, wherever you are in the UK
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="comic-panel bg-primary p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Shield className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">No Broker Fees</h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">Direct lender means no hidden broker fees or charges</p>
                </div>

                <div className="comic-panel bg-secondary p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Clock className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Quick Approval</h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">Get a decision in just 60 seconds with our advanced technology</p>
                </div>

                <div className="comic-panel bg-accent p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Car className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Any Car</h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">Finance any car from any approved dealer nationwide</p>
                </div>

                <div className="comic-panel bg-comic-yellow p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Users className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Expert Support</h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">Local knowledge with nationwide expertise and support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-primary p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-black shadow-comic-lg text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl mb-6 sm:mb-8 text-black/80 font-body leading-relaxed max-w-3xl mx-auto">
                Join thousands of customers across the UK who've chosen WHOOSH Finance for their car finance needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/apply" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="text-lg px-8 font-comic shadow-comic hover:shadow-comic-lg transition-all animate-button-pulse-slow w-full">
                    WHOOSH ME A QUOTE!
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 font-comic border-black text-black hover:bg-black hover:text-white shadow-comic hover:shadow-comic-lg transition-all w-full sm:w-auto">
                  Call 0333 577 7000
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}