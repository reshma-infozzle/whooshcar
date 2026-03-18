import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Zap, Calculator, Users, CheckCircle, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "https://admin.whooshcar.testingweblink.com/api/MotorFinance";

type MotorcycleType = { motorbike: string };

type ApiItem = {
  motorbike_finance_title: string | null;
  motorbike_finance_description: string | null;
  apply_now_button_text: string | null;
  apply_now_button_url: string | null;
  payments_button_text: string | null;
  payments_button_url: string | null;

  motorbike_types_title: string | null;
  motorcycle_types: MotorcycleType[] | null;

  finane_benefits_title: string | null;
  quick_decision_title: string | null;
  quick_decision_description: string | null;
  flexible_term_title: string | null;
  flexible_term_description: string | null;
  competitive_rates_title: string | null;
  competitive_rates_description: string | null;
  all_bikes_title: string | null;
  all_bikes_description: string | null;

  finance_benefits_title: string | null;
  personal_contract_title: string | null;
  personal_contract_description: string | null;
  hire_purchase_title: string | null;
  hire_purchase_description: string | null;
  personal_loan_title: string | null;
  personal_loan_description: string | null;

  every_rider_title: string | null;
  young_riders_title: string | null;
  young_riders_description: string | null;
  experienced_riders_title: string | null;
  experienced_riders_description: string | null;
  returning_riders_title: string | null;
  returning_riders_description: string | null;

  ride_safe_title: string | null;
  safety_first_title: string | null;
  safety_first_description: string | null;
  ride_responsibly_title: string | null;
  ride_responsibly_description: string | null;

  motorbike_aims_title: string | null;
  get_moving_title: string | null;
  get_moving_description: string | null;
  support_freedom_title: string | null;
  support_freedom_description: string | null;
  work_fast_title: string | null;
  work_fast_description: string | null;

  hit_road_title: string | null;
  hit_road_description: string | null;
  van_quote_button_text: string | null;
  van_quote_button_url: string | null;
  speak_button_text: string | null;
  speak_button_url: string | null;
};

type ApiResponse = { status: string; data: ApiItem[] };

