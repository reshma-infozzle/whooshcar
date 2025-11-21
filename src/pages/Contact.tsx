import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for getting in touch! We'll WHOOSH back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      department: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      detail: '0800 123 WHOOSH (0800 123 9466)',
      description: 'Speak to our car finance experts',
      action: 'Call Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'hello@whooshcarfinance.co.uk',
      description: 'Email us your questions anytime',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: AlertCircle,
      title: 'Complaints',
      detail: 'complaints@whooshcarfinance.co.uk',
      description: 'For complaints and feedback',
      action: 'Contact Complaints',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      detail: 'Available Mon-Sat 9AM-6PM',
      description: 'Get instant help from our team',
      action: 'Start Chat',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '9:00 – 18:00' },
    { day: 'Tuesday', hours: '9:00 – 18:00' },
    { day: 'Wednesday', hours: '9:00 – 18:00' },
    { day: 'Thursday', hours: '9:00 – 18:00' },
    { day: 'Friday', hours: '9:00 – 18:00' },
    { day: 'Saturday', hours: '9:00 – 18:00' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const departments = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'sales', label: 'New Applications' },
    { value: 'existing', label: 'Existing Customers' },
    { value: 'complaints', label: 'Complaints' },
    { value: 'technical', label: 'Technical Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                BAM! Get in <span className="text-primary">Touch!</span> 💥
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you have questions about car loans, need assistance with your application, 
                or want to discuss your options, our team of car finance experts is ready to help you 
                <span className="font-comic font-bold text-primary"> WHOOSH </span> 
                into your dream car every step of the way!
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">

          <div className="max-w-7xl mx-auto">
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="comic-panel bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-comic">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col justify-between p-4 min-h-[140px]">
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    <p className="font-semibold text-foreground text-sm leading-tight break-words">{method.detail}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{method.description}</p>
                  </div>
                  <Button className="comic-button w-full text-xs mt-auto" size="sm">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="w-full">
              <Card className="comic-panel bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-comic flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you faster than you can say WHOOSH!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Department</label>
                        <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.value} value={dept.value}>
                                {dept.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What's your question about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="comic-button w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="w-full space-y-6">
              {/* Opening Hours */}
              <Card className="comic-panel bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-comic flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-muted-foreground' : 'text-primary font-medium'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="comic-panel bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg font-comic text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Emergency Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 mb-3">
                    For urgent payment issues or account emergencies outside business hours:
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Line: 0800 HELP NOW
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="mt-16 text-center">
            <Card className="comic-panel bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-comic font-bold mb-4">
                  ⚡ Lightning-Fast Response Promise!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're committed to responding to all enquiries within 24 hours during business days. 
                  For urgent matters, our phone support is your fastest route to getting help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/apply">
                    <Button className="comic-button" size="lg">
                      Apply for Finance Now
                    </Button>
                  </Link>
                  <Link to="/calculator">
                    <Button variant="outline" size="lg">
                      Calculate Monthly Payments
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;