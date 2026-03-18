import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogPostItem {
  slug: string;
  category: string;
  category_options: Record<string, string>;
  blog_image: string;
  blog_title: string;
  author: string;
  published_at: string;
  blog_description: string; // full HTML/body from API
}

const BlogPostSkeleton = () => {
  return (
    <>
      <Helmet>
        <title>Loading blog...</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Header />

        {/* Back Button skeleton (same spacing as real one) */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-8">
          <div className="container mx-auto px-4">
            <div className="inline-flex">
              <div className="h-10 w-36 rounded border-2 border-black bg-gray-200 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Article skeleton */}
        <article className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Image skeleton */}
              <div className="comic-panel border-4 border-black overflow-hidden mb-8">
                <div className="w-full h-64 sm:h-96 bg-gray-200 animate-pulse" />
              </div>

              {/* Content skeleton */}
              <div className="comic-panel bg-white border-4 border-black shadow-comic-lg p-6 sm:p-8 md:p-12">
                {/* Category pill */}
                <div className="h-8 w-32 bg-gray-200 border-2 border-black shadow-comic mb-4 rounded animate-pulse" />

                {/* Title lines */}
                <div className="space-y-3 mb-6">
                  <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-7 w-1/2 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Meta (date, author) */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Body skeleton */}
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-8/12 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);

        // Only list endpoint available – filter by slug on client
        const res = await fetch(
          "https://admin.whooshcar.testingweblink.com/api/blogs"
        );
        const json = await res.json();
        const data = json.data[0];

        const blogs: BlogPostItem[] = (data.blogs || []).map(
          (b: any, idx: number) => ({
            ...b,
            slug: `${b.blog_title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, "")}-${idx}`,
          })
        );

        const found = blogs.find((b) => b.slug === slug);
        setPost(found || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <BlogPostSkeleton />;
  }

  // If post not found, go back to blog list
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.blog_title} | WHOOSH! Finance Blog</title>
        <meta name="description" content={post.blog_title} />
        <link
          rel="canonical"
          href={`https://whooshfinance.co.uk/blog/${post.slug}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Header />

        {/* Back Button */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-8">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button
                variant="outline"
                className="comic-panel border-2 border-black"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article */}
        <article className="pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="comic-panel border-4 border-black overflow-hidden mb-8">
                <img
                  src={`https://admin.whooshcar.testingweblink.com/storage/${post.blog_image}`}
                  alt={post.blog_title}
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>

              <div className="comic-panel bg-white border-4 border-black shadow-comic-lg p-6 sm:p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-block bg-primary text-white px-4 py-2 font-comic text-sm border-2 border-black shadow-comic mb-4">
                    {post.category_options?.[post.category] ?? post.category}
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-comic text-foreground mb-4">
                    {post.blog_title}
                  </h1>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.published_at}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>

                {/* Full HTML content from API */}
                <div
                  className="prose prose-lg max-w-none font-body single-blog-post-title"
                  dangerouslySetInnerHTML={{ __html: post.blog_description }}
                />
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;