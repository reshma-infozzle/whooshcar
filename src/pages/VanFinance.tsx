import { useEffect, useState, SVGProps } from "react";
import { Link } from "react-router-dom";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Wrench,
  Calculator,
  Users,
  CheckCircle,
  Package,
} from "lucide-react";

interface VanTypeItem {
  vans: string;
}

interface VanFinanceItem {
  id: number;
  van_finance_title: string;
  van_finance_description: string;
  apply_now_button_text: string;
  apply_now_button_url: string;
  payments_button_text: string;
  payments_button_url: string;

  van_types_title: string;
  van_types: VanTypeItem[];

  yor_industry_title: string;
  trades_people_title: string;
  trades_people_description: string;
  trades_people_ideal_for: string;
  delivery_services_title: string;
  delivery_services_description: string;
  delivery_services_ideal_for: string;
  cleaning_services_title: string;
  cleaning_services_description: string;
  cleaning_services_ideal_for: string;
  catering_title: string;
  catering_description: string;
  catering_ideal_for: string;

  finane_benefits_title: string;
  vat_recovery_title: string;
  vat_recovery_description: string;
  business_tax_title: string;
  business_tax_description: string;
  cash_flow_title: string;
  cash_flow_description: string;
  latest_vehicle_title: string;
  latest_vehicle_description: string;

  finance_options_title: string;
  hire_purchase_title: string;
  hire_purchase_description: string;
  hire_purchase_best_for: string;
  finance_lease_title: string;
  finance_lease_description: string;
  finance_lease_best_for: string;
  operating_lease_title: string;
  operating_lease_description: string;
  operating_lease_best_for: string;

  van_finance_aims_title: string;
  get_moving_title: string;
  get_moving_description: string;
  support_business_title: string;
  support_business_description: string;
  work_fast_title: string;
  work_fast_description: string;

  van_finance_quote_title: string;
  van_finance_quote_description: string;
  van_quote_button_text: string;
  van_quote_button_url: string;
  speak_button_text: string;
  speak_button_url: string;
}

interface ApiResponse {
  status: string;
  data: VanFinanceItem[];
}

const getIconComponent = (
  index: number
): React.ComponentType<SVGProps<SVGSVGElement>> => {
  const icons: Array<React.ComponentType<SVGProps<SVGSVGElement>>> = [
    Package,
    Wrench,
    Calculator,
    Truck,
  ];
  return icons[index % icons.length];
};

const getPlainText = (html: string): string => {
  if (typeof window === "undefined") return html;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
};

// Split finance description HTML into paragraph + list items
const splitDescToParagraphAndList = (
  html: string
): { paragraph: string; items: string[] } => {
  if (typeof window === "undefined") {
    return { paragraph: html, items: [] };
  }

  const temp = document.createElement("div");
  temp.innerHTML = html;

  const p = temp.querySelector("p");
  const paragraph = p ? p.textContent?.trim() || "" : "";

  const items: string[] = [];
  temp.querySelectorAll("li").forEach((li) => {
    const text = li.textContent?.trim();
    if (text) items.push(text);
  });

  return { paragraph, items };
};

