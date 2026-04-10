import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Heart,
  TrendingUp,
  Shield,
  Users,
  Car,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

// -------------------- SHIMMER --------------------
const Shimmer = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-20 space-y-10">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-16 w-full bg-gray-200 rounded-lg blog-loading" />
      ))}
      <div className="grid grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded-lg blog-loading" />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// -------------------- COMPONENT --------------------
const BadCreditFinance = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "https://admin.whooshcarfinance.co.uk/api/BadCreditFinance"
        );

        const json = await res.json();
        setData(json.data[0]);
      } catch (e) {
        console.error("API ERROR:", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading || !data) return <Shimmer />;

  // CREDIT ISSUES ARRAY
  const creditIssues = data.credit_issues || [];

  // ADVANTAGES SECTION
  const advantages = [
    {
      icon: Heart,
      title: data.approach_title,
      description: data.approach_description,
    },
    {
      icon: TrendingUp,
      title: data.credit_building_title,
      description: data.credit_building_description,
    },
    {
      icon: Shield,
      title: data.responsible_lending_title,
      description: data.responsible_lending_description,
    },
    {
      icon: Users,
      title: data.expert_support_title,
      description: data.expert_support_description,
    },
  ];

  return (
    <>
    <Helmet>
      <title>Car Finance for Poor Credit Score |  Whoosh Car Finance</title>
      <meta name="description" content="Get car finance options even with a poor credit score. Explore zero deposit deals, flexible terms, and solutions designed for all credit situations." />
    </Helmet>
    
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">

        {/* HERO SECTION */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: data.bad_credit_banner_title }}
            />

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {data.bad_credit_description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={data.apply_now_button_url}>
                <Button size="lg" className="text-lg px-8">
                  <Car className="mr-2" /> {data.apply_now_button_text}
                </Button>
              </Link>

              <Link to={data.payments_button_url}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Calculator className="mr-2" /> {data.payments_button_text}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CREDIT ISSUES */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white p-8 border-4 border-black shadow-comic-lg">

              <h2
                className="hero-text text-4xl font-comic text-center mb-12"
                dangerouslySetInnerHTML={{ __html: data.credit_issues_title }}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {creditIssues.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 comic-panel bg-secondary/10 p-4 border-2 border-black"
                  >
                    <CheckCircle className="text-secondary" />
                    <span className="font-body">{item.Issues}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="comic-panel bg-primary/20 p-6 border-4 border-black inline-block">
                  <p
                    className="hero-text text-xl font-comic mb-2"
                    dangerouslySetInnerHTML={{ __html: data.fca_title }}
                  />
                  <p className="text-black/70">{data.fca_description}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-4xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.why_choose_us_title }}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((item, i) => (
                <div
                  key={i}
                  className="comic-panel bg-white p-6 border-4 border-black shadow-comic"
                >
                  <item.icon className="mx-auto mb-4 text-secondary w-16 h-16" />
                  <h3 className="text-2xl font-comic text-center mb-4">{item.title}</h3>
                  <p className="text-center text-black/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIMPLE PROCESS (BAM! SECTION) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">

              <h2
                className="hero-text text-4xl md:text-5xl font-comic text-center mb-12"
                dangerouslySetInnerHTML={{ __html: data.simple_process_title }}
              />

              <div className="grid md:grid-cols-3 gap-8">

                <div className="comic-panel bg-secondary/20 p-8 border-4 border-black text-center">
                  <div className="text-5xl font-comic text-secondary mb-4">1</div>
                  <h3 className="font-comic text-xl mb-2">{data.tell_story_title}</h3>
                  <p className="text-black/80">{data.tell_story_description}</p>
                </div>

                <div className="comic-panel bg-secondary/20 p-8 border-4 border-black text-center">
                  <div className="text-5xl font-comic text-secondary mb-4">2</div>
                  <h3 className="font-comic text-xl mb-2">{data.find_solutions_title}</h3>
                  <p className="text-black/80">{data.find_solutions_description}</p>
                </div>

                <div className="comic-panel bg-secondary/20 p-8 border-4 border-black text-center">
                  <div className="text-5xl font-comic text-secondary mb-4">3</div>
                  <h3 className="font-comic text-xl mb-2">{data.get_approved_title}</h3>
                  <p className="text-black/80">{data.get_approved_description}</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ZAP! OUR AIMS SECTION */}
        <section className="py-12">
          <div className="container mx-auto px-4">

            <h2
              className="hero-text text-4xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.our_aims_title }}
            />

            <div className="grid md:grid-cols-3 gap-8 text-center demo">

            {/* SUPPORT YOU */}
            <div className="comic-panel bg-white p-8 border-4 border-black flex flex-col items-center">
              <img
                src="/supprt.png"
                alt="Support you"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-comic mb-2">
                {data.support_you_title}
              </h3>
              <p className="text-black/70">
                {data.support_you_description}
              </p>
            </div>

            {/* GET YOU MOVING */}
            <div className="comic-panel bg-white p-8 border-4 border-black flex flex-col items-center">
              <img
                src="/car.png"
                alt="Get you moving"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-comic mb-2">
                {data.get_moving_title}
              </h3>
              <p className="text-black/70">
                {data.get_moving_description}
              </p>
            </div>

            {/* WORK FAST */}
            <div className="comic-panel bg-white p-8 border-4 border-black flex flex-col items-center">
              <img
                src="/star.png"
                alt="Work fast"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-comic mb-2">
                {data.work_fast_title}
              </h3>
              <p className="text-black/70">
                {data.work_fast_description}
              </p>
            </div>

          </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-secondary/20 p-8 border-4 border-black shadow-comic-lg">

              <h2
                className="hero-text text-4xl font-comic text-black mb-6"
                dangerouslySetInnerHTML={{ __html: data.bad_credit_hold_title }}
              />

              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                {data.bad_credit_hold_description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                {/* CHECK MY SUPER OPTIONS BUTTON */}
                <Link to={data.super_options_button_url}>
                  <Button
                    size="lg"
                    className="font-bold text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] flex items-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    {data.super_options_button_text}
                  </Button>
                </Link>

                {/* SPEAK TO OUR HEROES BUTTON */}
                <Link to={data.speak_button_url}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-bold text-xl shadow-[4px_4px_0px_rgb(0_0_0_/_1)] flex items-center gap-2"
                  >
                    <Users className="w-6 h-6" />
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
    </>
  );
};

export default BadCreditFinance;