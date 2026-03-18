import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Car,
  Clock,
  Shield,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Building,
  TrendingUp,
  Briefcase,
  Navigation,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet-async';
// OPTIONAL (recommended) – if you want sanitization:
// import DOMPurify from 'dompurify';

const API_URL = 'https://admin.whooshcar.testingweblink.com/api/locations';

interface FeatureItem {
  item_title?: string;
  feature?: string;
}

interface CarFinanceFeature {
  feature: string;
}

interface LocationData {
  location: string;
  county: string;

  finance_in_location_title?: string;
  finance_in_location_description?: string;
  get_finance_button_text?: string;
  get_finance_button_url?: string;
  call_us_button_text?: string;
  call_us_button_url?: string;

  local_market_title?: string;

  economy_title?: string;
  economy_description?: string;
  employment_title?: string;
  employment_description?: string;
  transport_title?: string;
  transport_description?: string;
  market_title?: string;
  market_description?: string;

  secondry_description?: string;
  features?: FeatureItem[];

  popular_car_title?: string;
  popular_car_list?: string;
  local_insights_title?: string;
  local_insights_list?: string;

  car_finance_title?: string;
  car_finance_description?: string;
  how_whoosh_helps?: string;

  eligibility_title?: string;
  eligibility_list?: string;
  credit_considerations?: string;

  how_it_works_title?: string;
  how_it_works_list?: string;

  ready_for_car_finance?: string;
  ready_for_car_finance_description?: string;

  car_finance_features?: CarFinanceFeature[];

  apply_now_button_text?: string;
  apply_now_button_url?: string;
  get_quote_button_text?: string;
  get_quote_button_url?: string;

  need_help_title?: string;
  need_help_description?: string;
  phone?: string;
  email?: string;
}

interface RootLocationBlock {
  id: number;
  location_main_banner_title: string;
  location_main_description: string;
  my_area_button_text: string;
  my_area_button_url: string;
  get_finance_button_text: string;
  get_finance_button_url: string;
  your_area_title: string;
  your_area_description: string;
  locations: LocationData[];
}

interface ApiResponse {
  status: string;
  data: RootLocationBlock[];
}

