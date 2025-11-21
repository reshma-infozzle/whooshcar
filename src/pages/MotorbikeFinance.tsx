import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Zap, Calculator, Users, CheckCircle, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const MotorbikeFinance = () => {
  const bikeTypes = [
    "Sport bikes and superbikes",
    "Cruisers and touring bikes",
    "Naked and streetfighter bikes",
    "Adventure and dual-sport bikes",
    "Scooters and mopeds",
    "Electric motorcycles",
    "Classic and vintage bikes",
    "Trikes and three-wheelers"
  ];

  const benefits = [
    {
      icon: Wind,
      title: "Quick Decisions",
      description: "Get approved in minutes and be riding your dream bike within days."
    },
    {
      icon: Zap,
      title: "Flexible Terms",
      description: "Choose from 12 to 60 months repayment terms to suit your budget."
    },
    {
      icon: Calculator,
      title: "Competitive Rates",
      description: "Access to competitive rates from specialist motorcycle lenders."
    },
    {
      icon: Bike,
      title: "All Bikes Welcome",
      description: "From 125cc learner bikes to high-performance superbikes."
    }
  ];

  const financeOptions = [
    {
      title: "Personal Contract Purchase (PCP)",
      description: "Lower monthly payments with flexible end-of-term options for your bike.",
      features: ["Lower monthly payments", "Guaranteed minimum future value", "Upgrade, keep, or return options", "Deposit contribution available"]
    },
    {
      title: "Hire Purchase (HP)",
      description: "Spread the cost with fixed payments and own your bike at the end.",
      features: ["Own the bike outright", "Fixed monthly payments", "No mileage restrictions", "Simple and straightforward"]
    },
    {
      title: "Personal Loan",
      description: "Borrow money to buy your bike outright with complete ownership from day one.",
      features: ["Immediate ownership", "No restrictions on modifications", "Use for any bike", "Competitive fixed rates"],
      popular: false
    }
  ];

  const ageGroups = [
    {
      title: "Young Riders (17-25)",
      description: "Special consideration for new and young riders",
      features: ["125cc learner bikes", "A2 licence bikes (up to 47bhp)", "First bike finance", "Parental guarantor options"]
    },
    {
      title: "Experienced Riders",
      description: "Finance for full licence holders",
      features: ["Unlimited power bikes", "Premium and luxury motorcycles", "Multiple bike finance", "Trade-in options"]
    },
    {
      title: "Returning Riders",
      description: "Welcome back to motorcycling",
      features: ["Refresher-friendly bikes", "Touring and commuter bikes", "Flexible credit assessment", "Riding course discounts"]
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
                <span className="text-secondary">ZOOM!</span> Motorbike <span className="text-primary">FINANCE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get on the road with our specialist motorcycle finance! From 125cc learner bikes to high-performance superbikes, 
                we help riders of all levels find the perfect finance deal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Bike className="w-5 h-5 mr-2" />
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

        {/* Bike Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              We Finance <span className="text-secondary">All Motorcycles</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {bikeTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3 comic-panel bg-secondary/5 p-4">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{type}</span>
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
              Motorcycle Finance <span className="text-secondary">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <benefit.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
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
              Motorcycle Finance <span className="text-secondary">Options</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {financeOptions.map((option, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">{option.title}</CardTitle>
                    <p className="text-muted-foreground text-center text-sm">{option.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Age Groups Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
              Finance for <span className="text-secondary">Every Rider</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {ageGroups.map((group, index) => (
                <Card key={index} className="comic-panel hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">{group.title}</CardTitle>
                    <p className="text-muted-foreground text-center text-sm">{group.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {group.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-comic font-black text-center mb-12">
                Ride Safe, <span className="text-secondary">Ride Smart</span>
              </h2>
              <Card className="comic-panel bg-secondary/5">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-comic text-2xl mb-4">Safety First</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>Free motorcycle training course vouchers with selected finance packages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>Comprehensive insurance options available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>Extended warranty packages for peace of mind</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>Breakdown cover included with premium packages</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="comic-panel bg-background p-6">
                        <Bike className="w-16 h-16 text-secondary mx-auto mb-4" />
                        <p className="text-lg font-comic font-bold text-secondary">
                          Ride Responsibly
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Always wear protective gear and ride within your limits
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Aims Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-primary">ZOOM!</span> Our Motorbike Aims
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-secondary/5 p-8">
                <div className="text-4xl font-comic font-black text-secondary mb-2">🏍️</div>
                <div className="text-lg font-semibold text-foreground">Get You Riding</div>
                <div className="text-muted-foreground mt-2">Help you find the perfect bike finance deal</div>
              </div>
              <div className="comic-panel bg-primary/5 p-8">
                <div className="text-4xl font-comic font-black text-primary mb-2">💨</div>
                <div className="text-lg font-semibold text-foreground">Support Your Freedom</div>
                <div className="text-muted-foreground mt-2">Provide flexible finance for every rider</div>
              </div>
              <div className="comic-panel bg-accent/5 p-8">
                <div className="text-4xl font-comic font-black text-accent mb-2">⚡</div>
                <div className="text-lg font-semibold text-foreground">Work Fast</div>
                <div className="text-muted-foreground mt-2">Deliver quick decisions and smooth service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-secondary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                <span className="text-secondary">WHOOSH!</span> Ready to Hit the Road?
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Get your personalized motorcycle finance quote and start your riding journey today, road warrior!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Calculator className="w-5 h-5 mr-2" />
                    CALCULATE MY BIKE PAYMENTS!
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="xl" variant="secondary" className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]">
                    <Users className="w-6 h-6 mr-2" />
                    Speak to Bike Heroes!
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

export default MotorbikeFinance;