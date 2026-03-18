import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MessageCircle, Phone, ArrowRight, ChevronDown } from "lucide-react";

const MarketingPreferences = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    email: false,
    whatsapp: false,
    sms: false,
  });
  const [expandedChannel, setExpandedChannel] = useState<string | null>(null);

  const handleToggle = (channel: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
  };

  const handleSubmit = () => {
    // Here you would typically save preferences to backend
    console.log("Marketing preferences:", preferences);
    navigate("/application-complete");
  };

  const handleSkip = () => {
    navigate("/application-complete");
  };

  const channels = [
    {
      id: "email" as const,
      icon: Mail,
      title: "Email Updates",
      description: "Get the latest offers, tips and finance news delivered to your inbox.",
    },
    {
      id: "whatsapp" as const,
      icon: MessageCircle,
      title: "WhatsApp Messages",
      description: "Receive instant updates and quick responses via WhatsApp.",
    },
    {
      id: "sms" as const,
      icon: Phone,
      title: "SMS Notifications",
      description: "Get important alerts and exclusive deals sent to your phone.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Stay Connected - Whoosh Car Finance</title>
        <meta name="description" content="Choose how you'd like to hear from us about exclusive offers and updates." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <Header />
        
        <main className="pt-24 md:pt-32 pb-6 md:pb-16">
          <div className="container max-w-2xl mx-auto px-3 md:px-4">
            <div className="comic-panel bg-white/95 p-6 md:p-10 lg:p-12 border-4 border-black shadow-comic-lg">
              <div className="text-center mb-8">
                <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-4">
                  <span className="text-primary">BOOM!</span> Application Submitted!
                </h1>
                <p className="font-body text-sm md:text-lg text-black/80">
                  Want to stay in the loop? Choose how you'd like to hear from us:
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const isSelected = preferences[channel.id];
                  
                  return (
                    <Card
                      key={channel.id}
                      onClick={() => handleToggle(channel.id)}
                      className={`p-3 cursor-pointer transition-all hover:scale-[1.01] border-2 border-black shadow-comic ${
                        isSelected
                          ? "bg-primary/10 border-primary"
                          : "bg-white hover:bg-accent/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${isSelected ? 'bg-primary text-white' : 'bg-muted'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <h3 className="font-comic text-base text-black">
                              {channel.title}
                            </h3>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedChannel(expandedChannel === channel.id ? null : channel.id);
                              }}
                              className="text-black/50 hover:text-black transition-colors"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform ${expandedChannel === channel.id ? 'rotate-180' : ''}`} />
                            </button>
                          </div>
                          <p className={`font-body text-xs text-black/70 transition-all ${expandedChannel === channel.id ? '' : 'truncate'}`}>
                            {channel.description}
                          </p>
                        </div>
                        <div onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleToggle(channel.id)}
                            className="h-5 w-5"
                          />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full font-comic text-lg py-6 border-2 border-black shadow-comic"
                >
                  {Object.values(preferences).some(v => v) ? "Save Preferences" : "Continue Without"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <button
                  onClick={handleSkip}
                  className="w-full text-center font-body text-sm text-black/60 hover:text-black/80 py-2"
                >
                  Skip for now
                </button>
              </div>

              <p className="font-body text-xs text-black/50 text-center mt-6">
                You can change your preferences at any time. We respect your privacy and will never spam you.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MarketingPreferences;
