import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, Info, Car } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface CalculatorData {
  calculator_title: string;
  borrow_title: string;
  borrow_min_amount: string;
  borrow_max_amount: string;
  loan_term_title: string;
  loan_term_options: { loan_term_options_value: string }[];
  credit_rating_title: string;
  credit_options: { credit_option_value: string }[];
  monthly_payment_title: string;
  monthly_payment_description: string;
  total_to_repay: string;
  total_interest: string;
  estimated_apr: string;
  estimated_apr_description: string;
  supercharge_title: string;
  quote_button_text: string;
  quote_button_url: string;
}

interface HomeData {
  spend_on_car_title: string;
  spend_on_car_description: string;
}

const creditRatingAPR = {
  soaringHigh: 6.9,
  lookingBright: 9.9,
  onGoodGround: 15.9,
  movingOnUp: 19.9,
  letsStartClimbing: 24.9
};

const creditOptionToKey: Record<string, keyof typeof creditRatingAPR> = {
  "Soaring High (725+)": "soaringHigh",
  "Looking Bright (605 to 724)": "lookingBright",
  "On Good Ground (520 to 604)": "onGoodGround",
  "Moving On Up (410 to 519)": "movingOnUp",
  "Lets Start Climbing (0 to 409)": "letsStartClimbing"
};

