import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ScrollToTop";
import { 
  Home, 
  Calculator, 
  HelpCircle, 
  Users, 
  Phone, 
  Car, 
  CreditCard, 
  Briefcase, 
  Truck, 
  Bike,
  MapPin,
  Handshake,
  Image,
  Shield,
  FileText,
  Building,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";
import { Helmet } from "react-helmet-async";

const Sitemap = () => {
  const sitePages = [
    {
      category: "Main Pages",
      icon: Home,
      color: "from-primary to-primary-variant",
      pages: [
        { title: "Home", path: "/", description: "Lightning-fast car finance solutions", icon: Home },
        { title: "About Us", path: "/about", description: "Learn about WHOOSH Finance", icon: Users },
        { title: "How It Works", path: "/how-it-works", description: "Simple 3-step process", icon: HelpCircle },
        { title: "Finance Calculator", path: "/calculator", description: "Calculate your monthly payments", icon: Calculator },
        { title: "FAQ", path: "/faq", description: "Frequently asked questions", icon: HelpCircle },
        { title: "Contact", path: "/contact", description: "Get in touch with our team", icon: Phone },
        { title: "Sitemap", path: "/sitemap", description: "Navigate all pages and services", icon: FileText }
      ]
    },
    {
      category: "Finance Services",
      icon: Car,
      color: "from-secondary to-secondary-variant",
      pages: [
        { title: "Car Finance", path: "/car-finance", description: "Personal car finance solutions", icon: Car },
        { title: "Bad Credit Finance", path: "/bad-credit-finance", description: "Finance for poor credit history", icon: CreditCard },
        { title: "Business Finance", path: "/business-finance", description: "Commercial vehicle finance", icon: Briefcase },
        { title: "Van Finance", path: "/van-finance", description: "Van and commercial vehicle loans", icon: Truck },
        { title: "Motorbike Finance", path: "/motorbike-finance", description: "Motorcycle finance options", icon: Bike }
      ]
    },
    {
      category: "Locations & Services",
      icon: MapPin,
      color: "from-accent to-accent-variant",
      pages: [
        { title: "All Locations", path: "/locations", description: "Find WHOOSH services near you", icon: MapPin },
        ...locations.map(location => ({
          title: location.city,
          path: `/location/${location.slug}`,
          description: `Car finance in ${location.city}`,
          icon: Building
        }))
      ]
    },
    {
      category: "Business Partners",
      icon: Handshake,
      color: "from-primary to-secondary",
      pages: [
        { title: "Lender Partners", path: "/lenders", description: "Partner with WHOOSH Finance", icon: Handshake },
        { title: "Marketing Assets", path: "/ads-content", description: "Download marketing materials", icon: Image }
      ]
    },
    {
      category: "External Resources",
      icon: Mail,
      color: "from-green-500 to-blue-500",
      pages: [
        { title: "Financial Ombudsman Service", path: "https://financial-ombudsman.org.uk", description: "External complaints resolution service", icon: Shield }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: Shield,
      color: "from-muted to-muted-foreground",
      pages: [
        { title: "Privacy Policy", path: "/privacy-policy", description: "How we protect your data", icon: Shield },
        { title: "Terms & Conditions", path: "/terms-conditions", description: "Service terms and conditions", icon: FileText },
        { title: "Terms of Business", path: "/terms-of-business", description: "Business relationship terms", icon: FileText },
        { title: "Initial Disclosure", path: "/initial-disclosure", description: "Regulatory disclosures", icon: FileText },
        { title: "Cookie Policy", path: "/cookie-policy", description: "Cookie usage information", icon: FileText },
        { title: "Complaints", path: "/complaints", description: "File a complaint or feedback", icon: Mail }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | WHOOSH! Car Finance - All Pages & Services</title>
        <meta name="description" content="Complete sitemap of WHOOSH Car Finance website. Find all our car finance services, locations, legal pages and business information in one place." />
        <meta name="keywords" content="sitemap, car finance, WHOOSH, navigation, all pages, services, locations" />
        <link rel="canonical" href="https://whooshfinance.co.uk/sitemap" />
      </Helmet>
      
      <Header />
      <ScrollToTop />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">BAM!</span> Sitemap 🗺️
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Navigate through all WHOOSH! Car Finance pages and services. 
                Find exactly what you're looking for with our complete site directory!
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Grid */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {sitePages.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${section.color} mb-4`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-comic font-bold text-foreground mb-2">
                      {section.category}
                    </h2>
                  </div>

                  {/* Pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <Card key={pageIndex} className="comic-panel bg-card hover:shadow-comic-lg transition-all duration-300 group">
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center gap-3 text-lg font-comic">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                              <page.icon className="w-5 h-5 text-white" />
                            </div>
                            {page.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {page.description}
                          </p>
                          <Button 
                            asChild 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                          >
                            <Link to={page.path}>
                              Visit Page →
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-comic font-bold text-foreground mb-4">
                  <span className="text-primary">WHOOSH!</span> Site Statistics
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-comic font-bold text-primary mb-2">
                    {sitePages.reduce((total, section) => total + section.pages.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-comic font-bold text-secondary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Finance Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-comic font-bold text-accent mb-2">13</div>
                  <div className="text-sm text-muted-foreground">UK Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-comic font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Online Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="comic-panel bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-comic font-bold mb-4">
                    ⚡ Can't Find What You Need?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our team is here to help! Get in touch and we'll point you in the right direction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="comic-button">
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/apply">
                        Get a Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;