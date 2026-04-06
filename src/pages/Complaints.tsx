import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, FileText, Users } from "lucide-react";
 
/* Helper to extract <li> from API HTML */
const parseListItems = (html) => {
  if (!html) return [];
  const matches = html.match(/<li>(.*?)<\/li>/g) || [];
  return matches.map((item) =>
    item.replace(/<\/?li>/g, "")
  );
};


const ComplaintsShimmer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-6 animate-pulse">

            {/* Title */}
            <div className="h-10 w-1/2 bg-muted rounded"></div>

            {/* Highlight box */}
            <div className="h-28 bg-muted rounded"></div>

            {/* Section heading */}
            <div className="h-6 w-1/3 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-5/6 bg-muted rounded"></div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-32 bg-muted rounded"></div>
              <div className="h-32 bg-muted rounded"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-5/6 bg-muted rounded"></div>
              <div className="h-4 w-4/6 bg-muted rounded"></div>
            </div>

            {/* Footer sections */}
            <div className="h-24 bg-muted rounded"></div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};


 
const Complaints = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("https://admin.whooshcarfinance.co.uk/api/complaints")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success" && json.data?.length) {
          setData(json.data[0]); // 🔥 THIS WAS MISSING
        }
      })
      .catch((err) => console.error("Complaints API Error:", err))
      .finally(() => setLoading(false));
  }, []);
 
  // if (loading) return null;
  if (loading) return <ComplaintsShimmer />;

  if (!data) return null;
 
  return (
    <div className="min-h-screen bg-background">
      <Header />
 
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
 
            {/* TITLE */}
            <h1 className="text-4xl font-comic font-bold text-primary mb-6">
              {data.complaint_title}
            </h1>
 
            <div className="space-y-10 text-foreground">
 
              {/* OUR COMMITMENT */}
              <section>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg custom-color-yellow">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.complaint_description,
                    }}
                  />
                </div>
              </section>
 
              {/* HOW TO COMPLAIN */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  {data.how_to_complain_title}
                </h2>
 
                <p className="mb-6">
                  {data.how_to_complain_description}
                </p>
 
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{data.by_email_title}</h3>
                    <a
                      href={`mailto:${data.by_email_value}`}
                      className="text-primary hover:underline text-sm break-all"
                    >
                      {data.by_email_value}
                    </a>
                  </div>
 
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{data.by_phone_title}</h3>
                    <a
                      href={`tel:${data.by_phone_value.replace(/\s/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {data.by_phone_value}
                    </a>
                  </div>
 
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{data.by_post_tile}</h3>
                    <p className="text-sm whitespace-pre-line">
                      {data.by_post_value.replace(/  /g, "\n")}
                    </p>
                  </div>
                </div>
 
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
                  {data.how_to_complain_2_description}
                </div>
              </section>
 
              {/* COMPLAINTS PROCESS */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  {data.complaint_process_title}
                </h2>
 
                <h3 className="text-lg font-semibold mb-4">
                  {data.complaint_process_subtitle}
                </h3>
 
                <div className="complaint-steps">
                  {parseListItems(data.complaint_process_description).map(
                    (step, index) => (
                      <div className="step" key={index}>
                        <div className="step-number">{index + 1}</div>
                        <div
                          className="step-text"
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </div>
                    )
                  )}
                </div>
              </section>
 
              {/* RESOLUTION TIMELINES */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  {data.resolution_timelines_title}
                </h2>
 
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 text-green-700 border border-green-200 p-6 rounded-lg">
                    <div className="text-green-600 resolution-container" dangerouslySetInnerHTML={{ __html: data.quick_resolution }} />
                  </div>
 
                  <div className="bg-blue-50 border text-blue-700 border-blue-200 p-6 rounded-lg">
                    <div className="text-blue-600 resolution-container" dangerouslySetInnerHTML={{ __html: data.formal_process }} />
                  </div>
                </div>
              </section>
 
              {/* THIRD PARTY */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                  {data.third_party_title}
                </h2>
 
                <div className="custom-ul-tag" dangerouslySetInnerHTML={{ __html: data.third_party_description }} />
              </section>
 
              {/* FOS */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  {data.financial_title}
                </h2>
 
                <div className="bg-muted p-6 rounded-lg space-y-6">
                  <div dangerouslySetInnerHTML={{ __html: data.financial_description }} />
 
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="custom-color-yellow" dangerouslySetInnerHTML={{ __html: data.contact_details }} />
                    <div className="custom-ul-tag-box" dangerouslySetInnerHTML={{ __html: data.eligible_complaint_description }} />
                  </div>
                </div>
              </section>
 
              {/* COMMITMENT */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                  {data.our_commitment_title}
                </h2>
 
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg whitespace-pre-line">
                  {data.our_commitment_description}
                </div>
              </section>
 
              {/* CLOSING */}
              <section>
                <h2 className="text-2xl font-comic font-bold text-primary mb-4">
                  {data.closing_complaint_title}
                </h2>
 
                <div className="custom-ul-tag" dangerouslySetInnerHTML={{ __html: data.closing_complaint_description }} />
              </section>
 
              {/* ADDITIONAL INFO */}
              <section className="border-t pt-6">
                <div className="custom-class-content" dangerouslySetInnerHTML={{ __html: data.additional_information_description }} />
              </section>
 
            </div>
          </div>
        </div>
      </main>
 
      <Footer />
    </div>
  );
};
 
export default Complaints;