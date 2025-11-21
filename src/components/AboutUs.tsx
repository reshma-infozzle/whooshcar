import { MapPin, Heart, Users, Check, Shield, Clock, TrendingUp, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "2-Minute Application",
    description: "Quick and easy online application with instant decision in most cases"
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "FCA Regulated",
    description: "Fully regulated by the Financial Conduct Authority for your peace of mind"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    title: "Best Rates Guaranteed",
    description: "We compare 20+ lenders to find you the most competitive rates available"
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "All Credit Welcome",
    description: "Good, bad, or no credit history - we work with specialist lenders for everyone"
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Amazing Customer Service",
    description: "Dedicated support team available 7 days a week to guide you through every step"
  },
  {
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: "No Hidden Fees",
    description: "Transparent pricing with no arrangement fees, early repayment charges, or surprises"
  }
];

export const AboutUs = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 halftone-dots-yellow relative overflow-hidden">
      {/* Comic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 lg:p-12 border-2 sm:border-4 border-black shadow-comic-lg">
          
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
            {/* Title with WHOOSH branding */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-comic text-black mb-3 sm:mb-4 md:mb-6 px-2">
              Who Are <span className="text-primary">Whoosh?</span>
            </h2>

            {/* Benefits Section */}
            <div className="mb-8 sm:mb-12">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-body px-2 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                We make car finance simple, fast, and fair. Here's why thousands choose us every month!
              </p>

              {/* Mobile: Horizontal scroll, Desktop: Grid */}
              <div className="md:hidden">
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex gap-3 pb-6 pt-2 px-2">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index} 
                        className="comic-panel group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-[1.02] hover:-translate-y-1 flex-shrink-0 w-64 h-72"
                      >
                        <div className="p-4 text-center space-y-2 h-full flex flex-col">
                          <div className="flex justify-center mb-1 group-hover:animate-bounce-gentle">
                            {benefit.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-comic text-black leading-tight">
                            {benefit.title}
                          </h3>
                          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-body flex-1 flex items-center text-center whitespace-normal hyphens-auto">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index} 
                    className="comic-panel group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="p-8 text-center space-y-4">
                      <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-comic text-black">
                        {benefit.title}
                      </h3>
                      <p className="text-black/70 leading-relaxed font-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comic stats row with panels */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="comic-panel text-center bg-primary p-6">
                  <div className="text-3xl font-comic text-black mb-2">We Love</div>
                  <div className="text-black/70 font-body">Happy Customers</div>
                </div>
                <div className="comic-panel text-center bg-secondary p-6">
                  <div className="text-3xl font-comic text-black mb-2">We Get</div>
                  <div className="text-black/70 font-body">Finance Arranged</div>
                </div>
                <div className="comic-panel text-center bg-accent p-6">
                  <div className="text-3xl font-comic text-black mb-2">we have</div>
                  <div className="text-black/70 font-body">Trusted Lenders</div>
                </div>
                <div className="comic-panel text-center bg-comic-yellow p-6">
                  <div className="text-3xl font-comic text-black mb-2">We Are</div>
                  <div className="text-black/70 font-body">Customer First</div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              {/* Manchester Heritage */}
              <div className="comic-panel bg-primary p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <MapPin className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">Born in Manchester</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  Proudly founded in the heart of Manchester, we understand what hardworking people need from their car finance.
                </p>
              </div>

              {/* Customer Focus */}
              <div className="comic-panel bg-secondary p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <Heart className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">Your Best Interest</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  We're not just another broker - we genuinely care about finding you the right deal, not the most profitable one for us.
                </p>
              </div>

              {/* Community Trust */}
              <div className="comic-panel bg-accent p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <Users className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">Built on Trust</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  Every recommendation we make is based on what's truly best for you and your family's financial future.
                </p>
              </div>
            </div>

            {/* Bottom message */}
            <div className="pt-4">
              <p className="text-base sm:text-lg text-black/90 font-body leading-relaxed max-w-2xl mx-auto">
                When you choose <span className="font-comic text-primary">WHOOSH!</span>, you're choosing a team that puts your needs first, 
                backed by Manchester values and genuine care for your financial wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};