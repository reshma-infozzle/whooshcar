import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, TrendingUp, Users, CheckCircle, AlertCircle, Car, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const BadCreditFinance = () => {
  const creditIssues = [
    "County Court Judgements (CCJs)",
    "Individual Voluntary Arrangements (IVAs)",
    "Defaults on previous loans",
    "Missed payments or arrears",
    "Bankruptcy or insolvency",
    "No credit history",
    "Self-employed income",
    "Benefits as main income"
  ];

  const advantages = [
    {
      icon: Heart,
      title: "Understanding Approach",
      description: "We know everyone deserves a second chance. Our specialist team understands your situation."
    },
    {
      icon: TrendingUp,
      title: "Credit Building",
      description: "Making payments on time helps rebuild your credit score for the future."
    },
    {
      icon: Shield,
      title: "Responsible Lending",
      description: "We only offer finance you can afford with full transparency on all costs."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated advisors who specialize in bad credit applications guide you through the process."
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
                <span className="text-secondary">BAM!</span> Bad Credit Car <span className="text-primary">FINANCE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Don't let past credit issues stop you from getting the car you need! 
                We specialize in helping people with bad credit find affordable car finance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Car className="w-5 h-5 mr-2" />
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

        {/* Credit Issues Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
                <span className="text-primary">ZOOM!</span> We Help With <span className="text-secondary">All Credit Issues</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {creditIssues.map((issue, index) => (
                  <div key={index} className="flex items-center gap-3 comic-panel bg-secondary/10 p-4 border-2 border-black">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-body text-black font-medium">{issue}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="comic-panel bg-primary/20 p-6 border-4 border-black inline-block">
                  <p className="text-xl font-comic text-black mb-2">
                    <span className="text-primary">POW!</span> FCA approved - working to get the best outcome for you
                  </p>
                  <p className="text-black/70 font-body">
                    Don't worry if your situation isn't listed - we consider all applications with our superhero powers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-secondary">WHOOSH!</span> Why Choose Us for <span className="text-primary">Bad Credit Finance?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                  <div className="text-center">
                    <advantage.icon className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-comic text-black mb-4">{advantage.title}</h3>
                    <p className="text-black/80 font-body">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
                <span className="text-secondary">BAM!</span> Simple <span className="text-primary">Process</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center h-full">
                    <div className="comic-panel bg-secondary/20 p-8 mb-4 border-4 border-black h-full min-h-[240px] flex flex-col justify-center">
                      <div className="text-5xl font-comic text-secondary mb-4">1</div>
                      <h3 className="font-comic text-xl text-black mb-2">Tell Us Your Story</h3>
                      <p className="text-black/80 font-body">
                        Complete our simple form explaining your credit situation and finance needs.
                      </p>
                    </div>
                  </div>
                  <div className="text-center h-full">
                    <div className="comic-panel bg-secondary/20 p-8 mb-4 border-4 border-black h-full min-h-[240px] flex flex-col justify-center">
                      <div className="text-5xl font-comic text-secondary mb-4">2</div>
                      <h3 className="font-comic text-xl text-black mb-2">We Find Solutions</h3>
                      <p className="text-black/80 font-body">
                        Our specialists search specialist bad credit lenders for the best deal.
                      </p>
                    </div>
                  </div>
                  <div className="text-center h-full">
                    <div className="comic-panel bg-secondary/20 p-8 mb-4 border-4 border-black h-full min-h-[240px] flex flex-col justify-center">
                      <div className="text-5xl font-comic text-secondary mb-4">3</div>
                      <h3 className="font-comic text-xl text-black mb-2">Get Approved</h3>
                      <p className="text-black/80 font-body">
                        Receive your approval and start shopping for your car with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-comic text-center mb-12">
              <span className="text-primary">ZAP!</span> Our Aims
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-secondary mb-2">💪</div>
                <div className="text-xl font-comic text-black mb-2">Support You</div>
                <div className="text-black/70 font-body">Help every customer regardless of credit history</div>
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-primary mb-2">🚗</div>
                <div className="text-xl font-comic text-black mb-2">Get You Moving</div>
                <div className="text-black/70 font-body">Find the right car finance solution for you</div>
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-secondary mb-2">⚡</div>
                <div className="text-xl font-comic text-black mb-2">Work Fast</div>
                <div className="text-black/70 font-body">Provide quick decisions and transparent service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-secondary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                <span className="text-primary">KAPOW!</span> Don't Let Bad Credit Hold You Back
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Get a confidential quote and see what finance options are available to you, superhero!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Heart className="w-5 h-5 mr-2" />
                    CHECK MY SUPER OPTIONS!
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="xl" variant="secondary" className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]">
                    <Users className="w-6 h-6 mr-2" />
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

export default BadCreditFinance;