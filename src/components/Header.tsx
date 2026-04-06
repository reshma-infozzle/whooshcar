import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavData {
  id: number;
  button_text: string;
  button_url: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navData, setNavData] = useState<NavData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.whooshcarfinance.co.uk/api/navigations")
      .then(res => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then(data => {
        setNavData(data.data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Navigation API error:", err);
        setLoading(false);
      });
  }, []);

  const links = navData?.links || [];

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
        <div className="comic-panel bg-white/95 backdrop-blur-sm shadow-comic mx-2 sm:mx-4 mt-2">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
              {/* Logo stays the same */}
              <div className="flex items-center lg:flex gap-8">
                <div className="relative"></div>
                <div className="relative flex flex-col items-start">
                  <Link to="/" className="block">
                    <span className="shimmer h-6 w-20 rounded text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-comic font-black text-foreground transform hover:scale-110 transition-transform duration-200 drop-shadow-lg"></span>
                  </Link>
                  <span className="shimmer h-6 w-20 rounded font-comic text-lg sm:text-2xl text-primary -mt-3 sm:-mt-2"></span>
                </div>
              </div>

              {/* Shimmer Navigation - Desktop */}
              <div className="hidden lg:flex items-center gap-8">
                <div className="shimmer h-6 w-20 rounded"></div>
                <div className="shimmer h-6 w-16 rounded"></div>
                <div className="shimmer h-6 w-24 rounded"></div>
              </div>

              {/* Shimmer Navigation - Tablet */}
              <div className="shimmer h-6 w-6 rounded md:block lg:hidden"></div>

              {/* Shimmer CTA Button - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="shimmer h-10 w-28 rounded-lg"></div>
              </div>

              {/* Shimmer Menu Button - Mobile */}
              <div className="md:hidden">
                <div className="shimmer h-6 w-6 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="comic-panel bg-white/95 backdrop-blur-sm shadow-comic mx-2 sm:mx-4 mt-2">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo - UNCHANGED */}
            <div className="flex items-center gap-6">
              <div className="relative"></div>
              <div className="relative flex flex-col items-start">
                <Link to="/" className="block">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-comic font-black text-foreground transform hover:scale-110 transition-transform duration-200 drop-shadow-lg">WHOOSH!</span>
                </Link>
                <span className="font-comic text-lg sm:text-2xl text-primary -mt-3 sm:-mt-2">Car Finance</span>
              </div>
            </div>

            {/* Desktop Navigation - NOW DYNAMIC */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.url}
                  className="text-foreground hover:text-primary transition-colors font-comic text-lg hover:scale-110 transform duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Tablet Menu Button */}
            <button className="hidden md:block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>

            {/* CTA Button - NOW DYNAMIC */}
            {/* <div className="hidden lg:flex items-center gap-4">
              <Button asChild variant="default" size="lg">
                <Link to={navData?.button_url || "/apply"}>
                  {navData?.button_text || "Get Quote"}
                </Link>
              </Button>
                <span className="text-[10px] font-normal opacity-80 leading-tight">10.9% Rep. APR (From 9.9%)</span>
            </div> */}

            <div className="hidden lg:flex items-center">
              <Button asChild variant="default" size="lg" className="px-6 py-3">
                <Link
                  to={navData?.button_url || "/apply"}
                  className="flex flex-col items-center leading-tight"
                >
                  <span className="text-base font-bold">
                    {navData?.button_text || "Get A Quote"}
                  </span>

                  <span className="text-[14px] font-normal opacity-90">
                    10.9% Rep. APR
                  </span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile & Tablet Menu - NOW DYNAMIC */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border bg-white">
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.url}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <div className="pt-4 border-t border-border">
                  <Button asChild variant="default" size="lg" className="w-full">
                    <Link 
                      to={navData?.button_url || "/apply"}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {navData?.button_text || "Get Quote"}
                    </Link>
                  </Button>
                  
                </div> */}
                <div className="pt-4 border-t border-border">
                  <Button
                    asChild
                    variant="default"
                    className="w-full h-auto py-3"
                  >
                    <Link
                      to={navData?.button_url || "/apply"}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center justify-center leading-none"
                    >
                      <span className="text-base font-bold leading-none">
                        {navData?.button_text || "Get A Quote"}
                      </span>

                      <span className="text-[12px] font-normal leading-none mt-1">
                        10.9% Rep. APR
                      </span>
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
