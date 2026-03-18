import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2, Shield, Home, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ApplicationComplete = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation - 60 seconds total, update every 600ms
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 600);

    // After 60 seconds, show result
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Simulate acceptance (in real app, this would come from backend)
      setIsAccepted(Math.random() > 0.2); // 80% acceptance rate for demo
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{isLoading ? "Comparing Offers" : "Application Result"} - Whoosh Car Finance</title>
        <meta name="description" content="We're comparing car finance offers for you." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 pt-20 sm:pt-24 md:pt-28">
        <Header />
        
        <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Back Button - Always visible */}
          <div className="max-w-2xl mx-auto mb-4">
            <Button
              variant="outline"
              asChild
              className="font-comic border-2 border-black bg-white"
            >
              <Link to="/marketing-preferences">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>

          {isLoading ? (
            // Loading State
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-4 border-black shadow-comic p-8 md:p-12 bg-white">
                <div className="mb-8">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Loader2 className="w-24 h-24 text-primary animate-spin" />
                  </div>
                  <h1 className="font-comic text-2xl md:text-4xl text-black mb-4">
                    <span className="text-primary">WHOOSH!</span> Comparing Offers...
                  </h1>
                  <p className="font-body text-lg text-black/80 mb-6">
                    We're searching our panel of lenders to find the best deals for you
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-4 mb-4 border-2 border-black overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="font-comic text-sm text-black/60 mb-8">{progress}% complete</p>

                {/* No Credit Impact Notice */}
                <div className="flex items-center justify-center gap-2 p-4 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <Shield className="w-6 h-6 text-secondary" />
                  <p className="font-comic text-base text-black">
                    <strong>No impact</strong> on your credit score
                  </p>
                </div>

                <div className="mt-8 space-y-2 text-left">
                  <p className={`font-body text-sm flex items-center gap-2 transition-opacity ${progress > 20 ? 'text-primary' : 'text-black/40'}`}>
                    <CheckCircle className="w-4 h-4" /> Verifying your details
                  </p>
                  <p className={`font-body text-sm flex items-center gap-2 transition-opacity ${progress > 40 ? 'text-primary' : 'text-black/40'}`}>
                    <CheckCircle className="w-4 h-4" /> Searching lender panel
                  </p>
                  <p className={`font-body text-sm flex items-center gap-2 transition-opacity ${progress > 60 ? 'text-primary' : 'text-black/40'}`}>
                    <CheckCircle className="w-4 h-4" /> Comparing interest rates
                  </p>
                  <p className={`font-body text-sm flex items-center gap-2 transition-opacity ${progress > 80 ? 'text-primary' : 'text-black/40'}`}>
                    <CheckCircle className="w-4 h-4" /> Finalizing offers
                  </p>
                </div>
              </Card>
            </div>
          ) : isAccepted ? (
            // Accepted - redirect to submission confirmation
            (() => {
              navigate("/application-submitted");
              return null;
            })()
          ) : (
            // Not Accepted State
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black shadow-comic animate-scale-in">
                  <XCircle className="w-12 h-12 text-black/50" />
                </div>
                <h1 className="font-comic text-3xl md:text-5xl text-black mb-4">
                  Not This Time
                </h1>
                <p className="font-body text-lg text-black/80">
                  Unfortunately, we couldn't find a suitable offer right now.
                </p>
              </div>

              <Card className="border-4 border-black shadow-comic p-6 md:p-8 bg-white mb-6">
                <h2 className="font-comic text-xl md:text-2xl text-black mb-4">What Can You Do?</h2>
                <div className="space-y-4 font-body text-black/80">
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Don't worry</strong> - this soft search has not affected your credit score.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>You can <strong>reapply in 30 days</strong> when your circumstances may have changed.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consider <strong>building your credit score</strong> with on-time payments and reducing existing debt.</span>
                  </p>
                </div>
              </Card>

              <Card className="border-4 border-black shadow-comic p-6 bg-accent/10 mb-8">
                <h3 className="font-comic text-lg text-black mb-3">Questions? We're Here to Help</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-body text-black/80">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:01onal234567890" className="hover:text-primary transition-colors text-sm">
                      0123 456 7890
                    </a>
                  </div>
                  <div className="flex items-center gap-3 font-body text-black/80">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:support@whooshfinance.co.uk" className="hover:text-primary transition-colors text-sm">
                      support@whooshfinance.co.uk
                    </a>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center">
                <Button asChild size="lg" className="font-comic text-lg px-8 py-6">
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2" />
                    Return Home
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicationComplete;
