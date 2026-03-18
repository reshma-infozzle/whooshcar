import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  FileText,
  Search,
  Car,
  Clock,
  Users,
  Zap,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";

// ---------- Types ----------
interface WhyChooseFeature {
  why_choose_whoosh_features: string;
}

interface ApiHowItWorksItem {
  id: number;
  howitworks_banner_title: string;
  howitworks_banner_description: string;
  get_started_button_text: string;
  get_started_button_url: string;
  calculate_button_text: string;
  calculate_button_url: string;

  super_process_title: string;

  apply_online_title: string;
  apply_online_sub_title: string;
  apply_online_description: string;

  we_search_title: string;
  we_search_sub_title: string;
  we_search_description: string;

  get_approved_title: string;
  get_approved_sub_title: string;
  get_approved_description: string;

  buy_car_title: string;
  buy_car_sub_title: string;
  buy_car_description: string;

  why_choose_whoosh_title: string;
  why_choose_whoosh_features: WhyChooseFeature[];

  superhero_stats_tile: string;
  our_aim_title: string;
  our_aim_sub_title: string;
  our_aim_description: string;
  multiple_title: string;
  multiple_sub_title: string;
  multiple_description: string;
  our_task_title: string;
  our_task_sub_title: string;
  our_task_description: string;

  finance_experience_title: string;
  finance_experience_description: string;
  get_super_quote_button_text: string;
  get_super_quote_button_url: string;
  speak_heores_button_text: string;
  speak_heores_button_url: string;
}

interface StepView {
  title: string;
  time: string;
  descriptionHtml: string;
}

// ---------- Shimmer components ----------
const ShimmerHero = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-24 md:h-32 bg-slate-200/70 rounded-2xl howitworks-loading mx-auto mb-6 w-4/5 md:w-3/5" />
        <div className="h-8 bg-slate-200/70 howitworks-loading mx-auto w-2/3 md:w-1/2 rounded-lg mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="h-12 bg-slate-200/70 howitworks-loading w-48 rounded-lg" />
          <div className="h-12 bg-slate-200/60 howitworks-loading w-48 rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

const ShimmerStepCard = () => (
  <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic relative h-[280px]">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-300/70 howitworks-loading rounded-full border-4 border-black" />
    <div className="text-center pt-4">
      <div className="w-16 h-16 bg-slate-300/70 howitworks-loading mx-auto mb-4 rounded-2xl" />
      <div className="h-8 bg-slate-200/70 howitworks-loading mx-auto w-3/4 rounded-lg mb-4" />
      <div className="h-6 bg-slate-200/60 howitworks-loading mx-auto w-1/2 rounded mb-4" />
      <div className="h-16 bg-slate-200/70 howitworks-loading mx-auto rounded-lg" />
    </div>
  </div>
);

const ShimmerBenefitsCard = () => (
  <div className="comic-panel bg-primary/10 p-4 border-2 border-black h-20">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 bg-slate-300/70 howitworks-loading rounded-full flex-shrink-0" />
      <div className="h-5 bg-slate-200/70 howitworks-loading w-full rounded" />
    </div>
  </div>
);

const ShimmerStatsCard = () => (
  <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic h-[200px]">
    <div className="h-20 bg-slate-200/70 howitworks-loading rounded-2xl mb-2 mx-auto w-3/4" />
    <div className="h-6 bg-slate-200/60 howitworks-loading mx-auto w-1/2 rounded mb-4" />
    <div className="h-12 bg-slate-200/70 howitworks-loading mx-auto rounded-lg" />
  </div>
);

const ShimmerCtaCard = () => (
  <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg h-[300px]">
    <div className="h-16 bg-slate-200/70 howitworks-loading rounded-2xl mb-6 mx-auto w-3/4" />
    <div className="h-8 bg-slate-200/60 howitworks-loading mx-auto w-2/3 mb-8 rounded-lg" />
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <div className="h-14 bg-slate-200/70 howitworks-loading flex-1 rounded-lg" />
      <div className="h-14 bg-slate-200/60 howitworks-loading flex-1 rounded-lg" />
    </div>
  </div>
);

