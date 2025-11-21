import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Get Car Finance with Bad Credit in 2025",
    excerpt: "Discover the steps you need to take to secure car finance even with a less-than-perfect credit score. We break down the process and share insider tips.",
    category: "Bad Credit Finance",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    slug: "bad-credit-car-finance-2025",
    image: "/lovable-uploads/37dc44f6-1b06-4d95-bfff-4b8d09c925e9.png"
  },
  {
    id: 2,
    title: "Understanding APR: What Does 15.9% Really Mean?",
    excerpt: "APR can be confusing. Learn exactly what it means, how it's calculated, and what you should look for when comparing car finance deals.",
    category: "Finance Tips",
    date: "March 10, 2025",
    author: "David Chen",
    slug: "understanding-apr-car-finance",
    image: "/lovable-uploads/b331e922-ed55-491d-8f90-5c9cd1748e3a.png"
  },
  {
    id: 3,
    title: "Top 5 Most Financed Cars in the UK",
    excerpt: "Which vehicles are UK buyers choosing when it comes to car finance? We reveal the most popular models and why they're winning drivers' hearts.",
    category: "Car Reviews",
    date: "March 5, 2025",
    author: "Marcus Thompson",
    slug: "top-financed-cars-uk",
    image: "/lovable-uploads/c5c75376-01de-44db-81c5-e8420bece4df.png"
  },
  {
    id: 4,
    title: "Business Car Finance: Complete Guide for SMEs",
    excerpt: "Running a business? Learn how vehicle finance can help you grow your fleet while managing cash flow effectively. Tax benefits included!",
    category: "Business Finance",
    date: "February 28, 2025",
    author: "Laura Mitchell",
    slug: "business-car-finance-guide",
    image: "/lovable-uploads/37dc44f6-1b06-4d95-bfff-4b8d09c925e9.png"
  },
  {
    id: 5,
    title: "Electric Cars vs Petrol: Finance Comparison 2025",
    excerpt: "Going green? Compare the real costs of financing an electric vehicle versus traditional petrol cars, including running costs and government incentives.",
    category: "Electric Vehicles",
    date: "February 20, 2025",
    author: "Tom Harris",
    slug: "electric-vs-petrol-finance",
    image: "/lovable-uploads/b331e922-ed55-491d-8f90-5c9cd1748e3a.png"
  },
  {
    id: 6,
    title: "First Time Car Buyer's Guide to Finance",
    excerpt: "Your first car is exciting! We guide you through the finance process step-by-step so you can drive away with confidence and the best deal.",
    category: "First Time Buyers",
    date: "February 15, 2025",
    author: "Sarah Johnson",
    slug: "first-time-buyer-guide",
    image: "/lovable-uploads/c5c75376-01de-44db-81c5-e8420bece4df.png"
  }
];

const categories = ["All", "Bad Credit Finance", "Finance Tips", "Car Reviews", "Business Finance", "Electric Vehicles", "First Time Buyers"];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Car Finance Blog | Expert Tips & Guides | WHOOSH! Finance</title>
        <meta name="description" content="Read expert car finance tips, guides, and industry insights from WHOOSH! Finance. Learn about bad credit finance, APR, vehicle reviews, and more." />
        <meta name="keywords" content="car finance blog, vehicle finance tips, bad credit advice, APR guide, car finance UK" />
        <link rel="canonical" href="https://whooshfinance.co.uk/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 border-4 border-black shadow-comic-lg text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-comic text-white mb-4">
                <span className="drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]">WHOOSH!</span> Blog
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-body max-w-2xl mx-auto">
                Expert car finance tips, guides, and industry insights to help you make the right choice
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="comic-panel border-2 border-black"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="comic-panel bg-white border-4 border-black hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden border-b-4 border-black">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-primary text-white px-4 py-2 font-comic text-sm border-2 border-black shadow-comic">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-2xl font-comic text-foreground mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Button variant="default" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="comic-panel border-4 border-black">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-gradient-to-r from-secondary to-primary p-8 sm:p-12 border-4 border-black shadow-comic-lg text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic text-white mb-4">
                Ready to Get Your Car?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 font-body mb-6 max-w-2xl mx-auto">
                Apply now and get a decision in 60 seconds!
              </p>
              <Link to="/apply">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-4 border-black shadow-comic font-comic text-xl px-8">
                  WHOOSH ME A QUOTE!
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;