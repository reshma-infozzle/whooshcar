import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* ---------- Types ---------- */
interface TermsOfBusinessApiResponse {
  status: string;
  data: {
    id: number;
    termsbusiness_title: string;
    termsbusiness_date: string;
    termsbusiness_content: string;
  }[];
}

const TermsOfBusiness = () => {
  const [title, setTitle] = useState("");
  const [termsDate, setTermsDate] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.whooshcarfinance.co.uk/api/termofbusiness")
      .then((res) => res.json())
      .then((res: TermsOfBusinessApiResponse) => {
        if (!res?.data?.length) {
          setLoading(false);
          return;
        }

        const data = res.data[0];
        setTitle(data.termsbusiness_title);
        setTermsDate(data.termsbusiness_date);

        const parser = new DOMParser();
        const doc = parser.parseFromString(
          data.termsbusiness_content,
          "text/html"
        );

        const h2s = Array.from(doc.querySelectorAll("h2"));

        h2s.forEach((h2) => {
          /* ---------- H2 STYLING ---------- */
          h2.classList.add("hero-text");
          h2.style.fontFamily = "Bangers, cursive";
          h2.style.fontWeight = "700";
          h2.style.fontSize = "24px";
          h2.style.lineHeight = "32px";

          /* ---------- CONTACT US SECTION ---------- */
          if (h2.textContent?.toLowerCase().includes("contact us")) {
            let next = h2.nextElementSibling;

            // First paragraph stays OUTSIDE the box
            if (!next || next.tagName !== "P") return;

            const introParagraph = next;
            next = introParagraph.nextElementSibling;

            // Grey contact box (design-matching)
            const wrapper = doc.createElement("div");
            wrapper.className =
              "mt-6 bg-muted/70 rounded-xl p-6 space-y-2";

            while (next && next.tagName !== "H2") {
              const current = next;
              next = next.nextElementSibling;

              // Link styling (email + phone)
              current.querySelectorAll("a").forEach((a) => {
                const href = a.getAttribute("href") || "";

                // Email
                if (href.startsWith("mailto:")) {
                  a.style.setProperty(
                    "color",
                    "rgb(242, 216, 90)",
                    "important"
                  );
                  a.style.textDecoration = "none";
                  a.style.cursor = "pointer";

                  a.onmouseenter = () => {
                    a.style.textDecoration = "underline";
                  };
                  a.onmouseleave = () => {
                    a.style.textDecoration = "none";
                  };
                }

                // Telephone
                if (href.startsWith("tel:")) {
                  a.style.setProperty(
                    "color",
                    "rgb(242, 216, 90)",
                    "important"
                  );
                  a.style.textDecoration = "none";
                }
              });

              wrapper.appendChild(current);
            }

            // Insert box AFTER the intro paragraph
            introParagraph.after(wrapper);
          }
        });

        setContent(doc.body.innerHTML);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Terms of Business", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">

            {/* ---------- H1 ---------- */}
            <h1
              className="hero-text mb-6"
              style={{
                fontFamily: "Bangers, cursive",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "44px",
                color: "rgb(242, 216, 90)",
              }}
            >
              {title}
            </h1>

            {/* ---------- DATE ---------- */}
            <div className="text-sm text-muted-foreground mb-8">
              <strong>{termsDate}</strong>
            </div>

            {/* ---------- SHIMMER ---------- */}
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-11/12"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            ) : (
              /* ---------- CONTENT (BULLETS RESTORED) ---------- */
              <div
                className="
                  space-y-8 text-foreground
                  [&_ul]:list-disc [&_ul]:pl-6
                  [&_ol]:list-decimal [&_ol]:pl-6
                  [&_li]:mb-2
                "
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfBusiness;
