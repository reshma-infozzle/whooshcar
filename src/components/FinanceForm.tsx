import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, PoundSterling, Info, Car } from "lucide-react";

export const FinanceForm = () => {
  const [loanAmount, setLoanAmount] = useState([12000]);
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

  const handleApply = () => {
    console.log("Apply clicked:", {
      loanAmount: loanAmount[0],
      loanTerm: loanTerm,
      creditRating,
      monthlyPayment: calculations.monthlyPayment,
      totalCost: calculations.totalRepayable
    });
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-3 sm:mb-4">
            How much can you afford to spend on a car?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Use our interactive calculator to find your perfect monthly payment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Controls */}
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <div className="flex items-center gap-4 mb-8">
                <Calculator className="w-12 h-12 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black">
                  <span className="text-primary">ZAP!</span> Car Finance Calculator
                </h2>
              </div>

              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <label className="block text-lg sm:text-xl font-comic text-black mb-4">
                    How much do you want to borrow? <span className="text-primary">WHOOSH!</span>
                  </label>
                  <div className="comic-panel bg-primary/10 p-4 border-2 border-black mb-4">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-comic text-black">{formatCurrency(loanAmount[0])}</span>
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
                  <label className="block text-lg sm:text-xl font-comic text-black mb-4">
                    How long do you want to pay it back? <span className="text-secondary">POW!</span>
                  </label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger className="comic-panel border-2 border-black text-lg font-comic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-black">
                      <SelectItem value="24" className="font-comic">24 months (2 years)</SelectItem>
                      <SelectItem value="36" className="font-comic">36 months (3 years)</SelectItem>
                      <SelectItem value="48" className="font-comic">48 months (4 years)</SelectItem>
                      <SelectItem value="60" className="font-comic">60 months (5 years)</SelectItem>
                      <SelectItem value="72" className="font-comic">72 months (6 years)</SelectItem>
                      <SelectItem value="84" className="font-comic">84 months (7 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Credit Rating */}
                <div>
                  <label className="block text-lg sm:text-xl font-comic text-black mb-4">
                    What's your credit rating like? <span className="text-primary">BAM!</span>
                  </label>
                  <Select value={creditRating} onValueChange={setCreditRating}>
                    <SelectTrigger className="comic-panel border-2 border-black text-lg font-comic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-black bg-white z-50">
                      <SelectItem value="soaringHigh" className="font-comic">Soaring High (725+)</SelectItem>
                      <SelectItem value="lookingBright" className="font-comic">Looking Bright (605-724)</SelectItem>
                      <SelectItem value="onGoodGround" className="font-comic">On Good Ground (520-604)</SelectItem>
                      <SelectItem value="movingOnUp" className="font-comic">Moving On Up (410-519)</SelectItem>
                      <SelectItem value="letsStartClimbing" className="font-comic">Let's Start Climbing (0-409)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Payment */}
              <Card className="comic-panel border-4 border-black shadow-comic-lg bg-white/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-comic text-black">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <span className="text-primary">WHOOSH!</span> Monthly Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-comic text-black mb-2">
                      {formatCurrencyDecimal(calculations.monthlyPayment)}
                    </div>
                    <p className="text-lg text-black/70 font-body">per month for {loanTerm} months</p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="comic-panel border-2 border-black bg-secondary/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-comic text-black mb-1">Total to Repay</div>
                    <div className="text-2xl font-comic text-black">{formatCurrency(calculations.totalRepayable)}</div>
                  </CardContent>
                </Card>
                
                <Card className="comic-panel border-2 border-black bg-primary/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-comic text-black mb-1">Total Interest</div>
                    <div className="text-2xl font-comic text-black">{formatCurrency(calculations.totalInterest)}</div>
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
              <div className="comic-panel bg-primary/20 p-6 border-4 border-black shadow-comic-lg text-center">
                <h3 className="text-2xl font-comic text-black mb-4">
                  Ready to <span className="text-primary">SUPERCHARGE</span> Your Journey?
                </h3>
                <Link to="/apply">
                  <Button
                    size="xl" 
                    className="font-bold text-base sm:text-lg md:text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] min-h-[48px]"
                  >
                    <Car className="w-6 h-6" />
                    GET MY WHOOSH QUOTE NOW!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};