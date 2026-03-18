import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Home,
  Car,
  MapPin,
  Handshake,
  Shield,
  FileText,
  Image,
  Mail,
  Building,
  Globe,
} from "lucide-react";

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<string, any> = {
  home: Home,
  car: Car,
  location: MapPin,
  handshake: Handshake,
  shield: Shield,
  image: Image,
  mail: Mail,
  building: Building,
  globe: Globe,
};

const DefaultIcon = FileText;

/* ---------------- SHIMMER ---------------- */

const SitemapShimmer = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="h-[200px] rounded-xl bg-muted/40 animate-pulse"
      />
    ))}
  </div>
);

/* ---------------- STAT ---------------- */

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div
      style={{ color: "rgb(242,216,90)" }}
      className="
        font-['Bangers']
        font-bold
        text-[30px]
        leading-[36px]
        mb-1
      "
    >
      {value}
    </div>
    <div className="text-sm text-[rgb(33,36,44)] font-medium">
      {label}
    </div>
  </div>
);





/* ---------------- MAIN ---------------- */

const Sitemap = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.whooshcar.testingweblink.com/api/sitemap")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data?.[0] ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* ✅ HARD GUARD – PREVENT HYDRATION + NULL ERRORS */
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 container mx-auto px-4">
          <SitemapShimmer />
        </main>
        <Footer />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  /* ✅ BUILD SECTIONS ONLY AFTER DATA EXISTS */
  const sections = [
    { title: data.main_page_title, pages: data.main_pages, icon: Home },
    { title: data.finance_services_title, pages: data.finance_pages, icon: Car },
    { title: data.location_services_title, pages: data.location_pages, icon: MapPin },
    { title: data.business_partner_title, pages: data.business_pages, icon: Handshake },
    { title: data.external_title, pages: data.external_pages, icon: Globe },
    { title: data.legal_title, pages: data.legal_pages, icon: Shield },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | WHOOSH! Car Finance</title>
      </Helmet>

      <Header />
      <ScrollToTop />

      <main className="pt-24">
        {/* ---------------- HERO ---------------- */}
        <section className="py-20 bg-[#F9F8E9]">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="font-comic font-black text-5xl md:text-6xl leading-none">
                <span className="text-[#F5DC63]">BAM!</span>{" "}
                <span className="text-foreground">SITEMAP</span>
              </h1>

              <img
                src="/images/map-icon.svg"
                alt="Sitemap"
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {data.sitemap_description}
            </p>
          </div>
        </section>

        {/* ---------------- SITEMAP SECTIONS ---------------- */}
        <section className="py-14">
          <div className="container mx-auto px-4 space-y-20">
            {sections.map((section, i) => (
              <div key={i}>
                <div className="text-center mb-10">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h2 className="mt-4
    font-['Bangers']
    font-bold
    text-[30px]
    leading-[36px]
    text-[rgb(33,36,44)]
    uppercase
">
                    {section.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page: any, idx: number) => {
                    const Icon = iconMap[page.icon_title] || DefaultIcon;

                    const title =
                      page.main_page_title ||
                      page.finance_page_title ||
                      page.location_page_title ||
                      page.business_page_title ||
                      page.external_page_title ||
                      page.legal_page_title;

                    const description =
                      page.main_page_description ||
                      page.finance_page_description ||
                      page.location_page_description ||
                      page.business_page_description ||
                      page.external_page_description ||
                      page.legal_page_description;

                    return (
                      <Card
                        key={idx}
                        className="
                          group
    bg-white
    border-[1px] border-black
    rounded-xl
    shadow-[6px_6px_0px_#000]
    transition-all duration-200
    hover:shadow-[8px_8px_0px_#000]
    hover:-translate-y-[2px]

                        "
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-3
    font-['Bangers']
    font-semibold
    text-[18px]
    leading-[28px]
    text-[rgb(33,36,44)]
    uppercase
">
                            <div className="w-9 h-9
    rounded-md
    bg-gradient-to-br from-[#F6DE69] to-[#F2C94C]
    flex items-center justify-center
">
                              <Icon className="w-4 h-4"
  stroke="#21242C"
  fill="none"
  strokeWidth={2}
 />
                            </div>
                            {title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4 pt-0">
                          <p className="text-sm leading-snug text-muted-foreground">
                            {description}
                          </p>

<Button
  asChild
  variant="default"
  className="
    group
    w-full
    !bg-[#FFFDF6]
    !text-[rgb(33,36,44)]
    font-['Bangers']
    font-semibold
    text-sm
    uppercase

    !border-[4px] !border-black
    shadow-[4px_4px_0px_#000]

    transition-all

    group-hover:!bg-[#F6DE69]
    group-hover:!text-[rgb(33,36,44)]
    group-hover:shadow-[2px_2px_0px_#000]

    active:translate-x-[2px]
    active:translate-y-[2px]
    active:shadow-none
  "

>
  <Link
    to={page.visit_page_url}
    className="
      flex items-center justify-center gap-1
      text-inherit
      no-underline
    "
  >
    <span>VISIT PAGE</span>
    <span className="text-[18px] leading-none">→</span>
  </Link>
</Button>

                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- STATS ---------------- */}
<section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-center mb-12 uppercase">
  <span
    className="
      font-['Bangers']
      font-bold
      text-[30px]
      leading-[36px]
      text-[rgb(242,216,90)]
    "
  >
    {data?.site_statistic_title?.split(" ")[0]}
  </span>{" "}
  <span
    className="
      font-['Bangers']
      font-bold
      text-[30px]
      leading-[36px]
      text-[rgb(33,36,44)]
    "
  >
    {data?.site_statistic_title?.split(" ").slice(1).join(" ")}
  </span>
</h2>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Stat value={data.total_pages_count} label={data.total_pages_title} />
              <Stat value={data.finance_pages_count} label={data.finance_pages_title} />
              <Stat value={data.location_pages_count} label={data.location_pages_title} />
              <Stat value={data.online_pages_count} label={data.online_pages_title} />
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-[#FFFCF2] border-[1px] border-black">
              <CardContent className="p-8 text-center">
<div
  className="
    font-['Bangers']
    font-bold
    text-[24px]
    leading-[32px]
    text-[rgb(33,36,44)]
    uppercase
    mb-4
    flex
    items-center
    justify-center
    gap-2
  "
  dangerouslySetInnerHTML={{ __html: data.cant_find_title }}
/>
                <p className="text-muted-foreground mt-3">
                  {data.cant_find_description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button asChild className="comic-button">
                    <Link to={data.contact_us_button_url}>
                      {data.contact_us_button_text}
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <Link to={data.get_quote_button_url}>
                      {data.get_quote_button_text}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
