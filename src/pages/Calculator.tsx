import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalculatorIcon, Car, Zap, TrendingUp, Info } from "lucide-react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState([15000]);
  const [loanTerm, setLoanTerm] = useState("48");
  const [creditRating, setCreditRating] = useState("onGoodGround");

  // Credit rating to base APR mapping (based on ClearScore bands)
  const creditRatingAPR = {
    soaringHigh: 6.9,        // 725+ (Excellent credit)
    lookingBright: 9.9,      // 605-724 (Good credit) 
    onGoodGround: 15.9,      // 520-604 (Fair credit)
    movingOnUp: 19.9,        // 410-519 (Poor credit)
    letsStartClimbing: 24.9  // 0-409 (Bad credit)
  };

  // Calculate monthly payment and totals
  const calculations = useMemo(() => {
    const principal = loanAmount[0];
    const termMonths = parseInt(loanTerm);
    const annualRate = creditRatingAPR[creditRating as keyof typeof creditRatingAPR] / 100;
    const monthlyRate = annualRate / 12;
    
    // Calculate monthly payment using standard loan formula
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                          (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    const totalRepayable = monthlyPayment * termMonths;
    const totalInterest = totalRepayable - principal;
    
    return {
      monthlyPayment: monthlyPayment,
      totalRepayable: totalRepayable,
      totalInterest: totalInterest,
      apr: creditRatingAPR[creditRating as keyof typeof creditRatingAPR]
    };
  }, [loanAmount, loanTerm, creditRating]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatCurrencyDecimal = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-comic font-black text-foreground mb-4 sm:mb-6 px-2">
                <span className="text-primary">CALCULATE</span> Your Car Finance <span className="text-secondary">POWER!</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                Use our superhero calculator to discover your monthly payments and total costs! 
                Get instant results and see exactly what you can afford.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <Button 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <CalculatorIcon className="w-5 h-5 mr-2" />
                  Start Calculating
                </Button>
                <Link to="/apply">
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                    <Car className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Calculator Controls */}
              <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
                <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <CalculatorIcon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-comic text-black">
                    <span className="text-primary">ZAP!</span> Car Finance Calculator
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <label className="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      How much do you want to borrow? <span className="text-primary">WHOOSH!</span>
                    </label>
                    <div className="comic-panel bg-primary/10 p-3 sm:p-4 border-2 border-black mb-4">
                      <div className="text-center mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl font-comic text-black">{formatCurrency(loanAmount[0])}</span>
                      </div>
                      <Slider
                        value={loanAmount}
                        onValueChange={setLoanAmount}
                        max={50000}
                        min={3000}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-black/60 mt-2">
                        <span>£3,000</span>
                        <span>£50,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      How long do you want to pay it back? <span className="text-secondary">POW!</span>
                    </label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger className="comic-panel border-2 border-black text-lg font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-2 border-black">
                        <SelectItem value="24" className="font-body">24 months (2 years)</SelectItem>
                        <SelectItem value="36" className="font-body">36 months (3 years)</SelectItem>
                        <SelectItem value="48" className="font-body">48 months (4 years)</SelectItem>
                        <SelectItem value="60" className="font-body">60 months (5 years)</SelectItem>
                        <SelectItem value="72" className="font-body">72 months (6 years)</SelectItem>
                        <SelectItem value="84" className="font-body">84 months (7 years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Credit Rating */}
                  <div>
                    <label className="block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      What's your credit rating like? <span className="text-primary">BAM!</span>
                    </label>
                    <Select value={creditRating} onValueChange={setCreditRating}>
                      <SelectTrigger className="comic-panel border-2 border-black text-lg font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-2 border-black bg-white z-50">
                        <SelectItem value="soaringHigh" className="font-body">Soaring High (725+)</SelectItem>
                        <SelectItem value="lookingBright" className="font-body">Looking Bright (605-724)</SelectItem>
                        <SelectItem value="onGoodGround" className="font-body">On Good Ground (520-604)</SelectItem>
                        <SelectItem value="movingOnUp" className="font-body">Moving On Up (410-519)</SelectItem>
                        <SelectItem value="letsStartClimbing" className="font-body">Let's Start Climbing (0-409)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4 sm:space-y-6">
                {/* Monthly Payment */}
                <Card className="comic-panel border-2 sm:border-4 border-black shadow-comic-lg bg-white/95">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-comic text-black">
                      <TrendingUp className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
                      <span className="text-primary">WHOOSH!</span> Monthly Payment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-2">
                        {formatCurrencyDecimal(calculations.monthlyPayment)}
                      </div>
                      <p className="text-base sm:text-lg text-black/70 font-body">per month for {loanTerm} months</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Card className="comic-panel border-2 border-black bg-secondary/10">
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-comic text-black mb-1">Total to Repay</div>
                      <div className="text-xl sm:text-2xl font-comic text-black">{formatCurrency(calculations.totalRepayable)}</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="comic-panel border-2 border-black bg-primary/10">
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-comic text-black mb-1">Total Interest</div>
                      <div className="text-xl sm:text-2xl font-comic text-black">{formatCurrency(calculations.totalInterest)}</div>
                    </CardContent>
                  </Card>
                </div>

                {/* APR Info */}
                <Card className="comic-panel border-2 border-black bg-white/95">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-5 h-5 text-primary" />
                      <span className="text-lg font-comic text-black">Estimated APR: {calculations.apr}%</span>
                    </div>
                    <p className="text-sm text-black/70 font-body">
                      This is an estimate based on your credit rating. Actual rates may vary.
                    </p>
                  </CardContent>
                </Card>

                {/* Get Quote Button */}
                <div className="comic-panel bg-primary/20 p-4 sm:p-6 border-2 sm:border-4 border-black shadow-comic-lg text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-comic text-black mb-3 sm:mb-4">
                    Ready to <span className="text-primary">SUPERCHARGE</span> Your Journey?
                  </h3>
                  <Link to="/apply">
                    <Button size="lg" className="font-bold text-base sm:text-lg md:text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                      <Car className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                      GET MY WHOOSH QUOTE NOW!
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Representative Example */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg max-w-4xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-comic text-black">
                  <span className="text-secondary">BAM!</span> Representative Example
                </h2>
              </div>
              
              <div className="bg-primary/10 p-4 sm:p-6 border-2 border-black rounded-lg">
                <p className="font-body text-black text-base sm:text-lg leading-relaxed">
                  <strong>Representative Example:</strong> Borrowing £15,000 over 48 months with a representative APR of 15.9%, 
                  you would make 48 monthly payments of £375.50. The total amount repayable would be £18,024, 
                  with a total cost of credit of £3,024.
                </p>
                
                <div className="mt-4 pt-4 border-t border-black/20">
                  <p className="text-sm text-black/70 font-body">
                    <strong>WHOOSH Car Finance</strong> is a trading name. We are authorised and regulated by the Financial Conduct Authority. 
                    All finance is subject to status, terms and conditions apply. We act as a credit broker, not a lender. 
                    We work with a panel of lenders and may receive commission for successful introductions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                How Our <span className="text-primary">SUPERHERO</span> Process Works
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="comic-panel bg-primary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Calculate</h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">Use our calculator to estimate your monthly payments</p>
                </div>
                
                <div className="text-center">
                  <div className="comic-panel bg-secondary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Apply</h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">Get a decision in principle in minutes with no impact on credit score</p>
                </div>
                
                <div className="text-center">
                  <div className="comic-panel bg-primary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">Drive Away!</h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">Choose your car and drive away the same day</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;