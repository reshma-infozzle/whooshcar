import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  TrendingUp,
  Calculator,
  Users,
  CheckCircle,
  Briefcase,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessFinance = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.whooshcar.testingweblink.com/api/BusinessFinance"
        );
        const json = await res.json();

        if (json.status === "success" && Array.isArray(json.data) && json.data.length) {
          setData(json.data[0]);
        } else {
          throw new Error("No data found");
        }
      } catch (err) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Shimmer Components
  const ShimmerHero = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-32 md:h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-6 w-3/4" />
          <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer mx-auto mb-8 w-2/3" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-44 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer flex-shrink-0" />
            <div className="h-12 w-52 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );

  const ShimmerVehicleTypes = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-12 w-2/3" />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shimmer h-12 p-4" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ShimmerCards = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-12 w-2/3" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="comic-panel h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer p-6" />
          ))}
        </div>
      </div>
    </section>
  );

  const ShimmerFinanceTypes = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-12 w-2/3" />
        <div className="grid lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="comic-panel h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer p-8" />
          ))}
        </div>
      </div>
    </section>
  );

  const ShimmerTaxBenefits = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-12 w-1/2" />
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="comic-panel h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer p-6" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ShimmerAims = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer mx-auto mb-12 w-1/2" />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="comic-panel h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer p-8" />
          ))}
        </div>
      </div>
    </section>
  );

  const ShimmerCTA = () => (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="comic-panel bg-primary/20 h-80 p-8 border-4 border-black rounded-xl shimmer flex flex-col justify-center">
          <div className="h-20 bg-gradient-to-r from-white/50 to-white/30 rounded-lg shimmer mx-auto mb-6 w-3/4" />
          <div className="h-8 bg-gradient-to-r from-white/50 to-white/30 rounded-lg shimmer mx-auto mb-8 w-2/3" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="h-14 w-64 bg-gradient-to-r from-white/50 to-white/30 rounded-lg shimmer flex-shrink-0" />
            <div className="h-14 w-56 bg-gradient-to-r from-white/50 to-white/30 rounded-lg shimmer flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );

  // Add shimmer animation to Tailwind config or use CSS-in-JS
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <ShimmerHero />
          <ShimmerVehicleTypes />
          <ShimmerCards />
          <ShimmerFinanceTypes />
          <ShimmerTaxBenefits />
          <ShimmerAims />
          <ShimmerCTA />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg text-destructive">
            {error ? `Error: ${error}` : "No business finance data available"}
          </p>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // helper: parse business_vehicle (array of objects with Vehicles key)
  const parseVehicleTypes = (businessVehicle) => {
    if (!Array.isArray(businessVehicle)) return [];
    return businessVehicle.map((item) => item?.Vehicles).filter(Boolean);
  };

  // helper: get first <p> as intro and all <li> items as array
  const parseIntroAndList = (htmlString) => {
    if (!htmlString) return { intro: "", items: [] };
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    const p = tempDiv.querySelector("p");
    const intro = p ? (p.textContent || "").trim() : "";

    const lis = tempDiv.querySelectorAll("li");
    const items = Array.from(lis)
      .map((li) => (li.textContent || "").trim())
      .filter(Boolean);

    return { intro, items };
  };

  // helper: parse <ul><li> HTML lists
  const parseListItems = (htmlString) => {
    if (!htmlString) return [];
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const lis = tempDiv.querySelectorAll("li");
    return Array.from(lis)
      .map((li) => li.textContent?.trim() || "")
      .filter(Boolean);
  };

  const vehicleTypes = parseVehicleTypes(data.business_vehicle);
  const vatBenefits = parseListItems(data.vat_benefits_list);
  const taxAllowances = parseListItems(data.tax_allowance_list);

  // parse finance descriptions into intro + bullet items
  const contractHire = parseIntroAndList(data.contract_hire_description);
  const financeLease = parseIntroAndList(data.finance_lease_description);
  const operatingLease = parseIntroAndList(data.operating_lease_description);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{
                  __html:
                    data.business_finance_title ||
                    '<h1><strong>Business Vehicle Finance</strong></h1>',
                }}
              />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {data.business_finance_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={data.apply_now_button_url || "/apply"}>
                  <Button size="lg" className="text-lg px-8">
                    <Truck className="w-5 h-5 mr-2" />
                    {data.apply_now_button_text || "Business Application"}
                  </Button>
                </Link>
                <Link to={data.payments_button_url || "/payments"}>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.payments_button_text || "Calculate Payments"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="custom-color-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{
                __html:
                  data.business_vehicle_title ||
                  '<h2><strong>We Finance All Business Vehicles</strong></h2>',
              }}
            />
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {vehicleTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 comic-panel bg-accent/5 p-4"
                  >
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
            <div
              className="custom-color-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{
                __html:
                  data.business_benefits_title ||
                  '<h2><strong>Business Finance Benefits</strong></h2>',
              }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.tax_efficient_title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.tax_efficient_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Calculator className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.cash_flow_title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.cash_flow_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Building2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.fleet_solutions_title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.fleet_solutions_description}
                  </p>
                </CardContent>
              </Card>

              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="font-comic text-lg">
                    {data.business_sport_title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {data.business_sport_description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Finance Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="custom-color-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{
                __html:
                  data.finance_options_title ||
                  '<h2><strong>Business Finance Options</strong></h2>',
              }}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Business Contract Hire */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.contract_hire_title}
                  </CardTitle>
                  {contractHire.intro && (
                    <p className="text-muted-foreground text-center text-sm">
                      {contractHire.intro}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                    {contractHire.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-3 rounded">
                    <p className="text-xs text-accent font-semibold mb-1">
                      Best for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.contract_hire_best_for}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Finance Lease */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.finance_lease_title}
                  </CardTitle>
                  {financeLease.intro && (
                    <p className="text-muted-foreground text-center text-sm">
                      {financeLease.intro}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                    {financeLease.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-3 rounded">
                    <p className="text-xs text-accent font-semibold mb-1">
                      Best for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.finance_lease_best_for}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Lease */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-xl text-center">
                    {data.operating_lease_title}
                  </CardTitle>
                  {operatingLease.intro && (
                    <p className="text-muted-foreground text-center text-sm">
                      {operatingLease.intro}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                    {operatingLease.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-3 rounded">
                    <p className="text-xs text-accent font-semibold mb-1">
                      Best for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.operating_lease_best_for}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="custom-color-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
                dangerouslySetInnerHTML={{
                  __html:
                    data.tax_benefit_title ||
                    '<h2><strong>Tax Benefits</strong></h2>',
                }}
              />
              <div className="grid md:grid-cols-2 gap-8">
                {/* VAT Benefits */}
                <Card className="comic-panel">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">
                      {data.vat_benefits_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      {vatBenefits.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Tax Allowances */}
                <Card className="comic-panel">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center">
                      {data.tax_allowance_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      {taxAllowances.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
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
            <div
              className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{
                __html:
                  data.business_aims_title ||
                  '<h2>BOOM! Our Business Aims</h2>',
              }}
            />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-accent/5 p-8">
                <div className="text-4xl font-comic font-black text-accent mb-2">
                  🚀
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.support_business_title}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.support_business_description}
                </div>
              </div>
              <div className="comic-panel bg-primary/5 p-8">
                <div className="text-4xl font-comic font-black text-primary mb-2">
                  💼
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.provide_fund_title}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.provide_fund_description}
                </div>
              </div>
              <div className="comic-panel bg-secondary/5 p-8">
                <div className="text-4xl font-comic font-black text-secondary mb-2">
                  ⚡
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {data.work_efficiently_title}
                </div>
                <div className="text-muted-foreground mt-2">
                  {data.work_efficiently_description}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <div
                className="hero-text text-3xl md:text-5xl font-comic text-black mb-6"
                dangerouslySetInnerHTML={{
                  __html:
                    data.supercharge_title ||
                    '<h2>Ready to SUPERCHARGE Your Business Vehicles?</h2>',
                }}
              />
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                {data.supercharge_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to={data.business_quote_button_url || "/quote"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.business_quote_button_text ||
                      "GET MY BUSINESS QUOTE NOW!"}
                  </Button>
                </Link>
                <Link
                  to={data.speak_button_url || "/contact"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    {data.speak_button_text || "Speak to Our Heroes!"}
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
