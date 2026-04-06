import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  AlertCircle,
  Clock,
  MessageCircle,
  Send,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface OpeningHour {
  day: string;
  hours: string;
}

interface ApiContactData {
  id: number;
  contact_banner_title: string;
  contact_banner_description: string;
  phone_support_title: string;
  phone_support_value: string;
  phone_support_description: string;
  phone_support_button_text: string;
  phone_support_button_url: string;
  email_support_title: string;
  email_support_value: string;
  email_support_description: string;
  email_support_button_text: string;
  email_support_button_url: string;
  complaint_email_title: string;
  complaint_email_value: string;
  complaint_email_description: string;
  complaint_email_button_text: string;
  complaint_email_button_url: string;
  live_chat_title: string;
  live_chat_text_value: string;
  live_chat_description: string;
  live_chat_button_text: string;
  live_chat_button_url: string;
  send_us_message_tile: string;
  send_us_message_description: string;
  opening_hours_title: string;
  opening_hours: OpeningHour[];
  emergency_support_title: string;
  emergency_support_description: string;
  emergency_support_button_text: string;
  emergency_support_button_url: string;
  response_promise_title: string;
  response_promise_description: string;
  apply_finance_button_text: string;
  apply_finance_button_url: string;
  calculate_payments_button_text: string;
  calculate_payments_button_url: string;
}

/* -------------------------------------------------------------------------- */
/*                                SHIMMER UI                                  */
/* -------------------------------------------------------------------------- */

const shimmer =
  "contact-loading bg-gradient-to-r from-slate-200/50 via-slate-300/70 to-slate-200/50";

const ShimmerHero = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 text-center">
      <div className={`h-24 w-3/5 mx-auto mb-6 rounded-xl ${shimmer}`} />
      <div className={`h-6 w-1/2 mx-auto rounded ${shimmer}`} />
    </div>
  </section>
);

const ShimmerCard = () => (
  <Card className="bg-transparent shadow-none border-0">
    <CardContent className="p-6 space-y-4">
      <div className={`h-14 w-14 mx-auto rounded-full ${shimmer}`} />
      <div className={`h-4 w-3/4 mx-auto rounded ${shimmer}`} />
      <div className={`h-3 w-full rounded ${shimmer}`} />
      <div className={`h-10 w-full rounded ${shimmer}`} />
    </CardContent>
  </Card>
);

