import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="comic-panel bg-white/95 backdrop-blur-sm shadow-comic mx-2 sm:mx-4 mt-2">
        <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="relative">
              {/* Main logo container - bigger and more colorful */}
              
              {/* Enhanced comic effect decorations */}
              
              
              
              
            </div>
            <div className="relative flex flex-col items-start">
              <Link to="/" className="block">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-comic font-black text-foreground transform hover:scale-110 transition-transform duration-200 drop-shadow-lg">WHOOSH!</span>
              </Link>
              <span className="font-comic text-lg sm:text-2xl text-primary -mt-3 sm:-mt-2">Car Finance</span>
            </div>
          </div>

          {/* Desktop Navigation - Large screens only */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200">
              How It Works
            </Link>
            <Link to="/calculator" className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200">
              Calculator
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200">
              About Us
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200">
              Contact
            </Link>
          </nav>

          {/* Tablet Menu Button */}
          <button className="hidden md:block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* CTA Button - Desktop only */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/apply">
              <Button variant="default" size="lg">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col gap-4">
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/calculator" className="text-foreground hover:text-primary transition-colors">
                Calculator
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <Link to="/apply" className="block">
                  <Button variant="default" size="lg" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>}
        </div>
      </div>
    </header>;
};