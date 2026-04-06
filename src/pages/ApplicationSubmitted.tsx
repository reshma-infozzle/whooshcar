import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Shield, Home, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const ApplicationSubmitted = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Application Submitted - Whoosh Car Finance</title>
        <meta name="description" content="Your car finance application has been successfully submitted." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 pt-20 sm:pt-24 md:pt-28">
        <Header />

        <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="max-w-2xl mx-auto">

            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black shadow-comic animate-scale-in">
                <CheckCircle className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="font-comic text-3xl md:text-5xl text-black mb-3">
                🎉 Application <span className="text-primary">Successfully Submitted!</span>
              </h1>
            </div>

            {/* Partner Handoff Banner */}
            <Card className="border-4 border-primary shadow-comic-lg p-5 md:p-6 bg-primary text-primary-foreground mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 border-3 border-black">
                  <Handshake className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-comic text-lg md:text-xl text-primary-foreground mb-1">
                    Our Partner <span className="font-bold text-2xl md:text-3xl uppercase tracking-wide block mt-1">Concierge Motor Finance</span> Will Be in Touch
                  </h2>
                  <p className="font-body text-sm md:text-base text-primary-foreground/90">A specialist will contact you to discuss your quote and options. Please keep your phone nearby and check your emails.</p>
                </div>
              </div>
            </Card>

            {/* Credit Score Safe */}
            <Card className="border-4 border-black shadow-comic p-6 md:p-8 bg-card mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-comic text-base md:text-lg text-black mb-1">Your Credit Score Is Safe</h3>
                  <p className="font-body text-sm md:text-base text-card-foreground/80">
                    Only a <strong>soft credit search</strong> has been completed — no hard checks without your permission.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="border-4 border-black shadow-comic p-6 bg-accent/10 mb-8">
              <h3 className="font-comic text-lg text-black mb-3">Need to Get in Touch?</h3>
              <div className="flex items-center gap-3 font-body text-black/80">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@whooshcarfinance.co.uk" className="hover:text-primary transition-colors text-sm md:text-base font-medium">
                  hello@whooshcarfinance.co.uk
                </a>
              </div>
            </Card>

            {/* Return Home */}
            <div className="flex justify-center">
              <Button asChild size="lg" className="font-comic text-lg px-8 py-6">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>);

};

export default ApplicationSubmitted;