// ---------- Component ----------
const HowItWorks: React.FC = () => {
  const [apiItem, setApiItem] = useState<ApiHowItWorksItem | null>(null);
  const [loading, setLoading] = useState(true);

  // static icons for the 4 steps
  const stepIcons = [FileText, Search, CheckCircle, Car];

  const stepsFromApi: StepView[] | null = apiItem
    ? [
        {
          title: apiItem.apply_online_title,
          time: apiItem.apply_online_sub_title.replace("⚡", "").trim(),
          descriptionHtml: apiItem.apply_online_description,
        },
        {
          title: apiItem.we_search_title,
          time: apiItem.we_search_sub_title.replace("⚡", "").trim(),
          descriptionHtml: apiItem.we_search_description,
        },
        {
          title: apiItem.get_approved_title,
          time: apiItem.get_approved_sub_title.replace("⚡", "").trim(),
          descriptionHtml: apiItem.get_approved_description,
        },
        {
          title: apiItem.buy_car_title,
          time: apiItem.buy_car_sub_title.replace("⚡", "").trim(),
          descriptionHtml: apiItem.buy_car_description,
        },
      ]
    : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.whooshcar.testingweblink.com/api/how_it_works"
        );
        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        if (json.status === "success" && json.data?.length > 0) {
          setApiItem(json.data[0] as ApiHowItWorksItem);
        }
      } catch (e) {
        console.error("HowItWorks API error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ---------- Loading view ----------
  if (loading || !apiItem) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <ShimmerHero />

          {/* Steps shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="h-16 bg-slate-200/70 howitworks-loading mx-auto w-80 rounded-2xl mb-12" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <ShimmerStepCard key={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Why choose shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="h-16 bg-slate-200/70 howitworks-loading mx-auto w-80 rounded-2xl mb-12" />
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[...Array(6)].map((_, i) => (
                    <ShimmerBenefitsCard key={i} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="h-16 bg-slate-200/70 howitworks-loading mx-auto w-80 rounded-2xl mb-12" />
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[...Array(3)].map((_, i) => (
                  <ShimmerStatsCard key={i} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA shimmer */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 text-center">
              <ShimmerCtaCard />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // ---------- Real view ----------
  const benefitsFromApi =
    apiItem.why_choose_whoosh_features?.map(
      (f) => f.why_choose_whoosh_features
    ) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{
                  __html: apiItem.howitworks_banner_title || "",
                }}
              />
              <div
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: apiItem.howitworks_banner_description || "",
                }}
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link to={apiItem.get_started_button_url || "/apply"}>
                  <Button size="lg" className="text-lg px-8">
                    <Zap className="w-5 h-5 mr-2" />
                    {apiItem.get_started_button_text}
                  </Button>
                </Link> */}

                <Link to={apiItem.get_started_button_url || "/apply"}>
                  <Button
                    asChild
                    variant="default"
                    className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                  >
                    <Link
                      to={apiItem.get_started_button_url || "/apply"}
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                        <Zap className="w-5 h-5 mr-2" />
                        {apiItem.get_started_button_text}
                      </div>

                      <span className="text-xs font-medium leading-none">
                        10.9% Rep. APR - Credit Broker, Not a Lender
                      </span>
                    </Link>
                  </Button>
                </Link>
                {/* <Link to={apiItem.calculate_button_url || "/calculator"}>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    {apiItem.calculate_button_text}
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{
                __html: apiItem.super_process_title || "",
              }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stepsFromApi?.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <div
                    key={index}
                    className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic relative"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-comic font-bold text-xl border-4 border-black">
                      {index + 1}
                    </div>
                    <div className="text-center pt-4">
                      <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-comic text-black mb-2">
                        {step.title}
                      </h3>
                      <div className="text-lg text-secondary font-comic font-bold mb-4">
                        ⚡ {step.time}
                      </div>
                      <div
                        className="text-black/80 font-body"
                        dangerouslySetInnerHTML={{
                          __html: step.descriptionHtml || "",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose WHOOSH */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
           <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
              <div
                className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
                dangerouslySetInnerHTML={{
                  __html: apiItem.why_choose_whoosh_title || "",
                }}
              />
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {apiItem.why_choose_whoosh_features?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 comic-panel bg-primary/10 p-4 border-2 border-black"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-black font-body text-lg">
                    {item.why_choose_whoosh_features}
                  </span>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto text-[12px] mt-12"><p><strong>Representative Example: </strong>Borrowing £7,000 over 60 months at a representative APR of 21.9% (fixed), 60 monthly payments of £192.93. Total amount payable: £11,575.80. Total cost of credit: £4,575.80. This is an example only, all finance subject to status. Example only. Lender fees may apply. All finance subject to status.</p></div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{
                __html: apiItem.superhero_stats_tile || "",
              }}
            />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-primary mb-2">
                  {apiItem.our_aim_title}
                </div>
                <div className="text-xl font-comic text-black mb-2">
                  {apiItem.our_aim_sub_title}
                </div>
                <div
                  className="text-black/70 font-body"
                  dangerouslySetInnerHTML={{
                    __html: apiItem.our_aim_description || "",
                  }}
                />
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-secondary mb-2">
                  {apiItem.multiple_title}
                </div>
                <div className="text-xl font-comic text-black mb-2">
                  {apiItem.multiple_sub_title}
                </div>
                <div
                  className="text-black/70 font-body"
                  dangerouslySetInnerHTML={{
                    __html: apiItem.multiple_description || "",
                  }}
                />
              </div>
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic">
                <div className="text-5xl font-comic text-primary mb-2">
                  {apiItem.our_task_title}
                </div>
                <div className="text-xl font-comic text-black mb-2">
                  {apiItem.our_task_sub_title}
                </div>
                <div
                  className="text-black/70 font-body"
                  dangerouslySetInnerHTML={{
                    __html: apiItem.our_task_description || "",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <div
                className="hero-text text-3xl md:text-5xl font-comic text-black mb-6"
                dangerouslySetInnerHTML={{
                  __html: apiItem.finance_experience_title || "",
                }}
              />
              <div
                className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{
                  __html: apiItem.finance_experience_description || "",
                }}
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to={apiItem.get_super_quote_button_url || "/apply"}>
                  <Button
                    size="xl"
                    className="font-bold text-xl animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                  >
                    <Clock className="w-6 h-6 mr-2" />
                    {apiItem.get_super_quote_button_text}
                  </Button>

                  
                </Link>
                <Link to={apiItem.speak_heores_button_url || "/contact"}>
                  <Button
                    size="xl"
                    variant="secondary"
                    className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                  >
                    <Users className="w-6 h-6 mr-2" />
                    {apiItem.speak_heores_button_text}
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

export default HowItWorks;
