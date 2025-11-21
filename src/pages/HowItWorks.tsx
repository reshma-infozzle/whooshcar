import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Search, Car, Clock, Users, Zap, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Fill out our quick 2-minute application form with your basic details and finance needs.",
      time: "2 mins"
    },
    {
      icon: Search,
      title: "We Search",
      description: "Our expert team searches through multiple lenders to find you the best deal available.",
      time: "1 hour"
    },
    {
      icon: CheckCircle,
      title: "Get Approved",
      description: "Receive your finance decision and choose from multiple competitive offers.",
      time: "Same day"
    },
    {
      icon: Car,
      title: "Buy Your Car",
      description: "Use your finance to purchase your dream car from any UK reputable dealer our team can also assist you at NO extra cost",
      time: "Instantly"
    }
  ];

  const benefits = [
    "No upfront fees - completely free service",
    "Bad credit applications welcome",
    "Flexible repayment terms up to 7 years",
    "Competitive rates from 3.9% APR",
    "Quick decisions in under 24 hours",
    "Personal service from real people"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">WHOOSH!</span> How It <span className="text-secondary">WORKS!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Getting car finance with WHOOSH is simple, fast, and completely free! 
                Here's exactly how we help you get behind the wheel of your dream car.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-primary">BAM!</span> Our Superhero Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-comic font-bold text-xl border-4 border-black">
                    {index + 1}
                  </div>
                  <div className="text-center pt-4">
                    <step.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-comic text-black mb-2">{step.title}</h3>
                    <div className="text-lg text-secondary font-comic font-bold mb-4">⚡ {step.time}</div>
                    <p className="text-black/80 font-body">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
                <span className="text-secondary">KAPOW!</span> Why Choose <span className="text-primary">WHOOSH?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 comic-panel bg-primary/10 p-4 border-2 border-black">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-black font-body text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-primary">ZAP!</span> Our Superhero Stats
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-primary mb-2">Our Aim</div>
                <div className="text-xl font-comic text-black mb-2">Best Deal Promise</div>
                <div className="text-black/70 font-body">We aim to help customers find the most suitable deal for their circumstances</div>
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-secondary mb-2">Multiple</div>
                <div className="text-xl font-comic text-black mb-2">Partner Lenders</div>
                <div className="text-black/70 font-body">Banks and finance companies working with us</div>
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-primary mb-2">Our Task</div>
                <div className="text-xl font-comic text-black mb-2">Help & Approve</div>
                <div className="text-black/70 font-body">We aim to help you find suitable finance and get you approved</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                Ready for Your <span className="text-primary">SUPERHERO</span> Car Finance Experience?
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who found their perfect car finance deal with WHOOSH! 
                Your dream car is just a superhero leap away!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/apply">
                  <Button size="xl" className="font-bold text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)]">
                    <Clock className="w-6 h-6 mr-2" />
                    GET MY SUPER QUOTE NOW!
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="xl" variant="secondary" className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]">
                    <Users className="w-6 h-6 mr-2" />
                    Speak to Our Heroes!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;