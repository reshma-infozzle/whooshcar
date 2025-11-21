import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Calculator, Users, CheckCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";

const VanFinance = () => {
  const vanTypes = [
    "Small vans (Ford Transit Connect, VW Caddy)",
    "Medium vans (Ford Transit Custom, Mercedes Sprinter)",
    "Large vans (Ford Transit, Iveco Daily)",
    "Pickup trucks (Ford Ranger, Isuzu D-Max)",
    "Refrigerated vans",
    "Tipper vans",
    "Crew vans",
    "Electric and hybrid vans"
  ];

  const industries = [
    {
      title: "Tradespeople",
      description: "Plumbers, electricians, builders, and other trades",
      vehicles: "Tool storage, equipment transport"
    },
    {
      title: "Delivery Services",
      description: "Courier services, food delivery, e-commerce",
      vehicles: "Cargo space, fuel efficiency"
    },
    {
      title: "Cleaning Services",
      description: "Commercial and domestic cleaning companies",
      vehicles: "Equipment storage, professional appearance"
    },
    {
      title: "Catering & Mobile Food",
      description: "Mobile catering, food trucks, event services",
      vehicles: "Refrigeration, custom fittings"
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: "100% VAT Recovery",
      description: "Reclaim all VAT on commercial vehicle purchases and monthly payments."
    },
    {
      icon: Wrench,
      title: "Business Tax Relief",
      description: "Monthly payments are 100% tax deductible as a business expense."
    },
    {
      icon: Calculator,
      title: "Preserve Cash Flow",
      description: "Affordable monthly payments instead of large upfront capital outlay."
    },
    {
      icon: Truck,
      title: "Latest Vehicles",
      description: "Access to newest, most fuel-efficient vans with latest safety features."
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
                <span className="text-primary">WHOOSH!</span> Van <span className="text-secondary">FINANCE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get the commercial vehicle your business needs with our flexible van finance options! 
                Competitive rates, lightning-fast decisions, and 100% VAT recovery available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Truck className="w-5 h-5 mr-2" />
                    Apply Now
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

        {/* Van Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              We Finance <span className="text-primary">All Van Types</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {vanTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3 comic-panel bg-primary/5 p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Perfect for <span className="text-primary">Your Industry</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-comic text-lg text-center">{industry.title}</CardTitle>
                    <p className="text-muted-foreground text-sm text-center">{industry.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="text-xs text-primary font-semibold mb-1">Ideal for:</p>
                      <p className="text-xs text-muted-foreground">{industry.vehicles}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Van Finance <span className="text-primary">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
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

        {/* Finance Options Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Van Finance <span className="text-primary">Options</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">Hire Purchase</CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    Own the van at the end with fixed monthly payments
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Own the van outright</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Fixed monthly payments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>No mileage restrictions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>100% VAT recovery</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold">Best for: Businesses wanting to own their vans</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">Finance Lease</CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    Use the van with option to purchase at the end
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Lower monthly payments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>100% tax allowable</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Purchase option available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Flexible end-of-term options</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold">Best for: Businesses wanting flexibility</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">Operating Lease</CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    All-inclusive rental with maintenance included
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Maintenance included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Fixed monthly costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>No depreciation risk</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Latest vehicles</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold">Best for: Hassle-free van usage</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                <span className="text-primary">BOOM!</span> Our Van Finance Aims
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center comic-panel bg-primary/5 p-8">
                  <div className="text-4xl font-comic font-black text-primary mb-2">🚐</div>
                  <div className="text-lg font-semibold text-foreground">Get You Moving</div>
                  <div className="text-muted-foreground mt-2">Help you find the perfect van finance solution</div>
                </div>
                <div className="text-center comic-panel bg-secondary/5 p-8">
                  <div className="text-4xl font-comic font-black text-secondary mb-2">💼</div>
                  <div className="text-lg font-semibold text-foreground">Support Your Business</div>
                  <div className="text-muted-foreground mt-2">Provide flexible finance for commercial needs</div>
                </div>
                <div className="text-center comic-panel bg-accent/5 p-8">
                  <div className="text-4xl font-comic font-black text-accent mb-2">⚡</div>
                  <div className="text-lg font-semibold text-foreground">Work Fast</div>
                  <div className="text-muted-foreground mt-2">Deliver quick decisions and smooth service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                Get Your <span className="text-primary">VAN FINANCE</span> Quote Today
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Lightning-fast decisions, competitive rates, and expert advice for your commercial vehicle needs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/calculator" className="w-full sm:w-auto">
                  <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Calculator className="w-5 h-5 mr-2" />
                    CALCULATE MY VAN PAYMENTS!
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Users className="w-5 h-5 mr-2" />
                    Speak to Van Heroes!
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

export default VanFinance;