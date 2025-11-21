import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cookie, Shield, Settings, Eye, BarChart3, MousePointer } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-comic font-bold text-primary mb-6 flex items-center gap-3">
            <Cookie className="w-10 h-10" />
            Cookie Policy
          </h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <strong>LAST UPDATED: {new Date().toLocaleDateString('en-GB')}</strong>
          </div>

          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground">
                  This website, WHOOSH! Car Finance (the "Website"), is operated by Whoosh Finance Limited. 
                  This Cookie Policy explains how we use cookies and similar technologies to distinguish you from 
                  other users. By using cookies, we are able to provide you with a better experience and to improve 
                  our site by better understanding how you use it.
                </p>
              </div>
              <p className="mb-4">
                Please read this Cookie Policy carefully and ensure that you understand it. Your acceptance of our 
                Cookie Policy is deemed to occur if you continue using our site. If you do not agree to our Cookie 
                Policy, please stop using our site immediately.
              </p>
            </section>

            {/* What are Cookies */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6" />
                What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files that are stored in your web browser that allow WHOOSH! Finance or a 
                third party to recognise you. Cookies can be used to collect, store and share bits of information 
                about your activities across websites, including on the WHOOSH! Finance website.
              </p>
              
              <p className="mb-4">Cookies might be used for the following purposes:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <span>To enable certain functions</span>
                </div>
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>To provide analytics</span>
                </div>
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>To store your preferences</span>
                </div>
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <span>To enable ad delivery and behavioural advertising</span>
                </div>
              </div>
              
              <p>WHOOSH! Finance uses both session cookies and persistent cookies.</p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Session Cookies</h3>
                  <p className="mb-3">
                    A session cookie is used to identify a particular visit to our website. These cookies expire 
                    after a short time, or when you close your web browser after using our website.
                  </p>
                  <p>
                    We use these cookies to identify you during a single browsing session, such as when you 
                    navigate through our website or use our finance application forms.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Persistent Cookies</h3>
                  <p className="mb-3">
                    A persistent cookie will remain on your device for a set period of time specified in the cookie. 
                    We use these cookies where we need to identify you over a longer period of time.
                  </p>
                  <p>
                    For example, we would use a persistent cookie if you asked that we keep you signed in or 
                    remember your preferences for future visits.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">First Party Cookies</h3>
                  <p>
                    Our site may place and access certain first party cookies on your computer or device. 
                    First party cookies are those placed directly by us and are used only by us. We use cookies 
                    to facilitate and improve your experience of our site and to provide and improve our products and services.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Third Party Cookies</h3>
                  <p>
                    By using our site, you may also receive certain third party cookies on your computer or device. 
                    Third party cookies are those placed by websites, services, and/or parties other than us. 
                    Third party cookies are used on our site for analytics services and advertising.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">How Does Our Site Use Cookies?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <p>
                    We have carefully chosen these cookies and have taken steps to ensure that your privacy and 
                    personal data is protected and respected at all times.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <p>
                    Third party companies like analytics companies and ad networks generally use cookies to collect 
                    user information on an anonymous basis. They may use that information to build a profile of your 
                    activities on the WHOOSH! Finance website and other websites that you've visited.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <p>
                    By starting an application for car finance, you consent to receive transactional communications 
                    from us, through the use of cookies. These emails are intended to keep you informed and assist 
                    you in completing your transactions.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Categories */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Cookie Categories</h2>
              <div className="grid gap-6">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Essential Cookies
                  </h3>
                  <p className="text-blue-700">
                    These cookies are necessary for the website to function and cannot be switched off in our systems. 
                    They are usually only set in response to actions made by you which amount to a request for services, 
                    such as setting your privacy preferences, logging in or filling in forms.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Analytics Cookies
                  </h3>
                  <p className="text-green-700">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our site. They help us to know which pages are the most and least popular and 
                    see how visitors move around the site.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <MousePointer className="w-5 h-5" />
                    Functional Cookies
                  </h3>
                  <p className="text-orange-700">
                    These cookies enable the website to provide enhanced functionality and personalisation. 
                    They may be set by us or by third party providers whose services we have added to our pages.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Targeting Cookies
                  </h3>
                  <p className="text-purple-700">
                    These cookies may be set through our site by our advertising partners. They may be used by those 
                    companies to build a profile of your interests and show you relevant adverts on other sites.
                  </p>
                </div>
              </div>
            </section>

            {/* Consent Control */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Consent Control</h2>
              <p className="mb-4">
                Before cookies are placed on your computer or device, you will be shown a pop-up requesting your 
                consent to set those cookies. By giving your consent to the placing of cookies you are enabling us 
                to provide the best possible experience and service to you.
              </p>
              <p className="mb-4">
                You may, if you wish, deny consent to the placing of cookies; however certain features of our site 
                may not function fully or as intended.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Important:</strong> In addition to the controls that we provide, you can choose to enable 
                  or disable cookies in your internet browser. Most internet browsers also enable you to choose 
                  whether you wish to disable all cookies or only third party cookies.
                </p>
              </div>
            </section>

            {/* Your Cookie Options */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Your Cookie Options</h2>
              <p className="mb-4">
                If you don't like the idea of cookies or certain types of cookies, you can change your browser's 
                settings to delete cookies that have already been set and to not accept new cookies.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">How to Manage Cookies in Different Browsers:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Chrome</h4>
                  <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Cookies and website data</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                  <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800">
                  <strong>Please note:</strong> If you delete cookies or do not accept them, you might not be able 
                  to use all of the features we offer, you may not be able to store your preferences, and some of 
                  our pages might not display properly.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Definitions and Interpretation</h2>
              <p className="mb-4">In this Cookie Policy, unless the context otherwise requires, the following expressions have the following meanings:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>"Cookie"</strong> means a small file placed on your computer or device by our site when you visit certain parts of our site and/or when you use certain features of our site.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>"Cookie Law"</strong> means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003 and of UK GDPR.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>"Personal Data"</strong> means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data, as defined by UK GDPR.</p>
                </div>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may alter this Cookie Policy at any time. Any such changes will become binding on you on your 
                first use of our site after the changes have been made. You are therefore advised to check this 
                page from time to time.
              </p>
              <p>
                In the event of any conflict between the current version of this Cookie Policy and any previous 
                version(s), the provisions current and in effect shall prevail unless it is expressly stated otherwise.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Cookie Policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Whoosh Finance Limited</strong></p>
                <p>Email: <a href="mailto:hello@whooshcarfinance.co.uk" className="text-primary hover:underline">hello@whooshcarfinance.co.uk</a></p>
                <p>Phone: <a href="tel:08001234567" className="text-primary hover:underline">0800 123 4567</a></p>
                <p>Address: Unit 2, 30 Broughton Street, Cheetham Hill, Manchester, M8 8NN, United Kingdom</p>
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;