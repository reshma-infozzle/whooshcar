import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Car, Zap, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

// -----------------------------------
// SHIMMER COMPONENTS (NO BORDER)
// -----------------------------------

const FAQHeroShimmer = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="h-10 w-3/4 mx-auto rounded-lg blog-loading mb-4" />
      <div className="h-6 w-2/3 mx-auto rounded-lg blog-loading mb-6" />

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="h-12 w-48 rounded-lg blog-loading" />
        <div className="h-12 w-48 rounded-lg blog-loading" />
      </div>
    </div>
  </section>
);

const FAQListShimmer = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="h-10 w-1/2 mx-auto rounded-lg blog-loading mb-8" />

      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-20 w-full rounded-lg blog-loading mb-4" />
      ))}
    </div>
  </section>
);

const FAQQuestionShimmer = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="h-10 w-2/3 mx-auto rounded-lg blog-loading mb-4" />
      <div className="h-6 w-3/4 mx-auto rounded-lg blog-loading mb-6" />

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <div className="h-12 w-40 rounded-lg blog-loading" />
        <div className="h-12 w-40 rounded-lg blog-loading" />
      </div>
    </div>
  </section>
);

const FAQFinanceShimmer = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="h-12 w-2/3 mx-auto rounded-lg blog-loading mb-4" />
      <div className="h-6 w-3/4 mx-auto rounded-lg blog-loading mb-8" />
      <div className="h-12 w-48 mx-auto rounded-lg blog-loading" />
    </div>
  </section>
);

// -----------------------------------
// FAQ PAGE
// -----------------------------------

const FAQ = () => {
  const [data, setData] = useState<any>(null);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.whooshcarfinance.co.uk/api/faqs"
        );
        const json = await res.json();

        const faqData = json.data[0];
        setData(faqData);
        setFaqs(faqData.faqs || []);
      } catch (error) {
        console.error("Error fetching FAQ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  // -----------------------------------
  // SHOW SHIMMER ONLY (NO BORDERS)
  // -----------------------------------
  if (loading || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <FAQHeroShimmer />
          <FAQListShimmer />
          <FAQQuestionShimmer />
          <FAQFinanceShimmer />
        </main>
        <Footer />
      </div>
    );
  }

  // -----------------------------------
  // REAL CONTENT (WITH BORDERS KEPT)
  // -----------------------------------
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* ⭐ HERO SECTION (KEPT SAME) */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{ __html: data.banner_title }}
              />

              <p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.banner_description }}
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button size="lg" className="text-lg px-8">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  {data.banner_button_1}
                </Button> */}

                <Link to={data.banner_url_2 || "/contact"}>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {data.banner_button_2}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ FAQ SECTION (ALL BORDERS KEPT) */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
            <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 hero-text">
                <HelpCircle className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary" />
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-comic text-black"
                  dangerouslySetInnerHTML={{ __html: data.faq_section_title }}
                />
              </div>

              <Accordion
                type="single"
                collapsible
                className="space-y-3 sm:space-y-4"
              >
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className={`comic-panel border-2 border-black accordion-item ${
                      index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <AccordionTrigger
                      className="
                        text-left
                        text-base sm:text-lg
                        font-comic
                        font-normal
                       text-black
                        px-3 sm:px-4
                        hover:text-primary
                        [&_strong]:font-normal
                        [&_b]:font-normal
                        "
                    >
                      <span
                        className="block font-normal"
                        dangerouslySetInnerHTML={{ __html: item.faq_question }}
                      />
                    </AccordionTrigger>

                    <AccordionContent className="text-black/80 font-body px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base">
                      <div
                        className="accordion-content"
                        dangerouslySetInnerHTML={{ __html: item.faq_answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ⭐ STILL GOT QUESTIONS SECTION (KEPT SAME) */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="hero-text comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg text-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6 px-2"
                dangerouslySetInnerHTML={{
                  __html: data.question_section_tile,
                }}
              />

              <p
                className="text-lg sm:text-xl text-black/80 font-body mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
                dangerouslySetInnerHTML={{ __html: data.question_section_text }}
              />

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                {/* <Link to={data.question_url_1}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-bold text-base sm:text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {data.question_button_1}
                  </Button>
                </Link> */}

                <Button
                  size="lg"
                  className="font-bold text-base sm:text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {data.question_button_2}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ CTA SECTION (KEPT SAME) */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className=" hero-text comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2
                className="text-3xl md:text-5xl font-comic text-black mb-6"
                dangerouslySetInnerHTML={{ __html: data.finance_section_title }}
              />

              <p
                className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: data.finance_section_text }}
              />

              {/* <a href={data.finance_url_1}>
                <Button
                  size="lg"
                  className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto mx-auto"
                >
                  <Car className="w-5 h-5 mr-2" />
                  {data.finance_button_1}
                </Button>
              </a> */}
              
              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
              >
                <Link
                  to={data.finance_url_1}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                    <Car className="w-5 h-5 mr-2" />
                  {data.finance_button_1}
                  </div>

                  <span className="text-xs font-medium leading-none">
                    10.9% Rep. APR - Credit Broker, Not a Lender
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;