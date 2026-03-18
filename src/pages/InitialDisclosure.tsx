import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
 
const InitialDisclosure = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("https://admin.whooshcar.testingweblink.com/api/disclosure")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success" && json.data?.length) {
          setData(json.data[0]);
        }
      })
      .catch((err) =>
        console.error("Initial Disclosure API Error:", err)
      )
      .finally(() => setLoading(false));
  }, []);
 
  return (
    <>
      <Helmet>
        <title>
          {data?.disclosure_title ||
            "Initial Disclosure Document - Whoosh Car Finance"}
        </title>
        <meta
          name="description"
          content="Initial disclosure document for Whoosh Finance Limited. FCA regulated credit broker services."
        />
        <link
          rel="canonical"
          href="https://whooshcarfinance.co.uk/initial-disclosure"
        />
      </Helmet>
 
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
        <Header />
 
        <main className="pt-24">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-8">
 
              {/* ---------- HEADER ---------- */}
              {loading ? (
                <div className="text-center space-y-4 animate-pulse">
                  <div className="h-10 w-2/3 bg-muted rounded mx-auto" />
                  <div className="h-5 w-full bg-muted rounded mx-auto" />
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                    {data.disclosure_title}
                  </h1>
                  <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                    {data.disclosure_description}
                  </p>
                </div>
              )}
 
              {/* ---------- BODY ---------- */}
              <Card className="border border-border shadow-sm">
                <CardContent className="p-6 md:p-8">
 
                  {loading ? (
                    <div className="space-y-6 animate-pulse">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="space-y-3">
                          <div className="h-5 w-1/2 bg-muted rounded" />
                          <div className="h-4 w-full bg-muted rounded" />
                          <div className="h-4 w-5/6 bg-muted rounded" />
                          <Separator />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <section
                        className="disclosure-content"
                        dangerouslySetInnerHTML={{
                          __html: data.disclosure_content,
                        }}
                      />
 
                      <div className="text-center mt-10 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          Document Version: 1.0 | Last Updated{" "}
                          {new Date(data.updated_at).toLocaleDateString(
                            "en-GB",
                            { month: "long", year: "numeric" }
                          )}
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
 
        <Footer />
      </div>
    </>
  );
};
 
export default InitialDisclosure;