import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
 
export const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("https://admin.whooshcar.testingweblink.com/api/footer")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success" && json.data?.length) {
          setFooterData(json.data[0]);
        }
      })
      .catch((err) => console.error("Footer API Error:", err))
      .finally(() => setLoading(false));
  }, []);
 
  /* ---------------- SHIMMER LOADER ---------------- */
  if (loading) {
    return (
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12 animate-pulse">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-40 bg-background/20 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-background/20 rounded" />
                  <div className="h-4 w-5/6 bg-background/20 rounded" />
                  <div className="h-4 w-4/6 bg-background/20 rounded" />
                </div>
              </div>
            ))}
          </div>
 
          <div className="border-t border-background/20 mt-12 pt-8 space-y-4">
            <div className="flex justify-center gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-20 bg-background/20 rounded"
                />
              ))}
            </div>
            <div className="h-4 w-72 bg-background/20 rounded mx-auto" />
          </div>
 
          <div className="border-t border-background/20 mt-8 pt-8">
            <div className="h-28 bg-background/20 rounded max-w-4xl mx-auto" />
          </div>
        </div>
      </footer>
    );
  }
 
  if (!footerData) return null;
 
  /* ---------------- REAL FOOTER ---------------- */
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div
              className="text-3xl font-comic font-black text-primary drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: footerData.footer_title }}
            />
 
            <p className="text-background/80 leading-relaxed text-sm sm:text-base">
              {footerData.footer_description}
            </p>
 
            <div className="flex gap-4">
              {footerData.social_media?.map((item, idx) => {
                if (item.social_media_text === "facebook")
                  return (
                    <Facebook
                      key={idx}
                      className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors"
                    />
                  );
                if (item.social_media_text === "twitter")
                  return (
                    <Twitter
                      key={idx}
                      className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors"
                    />
                  );
                if (item.social_media_text === "instagram")
                  return (
                    <Instagram
                      key={idx}
                      className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors"
                    />
                  );
                return null;
              })}
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">
              {footerData.quick_links_title}
            </h3>
            <div className="space-y-2">
              {footerData.quick_links?.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.quick_links_url}
                  className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {link.quick_links_text}
                </Link>
              ))}
            </div>
          </div>
 
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">
              {footerData.services_title}
            </h3>
            <div className="space-y-2">
              {footerData.services?.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.services_url}
                  className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {service.services_text}
                </Link>
              ))}
            </div>
          </div>
 
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">
              {footerData.contact_us_title}
            </h3>
 
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm sm:text-base">
                  {footerData.contact_number_value}
                </span>
              </div>
 
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm sm:text-base whitespace-nowrap">
                  {footerData.email_address_value}
                </span>
              </div>
 
              {footerData.contact_address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div
                    className="text-background/80 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: footerData.contact_address,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs sm:text-sm">
              {footerData.pages?.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.pages_url}
                  className="text-background/60 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {page.pages_text}
                </Link>
              ))}
            </div>
 
            <div className="text-background/60 text-xs sm:text-sm text-center">
              {footerData.copyright}
            </div>
          </div>
        </div>
 
        {/* Financial Disclosures */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="text-background/50 text-xs leading-relaxed text-justify custom-color-footer"
              dangerouslySetInnerHTML={{
                __html: footerData.company_description,
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};