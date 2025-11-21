import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Zap, Shield, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">KAPOW!</span> Meet Team <span className="text-secondary">WHOOSH!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're the superheroes of car finance! Born from a lightning strike of innovation, 
                we've been saving the day for car buyers across the UK since our epic origin story began!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Your Quote
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Origin Story */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
              <h2 className="text-3xl md:text-5xl font-comic text-center mb-8">
                <span className="text-primary">BOOM!</span> Our Origin Story
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-black/80 font-body">
                    <span className="text-primary font-comic text-xl">ZAP!</span> It all started when our founder was struck by lightning while trying to get car finance the old-fashioned way. After hours of paperwork, phone calls, and mind-numbing bureaucracy, a brilliant idea sparked!
                  </p>
                  <p className="text-lg text-black/80 font-body">
                    <span className="text-secondary font-comic text-xl">WHOOSH!</span> What if getting car finance could be as fast as a superhero flying to save the day? What if we could cut through the red tape faster than a speeding bullet?
                  </p>
                  <p className="text-lg text-black/80 font-body">
                    <span className="text-primary font-comic text-xl">KAPOW!</span> And so, Whoosh Car Finance was born - with the superpower to get you approved in minutes, not hours!
                  </p>
                </div>
                <div className="comic-panel bg-primary/20 p-6 border-2 border-black">
                  <div className="text-center">
                    <Zap className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-comic text-black mb-2">Our Superpower</h3>
                    <p className="text-lg text-black/80 font-body">Lightning-fast approvals that'll make your head spin!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Superpowers */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-secondary">BAM!</span> Our Superpowers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Shield className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-comic text-black mb-4">FCA Protection Shield</h3>
                <p className="text-black/80 font-body">
                  We're fully regulated by the FCA - that's like having Superman's cape of protection! 
                  Your finance is safer than Fort Knox!
                </p>
              </div>
              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Zap className="w-16 h-16 text-secondary mb-4" />
                <h3 className="text-2xl font-comic text-black mb-4">Speed Force Technology</h3>
                <p className="text-black/80 font-body">
                  Our algorithms work faster than The Flash! Get instant decisions and approvals 
                  at superhuman speeds!
                </p>
              </div>
              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Users className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-comic text-black mb-4">Hero Customer Service</h3>
                <p className="text-black/80 font-body">
                  Our customer service team has X-ray vision for problems and the power to solve 
                  them faster than you can say "WHOOSH!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-secondary/20 p-12 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-center mb-8">
                <span className="text-primary">POW!</span> Our Mission
              </h2>
              <div className="text-center max-w-4xl mx-auto">
                <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-black/80 font-body mb-8">
                  To save every car buyer from the villainous world of slow, confusing, and expensive car finance! 
                  We believe everyone deserves their dream car without the nightmare paperwork.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-black mb-2">Creating Happy Heroes</h3>
                    <p className="text-black/80 font-body">We're always trying to create happy heroes on the road!</p>
                  </div>
                  <div className="text-center">
                    <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-black mb-2">2-Minute Applications</h3>
                    <p className="text-black/80 font-body">Faster than making a cup of tea!</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-black mb-2">100% Secure</h3>
                    <p className="text-black/80 font-body">Your data is protected by our fortress of security!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                Ready to Join Our <span className="text-primary">SUPERHERO</span> Story?
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Let us help you become the hero of your own car-buying adventure! 
                Your dream car is just a WHOOSH away!
              </p>
              <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto mx-auto" asChild>
                <Link to="/apply">
                  <Car className="w-5 h-5 mr-2" />
                  GET MY SUPER QUOTE NOW!
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;