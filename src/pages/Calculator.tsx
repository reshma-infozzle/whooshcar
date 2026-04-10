import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalculatorIcon, Car, Zap, TrendingUp, Info } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface LoanTermOption {
  loan_term_options_value: string;
}

interface CreditOption {
  credit_option_value: string;
}

interface CalculatorApiData {
  id: number;
  car_finance_title: string;
  car_finance_description: string;
  calculate_button_text: string;
  calculate_button_url: string;
  apply_now_button_text: string;
  apply_now_button_url: string;
  calculator_title: string;
  borrow_title: string;
  borrow_min_amount: string;
  borrow_max_amount: string;
  loan_term_title: string;
  loan_term_options: LoanTermOption[];
  credit_rating_title: string;
  credit_options: CreditOption[];
  monthly_payment_title: string;
  monthly_payment_description: string;
  total_to_repay: string;
  total_interest: string;
  estimated_apr: string;
  estimated_apr_description: string;
  supercharge_title: string;
  quote_button_text: string;
  quote_button_url: string;
  representative_example_title: string;
  representative_example_description: string;
  representative_description: string;
  superheo_process_title: string;
  calculate_title: string;
  calculate_description: string;
  apply_title: string;
  apply_description: string;
  drive_away_title: string;
  drive_away_description: string;
}

interface ApiResponse {
  status: string;
  data: CalculatorApiData[];
}

