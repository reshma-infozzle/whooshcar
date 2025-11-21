import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Car, Zap, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">ZAP!</span> Got Questions? We've Got <span className="text-secondary">ANSWERS!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our superhero FAQ squad has assembled the most common questions! 
                Find instant answers to all your car finance mysteries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Browse FAQs
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
            <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                <HelpCircle className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black">
                  <span className="text-secondary">BAM!</span> Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                <AccordionItem value="item-1" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-base sm:text-lg font-comic text-black px-3 sm:px-4 hover:text-primary">
                    ⚡ What are the basic eligibility criteria for car finance?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base">
                    <span className="text-primary font-comic">ZOOM!</span> To join our car finance adventure, you need to be: 18+ years old, 
                    a UK resident with 3 years of address history, have at least 12 months employment history, and hold a full UK driving licence. 
                    Don't worry if you have a European or International licence - we've got options for heroes from all backgrounds!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🚗 How quickly can I get approved for car finance?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">WHOOSH!</span> Our lightning-fast approval process can get you a decision in principle within minutes! 
                    For straightforward applications, you could even drive away in your new car the same day. Our super-speedy team works around the clock to get you behind the wheel ASAP!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    💰 Do I need a deposit for car finance?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">KAPOW!</span> No deposit? No problem! We offer fantastic no-deposit options to get you zooming off without breaking the bank. 
                    Sometimes a small deposit might help secure better rates, but we'll always find options that work for YOUR budget!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    💳 Can I get car finance with bad credit?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">BAM!</span> Bad credit won't stop the WHOOSH! We work with specialist lenders who focus on helping people with all types of credit histories. 
                    These loans can even help boost your credit score for future applications. We believe everyone deserves a chance to get back on the road!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    📋 What types of car finance do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">ZOOM!</span> We've got all the finance superpowers you need! Hire Purchase (HP) - where you own the car at the end, 
                    Personal Contract Purchase (PCP) - with flexible end options, Conditional Sale, and Personal Loans. 
                    Our finance heroes will explain each option and help you pick the perfect one for your adventure!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🎯 Will applying affect my credit score?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">WHOOSH!</span> to the rescue! Our initial quote won't leave a mark on your credit score - we use soft searches that only you can see. 
                    Hard searches only happen when you decide to proceed with an offer. We protect your credit like a superhero shields the city!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    💼 Is there a minimum income requirement?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">POW!</span> Most lenders look for a monthly income of £1,000-£1,500 after tax to ensure you can comfortably afford the repayments. 
                    But don't worry if you're close - our finance wizards work with various lenders who have different criteria!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    👔 Can I get finance if I'm self-employed?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">WHOOSH!</span> Absolutely! Self-employed heroes are welcome here! We'll just need some extra documentation like bank statements, 
                    tax returns, or accountant's certificates to prove your super-earning powers. Our team knows exactly what lenders need!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🏪 Can I choose any car from any dealer?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">POW!</span> Freedom to choose is our superpower! You can pick your dream car from any reputable dealer we approve. 
                    We'll check they meet our hero-level standards to make sure you're getting a quality ride worthy of your adventures!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🔄 Can I part-exchange my current vehicle?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">KAPOW!</span> Yes indeed! We'll help negotiate the best part-exchange value for your current car with the dealer. 
                    Simply drop off your old ride and WHOOSH away in your new one - it's like a superhero car swap!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🆚 Should I buy new or used?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">ZOOM!</span> Both have their superpowers! New cars come with warranties and latest features, 
                    while used cars offer better value and lower monthly payments. Our advisors will help you weigh up depreciation, 
                    running costs, and your budget to find your perfect match!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    📄 What proof of income do I need?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">BAM!</span> We'll need recent payslips (usually last 3 months) and bank statements to verify your income superpowers! 
                    Self-employed heroes might need tax returns or accountant letters. Don't worry - we'll guide you through exactly what's needed!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    👥 Can I apply with someone else (joint application)?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">WHOOSH!</span> Teamwork makes the dream work! Joint applications can boost your chances, 
                    especially if one applicant has stronger credit or higher income. Two financial superpowers are often better than one!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    ⚖️ What if I have a CCJ or have been bankrupt?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">POW!</span> Even superheroes face challenges! We work with specialist lenders who understand that financial difficulties happen. 
                    Whether you have CCJs, defaults, or past bankruptcy, we'll fight to find you options. Your past doesn't define your future road adventures!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🎓 Can students get car finance?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">ZOOM!</span> Student life shouldn't stop you from getting wheels! While it's more challenging due to income requirements, 
                    we have options for students with part-time jobs, parental guarantors, or those about to graduate. Every superhero starts somewhere!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🆕 What if I've just started a new job?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">KAPOW!</span> New job, new opportunities! While some lenders prefer longer employment history, 
                    we work with others who understand career moves. We might need additional documentation, but your new job could be your ticket to new wheels!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17" className="comic-panel bg-primary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    💵 How do I know what I can afford?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-primary font-comic">WHOOSH!</span> Great question, financial superhero! Consider your monthly income, existing expenses, 
                    and leave room for car running costs (insurance, fuel, maintenance). A good rule is keeping total transport costs under 15-20% of your monthly income. 
                    Our calculators help you find your sweet spot!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18" className="comic-panel bg-secondary/10 border-2 border-black">
                  <AccordionTrigger className="text-left text-lg font-comic text-black px-4 hover:text-primary">
                    🏆 Do you offer the best rates first time?
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 font-body px-4 pb-4">
                    <span className="text-secondary font-comic">BAM!</span> Absolutely! Our honest, no-nonsense approach means we'll offer you the best rate we can secure from day one. 
                    We don't play games or save better deals for later - your best quote comes first, every time!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="comic-panel bg-white/95 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-black shadow-comic-lg text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-comic text-black mb-4 sm:mb-6 px-2">
                <span className="text-primary">STILL</span> Got Questions? <span className="text-secondary">We're Here!</span>
              </h2>
              <p className="text-lg sm:text-xl text-black/80 font-body mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Our superhero support team is ready to swoop in and save the day! 
                No question is too small, no problem too big!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <Button size="lg" variant="secondary" className="font-bold text-base sm:text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Heroes: 0800-WHOOSH
                </Button>
                <Button size="lg" className="font-bold text-base sm:text-lg shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto">
                  <Zap className="w-5 h-5 mr-2" />
                  Chat Now!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="comic-panel bg-primary/20 p-8 border-4 border-black shadow-comic-lg">
              <h2 className="text-3xl md:text-5xl font-comic text-black mb-6">
                Ready for Your <span className="text-primary">SUPERHERO</span> Car Finance Experience?
              </h2>
              <p className="text-xl text-black/80 font-body mb-8 max-w-2xl mx-auto">
                Join the thousands of heroes who've already experienced the WHOOSH difference! 
                Your dream car adventure starts here!
              </p>
              <Button size="lg" className="font-bold text-lg animate-pulse shadow-[4px_4px_0px_rgb(0_0_0_/_1)] w-full sm:w-auto mx-auto">
                <Car className="w-5 h-5 mr-2" />
                WHOOSH ME A QUOTE NOW!
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;