// Skeleton using .shimmer CSS
const VanFinanceSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24">
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="shimmer h-10 md:h-14 w-3/4 mx-auto rounded mb-4" />
            <div className="shimmer h-4 w-full max-w-xl mx-auto rounded mb-2" />
            <div className="shimmer h-4 w-5/6 mx-auto rounded mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="shimmer h-11 w-40 rounded" />
              <div className="shimmer h-11 w-48 rounded" />
            </div>
          </div>
        </div>
      </section>

      {[1, 2, 3, 4].map((s) => (
        <section
          key={s}
          className="py-8 sm:py-10 md:py-12 lg:py-16 border-b border-muted/40"
        >
          <div className="container mx-auto px-4">
            <div className="shimmer h-8 w-64 mx-auto rounded mb-10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="comic-panel rounded-xl border border-muted bg-muted/40 p-6"
                >
                  <div className="shimmer h-4 w-3/4 rounded mb-3" />
                  <div className="shimmer h-3 w-full rounded mb-2" />
                  <div className="shimmer h-3 w-5/6 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </div>
);

const VanFinance = () => {
  const [data, setData] = useState<VanFinanceItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://admin.whooshcarfinance.co.uk/api/VanFinance"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json: ApiResponse = await res.json();
        if (!json.data || !json.data.length) {
          throw new Error("No van finance data found");
        }
        setData(json.data[0]);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch van finance data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <VanFinanceSkeleton />;

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">Failed to load data</h2>
          <p className="text-muted-foreground mb-6">
            {error || "No data available"}
          </p>
          <Button onClick={() => window.location.reload()} className="w-full">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const aimsHeadingPlain = getPlainText(data.van_finance_aims_title);
  const ctaHeadingPlain = getPlainText(data.van_finance_quote_title);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{ __html: data.van_finance_title }}
              />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {data.van_finance_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={data.apply_now_button_url}>
                  <Button size="lg" className="text-lg px-8">
                    <Truck className="w-5 h-5 mr-2" />
                    {data.apply_now_button_text}
                  </Button>
                </Link>
                <Link to={data.payments_button_url}>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.payments_button_text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Van Types Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.van_types_title }}
            />
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {data.van_types.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 comic-panel bg-primary/5 p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{type.vans}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.yor_industry_title }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Tradespeople */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-lg text-center">
                    {data.trades_people_title}
                  </CardTitle>
                  <p
                    className="text-muted-foreground text-sm text-center"
                    dangerouslySetInnerHTML={{
                      __html: data.trades_people_description,
                    }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold mb-1">
                      Ideal for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.trades_people_ideal_for
                        .replace("Ideal for:", "")
                        .trim()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Services */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-lg text-center">
                    {data.delivery_services_title}
                  </CardTitle>
                  <p
                    className="text-muted-foreground text-sm text-center"
                    dangerouslySetInnerHTML={{
                      __html: data.delivery_services_description,
                    }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold mb-1">
                      Ideal for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.delivery_services_ideal_for
                        .replace("Ideal for:", "")
                        .trim()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cleaning Services */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-lg text-center">
                    {data.cleaning_services_title}
                  </CardTitle>
                  <p
                    className="text-muted-foreground text-sm text-center"
                    dangerouslySetInnerHTML={{
                      __html: data.cleaning_services_description,
                    }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold mb-1">
                      Ideal for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.cleaning_services_ideal_for
                        .replace("Ideal for:", "")
                        .trim()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Catering */}
              <Card className="comic-panel hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-comic text-lg text-center">
                    {data.catering_title}
                  </CardTitle>
                  <p
                    className="text-muted-foreground text-sm text-center"
                    dangerouslySetInnerHTML={{
                      __html: data.catering_description,
                    }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs text-primary font-semibold mb-1">
                      Ideal for:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.catering_ideal_for
                        .replace("Ideal for:", "")
                        .trim()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.finane_benefits_title }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: data.vat_recovery_title,
                  desc: data.vat_recovery_description,
                  iconIndex: 0,
                },
                {
                  title: data.business_tax_title,
                  desc: data.business_tax_description,
                  iconIndex: 1,
                },
                {
                  title: data.cash_flow_title,
                  desc: data.cash_flow_description,
                  iconIndex: 2,
                },
                {
                  title: data.latest_vehicle_title,
                  desc: data.latest_vehicle_description,
                  iconIndex: 3,
                },
              ].map((benefit, index) => {
                const IconComponent = getIconComponent(benefit.iconIndex);
                return (
                  <Card
                    key={index}
                    className="comic-panel hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader className="text-center">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="font-comic text-lg">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm text-center">
                        {benefit.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Finance Options Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.finance_options_title }}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: data.hire_purchase_title,
                  desc: data.hire_purchase_description,
                  bestFor: data.hire_purchase_best_for,
                },
                {
                  title: data.finance_lease_title,
                  desc: data.finance_lease_description,
                  bestFor: data.finance_lease_best_for,
                },
                {
                  title: data.operating_lease_title,
                  desc: data.operating_lease_description,
                  bestFor: data.operating_lease_best_for,
                },
              ].map((option, index) => {
                const { paragraph, items } = splitDescToParagraphAndList(
                  option.desc
                );

                return (
                  <Card
                    key={index}
                    className="comic-panel hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="font-comic text-xl text-center">
                        {option.title}
                      </CardTitle>
                      {paragraph && (
                        <p className="text-muted-foreground text-center text-sm">
                          {paragraph}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm mb-6">
                        {items.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary/10 p-3 rounded">
                        <p className="text-xs text-primary font-semibold">
                          {option.bestFor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Aims Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.van_finance_aims_title }}
            />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🚐",
                  title: data.get_moving_title,
                  desc: data.get_moving_description,
                },
                {
                  emoji: "💼",
                  title: data.support_business_title,
                  desc: data.support_business_description,
                },
                {
                  emoji: "⚡",
                  title: data.work_fast_title,
                  desc: data.work_fast_description,
                },
              ].map((aim, index) => (
                <div
                  key={index}
                  className="text-center comic-panel bg-primary/5 p-8"
                >
                  <div className="text-4xl font-comic font-black text-primary mb-2">
                    {aim.emoji}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {aim.title}
                  </div>
                  <div className="text-muted-foreground mt-2">{aim.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <div
              className="hero-text text-3xl md:text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.van_finance_quote_title }}
            />
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                {data.van_finance_quote_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to={data.van_quote_button_url}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    {data.van_quote_button_text}
                  </Button>
                </Link>
                <Link to={data.speak_button_url}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    {data.speak_button_text}
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