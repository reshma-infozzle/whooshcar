import { useEffect, useState } from "react";
import { MapPin, Heart, Users, Clock, Shield, TrendingUp, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const API_URL = "https://admin.whooshcarfinance.co.uk/api/home";

interface HomeData {
  who_are_whoosh_title: string;
  who_are_whoosh_description: string;
  "2_minuite_button_text": string;
  "2_minuite_description": string;
  fca_regulated_title: string;
  fca_regulated_description: string;
  best_rates_title: string;
  best_rates_description: string;
  all_credit_title: string;
  all_credit_description: string;
  amazing_customer_title: string;
  amazing_customer_description: string;
  no_hidden_fees_title: string;
  no_hidden_fees_description: string;
  whoosh_features: Array<{
    feature_title: string;
    feature_description: string;
  }>;
  born_menchester_title: string;
  born_menchester_description: string;
  your_interest_title: string;
  your_interest_description: string;
  built_trust_title: string;
  built_trust_description: string;
  whoosh_second_description: string;
}

export const AboutUs = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.data[0]); // API returns data array
      } catch (err) {
        setError("Failed to load content");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Map API benefits with icons (icons stay static, text dynamic)
  const benefits = data ? [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: data["2_minuite_button_text"],
      description: data["2_minuite_description"]
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: data.fca_regulated_title,
      description: data.fca_regulated_description
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: data.best_rates_title,
      description: data.best_rates_description
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: data.all_credit_title,
      description: data.all_credit_description
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: data.amazing_customer_title,
      description: data.amazing_customer_description
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: data.no_hidden_fees_title,
      description: data.no_hidden_fees_description
    }
  ] : [];

  if (loading) {
    return (
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 halftone-dots-yellow relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 lg:p-12 border-2 sm:border-4 border-black shadow-comic-lg animate-pulse">
            {/* Shimmer Title */}
            <div className="text-center space-y-6 mb-12">
              <div className="h-12 sm:h-16 bg-gray-200 rounded-lg mx-auto w-3/4 sm:w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
            
            {/* Shimmer Benefits - Mobile */}
            <div className="md:hidden">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-3 pb-6 pt-2 px-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex-shrink-0 w-64 h-72 bg-gray-200 rounded-lg shadow-lg"></div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Shimmer Benefits - Desktop */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg shadow-lg"></div>
              ))}
            </div>

            {/* Shimmer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-black/20"></div>
              ))}
            </div>

            {/* Shimmer Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-lg shadow-lg border-2 border-black/20"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 halftone-dots-yellow relative overflow-hidden">
      {/* Comic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 lg:p-12 border-2 sm:border-4 border-black shadow-comic-lg">
          
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
            {/* Dynamic Title */}
            <div 
              className="hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-comic text-black mb-3 sm:mb-4 md:mb-6 px-2"
              dangerouslySetInnerHTML={{ __html: data?.who_are_whoosh_title || "Who Are Whoosh?" }}
            />

            {/* Benefits Section */}
            <div className="mb-8 sm:mb-12">
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-body px-2 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.who_are_whoosh_description || "Loading..." }}
              />

              {/* Mobile: Horizontal scroll */}
              <div className="md:hidden">
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex gap-3 pb-6 pt-2 px-2">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index} 
                        className="comic-panel group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-[1.02] hover:-translate-y-1 flex-shrink-0 w-64 h-72"
                      >
                        <div className="p-4 text-center space-y-2 h-full flex flex-col">
                          <div className="flex justify-center mb-1 group-hover:animate-bounce-gentle">
                            {benefit.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-comic text-black leading-tight">
                            {benefit.title}
                          </h3>
                          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-body flex-1 flex items-center text-center whitespace-normal hyphens-auto">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index} 
                    className="comic-panel group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="p-8 text-center space-y-4">
                      <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-comic text-black">
                        {benefit.title}
                      </h3>
                      <p className="text-black/70 leading-relaxed font-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                {data?.whoosh_features?.map((feature, index) => {
                  const bgClasses = [
                    "bg-primary",
                    "bg-secondary",
                    "bg-accent",
                    "bg-comic-yellow",
                  ];
                  const bgClass = bgClasses[index % bgClasses.length];

                  return (
                    <div
                      key={index}
                      className={`comic-panel text-center p-6 ${bgClass}`}
                    >
                      <div className="text-3xl font-comic text-black mb-2">
                        {feature.feature_title}
                      </div>
                      <div className="text-black/70 font-body">
                        {feature.feature_description}
                      </div>
                    </div>
                  );
               })}
              </div>
            </div>

            {/* Main content - Dynamic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              {/* Manchester Heritage */}
              <div className="comic-panel bg-primary p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <MapPin className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">{data?.born_menchester_title}</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  {data?.born_menchester_description}
                </p>
              </div>

              {/* Customer Focus */}
              <div className="comic-panel bg-secondary p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <Heart className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">{data?.your_interest_title}</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  {data?.your_interest_description}
                </p>
              </div>

              {/* Community Trust */}
              <div className="comic-panel bg-accent p-6 text-center group hover:scale-105 transition-transform duration-300 flex flex-col min-h-[200px]">
                <Users className="w-8 h-8 text-black mx-auto mb-3 group-hover:animate-bounce-gentle" />
                <h3 className="font-comic text-base sm:text-lg text-black mb-2">{data?.built_trust_title}</h3>
                <p className="text-black/80 font-body text-sm sm:text-base leading-relaxed flex-1 flex items-center">
                  {data?.built_trust_description}
                </p>
              </div>
            </div>

            {/* Dynamic Bottom message */}
            <div className="pt-4">
              <div 
                className="hero-text text-base sm:text-lg text-black/90 font-body leading-relaxed max-w-2xl mx-auto custom-color-whoosh"
                dangerouslySetInnerHTML={{ __html: data?.whoosh_second_description || "Loading..." }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
