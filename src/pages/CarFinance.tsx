import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Shield, Calculator, Clock, CheckCircle, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


// --------------------------------------------------
// SHIMMER LOADING SKELETON (NO BORDERS)
// --------------------------------------------------
const Shimmer = () => (
  <div className="min-h-screen bg-background animate-pulse">
    <Header />

    <main className="pt-24">

      {/* HERO SECTION */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="w-3/4 h-8 bg-gray-200 rounded-lg mx-auto mb-4" />
          <div className="w-1/2 h-6 bg-gray-200 rounded-lg mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-40 h-12 bg-gray-200 rounded-lg" />
            <div className="w-40 h-12 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </section>

      {/* FINANCE TYPES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-1/3 h-8 bg-gray-200 rounded-lg mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl p-6">
                <div className="w-1/2 h-6 bg-gray-300 rounded mb-6 mx-auto" />
                <div className="space-y-3">
                  <div className="w-3/4 h-3 bg-gray-300 rounded mx-auto" />
                  <div className="w-2/3 h-3 bg-gray-300 rounded mx-auto" />
                  <div className="w-4/5 h-3 bg-gray-300 rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="w-1/3 h-8 bg-gray-200 rounded-lg mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4" />
                <div className="w-1/2 h-4 bg-gray-300 rounded mx-auto mb-3" />
                <div className="w-3/4 h-3 bg-gray-300 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="w-1/2 h-8 bg-gray-200 rounded-lg mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl p-8 text-center">
                <div className="w-16 h-8 bg-gray-300 rounded mx-auto mb-4" />
                <div className="w-16 h-4 bg-gray-300 rounded mx-auto mb-3" />
                <div className="w-3/4 h-3 bg-gray-300 rounded mx-auto" />
              </div>
            ))}
          </div>

          <div className="w-full h-3 bg-gray-200 rounded mx-auto mt-8" />
          <div className="w-4/5 h-3 bg-gray-200 rounded mx-auto mt-3" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="w-1/2 h-8 bg-gray-100 rounded-lg mx-auto mb-6" />
          <div className="w-1/3 h-4 bg-gray-100 rounded-lg mx-auto mb-8" />
          <div className="w-48 h-12 bg-gray-100 rounded-lg mx-auto" />
        </div>
      </section>
    </main>

    <Footer />
  </div>
);


// --------------------------------------------------
// MAIN COMPONENT — WITH API DYNAMIC DATA
// --------------------------------------------------
const CarFinance = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAPI = async () => {
      try {
        const res = await fetch("https://admin.whooshcarfinance.co.uk/api/CarFinance");
        const json = await res.json();
        setData(json.data[0]);
      } catch (e) {
        console.error("API Error:", e);
      } finally {
        setLoading(false);
      }
    };

    loadAPI();
  }, []);

  if (loading || !data) return <Shimmer />;


  // DYNAMIC FINANCE TYPE DATA
  const financeTypes = [
    {
      title: data.hire_purchase_title,
      description: data.hire_purchase_description,
      features: data.hire_purchase_points || [],
    },
    {
      title: data.contract_purchase_title,
      description: data.contract_purchase_description,
      features: data.contract_purchase_points || [],
    },
    {
      title: data.personal_loan_title,
      description: data.personal_loan_description,
      features: data.personal_loan_points || [],
    },
  ];


  const benefits = [
    {
      icon: Shield,
      title: data.fca_regulated_title,
      description: data.fca_regulated_description,
    },
    {
      icon: Percent,
      title: data.compititive_rates_title,
      description: data.compititive_rates_description,
    },
    {
      icon: Clock,
      title: data.quick_decision_title,
      description: data.quick_decision_description,
    },
    {
      icon: Calculator,
      title: data.flexible_terms_title,
      description: data.flexible_terms_description,
    },
  ];


  // --------------------------------------------------
  // FINAL UI
  // --------------------------------------------------
  return (
    <>
    <Helmet>
      <title>Car Finance UK Deals & Loans |  Whoosh Car Finance</title>
      <meta name="description" content="Find the best car finance deals in the UK. Easy applications, low monthly payments, and options available for all credit types including self-employed." />
    </Helmet>
    
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">

        {/* HERO */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1
              className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: data.car_finance_banner_title }}
            />

            <p className="text-xl text-muted-foreground mb-8">
              {data.car_finance_description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={data.payments_button_url}>
                <Button size="lg" className="text-lg px-8">
                  <Calculator className="mr-2" />
                  {data.payments_button_text}
                </Button>
              </Link>

              <Link to={data.apply_now_button_url}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Car className="mr-2" />
                  {data.apply_now_button_text}
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* FINANCE TYPES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.finance_type_title }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financeTypes.map((type, i) => (
                <Card key={i} className="comic-panel">
                  <CardHeader>
                    <CardTitle className="font-comic text-xl text-center hero-text">
                      {type.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
  <div
    className="text-center text-muted-foreground mb-6 custom-list-style"
    dangerouslySetInnerHTML={{ __html: type.description }}
  />

  {/* If the backend still gives features array, keep rendering it */}
  {type.features?.length > 0 && (
    <ul className="space-y-3">
      {type.features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <CheckCircle className="text-primary" />
          {f}
        </li>
      ))}
    </ul>
  )}
</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* BENEFITS */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2
              className="hero-text text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.why_choose_title }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center">
                  <div className="comic-panel p-6 bg-background">
                    <b.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-comic font-bold text-lg hero-text">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* RATES */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">

            <h2
              className="hero-text text-4xl font-comic font-black text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.representative_rates_title }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="comic-panel text-center p-8 bg-primary/5">
                <div className="text-4xl font-comic text-primary mb-2 hero-text">
                  {data.apr_value}
                </div>
                <h4 className="font-bold">{data.apr_title}</h4>
                <p className="text-muted-foreground">{data.apr_description}</p>
              </div>

              <div className="comic-panel text-center p-8 bg-secondary/5">
                <div className="text-4xl font-comic text-secondary mb-2 hero-text">
                  {data.application_fee_value}
                </div>
                <h4 className="font-bold">{data.application_fee_title}</h4>
                <p className="text-muted-foreground">{data.application_fee_description}</p>
              </div>

              <div className="comic-panel text-center p-8 bg-accent/5">
                <div className="text-4xl font-comic text-accent mb-2 hero-text">
                  {data.maxterm_month_value}
                </div>
                <h4 className="font-bold">{data.maxterm_month_title}</h4>
                <p className="text-muted-foreground">{data.maxterm_month_description}</p>
              </div>

            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              {data.representative_example}
            </p>

          </div>
        </section>


        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="hero-text text-4xl font-comic font-black mb-4">
              {data.ready_finance_title}
            </h2>

            <p className="text-xl mb-8">{data.ready_finance_description}</p>

            
              {/* <Button size="lg" variant="secondary" className="text-lg px-8">
                <Link to={data.get_quote_button_url}>

                  <Calculator className="mr-2" />
                  {data.get_quote_button_text}
                </Link>
              </Button> */}

              <Button
                asChild
                variant="secondary"
                className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
              >
                <Link
                  to={data.get_quote_button_url}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                    <Calculator className="mr-2" />
                    {data.get_quote_button_text}
                  </div>

                  <span className="text-xs font-medium leading-none">
                    10.9% Rep. APR - Credit Broker, Not a Lender
                  </span>
                </Link>
              </Button>
            
          </div>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
};

export default CarFinance;
