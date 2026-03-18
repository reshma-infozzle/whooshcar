import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Blog API Types
interface BlogItem {
  slug: string;
  category: string;
  category_options: Record<string, string>;
  blog_image: string;
  blog_title: string;
  author: string;
  published_at: string;
  blog_description: string;
}

interface BlogPageData {
  blog_banner_title: string;
  blog_description: string;
  blogs: BlogItem[];
  get_your_car_title: string;
  get_your_car_description: string;
  whoosh_quote_button_text: string;
  whoosh_quote_button_url: string;
}

const normalize = (s?: string) => (s ?? "").toString().trim().toLowerCase();

const prettify = (s: string) =>
  s
    .split(" ")
    .map((w) => (w.length === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");

// NEW: helper to create slug from title
const makeSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// NEW: Date formatting function
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // fallback if invalid date
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString; // fallback
  }
};

// -------- Shimmer components --------
const BlogHeroShimmer = () => (
  <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20">
    <div className="container mx-auto px-4">
      <div className="comic-panel bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 border-4 border-black shadow-comic-lg text-center">
        <div className="h-10 sm:h-12 md:h-14 bg-white/40 blog-loading mx-auto mb-4 rounded-lg w-3/4" />
        <div className="h-6 sm:h-7 bg-white/30 blog-loading mx-auto rounded-lg w-2/3" />
      </div>
    </div>
  </section>
);

const BlogCategoryShimmer = () => (
  <section className="pb-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-3 justify-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-24 sm:w-28 bg-white border-2 border-black blog-loading rounded-full"
          />
        ))}
      </div>
    </div>
  </section>
);

const BlogCardShimmer = () => (
  <Card className="comic-panel bg-white">
    <CardContent className="p-0">
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-slate-200 blog-loading" />
        <div className="absolute top-4 left-4 h-8 w-24 bg-primary/80 blog-loading rounded-full" />
      </div>
      <div className="p-6 space-y-3">
        <div className="h-6 bg-slate-200 blog-loading rounded-lg w-4/5" />
        <div className="h-4 bg-slate-200 blog-loading rounded-lg w-full" />
        <div className="h-4 bg-slate-200 blog-loading rounded-lg w-5/6" />
        <div className="flex gap-4 pt-2">
          <div className="h-4 w-24 bg-slate-200 blog-loading rounded-full" />
          <div className="h-4 w-24 bg-slate-200 blog-loading rounded-full" />
        </div>
        <div className="h-10 bg-slate-200 blog-loading rounded-lg w-full mt-2" />
      </div>
    </CardContent>
  </Card>
);

const BlogGridShimmer = () => (
  <section className="pb-16 sm:pb-20 md:pb-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <BlogCardShimmer key={i} />
        ))}
      </div>
    </div>
  </section>
);

// ------------- Component -------------
const Blog = () => {
  const [pageData, setPageData] = useState<BlogPageData | null>(null);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://admin.whooshcar.testingweblink.com/api/blogs"
        );
        const json = await res.json();

        const data: BlogPageData = json.data[0];

        // generate slug for each blog item
        const blogsWithSlug: BlogItem[] = (data.blogs || []).map((b, idx) => ({
          ...b,
          slug: `${makeSlug(b.blog_title)}-${idx}`, // ensures uniqueness
        }));

        setPageData({ ...data, blogs: blogsWithSlug });
        setBlogs(blogsWithSlug);

        // collect all category labels from all blogs
        const allOptionsRaw: string[] = [];
        (blogsWithSlug || []).forEach((blog) => {
          if (blog.category_options) {
            Object.values(blog.category_options).forEach((val) => {
              if (val !== undefined && val !== null) {
                allOptionsRaw.push(String(val));
              }
            });
          }
        });

        const normalizedMap = new Map<string, string>(); // norm -> pretty
        for (const raw of allOptionsRaw) {
          const norm = normalize(raw);
          if (!norm) continue;
          if (!normalizedMap.has(norm)) {
            normalizedMap.set(norm, prettify(norm));
          }
        }

        normalizedMap.delete("all");
        const finalCategories = ["All", ...Array.from(normalizedMap.values())];
        setCategories(finalCategories);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading || !pageData) {
    return (
      <>
        <Helmet>
          <title>Car Finance Blog | Expert Tips & Guides | WHOOSH! Finance</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
          <Header />
          <BlogHeroShimmer />
          <BlogCategoryShimmer />
          <BlogGridShimmer />
          <Footer />
        </div>
      </>
    );
  }

  // Filter blogs by active category
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => {
          const rawLabel = b.category_options?.[b.category] ?? "";
          return normalize(rawLabel) === normalize(activeCategory);
        });

  return (
    <>
      <Helmet>
        <title>Car Finance Blog | Expert Tips & Guides | WHOOSH! Finance</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Header />

        {/* HERO SECTION */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 border-4 border-black shadow-comic-lg text-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-comic text-white mb-4"
                dangerouslySetInnerHTML={{ __html: pageData.blog_banner_title }}
              />
              <p className="text-xl sm:text-2xl text-white/90 font-body max-w-2xl mx-auto">
                {pageData.blog_description}
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="comic-panel border-2 border-black"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <Card
                  key={post.blog_title}
                  className="comic-panel bg-white border-4 border-black hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden border-b-4 border-black">
                      <img
                        src={`https://admin.whooshcar.testingweblink.com/storage/${post.blog_image}`}
                        alt={post.blog_title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-primary text-white px-4 py-2 font-comic text-sm border-2 border-black shadow-comic">
                          {post.category_options?.[post.category] ??
                            post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-comic text-foreground mb-3 hover:text-primary transition-colors">
                        {post.blog_title}
                      </h2>

                      <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.blog_description,
                          }}
                        />
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="default" className="w-full group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-gradient-to-r from-secondary to-primary p-8 sm:pt-12 border-4 border-black shadow-comic-lg text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic text-white mb-4">
                {pageData.get_your_car_title}
              </h2>
              <p className="text-lg sm:text-xl text-white/90 font-body mb-6 max-w-2xl mx-auto">
                {pageData.get_your_car_description}
              </p>

              <Link to={pageData.whoosh_quote_button_url}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-4 border-black shadow-comic font-comic text-xl px-8"
                >
                  {pageData.whoosh_quote_button_text}
                </Button>
              </Link>
              {/* <p className="mt-3 text-white font-semibold text-[18px]">No Impact On Your Credit Score</p> */}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
