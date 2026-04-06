import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* ---------- Types ---------- */
interface PrivacyPolicyApiResponse {
  status: string;
  data: {
    id: number;
    privacy_policy_title: string;
    privacy_policy_date: string;
    privacy_policy_content: string;
  }[];
}

const PrivacyPolicy = () => {
  const [title, setTitle] = useState("");
  const [policyDate, setPolicyDate] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.whooshcarfinance.co.uk/api/privacy_policy")
      .then((res) => res.json())
      .then((res: PrivacyPolicyApiResponse) => {
        if (!res?.data?.length) {
          setLoading(false);
          return;
        }

        const data = res.data[0];

        /* ---------- Dynamic header ---------- */
        setTitle(data.privacy_policy_title);
        setPolicyDate(data.privacy_policy_date);

        /* ---------- Parse HTML ---------- */
        const parser = new DOMParser();
        const doc = parser.parseFromString(
          data.privacy_policy_content,
          "text/html"
        );

        const h2s = Array.from(doc.querySelectorAll("h2"));

        h2s.forEach((h2) => {
          /* H2 styling */
          h2.classList.add("hero-text");
          h2.style.fontFamily = "Bangers, cursive";
          h2.style.fontWeight = "700";
          h2.style.fontSize = "24px";
          h2.style.lineHeight = "32px";

          /* ---------- CONTACT US SECTION ---------- */
          if (h2.textContent?.toLowerCase().includes("contact us")) {
            let next = h2.nextElementSibling;

            // First paragraph OUTSIDE the box
            if (!next || next.tagName !== "P") return;

            const introParagraph = next;
            next = introParagraph.nextElementSibling;

            const wrapper = doc.createElement("div");
            wrapper.className =
              "mt-6 bg-muted/70 rounded-xl p-6 space-y-2";

            while (next && next.tagName !== "H2") {
              const current = next;
              next = next.nextElementSibling;

              /* Link styling */
              current.querySelectorAll("a").forEach((a) => {
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
              });

              wrapper.appendChild(current);
            }

            introParagraph.after(wrapper);
          }
        });

        /* ---------- Global <a> styling ---------- */
        doc.querySelectorAll("a").forEach((a) => {
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
        });

        setContent(doc.body.innerHTML);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Privacy Policy", err);
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

            {/* ---------- Date ---------- */}
            <div className="text-sm text-muted-foreground mb-8">
              <strong>{policyDate}</strong>
            </div>

            {/* ---------- Loader ---------- */}
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-11/12"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            ) : (
              /* ---------- API CONTENT ---------- */
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

export default PrivacyPolicy;
