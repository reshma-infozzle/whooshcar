import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl font-comic font-black text-primary drop-shadow-lg">WHOOSH!</span>
            </div>
            <p className="text-background/80 leading-relaxed text-sm sm:text-base">
              Your trusted partner for lightning-fast car finance. We help thousands of people WHOOSH into their dream car every month.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/how-it-works" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">How It Works</Link>
              <Link to="/calculator" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Finance Calculator</Link>
              <Link to="/locations" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Locations</Link>
              <Link to="/about" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">About Us</Link>
              <Link to="/faq" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">FAQ</Link>
              <Link to="/lenders" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Lender Partners</Link>
              <Link to="/ads-content" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Marketing Assets</Link>
              <Link to="/concepts" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Concepts</Link>
              <Link to="/blog" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Blog</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link to="/car-finance" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Car Finance</Link>
              <Link to="/bad-credit-finance" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Bad Credit Finance</Link>
              <Link to="/business-finance" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Business Finance</Link>
              <Link to="/van-finance" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Van Finance</Link>
              <Link to="/motorbike-finance" className="block text-background/80 hover:text-primary transition-colors text-sm sm:text-base">Motorbike Finance</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm sm:text-base">0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm sm:text-base whitespace-nowrap">hello@whooshcarfinance.co.uk</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80 text-sm sm:text-base leading-relaxed">
                  <div>Unit 2, 30 Broughton Street</div>
                  <div>Cheetham Hill, Manchester</div>
                  <div>M8 8NN, United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs sm:text-sm">
              <Link to="/initial-disclosure" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Initial Disclosure</Link>
              <Link to="/privacy-policy" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Terms & Conditions</Link>
              <Link to="/terms-of-business" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Terms of Business</Link>
              <Link to="/cookie-policy" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Cookie Policy</Link>
              <Link to="/complaints" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Complaints</Link>
              <Link to="/sitemap" className="text-background/60 hover:text-primary transition-colors whitespace-nowrap">Sitemap</Link>
            </div>
            <div className="text-background/60 text-xs sm:text-sm text-center">
              © 2026 Whoosh. All rights reserved. | FCA Registration: 1020313
            </div>
          </div>
        </div>

        {/* Financial Disclosures */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-background/50 text-xs leading-relaxed text-justify">
              <p className="mb-4">
                <strong>Whoosh Finance Limited (Company No. 15772578) T/A Whoosh Car Finance</strong> is authorised and regulated by the Financial Conduct Authority (FRN No. 1020313). 
                We act as a credit broker not a lender. We can introduce you to a limited number of lenders who may be able to offer you finance facilities for your purchase. 
                We will only introduce you to these lenders. We will receive a commission payment from the finance provider for the introduction if you decide to enter into an agreement with them.
              </p>
              <p className="mb-4">
                The nature of this commission is as follows: we receive a fixed fee commission per finance agreement entered into, or we receive a commission based on a percentage of the total amount of finance taken. 
                We will disclose the amount of any commission we will receive and gain your explicit consent before the agreement is entered into. Our service is entirely free to our customers.
              </p>
              <p className="mb-4">
                You may be able to obtain finance for your purchase from other lenders and you are encouraged to seek alternative quotations. 
                If you would like to know how we handle complaints, please ask for a copy of our complaints handling process. 
                You can also find information about referring a complaint to the Financial Ombudsman Service (FOS) at <a href="http://financial-ombudsman.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">http://financial-ombudsman.org.uk</a>.
              </p>
              <p className="mb-4">
                Applicants must be 18 or over, terms and conditions apply, guarantees and indemnities may be required. 
                We are registered with the Office of the Information Commissioner (No. ZB989798).
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};