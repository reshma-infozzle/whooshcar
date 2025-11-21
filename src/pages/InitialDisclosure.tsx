import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const InitialDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>Initial Disclosure Document - Whoosh Car Finance | FCA Regulated Credit Broker</title>
        <meta 
          name="description" 
          content="Initial disclosure document for Whoosh Finance Limited. FCA regulated credit broker services, commission disclosure, complaints procedure and regulatory information." 
        />
        <meta name="keywords" content="initial disclosure, FCA regulated, credit broker, commission disclosure, complaints, financial services" />
        <link rel="canonical" href="https://whooshcarfinance.co.uk/initial-disclosure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
        <Header />
        
        <main className="pt-24">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Initial Disclosure Document
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This information relates to the activities undertaken by Whoosh Finance Limited, 
                trading as Whoosh Car Finance
              </p>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8 space-y-8">
                
                {/* The Financial Conduct Authority */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    The Financial Conduct Authority
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Financial Conduct Authority (FCA) is the independent watchdog that regulates financial services. 
                    Use this information to decide if our services are right for you.
                  </p>
                </section>

                <Separator />

                {/* Treating Customers Fairly */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Treating Customers Fairly
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our business is committed to treating our customers fairly and ensuring our products and services 
                    are suitable for their needs. Treating Customers Fairly (TCF) is a core part of our culture and 
                    philosophy and you can review our commitment to it by asking for a copy of our TCF policy statement.
                  </p>
                </section>

                <Separator />

                {/* What Products do we Offer */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    What Products do we Offer?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are a credit broker not a lender. We can introduce you to a limited number of finance providers 
                    who may be able to assist you with your requirements. We will only introduce you to these finance providers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The types of finance we can arrange include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Hire Purchase (HP)</li>
                    <li>Personal Contract Purchase (PCP)</li>
                    <li>Conditional Sale</li>
                    <li>Personal Loans</li>
                    <li>Business Finance</li>
                  </ul>
                </section>

                <Separator />

                {/* Other Finance Facilities */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Other Finance Facilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may be able to obtain funding for your purchase from other providers and you are encouraged 
                    to seek alternative quotations and details of their products by researching on the high street, 
                    in the media and online.
                  </p>
                </section>

                <Separator />

                {/* What will you have to Pay */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    What will you have to Pay to us for this Service?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You will not make any payment to us for processing a finance application or for introducing you 
                    to a finance provider. All charges that you will pay including, interest, documentation fees or 
                    rentals, where applicable, will be clearly shown on the finance agreement. Our service is entirely 
                    free to our customers.
                  </p>
                </section>

                <Separator />

                {/* Commission Disclosure */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Commission Disclosure
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We will receive a commission payment from the finance provider for the introduction if you 
                      decide to enter into an agreement with them.
                    </p>
                    <p>
                      The nature of this commission is as follows: we receive a fixed fee commission per finance 
                      agreement entered into, or we receive a commission based on a percentage of the total amount 
                      of finance taken.
                    </p>
                    <p>
                      We will disclose the amount of any commission we will receive and gain your explicit consent 
                      before the agreement is entered into.
                    </p>
                    <p>
                      The typical amount of commission we receive varies depending on the product and provider, 
                      but ranges from £50 to £500 per agreement, or between 0.5% and 3% of the total amount of credit.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Complaints */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Complaints
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If you wish to register a complaint, please contact us:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>In writing to: Unit 2, 30 Broughton Street, Cheetham Hill, Manchester, M8 8NN</li>
                      <li>By telephone: 0800 123 4567</li>
                      <li>By email: complaints@whooshcarfinance.co.uk</li>
                    </ul>
                    <p>
                      If you cannot settle your complaint with us, you may be entitled to refer it to the 
                      Financial Ombudsman Service. Information about the Financial Ombudsman Service can be 
                      found on their website at{' '}
                      <a 
                        href="http://www.financial-ombudsman.org.uk" 
                        className="text-primary hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        www.financial-ombudsman.org.uk
                      </a>
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Compensation */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Compensation
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We are covered by the Financial Services Compensation Scheme (FSCS). You may be entitled to 
                      compensation from the scheme if we cannot meet our obligations. This depends on the type of 
                      business and the circumstances of the claim.
                    </p>
                    <p>
                      Most types of investment business are covered up to a maximum of £85,000. Insurance advising 
                      and arranging is covered for 100% of the first £2,000 and 90% of the remainder of the claim, 
                      without any upper limit.
                    </p>
                    <p>
                      Further information about compensation scheme arrangements is available from the FSCS at{' '}
                      <a 
                        href="http://www.fscs.org.uk" 
                        className="text-primary hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        www.fscs.org.uk
                      </a>
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Data Protection */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Data Protection
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We are registered with the Office of the Information Commissioner (Registration No. ZB989798) 
                      and we comply with the Data Protection Act 2018 and UK GDPR.
                    </p>
                    <p>
                      The personal information you provide will be used to assess your application and, if your 
                      application proceeds, to administer your account and provide other services.
                    </p>
                    <p>
                      We may share your information with credit reference agencies, fraud prevention agencies, 
                      and other organisations involved in credit decisions and for debt recovery purposes.
                    </p>
                    <p>
                      For full details of how we use your personal information, please see our Privacy Policy.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Who Regulates Us */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Who Regulates Us?
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Whoosh Finance Limited</strong> (Company No. 15772578) is authorised and regulated by 
                      the Financial Conduct Authority (FRN No. 1020313).
                    </p>
                    <p>
                      Our permitted business is credit broking and debt adjusting. You can check this on the 
                      Financial Services Register by visiting the FCA website{' '}
                      <a 
                        href="https://register.fca.org.uk/" 
                        className="text-primary hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        https://register.fca.org.uk/
                      </a>{' '}
                      or by contacting the FCA on 0800 111 6768.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Contact Us */}
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong>Whoosh Finance Limited</strong></p>
                    <p>
                      Unit 2, 30 Broughton Street<br />
                      Cheetham Hill, Manchester<br />
                      M8 8NN, United Kingdom
                    </p>
                    <p>
                      <strong>Telephone:</strong> 0800 123 4567<br />
                      <strong>Email:</strong> hello@whooshcarfinance.co.uk<br />
                      <strong>Website:</strong> www.whooshcarfinance.co.uk
                    </p>
                    <p>
                      <strong>Company Registration Number:</strong> 15772578<br />
                      <strong>FCA Registration Number:</strong> 1020313<br />
                      <strong>ICO Registration Number:</strong> ZB989798
                    </p>
                  </div>
                </section>

                {/* Document Version */}
                <div className="text-center pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Document Version: 1.0 | Last Updated: December 2024
                  </p>
                </div>

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
