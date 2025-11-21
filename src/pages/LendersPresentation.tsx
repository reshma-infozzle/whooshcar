import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PartnerApplicationDialog } from "@/components/PartnerApplicationDialog";
import { generateBusinessPlanPDF } from "@/lib/pdfGenerator";
import { useToast } from "@/hooks/use-toast";
import whooshHeroPose from "@/assets/mascots/whoosh-hero-pose.png";
import whooshThinking from "@/assets/mascots/whoosh-thinking.png";
import whooshThumbsUp from "@/assets/mascots/whoosh-thumbs-up.png";
import whooshWaving from "@/assets/mascots/whoosh-waving.png";
import whooshCalculator from "@/assets/mascots/whoosh-calculator.png";
import whooshCarThinking from "@/assets/mascots/whoosh-car-thinking.png";
import whooshDavidChen from "@/assets/mascots/whoosh-david-chen.png";
import whooshMarcusJohnson from "@/assets/mascots/whoosh-marcus-johnson.png";
import whooshLauraCompliance from "@/assets/mascots/whoosh-laura-compliance.png";
import whooshTeddy from "@/assets/mascots/whoosh-teddy.png";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  Award, 
  Handshake, 
  BarChart3, 
  CheckCircle, 
  Phone, 
  Mail,
  Building2,
  Clock,
  Target,
  DollarSign,
  FileCheck,
  Globe,
  Zap,
  Heart,
  Lightbulb,
  PieChart,
  LineChart,
  AlertTriangle,
  Rocket
} from "lucide-react";

