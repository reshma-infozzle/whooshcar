import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, CheckCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "https://admin.whooshcarfinance.co.uk/api/home";

interface HomeData {
  how_whoosh_works_title: string;
  how_whoosh_works_description: string;
  apply_online_title: string;
  apply_online_description: string;
  we_search_title: string;
  we_search_description: string;
  choose_deal_title: string;
  choose_deal_description: string;
  get_car_title: string;
  get_car_description: string;
  ready_to_start_title: string;
  ready_to_start_description: string;
  whoosh_journey_button_text: string;
  whoosh_journey_button_url: string;
}

export const HowItWorks = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        if (result.status === "success" && result.data && result.data[0]) {
          setData(result.data[0]);
        } else {
          throw new Error("No data found");
        }
      } catch (err) {
        setError("Failed to load content");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const steps = [
    {
      number: "1",
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: data?.apply_online_title || "Apply Online",
      description: data?.apply_online_description || "Loading...",
    },
    {
      number: "2",
      icon: <Search className="w-12 h-12 text-secondary" />,
      title: data?.we_search_title || "We Search & Compare",
      description: data?.we_search_description || "Loading...",
    },
    {
      number: "3",
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: data?.choose_deal_title || "Choose Your Deal",
      description: data?.choose_deal_description || "Loading...",
    },
    {
      number: "4",
      icon: <Car className="w-12 h-12 text-primary" />,
      title: data?.get_car_title || "Get Your Car",
      description: data?.get_car_description || "Loading...",
    },
  ];

  if (loading) {
    return (
      <section id="how-it-works" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow relative">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Title Shimmer */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="shimmer h-12 sm:h-16 md:h-20 mx-auto w-64 sm:w-80 md:w-96 mb-4 sm:mb-6 md:mb-8 rounded-lg"></div>
            <div className="shimmer h-6 sm:h-8 md:h-10 mx-auto w-96 sm:w-[500px] md:w-[600px] rounded-lg"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Steps Shimmer */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="comic-panel relative bg-white/50 border-4 border-black/20 rounded-lg p-4 sm:p-6 md:p-8">
                    <div className="shimmer h-14 sm:h-16 md:h-18 w-14 sm:w-16 md:w-18 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                    <div className="shimmer h-12 w-12 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                    <div className="shimmer h-8 w-32 mx-auto mb-2 rounded-md"></div>
                    <div className="shimmer h-5 w-48 mx-auto rounded-md"></div>
                  </div>
                ))}
            </div>

            {/* CTA Shimmer */}
            <div className="comic-panel bg-primary/80 p-6 sm:p-8 md:p-10 lg:p-12 text-black rounded-lg">
              <div className="shimmer h-12 sm:h-14 md:h-16 w-64 sm:w-80 md:w-96 mx-auto mb-4 sm:mb-6 rounded-lg"></div>
              <div className="shimmer h-6 sm:h-8 md:h-10 w-80 sm:w-96 md:w-[500px] mx-auto mb-6 sm:mb-8 rounded-lg"></div>
              <div className="shimmer h-12 w-64 sm:w-80 md:w-96 mx-auto rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="how-it-works" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 halftone-dots-yellow relative">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div
            className="text-3xl sm:text-4xl md:text-5xl font-comic text-black mb-4 sm:mb-6 md:mb-8"
            dangerouslySetInnerHTML={{ __html: data?.how_whoosh_works_title || "How WHOOSH Works!" }}
          />
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body px-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.how_whoosh_works_description || "Loading..." }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="comic-panel relative group hover:shadow-comic-lg transition-all duration-300 bg-white hover:scale-105 hover:-translate-y-2">
                <div className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                  <div className="comic-panel w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 bg-primary flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                    <span className="text-xl sm:text-2xl font-comic text-black">{step.number}</span>
                  </div>
                  
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 group-hover:animate-bounce-gentle">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-comic text-black mb-2 sm:mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="comic-panel text-center bg-primary p-6 sm:p-8 md:p-10 lg:p-12 text-black">
            <div
              className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6"
              dangerouslySetInnerHTML={{ __html: data?.ready_to_start_title || "Ready to Get Started?" }}
            />
            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-black/80 font-body px-2 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data?.ready_to_start_description || "Loading..." }}
            />
            <Link to={data?.whoosh_journey_button_url || "/start"}>
              {/* <Button
                variant="default"
                size="lg"
                className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 font-comic min-h-[48px]"
              >
                <Car className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                {data?.whoosh_journey_button_text || "Start My WHOOSH Journey!"}
                
              </Button> */}

              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
              >
                <Link
                  to={data?.whoosh_journey_button_url || "/start"}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                    <Car className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    {data?.whoosh_journey_button_text || "Start My WHOOSH Journey!"}
                  </div>

                  <span className="text-xs font-medium leading-none">
                    10.9% Rep. APR - Credit Broker, Not a Lender
                  </span>
                </Link>
              </Button>
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
};