// Simple shimmer block
const ShimmerBlock = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-muted rounded-md ${className}`} />
);

// For cases where you need plain text only (e.g. meta description)
const parseHtmlText = (html?: string): string => {
  if (!html) return '';
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return (temp.textContent || '').trim();
};

// Helper to render HTML (keeps underline, bold, etc.)
const renderHtml = (html?: string) => {
  if (!html) return null;

  // OPTIONAL sanitization (recommended if content is not fully trusted from server)
  // const clean = DOMPurify.sanitize(html);
  const clean = html;

  return <span dangerouslySetInnerHTML={{ __html: clean }} />;
};

const renderHtmlBlock = (
  html?: string,
  className?: string,
  as: 'p' | 'h2' | 'h3' = 'p'
) => {
  if (!html) return null;

  // OPTIONAL sanitization
  // const clean = DOMPurify.sanitize(html);
  const clean = html;

  const commonProps = {
    className,
    dangerouslySetInnerHTML: { __html: clean },
  };

  if (as === 'h2') return <h2 {...commonProps} />;
  if (as === 'h3') return <h3 {...commonProps} />;
  return <p {...commonProps} />;
};

const parseListItems = (html?: string): string[] => {
  if (!html) return [];
  const temp = document.createElement('div');
  temp.innerHTML = html;

  const liNodes = temp.querySelectorAll('li');
  if (liNodes.length > 0) {
    return Array.from(liNodes).map((li) => (li.textContent || '').trim());
  }

  const pNodes = temp.querySelectorAll('p');
  if (pNodes.length > 0) {
    return Array.from(pNodes).map((p) => (p.textContent || '').trim());
  }

  const text = (temp.textContent || '').trim();
  return text ? [text] : [];
};

export default function LocationDetail() {
  const { city } = useParams<{ city: string }>();

  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(API_URL);
        const json: ApiResponse = await res.json();

        const root = Array.isArray(json.data) ? json.data[0] : null;

        if (json?.status === 'success' && root && Array.isArray(root.locations)) {
          setLocations(root.locations);
        } else {
          setError('Invalid locations data from API');
          setLocations([]);
        }
      } catch (e) {
        console.error('Error fetching locations', e);
        setError('Failed to load locations');
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (!city) {
    return null;
  }

  // FULL PAGE SHIMMER LAYOUT
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ScrollToTop />
        <main className="pt-24">
          {/* HERO SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <ShimmerBlock className="h-10 md:h-14 w-3/4 mx-auto mb-4" />
                <ShimmerBlock className="h-6 w-1/2 mx-auto mb-6" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <ShimmerBlock className="h-12 w-40 rounded-full" />
                  <ShimmerBlock className="h-12 w-40 rounded-full" />
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL MARKET SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
                <div className="text-center mb-8">
                  <ShimmerBlock className="h-8 w-1/2 mx-auto" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="text-center">
                      <ShimmerBlock className="h-12 w-12 mx-auto mb-4 rounded-full" />
                      <ShimmerBlock className="h-5 w-24 mx-auto mb-2" />
                      <ShimmerBlock className="h-3 w-20 mx-auto mb-1" />
                      <ShimmerBlock className="h-3 w-28 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
              <ShimmerBlock className="h-4 w-3/4 mx-auto mb-2" />
              <ShimmerBlock className="h-4 w-2/3 mx-auto" />
            </div>
          </section>

          {/* BENEFITS GRID SHIMMER */}
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="comic-panel bg-white/95 border-4 border-black"
                >
                  <CardContent className="p-6 text-center">
                    <ShimmerBlock className="h-12 w-12 mx-auto mb-4 rounded-full" />
                    <ShimmerBlock className="h-4 w-3/4 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* POPULAR CARS & INSIGHTS SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg"
                  >
                    <ShimmerBlock className="h-7 w-1/2 mx-auto mb-6" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-start gap-3">
                          <ShimmerBlock className="h-5 w-5 rounded-full mt-1" />
                          <ShimmerBlock className="h-4 w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ELIGIBILITY & PROCESS SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg"
                  >
                    <ShimmerBlock className="h-7 w-1/2 mx-auto mb-6" />
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-start gap-3">
                          <ShimmerBlock className="h-6 w-6 rounded-full mt-0.5" />
                          <ShimmerBlock className="h-4 w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <ShimmerBlock className="h-8 w-2/3 mx-auto mb-4 bg-white/40" />
                <ShimmerBlock className="h-4 w-3/4 mx-auto mb-8 bg-white/30" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerBlock className="h-12 w-40 rounded-full bg-white/60" />
                  <ShimmerBlock className="h-12 w-40 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SHIMMER */}
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <ShimmerBlock className="h-7 w-1/3 mx-auto mb-6" />
                <ShimmerBlock className="h-4 w-2/3 mx-auto mb-6" />
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <ShimmerBlock className="h-6 w-40 rounded-full" />
                  <ShimmerBlock className="h-6 w-56 rounded-full" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  if (error || locations.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ScrollToTop />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            {error && (
              <p className="text-muted-foreground mb-8">
                {error}
              </p>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const location = locations.find(
    (loc) => loc.location.toLowerCase() === city.toLowerCase()
  );

  if (!location) {
    return null;
  }

  const benefits =
    (location.features || [])
      .map((f) => f.item_title || f.feature || '')
      .filter(Boolean) || [];

  const carFinanceFeatures =
    (location.car_finance_features || [])
      .map((f) => f.feature)
      .filter(Boolean) || [];

  const popularVehicles = parseListItems(location.popular_car_list);
  const areaSpecificInfo = parseListItems(location.local_insights_list);
  const eligibilityList = parseListItems(location.eligibility_list);
  const processList = parseListItems(location.how_it_works_list);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`Car Finance in ${location.location}`}</title>
        <meta
          name="description"
          content={parseHtmlText(location.finance_in_location_description)}
        />
      </Helmet>

      <Header />
      <ScrollToTop />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">WHOOSH!</span> Car Finance in{" "}
                <span className="block text-3xl md:text-4xl text-secondary mt-2">
                  {location.location}
                </span>
              </h1>

              {/* KEEP UNDERLINE & OTHER STYLES */}
              {renderHtmlBlock(
                location.finance_in_location_description,
                "text-xl text-muted-foreground mb-8 leading-relaxed"
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {location.get_finance_button_text && (
                  <Button
                    size="lg"
                    variant="cta"
                    className="font-comic text-xl px-8 py-6"
                    asChild
                  >
                    <Link to={location.get_finance_button_url || "#"}>
                      <Car className="h-6 w-6 mr-3 inline" />
                      {location.get_finance_button_text}
                    </Link>
                  </Button>
                )}
                {location.call_us_button_text && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-comic text-xl px-8 py-6 border-2 border-primary"
                    asChild
                  >
                    <Link to={location.call_us_button_url || "#"}>
                      <Phone className="h-6 w-6 mr-3 inline" />
                      {location.call_us_button_text}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Local Market Information */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 custom-margin-class">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
              <div className="text-center mb-8">
                {location.local_market_title &&
                  renderHtmlBlock(
                    location.local_market_title,
                    "hero-text text-3xl md:text-5xl font-comic text-center mb-6",
                    "h2"
                  )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {location.economy_title && (
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-foreground mb-2">
                      {location.economy_title}
                    </h3>
                    {renderHtmlBlock(
                      location.economy_description,
                      "text-sm text-muted-foreground font-body"
                    )}
                  </div>
                )}
                {location.employment_title && (
                  <div className="text-center">
                    <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-foreground mb-2">
                      {location.employment_title}
                    </h3>
                    {renderHtmlBlock(
                      location.employment_description,
                      "text-sm text-muted-foreground font-body"
                    )}
                  </div>
                )}
                {location.transport_title && (
                  <div className="text-center">
                    <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-foreground mb-2">
                      {location.transport_title}
                    </h3>
                    {renderHtmlBlock(
                      location.transport_description,
                      "text-sm text-muted-foreground font-body"
                    )}
                  </div>
                )}
                {location.market_title && (
                  <div className="text-center">
                    <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-comic text-foreground mb-2">
                      {location.market_title}
                    </h3>
                    {renderHtmlBlock(
                      location.market_description,
                      "text-sm text-muted-foreground font-body"
                    )}
                  </div>
                )}
              </div>
            </div>

            {location.secondry_description &&
              renderHtmlBlock(
                location.secondry_description,
                "text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-12"
              )}
          </div>
        </section>

        {/* Benefits Grid */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="comic-panel bg-white/95 border-4 border-black hover:shadow-comic-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-body">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Vehicles & Area Info */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {popularVehicles.length > 0 && (
                <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                  {location.popular_car_title &&
                    renderHtmlBlock(
                      location.popular_car_title,
                      "hero-text text-3xl font-comic text-center mb-6",
                      "h3"
                    )}
                  <ul className="space-y-3">
                    {popularVehicles.map((vehicle, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Car className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-body">
                          {vehicle}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {areaSpecificInfo.length > 0 && (
                <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                  {location.local_insights_title &&
                    renderHtmlBlock(
                      location.local_insights_title,
                      "hero-text text-3xl font-comic text-center mb-6",
                      "h3"
                    )}
                  <ul className="space-y-3">
                    {areaSpecificInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-body">
                          {info}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {(location.car_finance_title ||
              location.car_finance_description ||
              location.how_whoosh_helps) && (
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
                {location.car_finance_title &&
                  renderHtmlBlock(
                    location.car_finance_title,
                    "hero-text text-3xl font-comic text-center mb-8",
                    "h3"
                  )}

                <div className="space-y-8">
                  {location.car_finance_description &&
                    renderHtmlBlock(
                      location.car_finance_description,
                      "hero-text text-muted-foreground font-body leading-relaxed text-justify custom-color-blue-2"
                    )}

                  {location.how_whoosh_helps && (
                    <div className="comic-panel bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border-2 border-black custom-color-yellow-2">
                      {renderHtmlBlock(
                        location.how_whoosh_helps,
                        "hero-text text-black/80 font-body leading-relaxed text-justify"
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Eligibility & Process Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {eligibilityList.length > 0 && (
                <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                  {location.eligibility_title &&
                    renderHtmlBlock(
                      location.eligibility_title,
                      "hero-text text-3xl font-comic text-center mb-6",
                      "h3"
                    )}
                  <ul className="space-y-4">
                    {eligibilityList.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-body">
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {location.credit_considerations && (
                    <div className="mt-6 p-4 bg-secondary/10 border-2 border-secondary rounded-lg custom-color-blue-3">
                      {renderHtmlBlock(
                        location.credit_considerations,
                        "text-sm text-muted-foreground font-body"
                      )}
                    </div>
                  )}
                </div>
              )}

              {processList.length > 0 && (
                <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                  {location.how_it_works_title &&
                    renderHtmlBlock(
                      location.how_it_works_title,
                      "hero-text text-3xl font-comic text-center mb-6",
                      "h3"
                    )}
                  <ol className="space-y-4">
                    {processList.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="comic-panel bg-primary/20 p-2 border-2 border-black text-sm font-comic font-bold text-primary flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground font-body">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {location.ready_for_car_finance ||
        location.ready_for_car_finance_description ||
        carFinanceFeatures.length > 0 ||
        location.apply_now_button_text ||
        location.get_quote_button_text ? (
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                {location.ready_for_car_finance &&
                  renderHtmlBlock(
                    location.ready_for_car_finance,
                    "hero-text text-3xl md:text-5xl font-comic text-white mb-6",
                    "h2"
                  )}

                {location.ready_for_car_finance_description &&
                  renderHtmlBlock(
                    location.ready_for_car_finance_description,
                    "text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto leading-relaxed"
                  )}

                {carFinanceFeatures.length > 0 && (
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                    {carFinanceFeatures[0] && (
                      <div className="flex items-center gap-2">
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <span className="text-white font-body">
                          {carFinanceFeatures[0]}
                        </span>
                      </div>
                    )}
                    {carFinanceFeatures[1] && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-6 w-6 text-white" />
                        <span className="text-white font-body">
                          {carFinanceFeatures[1]}
                        </span>
                      </div>
                    )}
                    {carFinanceFeatures[2] && (
                      <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-white" />
                        <span className="text-white font-body">
                          {carFinanceFeatures[2]}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {location.apply_now_button_text && (
                    <Link to={location.apply_now_button_url || "#"}>
                      <Button
                        size="lg"
                        className="font-comic text-xl px-8 md:px-12 py-6 bg-white text-primary hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                      >
                        <Car className="h-6 w-6 mr-3" />
                        {location.apply_now_button_text}
                      </Button>
                    </Link>
                  )}
                  {location.get_quote_button_text && (
                    <Link to={location.get_quote_button_url || "#"}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-comic text-xl px-8 md:px-12 py-6 bg-transparent text-white border-4 border-white hover:bg-white hover:text-primary"
                      >
                        <Mail className="h-6 w-6 mr-3" />
                        {location.get_quote_button_text}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Local Contact Section */}
        {(location.need_help_title ||
          location.need_help_description ||
          location.phone ||
          location.email) && (
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/50">
            <div className="container mx-auto px-4 hello">
              <div className="text-center">
                {location.need_help_title &&
                  renderHtmlBlock(
                    location.need_help_title,
                    "hero-text text-3xl md:text-4xl font-comic text-foreground mb-8",
                    "h2"
                  )}
                {location.need_help_description &&
                  renderHtmlBlock(
                    location.need_help_description,
                    "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                  )}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  {location.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-foreground font-body text-lg hover:underline"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}

                  {location.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-foreground font-body text-lg hover:underline"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}