export default function LendersPresentation() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generateBusinessPlanPDF();
      toast({
        title: "PDF Downloaded",
        description: "Your business plan has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const keyStats = [
    { label: "Year 1 Revenue Target", value: "£185K", icon: TrendingUp },
    { label: "Year 3 Revenue Target", value: "£700K", icon: BarChart3 },
    { label: "Target Markets", value: "3 Streams", icon: Target },
    { label: "Profit Margin Y3", value: "16%", icon: DollarSign },
    { label: "UK Coverage", value: "Nationwide", icon: MapPin },
    { label: "FCA Authorised", value: "Yes", icon: Shield },
  ];

  const financialProjections = [
    { 
      year: "Year 1", 
      revenue: "£185,000",
      profit: "£10,313",
      margin: "5.6%",
      deals: "~370 deals"
    },
    { 
      year: "Year 2", 
      revenue: "£425,000",
      profit: "£56,250",
      margin: "13.2%",
      deals: "~850 deals"
    },
    { 
      year: "Year 3", 
      revenue: "£700,000",
      profit: "£112,500",
      margin: "16.1%",
      deals: "~1,400 deals"
    },
  ];

  const targetAudience = [
    {
      title: "Established Professionals (27–54)",
      description: "Customers with stable incomes and solid credit profiles who are upgrading or refinancing their current vehicle and seeking competitive, straightforward finance options.",
      icon: Users
    },
    {
      title: "Lifestyle & Leisure Buyers",
      description: "Individuals and families investing in campervans, caravans, or motorhomes — looking to expand their lifestyle opportunities through flexible, reliable finance.",
      icon: Heart
    },
    {
      title: "Business Owners & Self-Employed Drivers",
      description: "Professionals and small-business owners requiring commercial or dual-purpose vehicles, prioritising efficiency, speed, and personal service.",
      icon: Building2
    },
    {
      title: "Family Upgraders",
      description: "Families improving or expanding their current vehicle for comfort, reliability, or safety, valuing clarity, trust, and a personal approach to finance.",
      icon: TrendingUp
    }
  ];

  const barrierReduction = [
    {
      title: "Simplified Onboarding",
      description: "Quick 48-hour integration process with minimal paperwork and clear documentation requirements",
      icon: Zap
    },
    {
      title: "No Exclusivity Required",
      description: "Work alongside your existing broker relationships without exclusivity constraints",
      icon: Handshake
    },
    {
      title: "Flexible Commission Structure",
      description: "Choose between fixed-fee or percentage-based commission to suit your business model",
      icon: DollarSign
    },
    {
      title: "Dedicated Support Team",
      description: "Personal relationship manager assigned from day one to ensure smooth operations",
      icon: Users
    },
    {
      title: "Low Minimum Volume",
      description: "No aggressive volume commitments - grow at your own pace with no pressure",
      icon: Target
    },
    {
      title: "Full Technology Support",
      description: "API integration assistance and technical support included at no extra cost",
      icon: Globe
    }
  ];

  const usps = [
    {
      title: "Proven Industry Experience",
      description: "With over a decade of hands-on experience across automotive finance, dealer operations, and compliance, our leadership team ensures a smooth integration process, accurate submissions, and efficient communication from day one.",
      icon: Award
    },
    {
      title: "Quality-Driven Lead Sources", 
      description: "We combine multiple lead channels — from trusted dealer relationships to direct-to-consumer digital campaigns — ensuring lenders receive well-qualified, motivated customers that align with their target credit profiles.",
      icon: Users
    },
    {
      title: "Speed & Efficiency",
      description: "Our digital infrastructure and experienced operations team keep deals moving quickly and accurately. We coordinate closely with customers and dealers to provide all required information upfront, enabling lenders to make fast, informed decisions.",
      icon: Clock
    },
    {
      title: "Expansion into the Leisure Market",
      description: "WHOOSH is strategically positioned within the expanding leisure-vehicle space — including campervans, motorhomes, and caravans. This growing sector offers lenders access to high-quality customers investing in lifestyle and experience.",
      icon: Globe
    },
    {
      title: "Transparent, Ethical Partnership",
      description: "We pride ourselves on honesty, integrity, and clear communication. The WHOOSH directors are hands-on and relationship-led, committed to building long-term partnerships based on trust, reliability, and shared growth — not short-term gain.",
      icon: Handshake
    },
    {
      title: "Scalable Growth with Compliance at the Core",
      description: "Every aspect of WHOOSH is built on a foundation of FCA compliance, robust processes, and data integrity. Our systems, staff training, and quality controls give lenders the assurance that every deal meets the highest industry standards.",
      icon: Shield
    }
  ];

  const services = [
    { name: "Hire Purchase (HP)", available: true },
    { name: "Personal Contract Purchase (PCP)", available: true },
    { name: "Personal Loans", available: true },
    { name: "Business Contract Hire", available: true },
    { name: "Asset Finance", available: true }
  ];

  const partnerBenefits = [
    {
      title: "Quality Lead Generation",
      description: "Pre-qualified customers with verified income and employment details",
      icon: Users
    },
    {
      title: "Rapid Turnaround",
      description: "Aim to process applications quicker than industry standards with streamlined workflows",
      icon: Clock
    },
    {
      title: "Transparent Commission",
      description: "Clear, competitive commission structure with prompt payment terms",
      icon: DollarSign
    },
    {
      title: "Risk Mitigation",
      description: "Comprehensive affordability assessments and fraud prevention measures",
      icon: Shield
    },
    {
      title: "Technology Integration",
      description: "API connectivity and automated data sharing for seamless processing",
      icon: Building2
    },
    {
      title: "Ongoing Support",
      description: "Dedicated relationship management and customer service teams",
      icon: Handshake
    }
  ];

  const teamMembers = [
    {
      name: "Alan J Rowe (AJ)",
      role: "CEO & Partner",
      description: "With 10+ years across every corner of motor finance - from sales floors to operations, dealer relationships to finance management - AJ has seen it all and knows what works (and what doesn't!). Now he's on a mission to shake things up and make car finance actually enjoyable.",
      image: whooshMarcusJohnson
    },
    {
      name: "Sahil Puri",
      role: "Chairperson & Growth Advisor",
      description: "A serial entrepreneur who's built multiple successful businesses across tech, marketing, finance, compliance, and property. But what really gets him excited? Consumer finance and making a genuine positive impact on people's lives. Sahil brings the vision, expertise, and drive to make things work better - because that's what WHOOSH is all about!",
      image: whooshDavidChen
    },
    {
      name: "Laura (LD Compliance)",
      role: "Regulatory & FCA Compliance Officer",
      description: "The guardian of good practice! Laura ensures WHOOSH stays squeaky clean and fully FCA compliant. From keeping up with ever-changing regulations to making sure every 'i' is dotted and 't' is crossed, she's the reason lenders and customers can trust we're doing things by the book - but in a way that's actually helpful, not just bureaucratic.",
      image: whooshLauraCompliance
    },
    {
      name: "Teddy",
      role: "Chief of Mischief & Loyalty",
      description: "Every great team needs a four-legged friend! Teddy is the office's unofficial morale officer and professional treat inspector. When he's not ensuring the team takes regular walk breaks or testing the structural integrity of squeaky toys, he's busy reminding everyone that loyalty, enthusiasm, and a wagging tail can solve almost any problem. He might not understand APR calculations, but he definitely knows how to make every day at WHOOSH a little brighter!",
      image: whooshTeddy
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Plan & Lender Partnership | WHOOSH Finance | FCA Authorised Broker</title>
        <meta 
          name="description" 
          content="Comprehensive business plan for WHOOSH Finance. £700K Year 3 revenue target, nationwide coverage, innovative digital-first approach. Join our growing network of lender partners." 
        />
        <meta name="keywords" content="business plan, lender partnerships, motor finance broker, FCA authorised, financial projections, UK finance market" />
        <link rel="canonical" href="/lenders" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16 pt-28 md:pt-32">
            <div className="comic-panel p-8 max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                <Building2 className="w-5 h-5 mr-2" />
                Business Plan & Partnership Proposal
              </Badge>
              <h1 className="text-4xl md:text-6xl font-comic text-primary mb-6">
                WHOOSH Finance Business Plan
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                A clear overview of our vision, strategy, and partnership opportunities for lenders ready to align with one of the UK's most forward-thinking motor-finance broker networks.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Rocket className="w-6 h-6 text-primary mb-2" />
                  <div className="font-bold">Growth-Focused</div>
                  <div className="text-sm text-muted-foreground">Our 3-year strategic roadmap is built on solid foundations, realistic scaling targets, and a deep understanding of the UK motor-finance market — backed by over 10 years of hands-on automotive finance experience.</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <div className="font-bold">FCA Authorised</div>
                  <div className="text-sm text-muted-foreground">Fully authorised and regulated by the Financial Conduct Authority, ensuring complete compliance and consumer protection.</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Handshake className="w-6 h-6 text-primary mb-2" />
                  <div className="font-bold">Partnership-Led Approach</div>
                  <div className="text-sm text-muted-foreground">We value every relationship and view our lenders as strategic partners with accessible entry and seamless onboarding.</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PartnerApplicationDialog>
                  <Button size="lg" className="text-lg px-8">
                    <Handshake className="w-5 h-5 mr-2" />
                    Become a Partner
                  </Button>
                </PartnerApplicationDialog>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                >
                  <FileCheck className="w-5 h-5 mr-2" />
                  {isGeneratingPDF ? "Generating PDF..." : "Download Full Plan"}
                </Button>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="mb-20">
            <div className="comic-panel p-8 md:p-12 max-w-5xl mx-auto">
              <h2 className="text-4xl font-comic text-center mb-8 text-foreground">
                Executive Summary
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-xl leading-relaxed font-medium text-foreground">
                  WHOOSH Finance is a digitally-native, FCA-authorised motor-finance broker with a clear mission: to make car finance accessible, transparent, and stress-free for customers often overlooked by traditional brokers.
                </p>
                <p className="text-lg leading-relaxed">
                  Built on over a decade of automotive-finance experience, our model focuses on strong dealer relationships, specialist market expertise, and a customer-first digital platform that brings lenders closer to both consumers and the UK's growing leisure-vehicle sector.
                </p>
                <p className="leading-relaxed">
                  Our model is built around dealer-led relationships, strengthening existing partnerships and driving a steady flow of organic, high-quality leads through trusted dealer networks. Building on this foundation, we are developing a dedicated team for the leisure market, specialising in campervans, motorhomes, and caravans — a sector experiencing consistent growth yet limited broker representation. In parallel, our direct-to-consumer division focuses on serving well-qualified customers through compliant digital marketing and a consultative, service-driven approach, ensuring every lead we deliver to lenders meets both quality and compliance expectations.
                </p>
                <p className="leading-relaxed">
                  We project reaching <strong>£700,000 in annual revenue by Year 3</strong>, maintaining a healthy profit margin of 16%.
                </p>
                <p className="leading-relaxed">
                  What sets WHOOSH apart is our ability to bridge the gap between customers, dealers, and lenders. We simplify processes, enhance communication, and prioritise trust and speed, making it easier for lenders to integrate, easier for dealers to sell, and easier for customers to drive away happy.
                </p>
              </div>
            </div>
          </section>

          {/* Company Overview & Team Combined */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-comic text-center mb-12 text-foreground">Company Overview</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
                <div className="comic-panel p-8">
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      WHOOSH Finance is a Manchester-born, FCA-authorised motor-finance broker reshaping the UK car-finance landscape through a digital-first, customer-focused, and partnership-led approach.
                    </p>
                    <p className="leading-relaxed">
                      Although the WHOOSH brand is new, it's built on over 10 years of proven experience within the automotive and motor-finance sectors. That foundation ensures every process, from proposal to payout, is designed for speed, accuracy, and compliance — giving both customers and lenders confidence in every transaction.
                    </p>
                    <p className="leading-relaxed">
                      Our vision is to become the UK's most trusted and respected motor-finance broker by 2027 — known for building genuine, long-term relationships that prioritise people over volume.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <Badge>FCA Authorised (1020313)</Badge>
                      <Badge>ICO Registered (ZB989798)</Badge>
                      <Badge>Born in Manchester</Badge>
                      <Badge>Digital First</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="comic-panel p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Regulatory Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">FCA Number:</span>
                      <span className="font-mono">1020313</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company No:</span>
                      <span className="font-mono">15772578</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ICO Reg:</span>
                      <span className="font-mono">ZB989798</span>
                    </div>
                    <Separator />
                    <div className="text-center text-xs text-muted-foreground mt-4">
                      Fully compliant with all FCA regulations and Consumer Duty requirements
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3 text-center">Location</h4>
                    <div className="text-sm text-center text-muted-foreground">
                      <div>Unit 2, 30 Broughton Street</div>
                      <div>Cheetham Hill, Manchester</div>
                      <div>M8 8NN, United Kingdom</div>
                    </div>
                  </div>
              </div>
            </div>

              {/* Financial Stability Section */}
              <div className="mt-12">
                <div className="comic-panel p-8">
                  <div className="flex items-start gap-6">
                    <div className="hidden md:block flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-comic mb-4 text-foreground">
                        Financial Stability & Long-Term Commitment
                      </h3>
                      <div className="space-y-4 text-muted-foreground">
                        <p className="leading-relaxed">
                          WHOOSH Finance has been founded with a clear long-term vision and strong financial foundations. Thanks to the success of our directors' previous ventures, we begin with a healthy starting balance and no dependency on early deal income.
                        </p>
                        <p className="leading-relaxed">
                          This allows us to focus on building a sustainable, relationship-led business — investing properly in people, systems, compliance, and lender partnerships from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div className="mt-16">
                <h3 className="text-3xl font-comic text-center mb-4 text-foreground">
                  Meet the WHOOSH Team
                </h3>
                <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Behind every great business is a passionate team. Our Whoosh caricatures represent 
                  the friendly, approachable culture we bring to motor finance—making it easy for both 
                  customers and partners to work with us.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="border-2 border-black shadow-comic hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                            <img 
                              src={member.image} 
                              alt={`${member.name} - ${member.role}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mb-20">
            <h2 className="text-4xl font-comic text-center mb-12 text-foreground">
              Key Business Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {keyStats.map((stat, index) => (
                <Card key={index} className="text-center border-2 border-black shadow-comic hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Financial Projections */}
          <section className="mb-20 bg-primary/5 -mx-4 px-4 py-16 md:py-20">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-comic text-center mb-12 text-foreground">
                3-Year Financial Projections
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {financialProjections.map((projection, index) => (
                  <Card key={index} className="border-2 border-black shadow-comic hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="bg-primary/10">
                      <CardTitle className="text-center text-2xl">{projection.year}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-1">{projection.revenue}</div>
                        <div className="text-sm text-muted-foreground">Total Revenue</div>
                      </div>
                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Estimated Deals:</span>
                          <span className="font-semibold">{projection.deals}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Net Profit:</span>
                          <span className="font-semibold text-primary">{projection.profit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Profit Margin:</span>
                          <span className="font-semibold">{projection.margin}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="comic-panel p-6 bg-background max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <LineChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Revenue Growth Strategy</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our projections reflect conservative market penetration across three key revenue streams: Dealer Relationships, Leisure Market (campervans, motorhomes, caravans), and Direct-to-Consumer. This diversified approach ensures sustainable growth while maintaining our focus on quality over volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-comic text-center mb-8 text-foreground">
                Our Target Audience
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
                At WHOOSH Finance, we focus on well-qualified, motivated customers who value a simple, transparent, and efficient finance experience. Our audience represents individuals and families who are actively looking to upgrade their current vehicle, enhance their lifestyle, or explore the leisure-vehicle market rather than those seeking entry-level credit solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {targetAudience.map((audience, index) => (
                  <Card key={index} className="border-2 border-black shadow-comic hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <audience.icon className="w-8 h-8 text-primary flex-shrink-0" />
                        <CardTitle className="text-lg">{audience.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {audience.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="comic-panel p-8 bg-primary/5 max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Why These Audiences Matter</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These customer groups represent a strong, sustainable market with proven creditworthiness and consistent demand. They are financially responsible buyers who seek trusted broker support, not quick-fix credit. By focusing on this segment, WHOOSH delivers lenders high-quality applications, efficient conversions, and long-term customers who are loyal to both broker and lender alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Partner With WHOOSH - Main Value Proposition */}
          <section className="mb-20 bg-gradient-to-b from-background to-primary/5 -mx-4 px-4 py-16 md:py-20">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-comic text-center mb-8 text-foreground">
                Why Partner With WHOOSH?
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
                Partnering with WHOOSH Finance means working with a broker that truly understands the lender's world — balancing compliance, conversion, and customer satisfaction with the speed and clarity modern finance demands.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usps.map((usp, index) => (
                  <Card key={index} className="border-2 border-black shadow-comic hover:shadow-comic-lg transition-all duration-300 hover:-translate-y-2 bg-background">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <usp.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{usp.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {usp.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="mb-16">
            <div className="comic-panel p-8">
              <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
                Finance Products We Broker
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    {service.available ? (
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center text-muted-foreground flex-shrink-0">
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                          <div className="w-2 h-0.5 bg-muted-foreground transform rotate-45"></div>
                          <div className="w-2 h-0.5 bg-muted-foreground transform -rotate-45 absolute"></div>
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="font-medium">{service.name}</span>
                      {!service.available && <span className="block text-xs text-muted-foreground italic">the future?</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
              Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-black shadow-comic">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Risk Management */}
          <section className="mb-16">
            <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
              Risk Management & Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-black shadow-comic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    Key Risks Identified
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold mb-1">Market Competition</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Focus on underserved segments and superior customer experience
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-semibold mb-1">Regulatory Changes</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Dedicated compliance officer and proactive FCA engagement
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-semibold mb-1">Economic Downturn</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Diversified revenue streams and conservative financial planning
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-black shadow-comic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Compliance Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold mb-1">Consumer Duty</div>
                    <div className="text-sm text-muted-foreground">
                      Full adherence to FCA Consumer Duty requirements with regular audits
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-semibold mb-1">Data Protection</div>
                    <div className="text-sm text-muted-foreground">
                      GDPR compliant with ICO registration and annual data protection training
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-semibold mb-1">Fraud Prevention</div>
                    <div className="text-sm text-muted-foreground">
                      Multi-layered verification and automated fraud detection systems
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Market Coverage */}
          <section className="mb-16">
            <div className="comic-panel p-8">
              <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
                Nationwide Market Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Major Markets</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'London', 'Manchester', 'Birmingham', 'Glasgow', 
                      'Leeds', 'Liverpool', 'Sheffield', 'Bristol',
                      'Edinburgh', 'Cardiff', 'Newcastle', 'Nottingham'
                    ].map((city) => (
                      <div key={city} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Strategic Advantages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deep local market knowledge across all UK regions</li>
                    <li>• Understanding of regional employment and economic patterns</li>
                    <li>• Growing relationships with local dealer networks</li>
                    <li>• Tailored solutions for different regional needs</li>
                    <li>• Comprehensive nationwide service capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Growth Strategy */}
          <section className="mb-16">
            <div className="comic-panel p-8">
              <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
                3-Year Growth Strategy
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Year 1: Foundation
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Establish core lender partnerships (target: 5-8 lenders)</li>
                    <li>• Build brand awareness through digital marketing</li>
                    <li>• Refine customer acquisition processes</li>
                    <li>• Achieve FCA compliance excellence</li>
                    <li>• Develop API integrations with key partners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Year 2: Expansion
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Scale lender panel to 12-15 partners</li>
                    <li>• Launch advanced credit-building products</li>
                    <li>• Expand marketing channels and partnerships</li>
                    <li>• Introduce business finance division</li>
                    <li>• Build customer referral programme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-primary" />
                    Year 3: Maturity
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Achieve market leadership in target segments</li>
                    <li>• Launch white-label broker solutions</li>
                    <li>• Expand into EV finance specialisation</li>
                    <li>• Develop proprietary credit scoring tools</li>
                    <li>• Explore strategic acquisition opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="comic-panel p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-comic mb-6 text-foreground">
                Let's Build Something Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're seeking forward-thinking lenders who share our vision of making motor finance 
                more accessible and transparent. Join our network and help us revolutionise the UK 
                car finance market.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="font-bold mb-4">Partnership Enquiries</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>0800 123 4567</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>hello@whooshcarfinance.co.uk</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-4">Head Office</h3>
                  <div className="text-sm text-muted-foreground">
                    <div>Unit 2, 30 Broughton Street</div>
                    <div>Cheetham Hill, Manchester</div>
                    <div>M8 8NN, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PartnerApplicationDialog>
                  <Button size="lg" className="text-lg px-8">
                    <Handshake className="w-5 h-5 mr-2" />
                    Express Interest
                  </Button>
                </PartnerApplicationDialog>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                >
                  <FileCheck className="w-5 h-5 mr-2" />
                  {isGeneratingPDF ? "Generating PDF..." : "Download Full Business Plan"}
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}