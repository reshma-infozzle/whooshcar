import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, FileText, Phone, Mail, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationComplete = () => {
  return (
    <>
      <Helmet>
        <title>Application Complete - Whoosh Car Finance</title>
        <meta name="description" content="Your car finance application has been submitted successfully. Here's what happens next." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 pt-20 sm:pt-24 md:pt-28">
        <Header />
        
        <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Success Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-comic text-3xl md:text-5xl lg:text-6xl text-black mb-4">
              <span className="text-primary">BOOM!</span> Application Submitted!
            </h1>
            <p className="font-body text-lg md:text-2xl text-black/80 max-w-2xl mx-auto">
              Thank you for choosing Whoosh Car Finance. Your application is now being reviewed.
            </p>
          </div>

          {/* What Happens Next Section */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <Card className="border-4 border-black shadow-comic p-6 md:p-8 bg-white">
              <h2 className="font-comic text-2xl md:text-3xl text-primary mb-6 flex items-center gap-2">
                <Clock className="w-8 h-8" />
                What Happens Next?
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-comic text-xl border-2 border-black">
                    1
                  </div>
                  <div>
                    <h3 className="font-comic text-xl text-black mb-2">Soft Search Review (Next 24 hours)</h3>
                    <p className="font-body text-black/70">
                      We'll perform a soft search on your application. This won't affect your credit score. 
                      Our team will review your details and match you with suitable lenders from our panel.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-comic text-xl border-2 border-black">
                    2
                  </div>
                  <div>
                    <h3 className="font-comic text-xl text-black mb-2">Decision & Contact (Within 48 hours)</h3>
                    <p className="font-body text-black/70">
                      One of our finance specialists will contact you via phone or email with a decision. 
                      If approved, we'll discuss your finance options and next steps.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-comic text-xl border-2 border-black">
                    3
                  </div>
                  <div>
                    <h3 className="font-comic text-xl text-black mb-2">Documentation & Verification</h3>
                    <p className="font-body text-black/70">
                      We may need to verify some information. Please have the following documents ready:
                    </p>
                    <ul className="mt-2 space-y-1 font-body text-sm text-black/70 list-disc list-inside">
                      <li>Proof of identity (Passport or Driving Licence)</li>
                      <li>Proof of address (Recent utility bill or bank statement)</li>
                      <li>Bank statements (Last 3 months)</li>
                      <li>Proof of income (Payslips or tax returns)</li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-comic text-xl border-2 border-black">
                    4
                  </div>
                  <div>
                    <h3 className="font-comic text-xl text-black mb-2">Final Approval & Fund Release</h3>
                    <p className="font-body text-black/70">
                      Once everything is verified and you've chosen your vehicle, we'll finalize your agreement. 
                      Funds will be released directly to the dealer, and you'll be driving away in no time!
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Information */}
            <Card className="border-4 border-black shadow-comic p-6 md:p-8 bg-accent/10">
              <h2 className="font-comic text-2xl text-black mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Important Information
              </h2>
              <div className="space-y-3 font-body text-black/80">
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your soft search will <strong>not affect your credit score</strong></span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Check your email and phone for updates from our team</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your application reference will be sent to your email</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Most decisions are made within 24-48 hours</span>
                </p>
              </div>
            </Card>

            {/* Contact Section */}
            <Card className="border-4 border-black shadow-comic p-6 md:p-8 bg-white">
              <h2 className="font-comic text-2xl text-black mb-4">Need Help?</h2>
              <p className="font-body text-black/70 mb-4">
                If you have any questions about your application, our friendly team is here to help:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-body text-black/80">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:01234567890" className="hover:text-primary transition-colors">
                    0123 456 7890
                  </a>
                </div>
                <div className="flex items-center gap-3 font-body text-black/80">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:apply@whooshfinance.co.uk" className="hover:text-primary transition-colors">
                    apply@whooshfinance.co.uk
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center max-w-2xl mx-auto">
            <Button 
              asChild
              size="lg"
              className="font-comic text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ApplicationComplete;
