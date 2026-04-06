import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Zap, Shield, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// -----------------------------
// SHIMMER COMPONENTS (NO BORDER)
// -----------------------------

const ShimmerHero = () => (
  <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
    <div className="container mx-auto px-4 text-center">
      <div className="h-10 w-3/4 mx-auto blog-loading rounded-lg mb-4" />
      <div className="h-6 w-2/3 mx-auto blog-loading rounded-lg mb-6" />

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="h-12 w-48 blog-loading rounded-lg" />
        <div className="h-12 w-48 blog-loading rounded-lg" />
      </div>
    </div>
  </section>
);

const ShimmerOriginStory = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="h-10 w-2/3 mx-auto blog-loading rounded-lg mb-8" />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="h-4 w-full blog-loading rounded-lg" />
          <div className="h-4 w-5/6 blog-loading rounded-lg" />
          <div className="h-4 w-2/3 blog-loading rounded-lg" />
        </div>

        <div>
          <div className="h-40 blog-loading rounded-lg w-full" />
        </div>
      </div>
    </div>
  </section>
);

const ShimmerSuperpowers = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="h-10 w-1/2 mx-auto blog-loading rounded-lg mb-12" />

      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="blog-loading h-40 rounded-lg w-full" />
        ))}
      </div>
    </div>
  </section>
);

const ShimmerMission = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="h-10 w-2/3 mx-auto blog-loading rounded-lg mb-6" />
      <div className="h-6 w-3/4 mx-auto blog-loading rounded-lg mb-10" />

      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="blog-loading h-32 rounded-lg w-full" />
        ))}
      </div>
    </div>
  </section>
);

const ShimmerCTA = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="h-10 w-2/3 mx-auto blog-loading rounded-lg mb-6" />
      <div className="h-6 w-3/4 mx-auto blog-loading rounded-lg mb-8" />

      <div className="h-12 w-48 mx-auto blog-loading rounded-lg" />
    </div>
  </section>
);

// -----------------------------
// ABOUT US PAGE (FINAL VERSION)
// -----------------------------

const AboutUs = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://admin.whooshcarfinance.co.uk/api/about_us");
        const json = await res.json();
        setData(json.data[0]);
      } catch (err) {
        console.error("Error loading About content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // -----------------------------
  // SHOW SHIMMER UNTIL DATA LOADS
  // -----------------------------
  if (loading || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <ShimmerHero />
          <ShimmerOriginStory />
          <ShimmerSuperpowers />
          <ShimmerMission />
          <ShimmerCTA />
        </main>

        <Footer />
      </div>
    );
  }

  // -----------------------------
  // REAL CONTENT (BORDERS KEPT)
  // -----------------------------
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">

        {/* HERO SECTION — KEPT SAME */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1
              className="hero-text text-4xl md:text-6xl font-comic font-black mb-6"
              dangerouslySetInnerHTML={{ __html: data.about_banner_title }}
            />

            <p
              className="text-xl text-muted-foreground mb-8"
              dangerouslySetInnerHTML={{ __html: data.about_banner_description }}
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={data.get_quote_button_url}>
                <Button size="lg" className="text-lg px-8">
                  <Heart className="w-5 h-5 mr-2" />
                  {data.get_quote_button_text}
                </Button>
              </a>

              <a href={data.contact_us_button_url}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Users className="w-5 h-5 mr-2" />
                  {data.contact_us_button_text}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ORIGIN STORY — BORDERS KEPT */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">

              <h2
                className="hero-text text-3xl md:text-5xl font-comic text-center mb-8"
                dangerouslySetInnerHTML={{ __html: data.origin_story_title }}
              />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p
                  className="custom-color-text text-lg text-black/80 font-body"
                  dangerouslySetInnerHTML={{ __html: data.origin_story_description }}
                />

                <div className="comic-panel bg-primary/20 p-6 border-2 border-black text-center">
                  <Zap className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3
                    className="text-2xl font-comic mb-2"
                    dangerouslySetInnerHTML={{ __html: data.superpower_card_title }}
                  />
                  <p className="text-lg text-black/80 font-body">
                    {data.superpower_card_sub_title}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SUPERPOWERS — BORDERS KEPT */}
        <section className="py-12">
          <div className="container mx-auto px-4">

            <h2
              className="hero-text text-3xl md:text-5xl font-comic text-center mb-12"
              dangerouslySetInnerHTML={{ __html: data.our_superpower_title }}
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Shield className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-comic mb-4">
                  {data.protection_shield_title}
                </h3>
                <p className="text-black/80 font-body">
                  {data.protection_shield_description}
                </p>
              </div>

              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Zap className="w-16 h-16 text-secondary mb-4" />
                <h3 className="text-2xl font-comic mb-4">
                  {data.force_technology_title}
                </h3>
                <p className="text-black/80 font-body">
                  {data.force_technology_description}
                </p>
              </div>

              <div className="comic-panel bg-white/95 p-6 border-4 border-black shadow-comic">
                <Users className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-comic mb-4">
                  {data.customer_service_title}
                </h3>
                <p className="text-black/80 font-body">
                  {data.customer_service_description}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* OUR MISSION — BORDERS KEPT */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-secondary/20 p-12 border-4 border-black shadow-comic-lg">

              <h2
                className="hero-text text-3xl md:text-5xl font-comic text-center mb-8"
                dangerouslySetInnerHTML={{ __html: data.our_mission_title }}
              />

              <div className="text-center max-w-4xl mx-auto">
                <Heart className="w-20 h-20 text-primary mx-auto mb-6" />

                <p
                  className="text-xl text-black/80 font-body mb-8"
                  dangerouslySetInnerHTML={{ __html: data.our_mission_description }}
                />

                <div className="grid md:grid-cols-3 gap-8 mt-12">

                  <div className="text-center">
                    <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic mb-2">
                      {data.happy_heroes_title}
                    </h3>
                    <p className="text-black/80 font-body">
                      {data.happy_heroes_description}
                    </p>
                  </div>

                  <div className="text-center">
                    <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-comic mb-2">
                      {data.application_title}
                    </h3>
                    <p className="text-black/80 font-body">
                      {data.application_description}
                    </p>
                  </div>

                  <div className="text-center">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic mb-2">
                      {data.secure_title}
                    </h3>
                    <p className="text-black/80 font-body">
                      {data.secure_description}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION — BORDERS KEPT */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">

            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">

              <h2
                className="hero-text text-3xl md:text-5xl font-comic mb-6"
                dangerouslySetInnerHTML={{ __html: data.superhero_story_tile }}
              />

              <p
                className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: data.superhero_story_description }}
              />

              {/* <a href={data.super_quote_button_url}>
                <Button
                  size="lg"
                  className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto mx-auto"
                >
                  <Car className="w-5 h-5 mr-2" />
                  {data.super_quote_button_text}

                 
                </Button>
                

              </a> */}


              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
              >
                <Link
                  to={data.super_quote_button_url}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                    <Car className="w-5 h-5 mr-2" />
                    {data.super_quote_button_text}
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

export default AboutUs;