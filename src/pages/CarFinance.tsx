import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Shield, Calculator, Clock, CheckCircle, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const CarFinance = () => {
  const financeTypes = [
    {
      title: "Hire Purchase (HP)",
      description: "Spread the cost with fixed monthly payments, and own the car outright at the end.",
      features: ["Own the car at the end", "Fixed monthly payments", "No mileage restrictions", "Simple and straightforward"]
    },
    {
      title: "Personal Contract Purchase (PCP)",
      description: "Lower monthly payments with the option to buy, return, or exchange your car at the end.",
      features: ["Lower monthly payments", "Flexible end options", "Mileage allowance", "Optional final payment"]
    },
    {
      title: "Personal Loan",
      description: "Borrow money to buy your car outright, then pay back in fixed monthly installments.",
      features: ["Immediate ownership", "No restrictions", "Competitive rates", "Flexible terms"],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "FCA Regulated",
      description: "We're fully regulated by the Financial Conduct Authority for your protection."
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "Access to exclusive rates from 3.9% APR through our network of lenders."
    },
    {
      icon: Clock,
      title: "Quick Decisions",
      description: "Get a decision in minutes and funding within 24 hours of acceptance."
    },
    {
      icon: Calculator,
      title: "Flexible Terms",
      description: "Choose from 12 to 84 months repayment terms to suit your budget."
    }
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
                Car <span className="text-primary">FINANCE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find the perfect car finance deal with rates from 3.9% APR. 
                Compare deals from 30+ lenders and get approved in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button size="lg" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payments
                  </Button>
                </Link>
                <Link to="/apply">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Car className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
              Choose Your <span className="text-primary">Finance Type</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {financeTypes.map((type, index) => (
                <Card key={index} className="relative comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">{type.title}</CardTitle>
                    <CardContent className="px-0">
                      <p className="text-muted-foreground text-center mb-6">{type.description}</p>
                      <ul className="space-y-3">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
              Why Choose Our <span className="text-primary">Car Finance?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="comic-panel bg-background p-4 sm:p-6 mb-3 sm:mb-4">
                    <benefit.icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-comic font-bold text-base sm:text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic font-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                Representative <span className="text-primary">Rates</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                <div className="text-center comic-panel bg-primary/5 p-4 sm:p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl font-comic font-black text-primary mb-2">3.9%</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">Representative APR</div>
                  <div className="text-muted-foreground mt-2 text-sm sm:text-base">For customers with excellent credit</div>
                </div>
                <div className="text-center comic-panel bg-secondary/5 p-4 sm:p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl font-comic font-black text-secondary mb-2">£0</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">Application Fee</div>
                  <div className="text-muted-foreground mt-2 text-sm sm:text-base">No upfront costs or hidden charges</div>
                </div>
                <div className="text-center comic-panel bg-accent/5 p-4 sm:p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl font-comic font-black text-accent mb-2">84</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">Max Term (Months)</div>
                  <div className="text-muted-foreground mt-2 text-sm sm:text-base">Flexible repayment periods</div>
                </div>
              </div>
              
              <div className="text-center text-xs sm:text-sm text-muted-foreground px-2">
                <p className="mb-2">
                  Representative example: Borrowing £10,000 over 48 months with a representative APR of 3.9%, 
                  you would make 48 monthly payments of £226.58. Total amount payable £10,876.
                </p>
                <p>
                  The rate you'll be offered will depend on your personal circumstances and credit history. 
                  Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-2 sm:px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic font-black mb-4 sm:mb-6 px-2">
              Ready to Finance Your Car?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Get a personalised quote in just 2 minutes without affecting your credit score.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calculator className="w-5 h-5 mr-2" />
                Get Your Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarFinance;