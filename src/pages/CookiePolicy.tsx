import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Cookie,
  Settings,
  BarChart3,
  ShieldCheck,
  Target,
  AlertTriangle,
} from "lucide-react";

/* ================= SHIMMER ================= */
const Shimmer = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-8 w-48 bg-gray-200 rounded" />
    <div className="h-4 w-32 bg-gray-200 rounded" />
    <div className="h-32 bg-gray-200 rounded" />
    <div className="h-20 bg-gray-200 rounded" />
  </div>
);

// helper to extract first <p> from HTML string
const getFirstParagraph = (html: string) => {
  const match = html.match(/<p[^>]*>[\s\S]*?<\/p>/i);
  return match ? match[0] : html;
};

// put this helper ABOVE your component
const extractListItems = (html: string): string[] => {
  if (!html) return [];
  const regex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  const items: string[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    // strip any tags inside <li> (like <p>)
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) items.push(text);
  }
  return items;
};


// helper ABOVE component
const splitImportant = (html: string) => {
  if (!html) return { normal: html, important: "" };
  const parts = html.split(/(<p><strong>Important:[\s\S]*?<\/p>)/i);
  // parts: [beforeImportant, importantParagraph, afterImportant?]
  const normal =
    (parts[0] || "") + (parts[2] || ""); // everything except important <p>
  const important = parts[1] || "";
  return { normal, important };
};


