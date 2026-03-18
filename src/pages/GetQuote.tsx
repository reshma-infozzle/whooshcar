import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, Shield, Car, Star } from "lucide-react";
import { getRepresentativeExample, formatRepresentativeDisclosure } from "@/lib/mocks/representativeExample";
import { Footer } from "@/components/Footer";


const GetQuote = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const utmSource = searchParams.get("utm_source") || "";
  const utmMedium = searchParams.get("utm_medium") || "";
  const utmCampaign = searchParams.get("utm_campaign") || "";
  
  const [loanAmount, setLoanAmount] = useState([15000]);


  const handleGetQuote = () => {
    const params = new URLSearchParams();
    params.set("amount", loanAmount[0].toString());
    if (utmSource) params.set("utm_source", utmSource);
    if (utmMedium) params.set("utm_medium", utmMedium);
    if (utmCampaign) params.set("utm_campaign", utmCampaign);
    
    navigate(`/apply?${params.toString()}`);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const representativeExample = getRepresentativeExample(10000);

  const benefits = [
    { icon: Shield, text: "SOFT CREDIT SEARCH FIRST" },
    { icon: Check, text: "MOST CREDIT TYPES CONSIDERED" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal Header */}
      <header className="bg-card border-b-4 border-foreground">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center max-w-3xl">
          <div className="flex flex-col items-start">
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-comic font-black text-foreground transform transition-transform duration-200 drop-shadow-lg">
              WHOOSH!
            </span>
            <span className="font-comic text-lg sm:text-2xl text-primary -mt-3 sm:-mt-2">Car Finance</span>
          </div>
          {/* <div className="flex items-center gap-1 bg-primary px-2.5 py-1 rounded border-2 border-foreground">
            <Star className="w-3.5 h-3.5 fill-foreground text-foreground" />
            <span className="text-xs font-comic font-bold text-foreground">Excellent</span>
          </div> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-comic font-black text-foreground leading-tight mb-2">
            Check Your <span className="text-primary">Car Finance</span> Eligibility
          </h1>
          <p className="text-muted-foreground font-comic">
            No obligation • Takes 60 seconds
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto mb-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 bg-secondary/40 px-3 py-2 rounded-lg border-2 border-foreground"
            >
              <benefit.icon className="w-4 h-4 text-foreground flex-shrink-0" />
              <span className="text-xs sm:text-sm font-comic text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Quote Form Panel */}
        <div className="comic-panel p-5 sm:p-6 mb-6 max-w-lg mx-auto">
          {/* Loan Amount */}
          <div className="mb-5">
            <label className="block text-sm md:text-xl text-foreground mb-4 text-center font-body">
              How much would you like to borrow?
            </label>
            <div className="text-center mb-4">
              <span className="text-4xl sm:text-5xl font-comic font-black text-foreground">
                {formatCurrency(loanAmount[0])}
              </span>
            </div>
            <Slider
              value={loanAmount}
              onValueChange={setLoanAmount}
              max={50000}
              min={3000}
              step={500}
              className="w-full mb-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground font-comic">
              <span>£3,000</span>
              <span>£50,000</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={handleGetQuote}
            className="w-full font-comic font-bold text-lg py-6 shadow-comic border-4 border-foreground animate-button-pulse-slow"
          >
            <Car className="w-5 h-5 mr-2" />
            Get a Quote
          </Button>
          
          {/* <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5 font-body">
            <Shield className="w-3.5 h-3.5" />
            No impact on your credit score
          </p> */}
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <div className="bg-primary/10 px-4 py-2 rounded-lg border-2 border-foreground comic-panel">
            <span className="text-xs sm:text-sm font-body text-foreground">FCA Regulated</span>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-lg border-2 border-foreground comic-panel">
            <span className="text-xs sm:text-sm font-body text-foreground">Secure & Encrypted</span>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-lg border-2 border-foreground comic-panel">
            <span className="text-xs sm:text-sm font-body text-foreground">Most Credit Types Considered</span>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-lg border-2 border-foreground comic-panel">
            <span className="text-xs sm:text-sm font-body text-foreground">No Upfront Fees</span>
          </div>
        </div>

        
      </main>   

      {/* Compliance Footer */}
      {/* <footer className="bg-foreground text-background py-8 mt-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-4">
            <p className="text-sm leading-relaxed opacity-80">
              Representative example: Borrowing £7,000 over 60 months at a representative APR of 21.9% (fixed), 60 monthly payments of £192.93. Total amount payable: £11,575.80. Total cost of credit: £4,575.80. This is an example only, all finance subject to status.
            </p>
            <p className="text-sm opacity-60">
              Whoosh Finance is a credit broker, not a lender. Authorised and regulated by the FCA (Reg: 123456).
              We introduce you to lenders who may pay us commission.
            </p>
            <p className="text-sm opacity-40">
              © {new Date().getFullYear()} Whoosh Finance
            </p>
          </div>
        </div>
      </footer> */}

      <Footer />
    </div>
  );
};

export default GetQuote;