export const FinanceForm = () => {
  const [loanAmount, setLoanAmount] = useState([12000]);
  const [loanTerm, setLoanTerm] = useState("48");
  const [creditRating, setCreditRating] = useState<keyof typeof creditRatingAPR>("onGoodGround");
  const [calculatorData, setCalculatorData] = useState<CalculatorData | null>(null);
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [calcRes, homeRes] = await Promise.all([
          fetch("https://admin.whooshcar.testingweblink.com/api/calculator"),
          fetch("https://admin.whooshcar.testingweblink.com/api/home")
        ]);
        if (!calcRes.ok || !homeRes.ok) throw new Error("Failed");

        const calcJson = await calcRes.json();
        const homeJson = await homeRes.json();

        setCalculatorData(calcJson.data[0]);
        setHomeData(homeJson.data[0]);
      } catch (e) {
        setError("Failed to load calculator data");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const calculations = useMemo(() => {
    const principal = loanAmount[0];
    const termMonths = parseInt(loanTerm);
    const annualRate = creditRatingAPR[creditRating] / 100;
    const monthlyRate = annualRate / 12;

    const monthlyPayment =
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);

    const totalRepayable = monthlyPayment * termMonths;
    const totalInterest = totalRepayable - principal;

    return { monthlyPayment, totalRepayable, totalInterest, apr: creditRatingAPR[creditRating] };
  }, [loanAmount, loanTerm, creditRating]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);

  const formatCurrencyDecimal = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);

  // Shimmer UI
  const HeroShimmer = () => (
    <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <Skeleton className="h-10 w-80 mx-auto mb-4" />
      <Skeleton className="h-6 w-[28rem] mx-auto" />
    </div>
  );

  const CalculatorShimmer = () => (
    <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
      <div className="flex items-center gap-4 mb-8">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-8 w-64" />
      </div>
      <div className="space-y-8">
        <div>
          <Skeleton className="h-6 w-52 mb-4" />
          <Skeleton className="h-24 w-full mb-3" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div>
          <Skeleton className="h-6 w-56 mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-6 w-64 mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );

  const ResultsShimmer = () => (
    <div className="space-y-6">
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Skeleton className="h-24 rounded-lg" />
        <Skeleton className="h-24 rounded-lg" />
      </div>
      <Skeleton className="h-20 rounded-lg" />
      <Skeleton className="h-24 rounded-xl" />
    </div>
  );

  if (loading) {
    return (
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow">
        <div className="container mx-auto px-2 sm:px-4">
          <HeroShimmer />
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <CalculatorShimmer />
            <ResultsShimmer />
          </div>
        </div>
      </section>
    );
  }

  if (error || !calculatorData || !homeData) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Calculator</h2>
          <p className="text-muted-foreground">Please refresh the page and try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="hidden py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow">
      <div className="container mx-auto px-2 sm:px-4">
        {/* HERO: preserve your Tailwind + allow HTML styling from API */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-3 sm:mb-4">
            {/* inner span takes API HTML, outer h2 keeps your classes */}
            <span
              dangerouslySetInnerHTML={{ __html: homeData.spend_on_car_title }}
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            {homeData.spend_on_car_description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT: Calculator Controls */}
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <div className="flex items-center gap-4 mb-8">
                <Calculator className="w-12 h-12 text-primary" />
                <h2 className="hero-text text-2xl sm:text-3xl md:text-4xl font-comic text-black">
                  <span
                    dangerouslySetInnerHTML={{ __html: calculatorData.calculator_title }}
                  />
                </h2>
              </div>

              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-4">
                    <span
                      dangerouslySetInnerHTML={{ __html: calculatorData.borrow_title }}
                    />
                  </label>
                  <div className="comic-panel bg-primary/10 p-4 border-2 border-black mb-4">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-comic text-black">
                        {formatCurrency(loanAmount[0])}
                      </span>
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
                      <span>{calculatorData.borrow_min_amount}</span>
                      <span>{calculatorData.borrow_max_amount}</span>
                    </div>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-4">
                    <span
                      dangerouslySetInnerHTML={{ __html: calculatorData.loan_term_title }}
                    />
                  </label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger className="comic-panel border-2 border-black text-lg font-comic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-black">
                      {calculatorData.loan_term_options.map((option, idx) => {
                        const value = option.loan_term_options_value.split(" ")[0]; // "24"
                        return (
                          <SelectItem
                            key={idx}
                            value={value}
                            className="font-comic"
                          >
                            {option.loan_term_options_value}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                {/* Credit Rating */}
                <div>
                  <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-4">
                    <span
                      dangerouslySetInnerHTML={{ __html: calculatorData.credit_rating_title }}
                    />
                  </label>
                  <Select
                    value={creditRating}
                    onValueChange={(val: keyof typeof creditRatingAPR) => setCreditRating(val)}
                  >
                    <SelectTrigger className="comic-panel border-2 border-black text-lg font-comic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-black bg-white z-50">
                      {calculatorData.credit_options.map((option, idx) => {
                        const key = creditOptionToKey[option.credit_option_value];
                        return (
                          <SelectItem
                            key={idx}
                            value={key}
                            className="font-comic"
                          >
                            {option.credit_option_value}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* RIGHT: Results */}
            <div className="space-y-6">
              {/* Monthly Payment */}
              <Card className="comic-panel border-4 border-black shadow-comic-lg bg-white/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-comic text-black">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div
                      className="hero-text"
                      dangerouslySetInnerHTML={{ __html: calculatorData.monthly_payment_title }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-comic text-black mb-2">
                      {formatCurrencyDecimal(calculations.monthlyPayment)}
                    </div>
                    <p className="text-lg text-black/70 font-body">
                      per month for {loanTerm} months
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Totals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="comic-panel border-2 border-black bg-secondary/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-comic text-black mb-1">
                      {calculatorData.total_to_repay}
                    </div>
                    <div className="text-2xl font-comic text-black">
                      {formatCurrency(calculations.totalRepayable)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="comic-panel border-2 border-black bg-primary/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-comic text-black mb-1">
                      {calculatorData.total_interest}
                    </div>
                    <div className="text-2xl font-comic text-black">
                      {formatCurrency(calculations.totalInterest)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* APR */}
              <Card className="comic-panel border-2 border-black bg-white/95">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-5 h-5 text-primary" />
                    <span className="text-lg font-comic text-black">
                      Estimated APR: {calculations.apr}%
                    </span>
                  </div>
                  <p className="text-sm text-black/70 font-body">
                    {calculatorData.estimated_apr_description}
                  </p>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="comic-panel bg-primary/20 p-6 border-4 border-black shadow-comic-lg text-center">
                <div
                  className="hero-text text-2xl font-comic text-black mb-4"
                  dangerouslySetInnerHTML={{ __html: calculatorData.supercharge_title }}
                />
                <Link to={calculatorData.quote_button_url}>
                  <Button
                    size="xl"
                    className="font-bold text-base sm:text-lg md:text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] min-h-[48px]"
                  >
                    <Car className="w-6 h-6" />
                    {calculatorData.quote_button_text}
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
