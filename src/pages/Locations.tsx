import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Car, Clock, Shield, Star, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

const API_URL = "https://admin.whooshcar.testingweblink.com/api/locations";

type ApiLocationItem = {
  finance_in_location_description: ReactNode;
  location: string;
  county: string;
};

type LocationsPageData = {
  id: number;
  location_main_banner_title: string;
  location_main_description: string;
  my_area_button_text: string;
  my_area_button_url: string;
  get_finance_button_text: string;
  get_finance_button_url: string;
  your_area_title: string;
  your_area_description: string;
  locations: ApiLocationItem[];

  why_choose_whoosh_title: string;
  why_choose_whoos_description: string;
  no_broker_title: string;
  no_broker_description: string;
  quick_approval_title: string;
  quick_approval_description: string;
  quick_car_title: string;
  quick_car_description: string;
  expert_support_title: string;
  expert_support_description: string;

  ready_to_start_title: string;
  ready_to_start_description: string;
  whoosh_quote_button_text: string;
  whoosh_quote_button_url: string;
  call_button_text: string;
  call_button_url: string;
};

// Shimmer skeleton for full page
const Shimmer = () => (
  <div className="min-h-screen bg-background halftone-dots-yellow relative">
    <Header />
    <ScrollToTop />

    <main className="pt-24">
      {/* Hero shimmer */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="h-10 sm:h-12 md:h-16 w-3/4 mx-auto bg-gray-200 rounded-lg blog-loading mb-4 sm:mb-6" />
            <div className="h-6 w-2/3 mx-auto bg-gray-200 rounded-lg blog-loading mb-6 sm:mb-8" />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <div className="h-12 w-40 bg-gray-200 rounded-lg blog-loading" />
              <div className="h-12 w-40 bg-gray-200 rounded-lg blog-loading" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations grid shimmer */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
            <div className="text-center mb-8 sm:mb-12">
              <div className="h-8 w-2/3 mx-auto bg-gray-200 rounded-lg blog-loading mb-4" />
              <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded-lg blog-loading" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="comic-panel bg-white p-4 sm:p-6 border-2 border-black blog-loading"
                >
                  <div className="h-6 w-1/2 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded mb-4" />
                  <div className="h-16 w-full bg-gray-200 rounded mb-4" />
                  <div className="h-10 w-full bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits shimmer */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
            <div className="text-center mb-8 sm:mb-12">
              <div className="h-8 w-2/3 mx-auto bg-gray-200 rounded-lg blog-loading mb-4" />
              <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded-lg blog-loading" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="comic-panel bg-gray-100 p-6 border-2 border-black blog-loading"
                >
                  <div className="h-10 w-10 mx-auto bg-gray-200 rounded-full mb-4" />
                  <div className="h-5 w-3/4 mx-auto bg-gray-200 rounded mb-3" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA shimmer */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="comic-panel bg-primary p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-black shadow-comic-lg text-center">
            <div className="h-8 w-2/3 mx-auto bg-gray-200 rounded-lg blog-loading mb-4 sm:mb-6" />
            <div className="h-6 w-3/4 mx-auto bg-gray-200 rounded-lg blog-loading mb-6 sm:mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="h-12 w-48 bg-gray-200 rounded-lg blog-loading" />
              <div className="h-12 w-48 bg-gray-200 rounded-lg blog-loading" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default function Locations() {
  const [pageData, setPageData] = useState<LocationsPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const json = await res.json();
        const first =
          Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null;
        if (!first) {
          throw new Error("No data found in API response");
        }

        setPageData(first);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const isReady =
    !!pageData &&
    !!pageData.location_main_banner_title &&
    Array.isArray(pageData.locations);

  if (loading || !isReady) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background halftone-dots-yellow relative">
        <Header />
        <ScrollToTop />
        <main className="pt-24 flex items-center justify-center">
          <p className="text-lg font-body text-red-600">
            {error || "Unable to load locations"}
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const locations = pageData!.locations ?? [];

  return (
    <div className="min-h-screen bg-background halftone-dots-yellow relative">
      <Header />
      <ScrollToTop />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="hero-text text-3xl sm:text-4xl md:text-6xl font-comic font-black text-foreground mb-4 sm:mb-6 px-2"
                dangerouslySetInnerHTML={{
                  __html: pageData!.location_main_banner_title,
                }}
              />
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                {pageData!.location_main_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                <Link
                  to={pageData!.my_area_button_url || "/locations"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    {pageData!.my_area_button_text || "Find My Area"}
                  </Button>
                </Link>
                <Link
                  to={pageData!.get_finance_button_url || "/finance"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                  >
                    <Car className="w-5 h-5 mr-2" />
                    {pageData!.get_finance_button_text || "Get Finance"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="text-center mb-8 sm:mb-12">
                <div
                  className="hero-text text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4"
                  dangerouslySetInnerHTML={{
                    __html: pageData!.your_area_title,
                  }}
                />
                <p className="text-lg md:text-xl text-black/80 font-body">
                  {pageData!.your_area_description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {locations.map((location, index) => {
                  const slug =
                    typeof location.location === "string"
                      ? location.location.toLowerCase().replace(/\s+/g, "-")
                      : `location-${index}`;

                  return (
                    <div
                      key={slug}
                      className="comic-panel bg-white hover:shadow-comic-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                    >
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-comic text-black mb-1 group-hover:text-primary transition-colors">
                              {location.location}
                            </h3>
                            <p className="text-sm text-black/70 flex items-center font-body">
                              <MapPin className="w-4 h-4 mr-1 text-secondary" />
                              {location.county}
                            </p>
                          </div>
                        </div>
                        <p className="text-black/80 mb-4 text-sm leading-relaxed font-body">
                          {location.finance_in_location_description}
                        </p>
                        <Button
                          asChild
                          className="w-full font-comic shadow-comic hover:shadow-comic-lg transition-all text-center justify-center"
                        >
                          <Link to={`/locations/${slug}`}>Get Finance Here!</Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-6 sm:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="text-center mb-8 sm:mb-12">
                <div
                  className="hero-text text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4"
                  dangerouslySetInnerHTML={{
                    __html: pageData!.why_choose_whoosh_title,
                  }}
                />
                <p className="text-lg md:text-xl text-black/80 font-body">
                  {pageData!.why_choose_whoos_description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="comic-panel bg-primary p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Shield className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {pageData!.no_broker_title}
                  </h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">
                    {pageData!.no_broker_description}
                  </p>
                </div>

                <div className="comic-panel bg-secondary p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Clock className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {pageData!.quick_approval_title}
                  </h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">
                    {pageData!.quick_approval_description}
                  </p>
                </div>

                <div className="comic-panel bg-accent p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Car className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {pageData!.quick_car_title}
                  </h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">
                    {pageData!.quick_car_description}
                  </p>
                </div>

                <div className="comic-panel bg-comic-yellow p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 group-hover:animate-bounce-gentle">
                    <Users className="w-8 h-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-comic text-black mb-2">
                    {pageData!.expert_support_title}
                  </h3>
                  <p className="text-black/80 font-body text-sm leading-relaxed">
                    {pageData!.expert_support_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 test">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-primary p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-black shadow-comic-lg text-center">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6"
                dangerouslySetInnerHTML={{
                  __html: pageData!.ready_to_start_title,
                }}
              />
              <p className="text-lg md:text-xl mb-6 sm:mb-8 text-black/80 font-body leading-relaxed max-w-3xl mx-auto">
                {pageData!.ready_to_start_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <Link
                  to={pageData!.whoosh_quote_button_url || "/apply"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 font-comic shadow-comic hover:shadow-comic-lg transition-all animate-button-pulse-slow w-full"
                  >
                    {pageData!.whoosh_quote_button_text || "WHOOSH ME A QUOTE!"}
                  </Button>
                </Link> */}

                <Button
                  asChild
                  variant="secondary"
                  className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                >
                  <Link
                    to={pageData!.whoosh_quote_button_url || "/apply"}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                      {pageData!.whoosh_quote_button_text || "WHOOSH ME A QUOTE!"}
                    </div>

                    <span className="text-xs font-medium leading-none">
                      10.9% Rep. APR - Credit Broker, Not a Lender
                    </span>
                  </Link>
                </Button>

                {/* <Link
                  to={pageData!.call_button_url || "/contact"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 font-comic border-black text-black hover:bg-black hover:text-white shadow-comic hover:shadow-comic-lg transition-all w-full sm:w-auto"
                  >
                    {pageData!.call_button_text || "Call 0333 577 7000"}
                  </Button>
                </Link> */}
              </div>
              {/* <p className="mt-3 text-[#000c] font-semibold text-[18px]">No Impact On Your Credit Score</p> */}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