// simple shimmer block
const Shimmer = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200/70 rounded ${className}`} />
);

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState([15000]);
  const [loanTerm, setLoanTerm] = useState("48");
  const [creditRating, setCreditRating] = useState("onGoodGround");
  const [apiData, setApiData] = useState<CalculatorApiData | null>(null);
  const [loading, setLoading] = useState(true);

  // fetch all content from API
  useEffect(() => {
    const fetchCalculator = async () => {
      try {
        const res = await fetch("https://admin.whooshcarfinance.co.uk/api/calculator");
        const json: ApiResponse = await res.json();
        if (json.status === "success" && json.data.length > 0) {
          setApiData(json.data[0]);
        }
      } catch (e) {
        console.error("Failed to load calculator content", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCalculator();
  }, []);

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Calculator'
      });
    }
  }, []);

  // APR mapping
  const creditRatingRates = {
    soaringHigh: { apr: 10.9, interest: 10.87 },
    lookingBright: { apr: 10.9, interest: 10.87 },
    onGoodGround: { apr: 10.9, interest: 10.87 },
    movingOnUp: { apr: 10.9, interest: 10.87 },
    letsStartClimbing: { apr: 10.9, interest: 10.87 },
  };

  // from "48 month (4 years)" -> "48"
  const getLoanTermValue = (str: string): string => {
    const m = str.match(/^\d+/);
    return m ? m[0] : "48";
  };

  const mapCreditLabelToKey = (label: string): string => {
    if (label.includes("Soaring High")) return "soaringHigh";
    if (label.includes("Looking Bright")) return "lookingBright";
    if (label.includes("On Good Ground")) return "onGoodGround";
    if (label.includes("Moving On Up")) return "movingOnUp";
    if (label.includes("Lets Start Climbing")) return "letsStartClimbing";
    return "onGoodGround";
  };

  // loan calculations
  const calculations = useMemo(() => {
    const principal = loanAmount[0];
    const termMonths = parseInt(loanTerm);

    const selectedRate =
      creditRatingRates[creditRating as keyof typeof creditRatingRates];

    const annualRate = selectedRate.interest / 100;
    const monthlyRate = annualRate / 12;

    let monthlyPayment: number;

    if (monthlyRate === 0) {
      monthlyPayment = principal / termMonths;
    } else {
      monthlyPayment =
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
    }

    // Financial rounding (important)
    const roundedMonthly = Number(monthlyPayment.toFixed(2));
    const totalRepayable = Number(
      (roundedMonthly * termMonths).toFixed(2)
    );
    const totalInterest = Number(
      (totalRepayable - principal).toFixed(2)
    );

    return {
      monthlyPayment: roundedMonthly,
      totalRepayable,
      totalInterest,
      apr: selectedRate.apr,
    };
  }, [loanAmount, loanTerm, creditRating]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const formatCurrencyDecimal = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

  const renderHtml = (html: string | undefined) =>
    html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : null;

  // shimmer version of the whole page
  if (loading) {
    return (
  
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-2 sm:px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Shimmer className="mx-auto mb-4 sm:mb-6 h-10 sm:h-12 md:h-16 w-3/4" />
                <Shimmer className="mx-auto mb-2 h-4 w-5/6" />
                <Shimmer className="mx-auto mb-6 h-4 w-2/3" />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                  <Shimmer className="h-11 w-40 rounded-md" />
                  <Shimmer className="h-11 w-40 rounded-md" />
                </div>
              </div>
            </div>
          </section>

          {/* Calculator shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-2 sm:px-4">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
                  <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <Shimmer className="h-10 w-10 rounded-md" />
                    <Shimmer className="h-8 w-2/3" />
                  </div>
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <Shimmer className="h-6 w-3/4 mb-3" />
                      <Shimmer className="h-20 w-full mb-2" />
                      <div className="flex justify-between">
                        <Shimmer className="h-4 w-16" />
                        <Shimmer className="h-4 w-16" />
                      </div>
                    </div>
                    <div>
                      <Shimmer className="h-6 w-2/3 mb-3" />
                      <Shimmer className="h-10 w-full" />
                    </div>
                    <div>
                      <Shimmer className="h-6 w-2/3 mb-3" />
                      <Shimmer className="h-10 w-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <Card className="comic-panel border-2 sm:border-4 border-black shadow-comic-lg bg-white/95">
                    <CardHeader className="pb-3 sm:pb-6">
                      <Shimmer className="h-6 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Shimmer className="h-10 w-32 mx-auto mb-2" />
                      <Shimmer className="h-4 w-40 mx-auto" />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Card className="comic-panel border-2 border-black bg-secondary/10">
                      <CardContent className="p-3 sm:p-4 text-center">
                        <Shimmer className="h-5 w-28 mx-auto mb-2" />
                        <Shimmer className="h-6 w-24 mx-auto" />
                      </CardContent>
                    </Card>
                    <Card className="comic-panel border-2 border-black bg-primary/10">
                      <CardContent className="p-3 sm:p-4 text-center">
                        <Shimmer className="h-5 w-28 mx-auto mb-2" />
                        <Shimmer className="h-6 w-24 mx-auto" />
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="comic-panel border-2 border-black bg-white/95">
                    <CardContent className="p-4">
                      <Shimmer className="h-5 w-40 mb-2" />
                      <Shimmer className="h-4 w-3/4" />
                    </CardContent>
                  </Card>

                  <div className="comic-panel bg-primary/20 p-4 sm:p-6 border-2 sm:border-4 border-black shadow-comic-lg text-center">
                    <Shimmer className="h-6 w-2/3 mx-auto mb-3" />
                    <Shimmer className="h-11 w-60 mx-auto rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Representative + How it works shimmer (simple blocks) */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-2 sm:px-4">
              <div className="comic-panel bg-white/95 p-6 border-2 sm:border-4 border-black shadow-comic-lg max-w-4xl mx-auto">
                <Shimmer className="h-6 w-64 mb-4" />
                <Shimmer className="h-24 w-full mb-3" />
                <Shimmer className="h-4 w-3/4" />
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-2 sm:px-4">
              <div className="comic-panel bg-white/95 p-6 border-2 sm:border-4 border-black shadow-comic-lg">
                <Shimmer className="h-7 w-80 mx-auto mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <Shimmer className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-3" />
                      <Shimmer className="h-5 w-24 mx-auto mb-2" />
                      <Shimmer className="h-4 w-28 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // real content
  return (
    <>
    <Helmet>
        <title>Car Finance Calculator UK |  Whoosh Car Finance</title>
        <meta name="description" content="Use the car finance calculator to estimate monthly payments and total costs. Get instant results and plan your finance with confidence." />
      </Helmet>
    
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* full H1 from API (already contains strong etc.) */}
              <div className="hero-text text-3xl sm:text-4xl md:text-6xl font-comic font-black text-foreground mb-4 sm:mb-6 px-2">
                {renderHtml(apiData.car_finance_title)}
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                {apiData.car_finance_description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 start-calculating-hide">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("calculator")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  <CalculatorIcon className="w-5 h-5 mr-2" />
                  {apiData.calculate_button_text}
                </Button>

                {/* <Link to={apiData.apply_now_button_url}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                  >
                    <Car className="w-5 h-5 mr-2" />
                    {apiData.apply_now_button_text}
                  </Button>
                </Link> */}

                <Button
                  asChild
                  variant="default"
                  className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                >
                  <Link
                    to={apiData.apply_now_button_url}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                      <Car className="w-5 h-5 mr-2" />
                  {apiData.apply_now_button_text}
                    </div>

                    <span className="text-xs font-medium leading-none">
                      10.9% Rep. APR - Credit Broker, Not a Lender
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section
          id="calculator"
          className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20"
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Calculator Controls */}
              <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
                <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <CalculatorIcon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary" />
                  <h2 className="hero-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-comic text-black">
                    {renderHtml(apiData.calculator_title)}
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      {renderHtml(apiData.borrow_title)}
                    </label>
                    <div className="comic-panel bg-primary/10 p-3 sm:p-4 border-2 border-black mb-4">
                      <div className="text-center mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl font-comic text-black">
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
                        <span>{apiData.borrow_min_amount}</span>
                        <span>{apiData.borrow_max_amount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      {renderHtml(apiData.loan_term_title)}
                    </label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger className="comic-panel border-2 border-black text-lg font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-2 border-black">
                        {apiData.loan_term_options.map((option, idx) => (
                          <SelectItem
                            key={idx}
                            value={getLoanTermValue(
                              option.loan_term_options_value
                            )}
                            className="font-body"
                          >
                            {option.loan_term_options_value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Credit Rating */}
                  <div>
                    <label className="hero-text block text-lg sm:text-xl font-comic text-black mb-3 sm:mb-4">
                      {renderHtml(apiData.credit_rating_title)}
                    </label>
                    <Select
                      value={creditRating}
                      onValueChange={setCreditRating}
                    >
                      <SelectTrigger className="comic-panel border-2 border-black text-lg font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-2 border-black bg-white z-50">
                        {apiData.credit_options.map((option, idx) => (
                          <SelectItem
                            key={idx}
                            value={mapCreditLabelToKey(
                              option.credit_option_value
                            )}
                            className="font-body"
                          >
                            {option.credit_option_value}
                          </SelectItem>
                        ))}
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
                    <CardTitle className="hero-text flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-comic text-black">
                      <TrendingUp className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
                      {renderHtml(apiData.monthly_payment_title)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-2">
                        {formatCurrencyDecimal(calculations.monthlyPayment)}
                      </div>
                      <p className="text-base sm:text-lg text-black/70 font-body">
                        per month for {loanTerm} months
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Card className="comic-panel border-2 border-black bg-secondary/10">
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-comic text-black mb-1">
                        {apiData.total_to_repay}
                      </div>
                      <div className="text-xl sm:text-2xl font-comic text-black">
                        {formatCurrency(calculations.totalRepayable)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="comic-panel border-2 border-black bg-primary/10">
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-comic text-black mb-1">
                        {apiData.total_interest}
                      </div>
                      <div className="text-xl sm:text-2xl font-comic text-black">
                        {formatCurrency(calculations.totalInterest)}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* APR Info */}
                <Card className="comic-panel border-2 border-black bg-white/95">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-5 h-5 text-primary" />
                      <span className="text-lg font-comic text-black">
                        {apiData.estimated_apr.replace(
                          "{APR}",
                          calculations.apr.toString()
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-black/70 font-body">
                      {apiData.estimated_apr_description}
                    </p>
                  </CardContent>
                </Card>

                {/* Get Quote Button */}
                <div className="comic-panel bg-primary/20 p-4 sm:p-6 border-2 sm:border-4 border-black shadow-comic-lg text-center">
                  <h3 className="hero-text text-lg sm:text-xl md:text-2xl font-comic text-black mb-3 sm:mb-4">
                    {renderHtml(apiData.supercharge_title)}
                  </h3>
                  {/* <Link to={apiData.quote_button_url}>
                    <Button
                      size="lg"
                      className="font-bold text-base sm:text-lg md:text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto"
                    >
                      <Car className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                      {apiData.quote_button_text}
                    </Button>
                  </Link> */}
                  <Button
                      asChild
                      variant="default"
                      className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                    >
                      <Link
                        to={apiData.quote_button_url}
                        className="flex flex-col items-center justify-center gap-1"
                      >
                        <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                          <Car className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                          {apiData.quote_button_text}   
                        </div>
  
                        <span className="text-xs font-medium leading-none">
                          10.9% Rep. APR - Credit Broker, Not a Lender
                        </span>
                      </Link>
                    </Button>
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
                <h2 className="hero-text text-xl sm:text-2xl md:text-3xl font-comic text-black">
                  {renderHtml(apiData.representative_example_title)}
                </h2>
              </div>

              <div className="bg-primary/10 p-4 sm:p-6 border-2 border-black rounded-lg">
                <p className="font-body text-black text-base sm:text-lg leading-relaxed">
                  {renderHtml(apiData.representative_example_description)}
                </p>

                <div className="mt-4 pt-4 border-t border-black/20">
                  <p className="text-sm text-black/70 font-body">
                    {renderHtml(apiData.representative_description)}
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
              <h2 className="hero-text text-2xl sm:text-3xl md:text-4xl font-comic text-black text-center mb-8 sm:mb-10 md:mb-12 px-2">
                {renderHtml(apiData.superheo_process_title)}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="comic-panel bg-primary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">
                      1
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {apiData.calculate_title}
                  </h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">
                    {apiData.calculate_description}
                  </p>
                </div>

                <div className="text-center">
                  <div className="comic-panel bg-secondary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">
                      2
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {apiData.apply_title}
                  </h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">
                    {apiData.apply_description}
                  </p>
                </div>

                <div className="text-center">
                  <div className="comic-panel bg-primary/10 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-black">
                    <span className="text-xl sm:text-2xl font-comic text-black">
                      3
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {apiData.drive_away_title}
                  </h3>
                  <p className="font-body text-black/70 text-sm sm:text-base">
                    {apiData.drive_away_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Calculator;