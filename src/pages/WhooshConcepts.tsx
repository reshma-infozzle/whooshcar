import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Concept Images
import businessCard from "@/assets/concepts/business-card.jpg";
import brandedPen from "@/assets/concepts/branded-pen.jpg";
import brandedPencil from "@/assets/concepts/branded-pencil.jpg";
import posterVertical from "@/assets/concepts/poster-vertical.jpg";
import webBanner from "@/assets/concepts/web-banner.jpg";

// Social Media Ads - Whoosh Branded
import instagramSquare from "@/assets/concepts/instagram-whoosh-square.jpg";
import instagramStory from "@/assets/concepts/instagram-whoosh-story.jpg";
import facebookFeed from "@/assets/concepts/facebook-whoosh-feed.jpg";
import tiktokVideo from "@/assets/concepts/tiktok-whoosh-video.jpg";

// Additional Ad Variations
import instagramBadCredit from "@/assets/ads/instagram-bad-credit.jpg";
import instagramQuickDecision from "@/assets/ads/instagram-quick-decision.jpg";
import instagramBusinessStory from "@/assets/ads/instagram-business-story.jpg";
import instagramMotorbike from "@/assets/ads/instagram-motorbike.jpg";
import facebookVanFinance from "@/assets/ads/facebook-van-finance.jpg";
import tiktok2024Car from "@/assets/ads/tiktok-2024-car.jpg";

const WhooshConcepts = () => {
  return (
    <>
      <Helmet>
        <title>Whoosh Brand Concepts - Marketing Materials & Advertising</title>
        <meta 
          name="description" 
          content="Explore Whoosh Finance brand concepts including business cards, stationery, posters, and social media advertising designs. Minimalist branding materials for modern car finance." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 sm:pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8 halftone-dots-yellow">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-4">
                Whoosh Brand Concepts
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-body max-w-2xl mx-auto leading-relaxed">
                Minimalist branding and advertising concepts showcasing the Whoosh Finance identity across various mediums
              </p>
            </div>

            {/* Business Stationery Section */}
            <section className="mb-16">
              <h2 className="font-comic text-3xl sm:text-4xl font-black mb-8 text-center text-foreground">Business Stationery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Business Card - 3.5x2 inch aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[1.75/1] overflow-hidden">
                    <img 
                      src={businessCard} 
                      alt="Whoosh Finance business card concept with minimalist design"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Business Card</h3>
                    <p className="text-sm text-foreground/70 font-body">3.5" × 2" (Standard)</p>
                  </div>
                </div>

                {/* Branded Pen */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img 
                      src={brandedPen} 
                      alt="Whoosh Finance branded promotional pen mockup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Branded Pen</h3>
                    <p className="text-sm text-foreground/70 font-body">Promotional Item</p>
                  </div>
                </div>

                {/* Branded Pencil */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img 
                      src={brandedPencil} 
                      alt="Whoosh Finance branded pencil with logo"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Branded Pencil</h3>
                    <p className="text-sm text-foreground/70 font-body">Promotional Item</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Print & Poster Section */}
            <section className="mb-16">
              <h2 className="font-comic text-3xl sm:text-4xl font-black mb-8 text-center text-foreground">Posters & Banners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vertical Poster - 24x36 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[2/3] overflow-hidden">
                    <img 
                      src={posterVertical} 
                      alt="Whoosh Finance vertical poster with comic book aesthetic"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Vertical Poster</h3>
                    <p className="text-sm text-foreground/70 font-body">24" × 36" (Standard Poster)</p>
                  </div>
                </div>

                {/* Web Banner - 728x90 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[728/180] overflow-hidden">
                    <img 
                      src={webBanner} 
                      alt="Whoosh Finance horizontal web banner ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Web Banner</h3>
                    <p className="text-sm text-foreground/70 font-body">728 × 90px (Leaderboard)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Instagram Ads Section */}
            <section className="mb-16">
              <h2 className="font-comic text-3xl sm:text-4xl font-black mb-8 text-center text-foreground">Instagram Advertising</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Instagram Square - 1:1 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={instagramSquare} 
                      alt="Whoosh Finance Instagram square post ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Square Post</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1080px (1:1)</p>
                  </div>
                </div>

                {/* Instagram Story - 9:16 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[9/16] overflow-hidden">
                    <img 
                      src={instagramStory} 
                      alt="Whoosh Finance Instagram story ad format"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Story Format</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1920px (9:16)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={instagramBadCredit} 
                      alt="Whoosh Finance bad credit car finance Instagram ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Bad Credit Finance</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1080px (1:1)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={instagramQuickDecision} 
                      alt="Whoosh Finance quick decision approval Instagram ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Quick Decision</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1080px (1:1)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[9/16] overflow-hidden">
                    <img 
                      src={instagramBusinessStory} 
                      alt="Whoosh Finance business car finance Instagram story"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Business Finance Story</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1920px (9:16)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={instagramMotorbike} 
                      alt="Whoosh Finance motorbike finance Instagram ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Motorbike Finance</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1080px (1:1)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Facebook Ads Section */}
            <section className="mb-16">
              <h2 className="font-comic text-3xl sm:text-4xl font-black mb-8 text-center text-foreground">Facebook Advertising</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Facebook Feed - 1.91:1 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[1.91/1] overflow-hidden">
                    <img 
                      src={facebookFeed} 
                      alt="Whoosh Finance Facebook feed landscape ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Feed Landscape</h3>
                    <p className="text-sm text-foreground/70 font-body">1200 × 628px (1.91:1)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[1.91/1] overflow-hidden">
                    <img 
                      src={facebookVanFinance} 
                      alt="Whoosh Finance van finance Facebook ad"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Van Finance</h3>
                    <p className="text-sm text-foreground/70 font-body">1200 × 628px (1.91:1)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* TikTok Ads Section */}
            <section className="mb-16">
              <h2 className="font-comic text-3xl sm:text-4xl font-black mb-8 text-center text-foreground">TikTok Advertising</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TikTok Video - 9:16 aspect */}
                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[9/16] overflow-hidden">
                    <img 
                      src={tiktok2024Car} 
                      alt="Whoosh Finance TikTok vertical video ad for 2024 cars"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">2024 Car Finance</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1920px (9:16)</p>
                  </div>
                </div>

                <div className="comic-panel group relative overflow-hidden hover:shadow-comic-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="aspect-[9/16] overflow-hidden">
                    <img 
                      src={tiktokVideo} 
                      alt="Whoosh Finance TikTok video thumbnail"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-comic text-lg font-bold text-foreground">Video Thumbnail</h3>
                    <p className="text-sm text-foreground/70 font-body">1080 × 1920px (9:16)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhooshConcepts;