const CookiePolicy = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.whooshcarfinance.co.uk/api/cookie_policy")
      .then((res) => res.json())
      .then((json) => {
        if (json?.data?.length) setData(json.data[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-[920px] mx-auto px-4">
          <div className="bg-[#ffffff] shadow-lg px-8 py-7 border border-[#EEEBDC]">
            {/* TITLE */}
            <h1
              className="text-4xl font-comic font-bold text-primary mb-6 flex items-center gap-3"
              // className="text-3xl flex items-center gap-2 mb-1"
              style={{ fontFamily: "Bangers, cursive", color: "#F2D85A" }}
            >
              <Cookie /> {data?.cookie_policy_title}
            </h1>

            <p className="text-sm text-muted-foreground mb-8">
              <strong>{data?.cookie_policy_date}</strong>
            </p>

            {loading || !data ? (
              <Shimmer />
            ) : (
              <>
                {/* INTRO
                <div className="bg-[#F7F4EB] border-l-4 border-[#F2D85A] p-6 mb-8 text-[16px] leading-7">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.cookie_policy_description,
                    }}
                  />
                </div> */}

                {/* INTRO */}
                <div className="bg-[#F7F4EB] border-l-4 border-[#F2D85A] p-6 mb-8 text-[16px] leading-7">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getFirstParagraph(data.cookie_policy_description),
                    }}
                  />
                </div>
                <div
                  className="mt-4 mb-9 text-[16px] leading-6"
                  dangerouslySetInnerHTML={{
                    __html: data.cookie_policy_description.replace(
                      getFirstParagraph(data.cookie_policy_description),
                      ""
                    ),
                  }}
                />


                {/* WHAT ARE COOKIES */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-[#F2D85A]" />
                    {data.who_are_cookie_title}
                  </h2>



                  <p className="mb-4 text-[16px] leading-6">
                    {data.who_are_cookie_description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {data.cookie_purpose?.map((p: any, i: number) => {
                      const purposeIcons = [
                        <Settings key="s" className="w-5 h-5" />,
                        <BarChart3 key="b" className="w-5 h-5" />,
                        <ShieldCheck key="sh" className="w-5 h-5" />,
                        <Target key="t" className="w-5 h-5" />,
                      ];

                      return (
                        <div
                          key={i}
                          className="bg-muted p-4 rounded-lg flex items-center gap-3"
                        // className="flex items-center gap-3 bg-white p-3 shadow-sm"
                        >
                          <span className="w-7 h-7 rounded-full bg-[#F2D85A] flex items-center justify-center text-white">
                            {purposeIcons[i]}
                          </span>
                          <span className="text-[16px] leading-6">
                            {p.cookie_purpose_text}
                          </span>
                        </div>
                      );
                    })}
                  </div>


                  <p className="text-[16px] leading-6">
                    {data.who_are_cookie_2_description}
                  </p>
                </section>

                {/* TYPES OF COOKIES */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {/* <h2 className="text-xl font-bold text-[#F2D85A] mb-4"> */}
                    {data.type_of_cookie_title}
                  </h2>

                  {data.cookie_type?.map((c: any, i: number) => (
                    <div key={i} className="bg-white mb-3 shadow-sm border border-border rounded-lg p-6">
                      <span className="text-xl font-semibold mb-3 text-primary">

                        <strong>{c.cookie_type_text}</strong>
                      </span>
                      <p className="mt-1 text-[16px] leading-6 whitespace-pre-line">
                        {c.cookie_type_description}
                      </p>
                    </div>
                  ))}
                </section>

                {/* HOW DOES OUR SITE USE COOKIES */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {data.use_cookie_title}
                  </h2>

                  <ol className="list-decimal pl-5 space-y-3 text-[16px] leading-6 text-[#4D4D4D]">
                    {extractListItems(data.how_cookie_used_list).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </section>


                {/* COOKIE CATEGORIES */}
                {/* COOKIE CATEGORIES – MATCHES IMAGE 2 */}
                <section className="mb-10">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {data.cookie_categories_title}
                  </h2>

                  <div className="space-y-5">
                    {data.cookie_category?.map((cat: any, i: number) => {
                      const icons = [
                        ShieldCheck,
                        BarChart3,
                        Settings,
                        Target,
                      ];

                      const theme = [
                        {
                          bg: "bg-[#F1F7FF]",
                          border: "border-[#BBD6FF]",
                          text: "text-[#1E40AF]",
                          icon: "text-[#1E40AF]",
                        },
                        {
                          bg: "bg-[#F0FFF6]",
                          border: "border-[#86EFAC]",
                          text: "text-[#166534]",
                          icon: "text-[#166534]",
                        },
                        {
                          bg: "bg-[#FFF7ED]",
                          border: "border-[#FDBA74]",
                          text: "text-[#9A3412]",
                          icon: "text-[#9A3412]",
                        },
                        {
                          bg: "bg-[#F8F2FF]",
                          border: "border-[#D8B4FE]",
                          text: "text-[#6B21A8]",
                          icon: "text-[#6B21A8]",
                        },
                      ];

                      const Icon = icons[i];
                      const t = theme[i];

                      return (
                        <div
                          key={i}
                          className={`rounded-xl border px-6 py-6 ${t.bg} ${t.border}`}
                        >
                          <div className="flex gap-3 items-start">
                            {/* <Icon className={`w-5 h-5 mt-1 ${t.icon}`} /> */}
                            <div className="mt-0.5">
                              <Icon className={`w-7 h-7 ${t.icon}`} />
                            </div>


                            <div>
                              <h3 className={`font-semibold text-[16px] mb-2 ${t.text}`}>
                                {cat.cookie_category_text}
                              </h3>

                              <p className={`text-[16px] leading-[24px] ${t.text}`}>
                                {cat.cookie_category_description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>





                {/* CONSENT CONTROL */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {data.concent_control_title}
                  </h2>

                  {(() => {
                    const { normal, important } = splitImportant(
                      data.concent_control_description
                    );
                    return (
                      <>
                        {/* normal paragraphs (no highlight) */}
                        <div
                          className="text-[16px] leading-6 text-[#4D4D4D] space-y-2 mb-3"
                          dangerouslySetInnerHTML={{ __html: normal }}
                        />

                        {/* highlighted Important paragraph only */}
                        {important && (
                          <div className="bg-[#FFF7DA] p-4 border-l-4 border-[#F2D85A]">
                            <div
                              className="text-[16px] leading-6 text-[#4D4D4D]"
                              dangerouslySetInnerHTML={{ __html: important }}
                            />
                          </div>
                        )}
                      </>
                    );
                  })()}
                </section>


                {/* YOUR COOKIE OPTIONS */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {/* <h2 className="text-xl font-bold text-[#F2D85A] mb-3"> */}
                    {data.your_cookie_title}
                  </h2>

                  <p className="mb-3 text-[16px] leading-6">
                    {data.your_cookie_description}
                  </p>

                  <p className="mb-2 text-[16px] font-semibold">
                    {data.manage_cookie_title}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {data.browsers_cookie?.map((b: any, i: number) => (
                      <div
                        key={i}
                        className="bg-[#F3F1ED] rounded-lg border border-[#E5E5E5] p-3 text-[14px]"
                      >
                        <strong className="block mb-1">
                          {b.browser_text}
                        </strong>
                        <p>{b.browser_text_description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-800">
                    {/* <div className="bg-[#F8D7DA] text-[13px] p-3 leading-5"> */}
                    {data.please_note_description}
                  </div>
                </section>

                {/* DEFINITIONS AND INTERPRETATION */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {/* <h2 className="text-xl font-bold text-[#F2D85A] mb-3"> */}
                    {data.definations_title}
                  </h2>

                  <p className="mb-3 text-[16px] leading-6">
                    {data.definations_description}
                  </p>

                  <div
                    className="border-l-4 border-primary pl-4 space-y-4"
                    // className="space-y-1 text-[16px] leading-6"
                    dangerouslySetInnerHTML={{
                      __html: data.definations_list,
                    }}
                  />
                </section>

                {/* CHANGES TO THIS COOKIE POLICY */}
                <section className="mb-8">
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {/* <h2 className="text-xl font-bold text-[#F2D85A] mb-3"> */}
                    {data.change_cookie_title}
                  </h2>

                  <p className="text-[16px] leading-6 whitespace-pre-line">
                    {data.change_cookie_description}
                  </p>
                </section>

                {/* CONTACT US */}
                <section>
                  <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                    {data.contact_us_title}
                  </h2>

                  <p className="text-[16px] leading-6 text-[#4D4D4D] mb-3">
                    If you have any questions about this Cookie Policy, please contact us:
                  </p>

                  <div
                    className="bg-[#F3F1EC] p-4 text-[16px] leading-6"
                    dangerouslySetInnerHTML={{
                      __html: data.contact_us_description.replace(
                        /^<p>If you have any questions about this Cookie Policy, please contact us:<\/p>/,
                        ""
                      ),
                    }}
                  />
                </section>

              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
