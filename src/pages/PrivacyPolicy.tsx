import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-comic font-bold text-primary mb-6">Privacy Policy</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <strong>LAST UPDATED: {new Date().toLocaleDateString('en-GB')}</strong>
          </div>

          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">1. INTRODUCTION</h2>
              <p className="mb-4">
                We are Whoosh Finance Limited, trading as WHOOSH! Car Finance, a company registered in England and Wales 
                with company number 15772578 and whose registered office is at Unit 2, 30 Broughton Street, 
                Cheetham Hill, Manchester, M8 8NN, United Kingdom ('we', 'us' or 'our'). We take the privacy of our customers very seriously. We ask that you read this
                Privacy Policy ('the Policy') carefully as it contains important information about how we will use your personal data.
              </p>
              <p className="mb-4">
                For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 
                ('DPA'), we are the 'Data Controller' (i.e. the company who is responsible for, and controls the processing of, 
                your personal data). As we are a credit intermediary, we undertake a number of financial tasks that relate to 
                consumer credit.
              </p>
              <p>
                Our firm's lawful basis for processing your personal data is done so under the following provisions set out 
                in Article 6 of the UK GDPR:
              </p>
              <ul className="list-disc ml-8 mt-4 space-y-2">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose. You have the right to withdraw your consent at any time.</li>
                <li><strong>Contract:</strong> The processing is necessary for a contract you have with us, or because you have asked us to take specific steps before entering into a contract.</li>
                <li><strong>Legal obligation:</strong> The processing is necessary for us to comply with the law.</li>
                <li><strong>Legitimate Interest:</strong> The processing is necessary for our legitimate interests or the legitimate interests of a third party unless there is a good reason to protect your personal data which overrides those legitimate interests.</li>
              </ul>
            </section>

            {/* Personal Data Collection */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">2. PERSONAL DATA WE MAY COLLECT</h2>
              <p className="mb-4">
                We will obtain personal data about you when you complete an online or paper form, make a telephone enquiry 
                with us, or use our services. If you submit an online enquiry, you will be required to agree to the terms 
                of this Policy which include permitting us to contact you for the purposes of your finance-related enquiry 
                via the contact means you provide us.
              </p>
              <p className="mb-4">The personal data we may collect includes, but is not limited to:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Your first and last name</li>
                <li>Address and contact information</li>
                <li>Date of birth</li>
                <li>Employment and income information</li>
                <li>Marital status</li>
                <li>Vehicle information and preferences</li>
                <li>Bank details and financial information</li>
                <li>Credit history and payment details</li>
                <li>Marketing preferences</li>
                <li>IP address and cookie information</li>
              </ul>
              <p className="mt-4">
                <strong>Sensitive and Special Category Data:</strong> We will never request sensitive information that we do not require. 
                However, if you provide us with data that is classed as a special category of data such as health information, 
                criminal records, or allegations of criminal offences, we will only process this with your permission (unless 
                we feel the processing is necessary to protect your vital interests or if the law allows us to do so).
              </p>
            </section>

            {/* How We Use Personal Data */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">3. HOW WE USE PERSONAL DATA</h2>
              <p className="mb-4">We will use the personal data you disclose to us for the following purposes:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>To assist us in processing your enquiries and obtaining the services which you require</li>
                <li>To help us identify you and any accounts that you hold with us</li>
                <li>Undertaking credit checks and affordability assessments</li>
                <li>Administration and customer service</li>
                <li>Research, statistical analysis and behavioural analysis</li>
                <li>Customer profiling and analysing your preferences</li>
                <li>Marketing (providing you have opted-in)</li>
                <li>Fraud prevention and detection</li>
                <li>Billing and order fulfilment</li>
                <li>Customising our website and its content to your particular preferences</li>
                <li>To notify you of any changes to our website or services which may affect you</li>
                <li>Security vetting and improving our services</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">4. WHO WE SHARE YOUR INFORMATION WITH</h2>
              <p className="mb-4">
                In order to make certain services available to you, we may need to share your personal information with 
                third parties. We will only share personal data if we are satisfied that our partners or suppliers have 
                appropriate measures in place to protect your information in the same way that we do.
              </p>
              <p className="mb-4">We may disclose your information to:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li><strong>Our panel of lenders</strong> that will provide you with finance services in connection with your application</li>
                <li><strong>Credit Reference Agencies (CRAs)</strong> to help assess your application and verify your identity</li>
                <li><strong>Fraud prevention agencies</strong> to help prevent and detect fraud</li>
                <li><strong>Open banking solutions</strong> where required by lenders for affordability assessments</li>
                <li><strong>Other credit brokers or lenders</strong> where you have consented and your application has been declined by our available lenders</li>
                <li><strong>Marketing partners</strong> for products or services relating to vehicle finance that we believe may be of interest to you</li>
                <li><strong>Protection partners</strong> to offer you additional products such as warranty and GAP insurance</li>
                <li><strong>Dealerships</strong> to help find you a suitable vehicle as part of your application</li>
                <li><strong>Technology providers</strong> including CRM systems, call recording suppliers, and cloud hosting platforms</li>
                <li><strong>Regulators</strong> including the Financial Conduct Authority, Financial Ombudsman Service, and Information Commissioner's Office</li>
                <li><strong>Professional advisors</strong> including auditors, legal advisors, and compliance consultants</li>
                <li><strong>Law enforcement agencies</strong> where required by law or in connection with crime prevention</li>
              </ul>
            </section>

            {/* Marketing */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">5. MARKETING AND COMMUNICATIONS</h2>
              <p className="mb-4">
                If you have opted-in to receive our marketing material, we or our business partners may contact you by mail, 
                telephone, text message, email, or WhatsApp. Each contact method requires its own consent via an opt-in selection. 
                The nature of these marketing communications relates to information on products, services, promotions and special 
                offers which we believe may be of interest to you.
              </p>
              <p className="mb-4">
                We may also rely on soft opt-in when marketing under certain circumstances. You can opt out of marketing 
                communications at any time. If you opt out of marketing, you may continue to receive service messages about 
                your products, which are not marketing communications.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">6. KEEPING DATA SECURE</h2>
              <p className="mb-4">
                We currently safeguard personal data by storing it on secure CRM systems protected by passwords and encryption. 
                We use appropriate technical and organisational measures to safeguard personal data disclosed to us. We regularly 
                review our security systems to ensure they remain effective.
              </p>
              <p>
                Whilst we will use all reasonable efforts to safeguard your personal data, you acknowledge that the use of 
                the internet is not entirely secure and for this reason we cannot guarantee the absolute security or integrity 
                of any personal data which are transferred from you or to you via the internet.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">7. DATA RETENTION</h2>
              <p className="mb-4">
                We will store your personal information for up to six years from the end of our relationship with you. 
                This six-year period satisfies the requirement of our regulator, The Financial Conduct Authority, and is 
                also in line with other financial industry retention periods.
              </p>
              <p className="mb-4">
                If you do not object to receiving marketing communications from us, we will store your personal information 
                for marketing purposes until you unsubscribe from receiving marketing communications from us.
              </p>
              <p>
                Some of your information may be included in information used for accounting purposes. Where this is the case, 
                this information is kept for 7 years as per our legal requirements. Once these time periods have ended, 
                your information will be confidentially destroyed and removed from all systems and records.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">8. YOUR RIGHTS</h2>
              <p className="mb-4">Under UK data protection law, you have the following rights:</p>
              <ul className="list-disc ml-8 space-y-3">
                <li><strong>Right to access:</strong> You have the right to request copies of the personal information we hold about you</li>
                <li><strong>Right to rectification:</strong> You have the right to request that we correct any inaccurate personal information we hold about you</li>
                <li><strong>Right to erasure:</strong> You have the right to request that we delete your personal information from our records (subject to legal requirements)</li>
                <li><strong>Right to restrict processing:</strong> You have the right to request that we restrict how we use your personal information</li>
                <li><strong>Right to object:</strong> You have the right to object to the collection and use of your personal information</li>
                <li><strong>Right to data portability:</strong> You have the right to obtain a copy of your personal information in a legible and compatible format</li>
                <li><strong>Right to withdraw consent:</strong> Where we rely on consent, you have the right to withdraw your consent at any time</li>
                <li><strong>Rights in relation to automated decision making:</strong> If a decision has been made electronically, you have the right to contest this decision</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the details provided in the 'Contact Us' section below. 
                We will respond to your request within one month.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">9. INTERNATIONAL TRANSFERS</h2>
              <p className="mb-4">
                In the normal course of business, there may be a need to transfer personal data outside of the UK where those 
                countries do not typically have the same protections and safeguards in place for the protection of personal data.
              </p>
              <p>
                We deal with a number of large, international corporations where data is likely to be transferred in this way. 
                Assurances and processes will always be put in place and considered before any international transfer is undertaken 
                to ensure the protection and security of personal data through appropriate safeguards such as adequacy decisions 
                or standard contractual clauses.
              </p>
            </section>

            {/* Monitoring */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">10. MONITORING</h2>
              <p>
                We may monitor and record communications with you (such as telephone conversations and emails) for the purpose 
                of quality assurance, training, fraud prevention, or compliance purposes. You will be notified when calls are 
                being recorded.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">11. COOKIES</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to distinguish you from other users and provide you with a 
                better experience. By using cookies, we are able to improve our site by better understanding how you use it.
              </p>
              <p>
                You will be asked if you agree to cookies when using our site. You have the right to refuse these cookies, 
                however certain features of our site may not function fully or as intended. You can control cookies through 
                your browser settings.
              </p>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">12. COMPLAINTS</h2>
              <p className="mb-4">
                Under UK GDPR, you have the right to lodge a complaint with the supervisory authority, the Information 
                Commissioner's Office (ICO), who are the national authority responsible for the protection of personal data.
              </p>
              <p className="mb-4">
                A complaint can be made to the ICO via their website: <a href="https://ico.org.uk/" className="text-primary hover:underline">ico.org.uk</a> or 
                through their helpline: <a href="tel:03031231113" className="text-primary hover:underline">0303 123 1113</a>.
              </p>
              <p>
                You can also contact us directly if you have any concerns about how we handle your personal data using the 
                contact details below.
              </p>
            </section>

            {/* Contact Details */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">13. CONTACT US</h2>
              <p className="mb-4">
                We welcome your feedback and questions. If you wish to contact us regarding this privacy policy or to exercise 
                any of your rights, please contact us using the following details:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p>Whoosh Finance Limited</p>
                <p>Email: <a href="mailto:hello@whooshcarfinance.co.uk" className="text-primary hover:underline">hello@whooshcarfinance.co.uk</a></p>
                <p>Phone: <a href="tel:08001234567" className="text-primary hover:underline">0800 123 4567</a></p>
                <p>Address: Unit 2, 30 Broughton Street, Cheetham Hill, Manchester, M8 8NN, United Kingdom</p>
                <p>ICO Registration Number: ZB989798</p>
                <p>FCA Registration Number: 1020313</p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">14. UPDATES TO THIS POLICY</h2>
              <p className="mb-4">
                We may change this Privacy Policy from time to time. You should check this policy occasionally to ensure 
                you are aware of the most recent version which will apply each time you deal with us.
              </p>
              <p>
                This policy will be reviewed on at least an annual basis. Any updates will be published on our website 
                as soon as practically possible. This policy was last updated on {new Date().toLocaleDateString('en-GB')}.
              </p>
            </section>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;