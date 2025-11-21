import { Button } from "@/components/ui/button";
import { Car, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-comic-car.jpg";
export const Hero = () => {
  return <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      
      <div className="w-full pt-20 sm:pt-22 md:pt-24 pb-8 sm:pb-10 md:pb-12 relative">

        {/* Responsive main panel */}
        <div className="comic-panel bg-white/95 mx-2 sm:mx-4 mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 lg:p-8 border-2 sm:border-4 border-black shadow-comic-lg relative overflow-hidden">
          
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between w-full relative z-10">
          {/* Main Content - Optimised for all devices */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center w-full lg:w-3/5 order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-comic text-black leading-tight">
              <span className="text-primary">WHOOSH!</span> <span className="text-secondary">Fast Car Finance</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-black/80 font-body leading-relaxed max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-0">
              Lightning-fast car finance that moves at your speed! Compare deals instantly, get approved in a breeze.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <Link to="/apply">
                <Button variant="default" size="xl" className="font-bold text-base sm:text-lg md:text-xl w-full sm:w-auto animate-button-pulse-slow shadow-[4px_4px_0px_rgb(0_0_0_/_1)] min-h-[48px] px-6">
                  <Car className="w-5 h-5 sm:w-6 sm:h-6" />
                  WHOOSH ME A QUOTE!
                </Button>
              </Link>
            </div>

            {/* Trust badges - responsive */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6">
              <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2 bg-primary">
                <div className="flex items-center gap-1 sm:gap-2 text-black">
                  <Shield className="w-4 h-4 sm:w-4 sm:h-4" />
                  <span className="font-comic text-sm sm:text-sm">FCA Regulated!</span>
                </div>
              </div>
              <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2 bg-secondary">
                <div className="flex items-center gap-1 sm:gap-2 text-black">
                  <Clock className="w-4 h-4 sm:w-4 sm:h-4" />
                  <span className="font-comic text-sm sm:text-sm">2-Minute App!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Panel - Responsive sizing */}
          <div className="relative w-full lg:w-3/5 order-2 flex justify-center">
            <div className="comic-panel overflow-hidden bg-white p-2 sm:p-3 shadow-comic w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <img src="/lovable-uploads/b331e922-ed55-491d-8f90-5c9cd1748e3a.png" alt="Comic style couple in blue Mercedes convertible with WHOOSH text and sparkles" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>;
};