// Split HTML with <p> and <ul> into description + list items
const splitDescriptionAndList = (html: string | null) => {
  if (!html || typeof window === "undefined") {
    return { description: "", features: [] as string[] };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const firstP = doc.querySelector("p");
  const description = firstP ? (firstP.textContent || "").trim() : "";

  const features: string[] = [];
  doc.querySelectorAll("ul li").forEach((li) => {
    const text = (li.textContent || "").trim();
    if (text) features.push(text);
  });

  return { description, features };
};

const stripHtmlToText = (html: string | null): string => {
  if (!html || typeof window === "undefined") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const MotorbikeFinance = () => {
  const [data, setData] = useState<ApiItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const json: ApiResponse = await res.json();
        if (json.status === "success" && json.data && json.data[0]) {
          setData(json.data[0]);
        } else {
          setError("No data found");
        }
      } catch (e: any) {
        setError(e?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Shimmer while loading
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-4 animate-pulse">
                <div className="h-10 md:h-14 bg-muted rounded-md mx-auto w-3/4" />
                <div className="h-5 bg-muted rounded-md mx-auto w-full max-w-2xl" />
                <div className="h-5 bg-muted rounded-md mx-auto w-5/6" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <div className="h-12 bg-muted rounded-md w-40" />
                  <div className="h-12 bg-muted rounded-md w-48" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="h-8 bg-muted rounded-md w-64 mx-auto mb-10 animate-pulse" />
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="comic-panel">
                    <CardHeader className="animate-pulse space-y-3">
                      <div className="h-5 bg-muted rounded-md w-2/3 mx-auto" />
                      <div className="h-4 bg-muted rounded-md w-full" />
                    </CardHeader>
                    <CardContent className="animate-pulse space-y-3">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-muted" />
                          <div className="h-3 bg-muted rounded-md w-5/6" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive">{error || "Something went wrong"}</p>
      </div>
    );
  }

  // Titles that come as HTML should keep formatting
  const heroTitleHtml =
    data.motorbike_finance_title ||
    '<h1 style="text-align:center;"><strong>ZOOM! Motorbike FINANCE</strong></h1>';
  const motorbikeTypesTitleHtml =
    data.motorbike_types_title ||
    '<h2 style="text-align:center;"><strong>We Finance All Motorcycles</strong></h2>';
  const benefitsTitleHtml =
    data.finane_benefits_title ||
    '<h2 style="text-align:center;"><strong>Motorcycle Finance Benefits</strong></h2>';
  const financeOptionsTitleHtml =
    data.finance_benefits_title ||
    '<h2 style="text-align:center;"><strong>Motorcycle Finance Options</strong></h2>';
  const everyRiderTitleHtml =
    data.every_rider_title ||
    '<h2 style="text-align:center;"><strong>Finance for Every Rider</strong></h2>';
  const rideSafeTitleHtml =
    data.ride_safe_title ||
    '<h2 style="text-align:center;"><strong>Ride Safe, Ride Smart</strong></h2>';
  const aimsTitleHtml =
    data.motorbike_aims_title ||
    '<h2 style="text-align:center;">ZOOM! Our Motorbike Aims</h2>';
  const hitRoadTitleHtml =
    data.hit_road_title ||
    '<h2 style="text-align:center;">WHOOSH! Ready to Hit the Road?</h2>';

  const pcp = splitDescriptionAndList(data.personal_contract_description);
  const hp = splitDescriptionAndList(data.hire_purchase_description);
  const loan = splitDescriptionAndList(data.personal_loan_description);

  const young = splitDescriptionAndList(data.young_riders_description);
  const experienced = splitDescriptionAndList(data.experienced_riders_description);
  const returning = splitDescriptionAndList(data.returning_riders_description);

  const safety = splitDescriptionAndList(data.safety_first_description);
  const rideResponsiblyText =
    stripHtmlToText(data.ride_responsibly_description) ||
    "Always wear protective gear and ride within your limits";

  const motorcycleTypes = (data.motorcycle_types || []).map((m) => m.motorbike);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{ __html: heroTitleHtml }}
              />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {data.motorbike_finance_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={data.apply_now_button_url || "/apply"}>
                  <Button size="lg" className="text-lg px-8">
                    <Bike className="w-5 h-5 mr-2" />
                    {data.apply_now_button_text || "Apply Now"}
                  </Button>
                </Link>
                <Link to={data.payments_button_url || "/calculator"}>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.payments_button_text || "Calculate Payments"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bike Types */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: motorbikeTypesTitleHtml }}
            />
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {motorcycleTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 comic-panel bg-secondary/5 p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: benefitsTitleHtml }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Wind className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.quick_decision_title || "Quick Decisions"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.quick_decision_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.flexible_term_title || "Flexible Terms"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.flexible_term_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Calculator className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.competitive_rates_title || "Competitive Rates"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.competitive_rates_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Bike className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.all_bikes_title || "All Bikes Welcome"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.all_bikes_description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Finance Options */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: financeOptionsTitleHtml }}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {/* PCP */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.personal_contract_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {pcp.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pcp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* HP */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.hire_purchase_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {hp.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Personal Loan */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.personal_loan_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {loan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: everyRiderTitleHtml }}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Young riders */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.young_riders_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {young.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {young.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Experienced riders */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.experienced_riders_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {experienced.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experienced.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Returning riders */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.returning_riders_title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
                    {returning.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {returning.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
                dangerouslySetInnerHTML={{ __html: rideSafeTitleHtml }}
              />
              <Card className="comic-panel bg-secondary/5">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-comic text-2xl mb-4">
                        {data.safety_first_title || "Safety First"}
                      </h3>
                      <ul className="space-y-3 text-sm">
                        {safety.features.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="comic-panel bg-background p-6">
                        <Bike className="w-16 h-16 text-secondary mx-auto mb-4" />
                        <p className="text-lg font-comic font-bold text-secondary">
                          {data.ride_responsibly_title || "Ride Responsibly"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {rideResponsiblyText}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Aims */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{ __html: aimsTitleHtml }}
            />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-secondary/5 p-8">
                <div className="text-4xl font-comic font-black text-secondary mb-2">
                  🏍️
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.get_moving_title || "Get You Riding"}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.get_moving_description}
                </div>
              </div>
              <div className="comic-panel bg-primary/5 p-8">
                <div className="text-4xl font-comic font-black text-primary mb-2">
                  💨
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.support_freedom_title || "Support Your Freedom"}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.support_freedom_description}
                </div>
              </div>
              <div className="comic-panel bg-accent/5 p-8">
                <div className="text-4xl font-comic font-black text-accent mb-2">
                  ⚡
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.work_fast_title || "Work Fast"}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.work_fast_description}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-secondary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2
                className="hero-text text-3xl md:text-5xl font-comic text-black mb-6"
                dangerouslySetInnerHTML={{ __html: hitRoadTitleHtml }}
              />
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                {data.hit_road_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={data.van_quote_button_url || "/calculator"}>
                  <Button className="font-bold text-lg h-15 animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.van_quote_button_text || "CALCULATE MY BIKE PAYMENTS!"}
                  </Button>
                </Link>
                <Link to={data.speak_button_url || "/contact"}>
                  <Button
                    size="xl"
                    variant="secondary"
                    className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                  >
                    <Users className="w-6 h-6 mr-2" />
                    {data.speak_button_text || "Speak to Bike Heroes!"}
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
