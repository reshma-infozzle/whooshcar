import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, FileText, Users } from "lucide-react";

const Complaints = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-comic font-bold text-primary mb-6">Complaints Procedure</h1>
          
          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h2 className="text-xl font-comic font-bold text-primary mb-3">Our Commitment to You</h2>
                <p className="text-foreground">
                  Our aim is always to provide an exceptionally high level of service to all our customers. 
                  Where customers are unsatisfied, it's important to us that this is dealt with objectively, 
                  fairly, and as quickly as we can. Sometimes things can go wrong and we would like to make 
                  sure we put things right where we can.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                How to Make a Complaint
              </h2>
              <p className="mb-6">
                If you have a complaint about any aspect of our service, then we would like to hear from you. 
                Please use any of the following methods to contact our Complaints Officer:
              </p>
              
              <div className="grid md:grid-cols-3 gap-3 md:gap-6 mb-6">
                <div className="bg-muted p-4 md:p-6 rounded-lg text-center">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">By Email</h3>
                  <a href="mailto:complaints@whooshcarfinance.co.uk" className="text-primary hover:underline text-xs md:text-sm break-all">
                    complaints@whooshcarfinance.co.uk
                  </a>
                </div>
                
                <div className="bg-muted p-4 md:p-6 rounded-lg text-center">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">By Phone</h3>
                  <a href="tel:08001234567" className="text-primary hover:underline text-sm md:text-base">
                    0800 123 4567
                  </a>
                </div>
                
                <div className="bg-muted p-4 md:p-6 rounded-lg text-center">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">By Post</h3>
                  <div className="text-xs md:text-sm">
                    <p>Complaints Department</p>
                    <p>WHOOSH! Finance Limited</p>
                    <p>Unit 2, 30 Broughton Street</p>
                    <p>Cheetham Hill, Manchester</p>
                    <p>M8 8NN, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Please include as much detail as possible</strong> when making your complaint so we can 
                  investigate as quickly as possible. If we are missing any information, we will be in touch.
                </p>
              </div>
            </section>

            {/* Complaints Process */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Our Complaints Process
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-3">On Receipt of a Complaint We Will:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <strong>Acknowledge promptly:</strong> We will acknowledge your complaint within 3 working days of receipt
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <strong>Seek clarification:</strong> Make contact to seek clarification on any points where necessary
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <strong>Fully investigate:</strong> Thoroughly investigate the complaint with due regard to FCA guidelines
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <div>
                      <strong>Discuss findings:</strong> Discuss with you our findings and proposed response
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Timelines */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Resolution Timelines
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Quick Resolution (Within 3 Business Days)</h3>
                  <p className="text-green-700 mb-3">
                    Complaints that can be settled to your satisfaction within 3 business days will follow our 
                    informal complaints process.
                  </p>
                  <p className="text-sm text-green-600">
                    If resolved quickly, we will send you a 'Summary Resolution Communication' confirming the 
                    resolution and your right to escalate if you become dissatisfied later.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Formal Process (Up to 8 Weeks)</h3>
                  <p className="text-blue-700 mb-3">
                    For more complex complaints that cannot be resolved within 3 business days, we follow the 
                    formal FCA complaints procedure.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Initial response letter within 5 days</li>
                    <li>• Final response letter within 8 weeks</li>
                    <li>• Clear decision and reasons provided</li>
                    <li>• Any redress paid promptly and in full</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third Party Complaints */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Third Party Issues</h2>
              <p className="mb-4">
                We understand that sometimes complaints may relate to third parties such as dealers, sales executives, 
                or the quality of goods. We will need to establish whether your complaint relates to:
              </p>
              <ul className="list-disc ml-8 space-y-2 mb-4">
                <li>The advice given by our team</li>
                <li>Our service or performance</li>
                <li>Third-party sales executive service</li>
                <li>The quality of goods from dealers</li>
              </ul>
              <p>
                If the complaint is about another party, we will refer details of the complaint to the third party 
                and confirm this course of action to you in writing. This will not delay our own investigation where appropriate.
              </p>
            </section>

            {/* Financial Ombudsman Service */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Financial Ombudsman Service (FOS)
              </h2>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="mb-4">
                  If you are not satisfied with our final response, you may be eligible to refer your complaint 
                  to the Financial Ombudsman Service. <strong>You must refer the matter to FOS within six months 
                  of the date of our final response letter</strong> or the right to use this service is lost.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contact Details:</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Address:</strong></p>
                      <p className="ml-4">
                        Financial Ombudsman Service<br />
                        Exchange Tower<br />
                        London E14 9SR
                      </p>
                      <p><strong>Phone:</strong></p>
                      <p className="ml-4">
                        0800 023 4567 (free from landlines)<br />
                        0300 123 9123 (mobile calls)
                      </p>
                      <p><strong>Email:</strong> 
                        <a href="mailto:complaint.info@financial-ombudsman.org.uk" className="text-primary hover:underline ml-1">
                          complaint.info@financial-ombudsman.org.uk
                        </a>
                      </p>
                      <p><strong>Website:</strong> 
                        <a href="https://www.financial-ombudsman.org.uk/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                          www.financial-ombudsman.org.uk
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Eligible Complainants:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Consumers</li>
                      <li>• Microenterprises</li>
                      <li>• Charities (annual income under £6.5m)</li>
                      <li>• Trustees of trusts (assets under £5m)</li>
                      <li>• Small businesses (if conduct after 1st April 2019)</li>
                      <li>• Guarantors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Commitment */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Our Commitment</h2>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <p className="mb-4">
                  We are committed to treating all customers fairly and resolving complaints promptly. 
                  Our Complaints Officer is responsible for ensuring that we thoroughly investigate any complaints 
                  in accordance with Financial Conduct Authority guidelines.
                </p>
                <p className="mb-4">
                  We will co-operate fully, at all times, with the Financial Ombudsman Service in resolving 
                  any complaints made against us and agree to be bound by any awards made by FOS.
                </p>
                <p>
                  Any complaint, verbal or written, will be referred to our Complaints Officer at the earliest 
                  opportunity or to a member of senior management if the Complaints Officer is unavailable.
                </p>
              </div>
            </section>

            {/* Closing */}
            <section>
              <h2 className="text-2xl font-comic font-bold text-primary mb-4">Closing a Complaint</h2>
              <p className="mb-4">Your complaint will be considered closed when:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>We receive confirmation from you that you are satisfied with our findings and resolution</li>
                <li>No confirmation has been received from you within four weeks of our final response letter</li>
              </ul>
            </section>

            {/* Additional Information */}
            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
              <p className="text-sm text-muted-foreground">
                This complaints procedure is in accordance with the Financial Conduct Authority's complaints handling 
                rules and applies to complaints made by or on behalf of eligible complainants relating to regulated 
                activity involving an allegation that the customer has suffered, or may suffer, financial loss, 
                material distress or material inconvenience.
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

export default Complaints;