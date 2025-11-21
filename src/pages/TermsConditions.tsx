import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-comic font-bold text-primary mb-6">Terms and Conditions</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <strong>LAST UPDATED: {new Date().toLocaleDateString('en-GB')}</strong>
          </div>

          <div className="space-y-8 text-foreground">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p className="mb-4">
                These are the website terms and conditions ("Terms and Conditions") of Whoosh Finance Limited 
                ("WHOOSH!", "we", "us", "our"). Please read these Terms and Conditions carefully, they set out 
                the basis on which you are allowed to use this website (the "Site") and the information contained 
                within it. They protect you as a user of the Site and prevent the Site from being used for any 
                illegal or unauthorised purposes.
              </p>
              <p>
                By proceeding with access to this Site, you are deemed to have accepted both these Terms and 
                Conditions and our Privacy Policy. If you do not wish to be bound by these terms you should not use the Site.
              </p>
            </section>

            {/* Our Service */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">2. OUR SERVICE</h2>
              <p className="mb-4">
                The service we provide via this Site is assistance to Site users to access finance which may be 
                appropriate for them to use for buying motor vehicles ("Service"). In this respect we act as a 
                credit broker, not a lender. We do not offer finance ourselves.
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>We will not charge you a fee for using our services, but we may receive a commission payment from lenders we introduce you to</li>
                <li>The responsibility for deciding whether you can afford to contract with a finance option provided to you via our Service rests with you</li>
                <li>If you decide to proceed with any third party provider of finance, you will be required to enter into a separate legally binding agreement with that third party</li>
                <li>Your use of the Site and the Service is for personal use only and is not available for commercial use</li>
                <li>You are not permitted to use the Site or Service for any illegal, immoral or fraudulent purpose</li>
              </ul>
            </section>

            {/* Information on Our Site */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">3. INFORMATION ON OUR SITE</h2>
              <p className="mb-4">
                We do our best to ensure that the information on the Site is accurate and helpful at all times. 
                However, the information is general in nature, and is intended as a guide only to the types of 
                products and services offered by WHOOSH! Finance. Users are advised to consult with WHOOSH! Finance 
                and to check any product or service information for specific information.
              </p>
              <p>
                We do not guarantee that any loans or other products or services offered to you through the Site 
                will meet your requirements. If you provide us with information which is incorrect or incomplete 
                we cannot be held responsible for any complaints or claims from you arising in connection with this.
              </p>
            </section>

            {/* Your Use of Our Site */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">4. YOUR USE OF OUR SITE</h2>
              <p className="mb-4">You must not under any circumstances seek to undermine the security of the Site or any information submitted to or available through it. In particular, you must not:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Seek to access, alter or delete any information to which you do not have authorised access</li>
                <li>Seek to overload the system via spamming or flooding</li>
                <li>Take any action or use any device, routine or software to crash, delay, damage or otherwise interfere with the operation of this Site</li>
                <li>Attempt to decipher, disassemble or modify any of the software, coding or information comprised in the Site</li>
                <li>Use robots, spiders, scrapers or similar automated tools on our Site</li>
                <li>Try to get around any security measures we put on the Site to stop or limit access to parts of it</li>
                <li>Breach our intellectual property rights or copy, imitate or use our trademarks, designs, layout or other intellectual property</li>
                <li>Copy, modify, duplicate, create derivative works from, frame, mirror, republish, download, display, transmit, or distribute all or any portion of the Site</li>
              </ul>
              <p className="mt-4">
                You are solely responsible for any information submitted by you to our site. You are responsible 
                for ensuring that all information supplied by you is accurate, up-to-date and not misleading or 
                likely to mislead or deceive.
              </p>
            </section>

            {/* Client Eligibility */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">5. CLIENT ELIGIBILITY AND PROMISES</h2>
              <p className="mb-4">By using our Service, you confirm that you:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Have the right to enter into an Agreement with us</li>
                <li>Are over the age of 18 years</li>
                <li>Will have only one Account with us</li>
                <li>Will create and use a username which will not be offensive, nor will it suggest that you are someone else</li>
                <li>Will only provide us with information which is true and accurate</li>
                <li>Understand that we have the right to insist that you change a username if we reasonably require</li>
              </ul>
            </section>

            {/* Use of Your Information */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">6. USE OF YOUR INFORMATION</h2>
              <p className="mb-4">
                WHOOSH! Finance Limited and our panel of lenders, insurers, service providers, vehicle suppliers 
                and agents will use your personal details (including sensitive personal data) and information we 
                obtain from other sources to:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Deal with your enquiries and consider your application</li>
                <li>Carry out credit searches and affordability assessments</li>
                <li>Provide marketing and ensure that services and advertising we offer are tailored to your needs and interests</li>
                <li>Contact you by mail, telephone, email, SMS or other electronic messaging service with offers of products or services</li>
              </ul>
              <p className="mt-4">
                By providing us with your contact details, you agree to being contacted by the methods and for 
                the purposes set out in, and in accordance with, our Privacy Policy. In assessing your car loan 
                application, we will make enquiries about you including searching your record with credit reference agencies.
              </p>
              <p className="mt-4">
                If false or inaccurate information is provided and fraud is identified, details will be passed to 
                fraud prevention agencies to prevent fraud and money laundering.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">7. INTELLECTUAL PROPERTY</h2>
              <p className="mb-4">
                We are the owner or the licensee of all trade marks, and all other marks, trade names, brand names, 
                business names, illustrations, images, logos, registered or unregistered designs, copyrights and 
                other intellectual property rights ("IP Rights") which appear on our Site and in the material published on it.
              </p>
              <p>
                You may use these rights and the material solely for the purpose of using our Site in accordance 
                with these Terms. You may not copy, reproduce, republish, download, post, broadcast, transmit, 
                make available to the public, or otherwise use any content on our Site in any way except for your 
                own personal, non-commercial use.
              </p>
            </section>

            {/* Links to Third Party Sites */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">8. LINKS TO THIRD PARTY SITES</h2>
              <p className="mb-4">
                This Site may include links to other websites which are not owned, operated, or controlled by 
                WHOOSH! Finance ("Third Party Websites"). WHOOSH! Finance provides you with such links solely for your convenience.
              </p>
              <p className="mb-4">
                The inclusion of such links does not mean or imply that WHOOSH! Finance endorses the Third Party 
                Websites, its availability or contents or any agreement or understanding you enter into with a 
                third party through a Third Party Website.
              </p>
              <p>
                You may link to our homepage, provided you do so in a way that is fair and legal and does not 
                damage our reputation or take advantage of it, but you must not establish a link in such a way 
                as to suggest any form of association, approval or endorsement on our part where none exists.
              </p>
            </section>

            {/* Disclaimers and Exclusions of Liability */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">9. DISCLAIMERS AND EXCLUSIONS OF LIABILITY</h2>
              <p className="mb-4">
                Use of this Site, Third Party Websites, links to the Third Party Websites, and any information 
                available via the Site is at your own risk. To the maximum extent permitted by law WHOOSH! Finance 
                disclaims all liability whatsoever, whether arising in contract, tort (including negligence) or 
                otherwise in relation to this Site.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Site Availability</h3>
              <p className="mb-4">
                We do not warrant that your access to the Site will be uninterrupted, unrestricted, timely, 
                secure and error-free, or that the Site and the server are free of computer viruses or other 
                harmful applications. We may suspend, restrict or terminate your access to the Site at any time.
              </p>

              <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
              <p className="mb-4">WHOOSH! Finance will not be liable for:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Economic loss (including, without limitation, loss of revenues, profits, contracts, business or anticipated savings)</li>
                <li>Loss of goodwill or reputation</li>
                <li>Special or indirect or consequential loss</li>
                <li>Any loss of income or revenue, loss of business or loss of profits or contracts, loss of anticipated savings, loss of data, waste of management or office time</li>
              </ul>
              <p className="mt-4">
                If WHOOSH! Finance is liable to you directly or indirectly in relation to this Site, that liability 
                (howsoever arising) shall be limited to £100 (taking into account the fact that we do not charge you for our services).
              </p>

              <h3 className="text-lg font-semibold mb-2">Indemnification</h3>
              <p className="mb-4">
                You agree to indemnify us and keep us indemnified from and against all losses, liabilities, costs 
                (including legal costs) and expenses reasonably suffered or incurred by us arising out of or in 
                connection with any breach by you of any of these Terms and Conditions.
              </p>

              <h3 className="text-lg font-semibold mb-2">Consumer Rights</h3>
              <p>
                Nothing in these Terms and Conditions shall be construed as excluding or limiting the liability 
                of WHOOSH! Finance for death or personal injury caused by its negligence or for any other liability 
                which cannot be excluded by English law. Where you deal as a consumer, nothing in the above exclusions 
                affects your statutory rights.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">10. PRIVACY POLICY</h2>
              <p>
                If you provide information to WHOOSH! Finance on or through this Site, WHOOSH! Finance will use it 
                in accordance with the terms of its Privacy Policy. That Privacy Policy forms part of these Terms 
                and Conditions and by using this Site you acknowledge and agree that you accept the terms of that Privacy Policy.
              </p>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">11. COMPLAINTS</h2>
              <p className="mb-4">
                If you have any concern or complaint about our Site or the Service, please contact us using the 
                details provided below. We are committed to resolving any issues you may have.
              </p>
              <p>
                If you are not satisfied with our response, you have the right to refer your complaint to the 
                Financial Ombudsman Service. You can find more information about this at 
                <a href="http://financial-ombudsman.org.uk" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  financial-ombudsman.org.uk
                </a>.
              </p>
            </section>

            {/* Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">12. LAW AND JURISDICTION</h2>
              <p className="mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with English law and 
                you agree to submit to the exclusive jurisdiction of the English Courts.
              </p>
              <p>
                We do not represent that the Site, the material on the Site or the Service is appropriate or 
                available for use outside the United Kingdom. If you choose to access the Site from any location 
                outside the United Kingdom, you do so at your own risk and it is your responsibility to ensure 
                compliance with all foreign and local laws and requirements.
              </p>
            </section>

            {/* General Terms */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">13. GENERAL</h2>
              <p className="mb-4">
                These Terms and Conditions (as amended from time to time) constitute the entire agreement between 
                you and WHOOSH! Finance concerning your use of this Site and supersede any previous arrangement, 
                agreement, undertaking or proposal, written or oral between you and WHOOSH! Finance in relation to such matters.
              </p>
              <p className="mb-4">
                WHOOSH! Finance reserves the right to update these Terms and Conditions from time to time. If it does so, 
                the updated version will be effective as soon as it is uploaded on to this Site and your continued 
                use of the Site will constitute your acceptance of such updated Terms and Conditions.
              </p>
              <p className="mb-4">
                You should check the Terms and Conditions periodically to ensure that you are aware of and complying 
                with the current version.
              </p>
              <p>
                If any provision(s) of these Terms and Conditions is held by a court of competent jurisdiction to 
                be invalid or unenforceable, then such provision(s) shall be construed, as nearly as possible, to 
                reflect the intentions of the parties and all other provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">14. CONTACT US</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Whoosh Finance Limited</strong></p>
                <p>Email: <a href="mailto:hello@whooshcarfinance.co.uk" className="text-primary hover:underline">hello@whooshcarfinance.co.uk</a></p>
                <p>Phone: <a href="tel:08001234567" className="text-primary hover:underline">0800 123 4567</a></p>
                <p>Address: Unit 2, 30 Broughton Street, Cheetham Hill, Manchester, M8 8NN, United Kingdom</p>
                <p>Company Number: 15772578</p>
                <p>FCA Registration Number: 1020313</p>
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

export default TermsConditions;