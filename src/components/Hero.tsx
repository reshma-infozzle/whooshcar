import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "https://admin.whooshcarfinance.co.uk/api/home";

interface HomeItem {
  id: number;
  fast_car_finance_title: string; // HTML string
  fast_car_finance_description: string;
  whoosh_quote_button_text: string;
  whoosh_quote_button_url: string;
  fca_regulated_text: string;
  two_minute_app_text: string;
  home_banner_image: string;
}

export const Hero = () => {
  const [data, setData] = useState<HomeItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const item: HomeItem | undefined = json?.data?.[0];
        if (item) {
          setData(item);
        }
      } catch (e) {
        console.error("Failed to load home data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  const titleHtml =
    data?.fast_car_finance_title ||
    `<h1 style="text-align: center;">WHOOSH! Fast Car Finance</h1>`;
  const descriptionText =
    data?.fast_car_finance_description ||
    "Lightning-fast car finance that moves at your speed! Compare deals instantly, get approved in a breeze.";
  const buttonText = data?.whoosh_quote_button_text || "WHOOSH ME A QUOTE!";
  const buttonUrl = data?.whoosh_quote_button_url || "/apply";
  const fcaText = data?.fca_regulated_text || "FCA Regulated!";
  const twoMinuteText = data?.two_minute_app_text || "2-Minute App!";
  const bannerImagePath =
    data?.home_banner_image ||
    "homer-banner-images/01KCKME6MQZMPN9V70C5P2FKC0.png";

  const bannerImageUrl = `https://admin.whooshcarfinance.co.uk/storage/${bannerImagePath}`;

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      <div className="w-full pt-20 sm:pt-22 md:pt-24 pb-8 sm:pb-10 md:pb-12 relative">
        <div className="comic-panel bg-white/95 mx-2 sm:mx-4 mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 lg:p-8 border-2 sm:border-4 border-black shadow-comic-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between w-full relative z-10">
            {/* Main Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center w-full lg:w-3/5 order-1">
              {/* Title */}
              {loading ? (
                <div className="w-full flex justify-center">
                  <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 w-4/5 sm:w-3/4 md:w-2/3 bg-gray-200 rounded-md animate-pulse" />
                </div>
              ) : (
                <div
                  className="hero-text font-comic text-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                  dangerouslySetInnerHTML={{ __html: titleHtml }}
                />
              )}

              {/* Description */}
              {loading ? (
                <div className="space-y-2 max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-0">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6 mx-auto" />
                </div>
              ) : (
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-black/80 font-body leading-relaxed max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-0">
                  {descriptionText}
                </p>
              )}

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                {loading ? (
                  <div className="w-full sm:w-auto">
                    <div className="h-12 sm:h-14 bg-gray-200 rounded-full animate-pulse w-48 mx-auto" />
                  </div>
                ) : (
                  <Link to={buttonUrl}>
                    {/* <Button
                      variant="default"
                      size="xl"
                      className="font-bold text-base sm:text-lg md:text-xl w-full sm:w-auto animate-button-pulse-slow shadow-[4px_4px_0px_rgb(0_0_0_/_1)] min-h-[48px] px-6"
                    >
                      
                      <Car className="w-5 h-5 sm:w-6 sm:h-6" />
                      {buttonText}
                    </Button> */}
                    <Button
  asChild
  variant="default"
  className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
>
  <Link
    to={buttonUrl}
    className="flex flex-col items-center justify-center gap-1"
  >
    <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
      <Car className="w-5 h-5 sm:w-6 sm:h-6" />
      {buttonText}
    </div>

    <span className="text-xs font-medium leading-none">
      10.9% Rep. APR - Credit Broker, Not a Lender
    </span>
  </Link>
</Button>
                    {/* <p className="mt-3 text-[#000c] font-semibold text-[18px]">No Impact On Your Credit Score</p> */}

                  </Link>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6">
                {loading ? (
                  <>
                    <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2 bg-primary">
                      <div className="flex items-center gap-1 sm:gap-2 text-black">
                        <Shield className="w-4 h-4 sm:w-4 sm:h-4" />
                        <span className="font-comic text-sm sm:text-sm">
                          {fcaText}
                        </span>
                      </div>
                    </div>
                    <div className="comic-panel px-3 sm:px-4 md:px-4 py-2 sm:py-2 bg-secondary">
                      <div className="flex items-center gap-1 sm:gap-2 text-black">
                        <Clock className="w-4 h-4 sm:w-4 sm:h-4" />
                        <span className="font-comic text-sm sm:text-sm">
                          {twoMinuteText}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Image Panel */}
            <div className="relative w-full lg:w-3/5 order-2 flex justify-center">
              <div className="comic-panel overflow-hidden bg-white p-2 sm:p-3 shadow-comic w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                {loading ? (
                  <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-200 rounded-lg animate-pulse" />
                ) : (
                  <img
                    src={bannerImageUrl}
                    alt="Hero banner"
                    className="w-full h-auto rounded-lg"
                  />
                )}

                <p className="text-[10px] sm:text-xs text-muted-foreground font-body leading-relaxed mt-6">Representative example: Borrowing £23000 over 60 months at a representative APR of 10.9%, an annual interest rate of 10.87% (fixed), and a deposit of £0.00 would be 60 monthly payments of £493.16. Total amount payable: £28,589.60. Total cost of credit: £6,589.60. This is an example only; all finance subject to status. Lender fees may apply.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