const ShimmerForm = () => (
  <Card className="bg-transparent shadow-none border-0">
    <CardContent className="p-6 space-y-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`h-10 rounded ${shimmer}`} />
      ))}
      <div className={`h-12 rounded ${shimmer}`} />
    </CardContent>
  </Card>
);

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [contactData, setContactData] = useState<ApiContactData | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
    privacyConsent: false
  });

  /* ----------------------------- FETCH PAGE DATA ---------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.whooshcarfinance.co.uk/api/contacts"
        );
        const json = await res.json();
        if (json?.data?.length) setContactData(json.data[0]);
      } catch (e) {
        console.error("Contact API error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* ------------------------------- FORM SUBMIT ------------------------------ */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(
        "https://admin.whooshcarfinance.co.uk/api/save_leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            department: formData.department,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.message || "Submission failed");
      }

      toast({
        title: "Message Sent 🚀",
        description: "We’ll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        subject: "",
        message: "",
        privacyConsent: false,
      });
    } catch (err: any) {
      toast({
        title: "Submission Failed",
        description: err.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const update = (k: string, v: string | boolean) =>
  setFormData((p) => ({ ...p, [k]: v }));

  /* -------------------------------------------------------------------------- */
  /*                                   RENDER                                   */
  /* -------------------------------------------------------------------------- */

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-24 container mx-auto px-4">
          <ShimmerHero />
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[...Array(4)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
          <div className="grid xl:grid-cols-2 gap-8">
            <ShimmerForm />
            <ShimmerForm />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="hero-text text-4xl md:text-6xl font-comic font-black text-foreground mb-6"
                dangerouslySetInnerHTML={{
                  __html: contactData?.contact_banner_title || "",
                }}
              />

              <div
                className="hero-text text-xl text-muted-foreground mb-8 leading-relaxed custom-font-family"
                dangerouslySetInnerHTML={{
                  __html: contactData?.contact_banner_description || "",
                }}
              />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* TOP CONTACT CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 custom-hide-sections">
              {[
                {
                  icon: Phone,
                  bg: "bg-green-500",
                  title: contactData?.phone_support_title,
                  value: contactData?.phone_support_value,
                  desc: contactData?.phone_support_description,
                  btn: contactData?.phone_support_button_text,
                  url: contactData?.phone_support_button_url,
                },
                {
                  icon: Mail,
                  bg: "bg-blue-500",
                  title: contactData?.email_support_title,
                  value: contactData?.email_support_value,
                  desc: contactData?.email_support_description,
                  btn: contactData?.email_support_button_text,
                  url: contactData?.email_support_button_url,
                },
                {
                  icon: AlertCircle,
                  bg: "bg-orange-500",
                  title: contactData?.complaint_email_title,
                  value: contactData?.complaint_email_value,
                  desc: contactData?.complaint_email_description,
                  btn: contactData?.complaint_email_button_text,
                  url: contactData?.complaint_email_button_url,
                },
                {
                  icon: MessageCircle,
                  bg: "bg-purple-500",
                  title: contactData?.live_chat_title,
                  value: contactData?.live_chat_text_value,
                  desc: contactData?.live_chat_description,
                  btn: contactData?.live_chat_button_text,
                  url: contactData?.live_chat_button_url,
                },
              ].map((c, i) => (
                <Card
                  key={i}
                  className="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <c.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-comic">
                      {c.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-1 flex flex-col justify-between p-4 min-h-[140px]">
                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <p className="font-semibold text-foreground text-sm leading-tight break-words">
                        {c.value}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                    <Link to={c.url || "#"}>
                      <Button
                        className="comic-button w-full text-xs mt-auto"
                        size="sm"
                      >
                        {c.btn}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FORM + HOURS */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* FORM (HIDDEN) */}
              <div className="hidden w-full">
                <Card className="comic-panel bg-card/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-comic flex items-center gap-2">
                      <Send className="text-primary w-6 h-6" />
                      {contactData?.send_us_message_tile}
                    </CardTitle>
                    <p
                      className="text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: contactData?.send_us_message_description || "",
                      }}
                    />
                  </CardHeader>

                  <CardContent className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block mb-1 text-sm font-medium">
                            Full Name *
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block mb-1 text-sm font-medium">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block mb-1 text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="Your phone number"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block mb-1 text-sm font-medium">
                            Department
                          </label>
                          <Select
                            value={formData.department}
                            onValueChange={(v) => update("department", v)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="complaints">
                                Complaints
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block mb-1 text-sm font-medium">
                          Subject *
                        </label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => update("subject", e.target.value)}
                          placeholder="What's your question about?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block mb-1 text-sm font-medium">
                          Message *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us how we can help you..."
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-start gap-2 text-sm">
                          <input
                            type="checkbox"
                            required
                            checked={formData.privacyConsent || false}
                            onChange={(e) =>
                              update("privacyConsent", e.target.checked)
                            }
                            className="mt-1"
                          />
                          <span>
                            I have read and agree to the{" "}
                            <a
                              href="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              Privacy Policy
                            </a>
                            .
                          </span>
                        </label>
                      </div>

                      <Button
                        disabled={submitting}
                        className="comic-button w-full"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* SECOND SECTION (CENTERED + FULL WIDTH) */}
              <div className="w-full space-y-6 xl:col-span-2 max-w-xl mx-auto">
                {/* HOURS */}
                <Card className="comic-panel bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-comic flex items-center gap-2">
                      <Clock className="text-primary w-5 h-5" />
                      {contactData?.opening_hours_title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {contactData?.opening_hours?.map((h, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0"
                        >
                          <span className="font-medium">{h.day}</span>
                          <span
                            className={`text-sm ${
                              h.hours === "Closed"
                                ? "text-muted-foreground"
                                : "text-primary font-medium"
                            }`}
                          >
                            {h.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* EMERGENCY CONTACT (HIDDEN) */}
                <Card className="hidden comic-panel bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-comic text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      {contactData?.emergency_support_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-600 mb-3">
                      {contactData?.emergency_support_description}
                    </p>
                    <Link to={contactData?.emergency_support_button_url || "#"}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        {contactData?.emergency_support_button_text}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="mt-16 text-center">
              <Card className="comic-panel bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-comic font-bold mb-4">
                    {contactData?.response_promise_title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {contactData?.response_promise_description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* <Button asChild className="comic-button" size="lg">
                      <Link to={contactData?.apply_finance_button_url || "#"}>
                        {contactData?.apply_finance_button_text}
                      </Link>
                    </Button> */}

                    <Button
                      asChild
                      variant="default"
                      className="w-full sm:w-auto h-auto px-6 py-4 shadow-[4px_4px_0px_rgb(0_0_0_/_1)]"
                    >
                      <Link
                        to={contactData?.apply_finance_button_url || "#"}
                        className="flex flex-col items-center justify-center gap-1"
                      >
                        <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl">
                        
                        {contactData?.apply_finance_button_text}
                        </div>
      
                        <span className="text-xs font-medium leading-none">
                          10.9% Rep. APR - Credit Broker, Not a Lender
                        </span>
                      </Link>
                    </Button>

                    {/* <Button asChild variant="outline" size="lg">
                      <Link
                        to={contactData?.calculate_payments_button_url || "#"}
                      >
                        {contactData?.calculate_payments_button_text}
                      </Link>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
