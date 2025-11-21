import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, CheckCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "1",
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "Apply Online",
    description: "Complete our simple 2-minute application form with basic details about yourself and your car requirements."
  },
  {
    number: "2", 
    icon: <Search className="w-12 h-12 text-secondary" />,
    title: "We Search & Compare",
    description: "Our smart technology searches across many lenders to find the best deals matching your profile and credit score."
  },
  {
    number: "3",
    icon: <CheckCircle className="w-12 h-12 text-accent" />,
    title: "Choose Your Deal", 
    description: "Review personalized quotes with clear terms, monthly payments, and APR rates. No hidden surprises."
  },
  {
    number: "4",
    icon: <Car className="w-12 h-12 text-primary" />,
    title: "Get Your Car",
    description: "Once approved, collect your car from any FCA regulated dealer or have it delivered to your door. Drive away happy!"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow relative">
      
      
      
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Comic style title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-4 sm:mb-6 md:mb-8">
            How WHOOSH Works!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body px-2 leading-relaxed">
            Getting your car finance has never been easier! Follow these simple steps to drive away in your dream car and start whooshing around town.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="comic-panel relative group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-105 hover:-translate-y-2">
                <div className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                  {/* Step number with starburst */}
                  <div className="comic-panel w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 bg-primary flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                    <span className="text-xl sm:text-2xl font-comic text-black">{step.number}</span>
                  </div>
                  
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 group-hover:animate-bounce-gentle">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-comic text-black mb-2 sm:mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed font-body hidden sm:block lg:block">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section with comic styling */}
          <div className="comic-panel text-center bg-primary p-6 sm:p-8 md:p-10 lg:p-12 text-black">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-black/80 font-body px-2 leading-relaxed">
              Join thousands of happy customers and get your car finance sorted today!
            </p>
            <Link to="/apply">
              <Button variant="default" size="lg" className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 font-comic min-h-[48px]">
                <Car className="w-5 h-5 sm:w-6 sm:h-6" />
                Start My WHOOSH Journey!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};