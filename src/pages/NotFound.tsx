import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 my-4 text-center">
          <div className="comic-panel bg-white/95 p-12 border-4 border-black shadow-comic-lg max-w-2xl mx-auto">
            <div className="mb-8">
              <Car className="w-24 h-24 text-primary mx-auto mb-6 animate-bounce" />
              <h1 className="text-6xl md:text-8xl font-comic text-black mb-4">
                <span className="text-primary">404</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-comic text-black mb-4">
                Oops! This Route Doesn't <span className="text-secondary">WHOOSH!</span>
              </h2>
              <p className="text-lg text-black/80 font-body mb-8">
                Looks like you've taken a wrong turn on the superhighway! 
                Don't worry - even superheroes get lost sometimes.
              </p>
              <Button 
                size="xl" 
                onClick={() => window.location.href = '/'} 
                className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
              >
                <ArrowLeft className="w-6 h-6" />
                WHOOSH Back Home!
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
