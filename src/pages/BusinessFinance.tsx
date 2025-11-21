import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Calculator, Users, CheckCircle, Briefcase, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessFinance = () => {
  const vehicleTypes = [
    "Company cars and fleet vehicles",
    "Commercial vans and trucks",
    "Delivery vehicles",
    "Executive cars",
    "Pool cars",
    "Sales team vehicles",
    "Construction vehicles",
    "Agricultural machinery"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Tax Efficient",
      description: "Benefit from tax advantages including VAT recovery and corporation tax relief."
    },
    {
      icon: Calculator,
      title: "Cash Flow Friendly",
      description: "Preserve working capital with affordable monthly payments instead of large upfront costs."
    },
    {
      icon: Building2,
      title: "Fleet Solutions",
      description: "Tailored packages for multiple vehicles with volume discounts available."
    },
    {
      icon: Briefcase,
      title: "Business Support",
      description: "Dedicated commercial team who understand business finance needs."
    }
  ];

  const financeTypes = [
    {
      title: "Business Contract Hire",
      description: "All-inclusive monthly rentals covering maintenance, servicing, and breakdown cover.",
      features: ["Fixed monthly costs", "Maintenance included", "No depreciation risk", "Latest vehicles"],
      bestFor: "Companies wanting predictable costs and newest vehicles"
    },
    {
      title: "Finance Lease",
      description: "Use the vehicle for business purposes with option to purchase at end of term.",
      features: ["100% tax allowable", "VAT reclaimable", "Flexible terms", "Purchase option"],
      bestFor: "Businesses wanting to eventually own the vehicle"
    },
    {
      title: "Operating Lease",
      description: "Rent vehicles for business use with all running costs included in monthly payment.",
      features: ["All costs included", "No capital outlay", "Risk management", "Professional service"],
      bestFor: "Companies wanting full-service vehicle solutions"
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
                <span className="text-primary">BOOM!</span> Business Vehicle <span className="text-secondary">FINANCE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Tax-efficient vehicle finance solutions for your business! From single vehicles to full fleet packages, 
                we help businesses get the vehicles they need while preserving cash flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Truck className="w-5 h-5 mr-2" />
                    Business Application
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              We Finance <span className="text-accent">All Business Vehicles</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {vehicleTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3 comic-panel bg-accent/5 p-4">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Business Finance <span className="text-accent">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <CardTitle className="font-comic text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Business Finance <span className="text-accent">Options</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {financeTypes.map((type, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">{type.title}</CardTitle>
                    <p className="text-muted-foreground text-center text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/10 p-3 rounded">
                      <p className="text-xs text-accent font-semibold mb-1">Best for:</p>
                      <p className="text-xs text-muted-foreground">{type.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                Tax <span className="text-accent">Benefits</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="comic-panel">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">VAT Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Reclaim 50% VAT on car purchases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>100% VAT recovery on commercial vehicles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>VAT on monthly payments reclaimable</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="comic-panel">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">Tax Allowances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>100% Annual Investment Allowance for qualifying vehicles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Monthly payments 100% tax deductible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Enhanced capital allowances for low emission vehicles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Aims Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-primary">BOOM!</span> Our Business Aims
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-accent/5 p-8">
                <div className="text-4xl font-comic font-black text-accent mb-2">🚀</div>
                <div className="text-lg font-semibold text-foreground">Support Business Growth</div>
                <div className="text-muted-foreground mt-2">Help businesses expand with vehicle finance</div>
              </div>
              <div className="comic-panel bg-primary/5 p-8">
                <div className="text-4xl font-comic font-black text-primary mb-2">💼</div>
                <div className="text-lg font-semibold text-foreground">Provide Funding Solutions</div>
                <div className="text-muted-foreground mt-2">Offer tailored finance for every business need</div>
              </div>
              <div className="comic-panel bg-secondary/5 p-8">
                <div className="text-4xl font-comic font-black text-secondary mb-2">⚡</div>
                <div className="text-lg font-semibold text-foreground">Work Efficiently</div>
                <div className="text-muted-foreground mt-2">Deliver fast decisions and smooth service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                Ready to <span className="text-primary">SUPERCHARGE</span> Your Business Vehicles?
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Speak to our business finance superheroes for a tailored quote and tax advice!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/apply" className="w-full sm:w-auto">
                  <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Calculator className="w-5 h-5 mr-2" />
                    GET MY BUSINESS QUOTE NOW!
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Users className="w-5 h-5 mr-2" />
                    Speak to Our Heroes!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessFinance;