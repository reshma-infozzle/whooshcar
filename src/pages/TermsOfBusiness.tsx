import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-comic font-bold text-primary mb-6">Terms of Business</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <strong>LAST UPDATED: {new Date().toLocaleDateString('en-GB')}</strong>
          </div>

          <div className="space-y-8 text-foreground">
            {/* About Us */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">1. WHO WE ARE</h2>
              <p className="mb-4">
                WHOOSH! Finance Limited are an experienced motor finance broker based in Manchester, UK. 
                Our mission is to provide a quality, personable service to all of our customers, whilst offering 
                the best financial acceptance we can obtain. We pride ourselves on treating customers fairly and 
                ensuring a seamless customer journey throughout the process.
              </p>
              <p className="mb-4">
                Our friendly team are on hand to support you within this journey and are on hand to answer any 
                questions you may have. Our aim is to provide you with the best service and to try to obtain the 
                best financial acceptance to fit your circumstances. We work with a panel of lenders in order to 
                help you obtain an acceptance.
              </p>
              <p>
                Treating Customers Fairly (TCF) is a core part of our culture and we are committed to ensuring 
                you receive a product suitable for your needs and circumstances.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">2. CONTACT US</h2>
              <p className="mb-4">
                Should you have any questions prior to making an application, or have any queries during or after 
                your application has been made, you can contact us using the following information:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> <a href="mailto:hello@whooshcarfinance.co.uk" className="text-primary hover:underline">hello@whooshcarfinance.co.uk</a></p>
                <p><strong>Telephone:</strong> <a href="tel:08001234567" className="text-primary hover:underline">0800 123 4567</a></p>
                <p><strong>Address:</strong> Unit 2, 30 Broughton Street, Cheetham Hill, Manchester, M8 8NN, United Kingdom</p>
                <p><strong>Company Number:</strong> 15772578</p>
              </div>
            </section>

            {/* Regulation */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">3. REGULATION</h2>
              <p className="mb-4">
                <strong>Whoosh Finance Limited (Company No. 15772578) T/A WHOOSH! Car Finance</strong> is 
                authorised and regulated by the Financial Conduct Authority ("FCA"), under FRN 1020313.
              </p>
              <p className="mb-4">
                We act as a credit broker, not a lender. We can introduce you to a limited number of lenders who 
                may be able to offer you finance facilities for your purchase. We will only introduce you to these lenders.
              </p>
              <p className="mb-4">
                You will not be charged a fee for using our services; however, we must inform you that we may receive 
                a commission payment from the lender we introduce your information to. This will not impact any rate you are offered.
              </p>
              <p>
                We will never provide you with a recommendation - we provide you with information to make an informed decision.
              </p>
            </section>

            {/* Credit Searches */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">4. CREDIT SEARCHES</h2>
              <p className="mb-4">
                By submitting your application through the WHOOSH! Finance website, you are allowing us to submit 
                your details to third parties and credit reference agencies.
              </p>
              <p className="mb-4">
                In order to assess your creditworthiness, we will send your details to our lending panel to complete 
                a soft search. Details of our lending panel can be found in our Privacy Policy.
              </p>
              <p className="mb-4">
                The personal information we have collected from you will be shared with fraud prevention agencies 
                who will use it to prevent fraud and money-laundering and to verify your identity. If fraud is detected, 
                you could be refused certain services, finance or employment.
              </p>
              <p className="mb-4">
                The lenders who we share your application with will carry out a soft search of your credit file using 
                the information you have provided to us, which will not leave a footprint on your credit file initially.
              </p>
              <p>
                If your application is approved and you proceed and complete your application for finance, a footprint 
                will be recorded on your credit file by the lender you have chosen to complete your finance with. 
                If you do not consent for WHOOSH! Finance to submit your details to credit reference agencies, please 
                do not submit an application.
              </p>
            </section>

            {/* Finance Options */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">5. FINANCE OPTIONS</h2>
              <p className="mb-4">
                In order to assist you with obtaining vehicle finance, your details will be passed over to lenders 
                with whom we work with. Your details will be passed to the lenders with whom WHOOSH! Finance work with. 
                These lenders will carry out credit checks of their own and may check your details with fraud prevention agencies.
              </p>
              <p className="mb-4">
                Our lending panel, in order to assess your creditworthiness, will check your information with credit 
                reference agencies, and potentially fraud prevention agencies. They will also use the information that 
                you have provided us to assist them in assessing your current status and affordability.
              </p>
              <p className="mb-4">
                This group of lenders provide us with a wide range of credit products and as a broker we will try to 
                obtain you the best finance acceptance. Please note that we cannot guarantee an acceptance and all 
                potential finance is subject to terms and status.
              </p>
              <p>
                Before entering into any agreement, you should ensure you have fully read and understood the agreement 
                you are considering entering into. We encourage you to take the time to read through any documentation 
                provided, and please do ask any questions you may have.
              </p>
            </section>

            {/* Commission and Fees */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">6. COMMISSION AND FEES</h2>
              <p className="mb-4">
                We will receive a commission payment from the finance provider for the introduction if you decide to 
                enter into an agreement with them. The nature of this commission is as follows:
              </p>
              <ul className="list-disc ml-8 space-y-2 mb-4">
                <li>We receive a fixed fee commission per finance agreement entered into, or</li>
                <li>We receive a commission based on a percentage of the total amount of finance taken</li>
              </ul>
              <p className="mb-4">
                We will disclose the amount of any commission we will receive and gain your explicit consent before 
                the agreement is entered into. Our service is entirely free to our customers.
              </p>
              <p>
                Commission payments can vary based on each individual case. You may be able to obtain finance for your 
                purchase from other lenders and you are encouraged to seek alternative quotations.
              </p>
            </section>

            {/* Affordability */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">7. AFFORDABILITY</h2>
              <p className="mb-4">
                It is extremely important that you look into finance options that are suitable for your current 
                (and potential future) financial situation.
              </p>
              <p className="mb-4">
                Our team will go over all your details to ensure we have the correct information to pass onto our 
                lenders, who will then try to verify the information. However, please note that evidence of your 
                income may be requested.
              </p>
              <p className="mb-4">
                If you are aware or suspect that your financial position will change in the future, you must inform us.
              </p>
              <p>
                Your credit rating could be adversely affected if you do not make payments when due. The responsibility 
                for deciding whether you can afford to contract with a finance option provided to you via our service 
                rests with you as only you are best placed to determine this.
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">8. DATA PROTECTION</h2>
              <p className="mb-4">
                In order to process your application, you will need to provide us with some of your personal information. 
                We pride ourselves on handling your information in the most secure and professional way we can.
              </p>
              <p className="mb-4">
                Your data will not be processed without your explicit consent for us to do so, therefore if you do not 
                wish for your application to be processed, we kindly ask that this is not submitted.
              </p>
              <p className="mb-4">
                As mentioned above, your information will be passed over to our lender network in order to try to obtain 
                you a finance acceptance. Whilst we have assessed the lenders we work with, we have included their 
                information within our privacy policy so you can fully research how they will use your information.
              </p>
              <p>
                For further detail on how your information is used by us and who it will be shared with, please view 
                our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. 
                Our ICO registration number is ZB989798.
              </p>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">9. COMPLAINTS</h2>
              <p className="mb-4">
                If you wish to make a complaint, please do contact us using the contact information provided in Section 2 above.
              </p>
              <p className="mb-4">
                If you would like to know how we handle complaints, please ask for a copy of our complaints handling process. 
                We are committed to resolving any issues you may have in a fair and timely manner.
              </p>
              <p>
                You can also find information about referring a complaint to the Financial Ombudsman Service (FOS) at 
                <a href="http://financial-ombudsman.org.uk" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  financial-ombudsman.org.uk
                </a>.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">10. ELIGIBILITY</h2>
              <p className="mb-4">
                Applicants must be 18 or over. Terms and conditions apply, guarantees and indemnities may be required.
              </p>
              <p>
                All finance is subject to status and affordability checks. We reserve the right to decline applications 
                that do not meet our lending criteria or those of our lending panel.
              </p>
            </section>

            {/* Related Documents */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">11. RELATED DOCUMENTS</h2>
              <p className="mb-4">
                You can view our related policies and documents here:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li><a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="text-primary hover:underline">Terms and Conditions</a></li>
              </ul>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">12. UPDATES TO THESE TERMS</h2>
              <p className="mb-4">
                We may update these Terms of Business from time to time. Any changes will be posted on this page and 
                will be effective immediately upon posting.
              </p>
              <p>
                We recommend that you review these Terms of Business periodically to stay informed of any updates. 
                Your continued use of our services after any changes indicates your acceptance of the updated terms.
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

export default TermsOfBusiness;