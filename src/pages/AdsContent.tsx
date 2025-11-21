import React, { useState } from 'react';
import { Download, Play, Pause, Eye, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Import ad images
import facebookFeedImage from '@/assets/ads/facebook-feed-landscape.jpg';
import instagramSquareImage from '@/assets/ads/instagram-square.jpg';
import instagramStoryImage from '@/assets/ads/instagram-story.jpg';
import tiktokVideoThumb from '@/assets/ads/tiktok-video-thumb.jpg';
import instagramBadCredit from '@/assets/ads/instagram-bad-credit.jpg';
import facebookVanFinance from '@/assets/ads/facebook-van-finance.jpg';
import instagramBusinessStory from '@/assets/ads/instagram-business-story.jpg';
import instagramMotorbike from '@/assets/ads/instagram-motorbike.jpg';
import tiktok2024Car from '@/assets/ads/tiktok-2024-car.jpg';
import instagramQuickDecision from '@/assets/ads/instagram-quick-decision.jpg';

// Import mascot images
import whooshHeroPose from '@/assets/mascots/whoosh-car-hero.png';
import whooshThumbsUp from '@/assets/mascots/whoosh-car-thumbs.png';
import whooshCalculator from '@/assets/mascots/whoosh-car-calculator.png';
import whooshWaving from '@/assets/mascots/whoosh-car-waving.png';
import whooshKeys from '@/assets/mascots/whoosh-car-keys.png';
import whooshThinking from '@/assets/mascots/whoosh-car-thinking.png';

const AdsContent = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const adFormats = {
    facebook: {
      name: 'Facebook',
      formats: [
        {
          name: 'Feed Ad - Landscape',
          size: '1200 x 628px',
          type: 'Image',
          specs: 'JPG/PNG, Max 30MB, Text overlay <20%'
        },
        {
          name: 'Feed Ad - Square',
          size: '1080 x 1080px',
          type: 'Image',
          specs: 'JPG/PNG, Max 30MB, Text overlay <20%'
        },
        {
          name: 'Video Ad',
          size: '1280 x 720px',
          type: 'Video',
          specs: 'MP4/MOV, Max 4GB, 1-240 seconds'
        },
        {
          name: 'Carousel Ad',
          size: '1080 x 1080px',
          type: 'Image Set',
          specs: '2-10 cards, JPG/PNG each'
        }
      ]
    },
    instagram: {
      name: 'Instagram',
      formats: [
        {
          name: 'Feed Post - Square',
          size: '1080 x 1080px',
          type: 'Image',
          specs: 'JPG/PNG, Max 30MB'
        },
        {
          name: 'Feed Post - Portrait',
          size: '1080 x 1350px',
          type: 'Image',
          specs: 'JPG/PNG, Max 30MB'
        },
        {
          name: 'Stories Ad',
          size: '1080 x 1920px',
          type: 'Image/Video',
          specs: 'JPG/PNG/MP4, 15 seconds max'
        },
        {
          name: 'Reels Ad',
          size: '1080 x 1920px',
          type: 'Video',
          specs: 'MP4, 15-90 seconds, 9:16 ratio'
        }
      ]
    },
    tiktok: {
      name: 'TikTok',
      formats: [
        {
          name: 'In-Feed Video',
          size: '1080 x 1920px',
          type: 'Video',
          specs: 'MP4/MOV, 9-60 seconds, 9:16 ratio'
        },
        {
          name: 'TopView Ad',
          size: '1080 x 1920px',
          type: 'Video',
          specs: 'MP4/MOV, 5-60 seconds, Full screen'
        },
        {
          name: 'Spark Ads',
          size: '1080 x 1920px',
          type: 'Video',
          specs: 'MP4/MOV, 5-60 seconds, Native content'
        }
      ]
    }
  };

  const adExamples = [
    {
      id: 'fb-feed-1',
      platform: 'Facebook',
      format: 'Feed Ad - Landscape',
      title: 'Get Your Dream Car Today!',
      headline: 'Car Finance from 4.9% APR Representative',
      description: 'Quick approval, flexible terms, and competitive rates. Apply in minutes!',
      cta: 'Get Quote Now',
      compliance: 'Representative 4.9% APR. Rates from 4.9% to 29.9% APR. Representative example: £15,000 over 60 months at 4.9% APR = £282.28/month. Total repayable: £16,936.80. Subject to status. T&Cs apply. FCA Reg: 1020313',
      size: '1200x628',
      type: 'image',
      image: facebookFeedImage
    },
    {
      id: 'fb-van-1',
      platform: 'Facebook',
      format: 'Feed Ad - Landscape',
      title: 'KAPOW! Van Finance Sorted!',
      headline: 'Business Van Finance from 5.9% APR',
      description: 'Get your business moving with flexible van finance. Quick decisions for trade customers.',
      cta: 'Get Van Quote',
      compliance: 'Representative 5.9% APR. Example: £20,000 over 60 months = £385.33/month. Total: £23,119.80. Subject to status. T&Cs apply. FCA: 1020313',
      size: '1200x628',
      type: 'image',
      image: facebookVanFinance
    },
    {
      id: 'fb-square-1',
      platform: 'Facebook',
      format: 'Feed Ad - Square',
      title: 'WHOOSH! Into Your New Car',
      headline: 'Finance Made Simple',
      description: 'From application to approval in just 24 hours. No hidden fees, no surprises.',
      cta: 'Apply Now',
      compliance: 'Representative 4.9% APR. Example: £10,000 over 48 months = £229.72/month. Total: £11,026.56. Written quotes on request. FCA: 1020313',
      size: '1080x1080',
      type: 'image',
      image: instagramSquareImage
    },
    {
      id: 'fb-video-1',
      platform: 'Facebook',
      format: 'Video Ad',
      title: 'Your Journey Starts Here',
      headline: 'Car Finance in 3 Easy Steps',
      description: '1. Apply Online 2. Get Approved 3. Drive Away! See how simple car finance can be.',
      cta: 'Start Journey',
      compliance: 'Representative 4.9% APR. Terms apply. See website for full details. Authorised by FCA: 1020313',
      size: '1280x720',
      type: 'video'
    },
    {
      id: 'ig-square-1',
      platform: 'Instagram',
      format: 'Feed Post - Square',
      title: 'New Car Vibes ✨',
      headline: 'Finance That Fits Your Life',
      description: 'Flexible monthly payments from £99. Bad credit? No problem! We work with all credit scores.',
      cta: 'Check Eligibility',
      compliance: 'Rep 4.9% APR. £15,000/60m = £282.28/m. Total £16,936.80. Rates 4.9%-29.9%. T&Cs apply. FCA: 1020313',
      size: '1080x1080',
      type: 'image',
      image: instagramSquareImage
    },
    {
      id: 'ig-bad-credit-1',
      platform: 'Instagram',
      format: 'Feed Post - Square',
      title: 'BAM! Bad Credit? No Problem!',
      headline: 'We Say YES When Others Say NO',
      description: 'Specialist bad credit car finance. 95% approval rate. Apply now and get driving!',
      cta: 'Apply Today',
      compliance: 'Rep 12.9% APR. £8,000/48m = £201.84/m. Total £9,688.32. Rates vary based on credit score. FCA: 1020313',
      size: '1080x1080',
      type: 'image',
      image: instagramBadCredit
    },
    {
      id: 'ig-motorbike-1',
      platform: 'Instagram',
      format: 'Feed Post - Square',
      title: 'VROOM! Motorbike Finance',
      headline: 'Two Wheels, Zero Stress',
      description: 'Motorbike finance from £89/month. Hit the road with confidence. Quick online approval.',
      cta: 'Get Bike Finance',
      compliance: 'Rep 7.9% APR. £5,000/36m = £154.69/m. Total £5,568.84. Subject to status. T&Cs apply. FCA: 1020313',
      size: '1080x1080',
      type: 'image',
      image: instagramMotorbike
    },
    {
      id: 'ig-quick-1',
      platform: 'Instagram',
      format: 'Feed Post - Portrait',
      title: 'BOOM! Quick Decision in 24 Hours',
      headline: 'Fast Finance, Faster Cars',
      description: 'Same day decisions possible. Get behind the wheel sooner with WHOOSH finance.',
      cta: 'Apply Fast',
      compliance: 'Rep 4.9% APR. Decision subject to credit checks and affordability. T&Cs apply. FCA: 1020313',
      size: '1080x1350',
      type: 'image',
      image: instagramQuickDecision
    },
    {
      id: 'ig-story-1',
      platform: 'Instagram',
      format: 'Stories Ad',
      title: 'Swipe Up for Your Dream Car! 🚗',
      headline: 'Finance Available',
      description: 'Quick decision, same day approval possible. Competitive rates from 4.9% APR.',
      cta: 'Learn More',
      compliance: 'Representative 4.9% APR. Full terms at whooshfinance.com. FCA Authorised: 1020313',
      size: '1080x1920',
      type: 'story',
      image: instagramStoryImage
    },
    {
      id: 'ig-business-story-1',
      platform: 'Instagram',
      format: 'Stories Ad',
      title: 'ZOOM! Business Finance Available',
      headline: 'Grow Your Business Fleet',
      description: 'Business car and van finance. Competitive rates for established businesses.',
      cta: 'Get Business Quote',
      compliance: 'Business finance available. Representative rates from 5.9% APR. T&Cs apply. FCA: 1020313',
      size: '1080x1920',
      type: 'story',
      image: instagramBusinessStory
    },
    {
      id: 'tiktok-1',
      platform: 'TikTok',
      format: 'In-Feed Video',
      title: 'POV: You Just Got Approved for Car Finance 🎉',
      headline: 'Making Car Dreams Reality',
      description: 'When the finance comes through and you can finally upgrade your ride! Apply today.',
      cta: 'Get Approved',
      compliance: 'Representative 4.9% APR. Example available. Terms apply. FCA: 1020313',
      size: '1080x1920',
      type: 'video',
      image: tiktokVideoThumb
    },
    {
      id: 'tiktok-2024-1',
      platform: 'TikTok',
      format: 'In-Feed Video',
      title: 'WHOOSH into 2024 with your dream car! ✨',
      headline: 'New Year, New Car Goals',
      description: 'Starting 2024 right with car finance that actually works. Quick approval guaranteed!',
      cta: 'Start 2024 Right',
      compliance: 'Rep 4.9% APR. New year, same great rates. Subject to status. FCA: 1020313',
      size: '1080x1920',
      type: 'video',
      image: tiktok2024Car
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const toggleVideo = (id: string) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  const mascotVariations = [
    {
      id: 'hero-pose',
      name: 'Speed Hero',
      description: 'WHOOSH text styled as a fast-moving car with eyes - perfect for dynamic branding',
      image: whooshHeroPose,
      useCases: ['Hero banners', 'Speed messaging', 'Dynamic branding', 'High-energy campaigns']
    },
    {
      id: 'thumbs-up',
      name: 'Approving Speedster',
      description: 'Car-styled WHOOSH giving thumbs up - ideal for approval and success messaging',
      image: whooshThumbsUp,
      useCases: ['Approval messages', 'Success stories', 'Positive feedback', 'Customer satisfaction']
    },
    {
      id: 'calculator',
      name: 'Finance Cruiser',
      description: 'Professional car-styled WHOOSH with calculator - represents expertise and trust',
      image: whooshCalculator,
      useCases: ['Calculator pages', 'Financial advice', 'Professional services', 'Rate comparisons']
    },
    {
      id: 'waving',
      name: 'Welcome Racer',
      description: 'Friendly car-styled WHOOSH waving hello - perfect for greetings and introductions',
      image: whooshWaving,
      useCases: ['Welcome messages', 'Homepage greetings', 'Customer onboarding', 'First impressions']
    },
    {
      id: 'keys',
      name: 'Victory Vehicle',
      description: 'Triumphant car-styled WHOOSH holding keys - represents successful finance completion',
      image: whooshKeys,
      useCases: ['Success pages', 'Approval confirmations', 'Goal achievement', 'Deal completion']
    },
    {
      id: 'thinking',
      name: 'Smart Speedster',
      description: 'Thoughtful car-styled WHOOSH with lightbulb - ideal for help and problem-solving',
      image: whooshThinking,
      useCases: ['FAQ sections', 'Help pages', 'Problem solving', 'Advisory content']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              WHOOSH! Marketing Assets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FCA-compliant car finance advertising assets for Facebook, Instagram, and TikTok campaigns. 
              All formats include required disclaimers and representative APR information.
            </p>
          </div>

          {/* Platform Tabs */}
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            </TabsList>

            {/* Facebook Content */}
            <TabsContent value="facebook" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adExamples.filter(ad => ad.platform === 'Facebook').map((ad) => (
                  <Card key={ad.id} className="comic-panel bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{ad.format}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{ad.size}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Ad Preview */}
                      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 min-h-[200px] flex items-center justify-center relative overflow-hidden">
                        {ad.type === 'video' ? (
                          <div className="text-center">
                            <Button
                              variant="ghost"
                              size="lg"
                              onClick={() => toggleVideo(ad.id)}
                              className="mb-2"
                            >
                              {activeVideo === ad.id ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                            </Button>
                            <p className="text-sm font-medium">{ad.title}</p>
                          </div>
                        ) : ad.image ? (
                          <img 
                            src={ad.image} 
                            alt={ad.title}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="text-center space-y-2">
                            <h3 className="font-bold text-lg">{ad.title}</h3>
                            <p className="text-sm">{ad.headline}</p>
                            <Button className="comic-button">
                              {ad.cta}
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Ad Details */}
                      <div className="space-y-2">
                        <div>
                          <label className="text-sm font-medium">Headline:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.headline}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.description}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">CTA Button:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.cta}</p>
                        </div>
                      </div>

                      {/* Compliance Text */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-medium text-muted-foreground">FCA Compliance Text:</label>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(ad.compliance)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs bg-muted p-2 rounded text-muted-foreground">
                          {ad.compliance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Instagram Content */}
            <TabsContent value="instagram" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adExamples.filter(ad => ad.platform === 'Instagram').map((ad) => (
                  <Card key={ad.id} className="comic-panel bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{ad.format}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{ad.size}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Ad Preview */}
                      <div className={`bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 flex items-center justify-center relative overflow-hidden ${
                        ad.type === 'story' ? 'aspect-[9/16] min-h-[300px]' : 'min-h-[200px]'
                      }`}>
                        {ad.image ? (
                          <img 
                            src={ad.image} 
                            alt={ad.title}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="text-center space-y-2">
                            <h3 className="font-bold text-lg">{ad.title}</h3>
                            <p className="text-sm">{ad.headline}</p>
                            <Button className="comic-button">
                              {ad.cta}
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Ad Details */}
                      <div className="space-y-2">
                        <div>
                          <label className="text-sm font-medium">Caption:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.description}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">CTA Button:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.cta}</p>
                        </div>
                      </div>

                      {/* Compliance Text */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-medium text-muted-foreground">FCA Compliance Text:</label>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(ad.compliance)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs bg-muted p-2 rounded text-muted-foreground">
                          {ad.compliance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* TikTok Content */}
            <TabsContent value="tiktok" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adExamples.filter(ad => ad.platform === 'TikTok').map((ad) => (
                  <Card key={ad.id} className="comic-panel bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{ad.format}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{ad.size}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Ad Preview */}
                      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 aspect-[9/16] min-h-[300px] flex items-center justify-center relative overflow-hidden">
                        {ad.image ? (
                          <div className="relative w-full h-full">
                            <img 
                              src={ad.image} 
                              alt={ad.title}
                              className="w-full h-full object-cover rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button
                                variant="ghost"
                                size="lg"
                                onClick={() => toggleVideo(ad.id)}
                                className="bg-black/50 hover:bg-black/70 text-white"
                              >
                                {activeVideo === ad.id ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center space-y-2">
                            <Button
                              variant="ghost"
                              size="lg"
                              onClick={() => toggleVideo(ad.id)}
                              className="mb-2"
                            >
                              {activeVideo === ad.id ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                            </Button>
                            <h3 className="font-bold text-lg">{ad.title}</h3>
                            <Button className="comic-button">
                              {ad.cta}
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Video Details */}
                      <div className="space-y-2">
                        <div>
                          <label className="text-sm font-medium">Video Hook:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.headline}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Caption:</label>
                          <p className="text-sm bg-muted p-2 rounded">{ad.description}</p>
                        </div>
                      </div>

                      {/* Compliance Text */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-medium text-muted-foreground">FCA Compliance Text:</label>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(ad.compliance)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs bg-muted p-2 rounded text-muted-foreground">
                          {ad.compliance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Logo Branding Concepts Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Logo Branding Concepts</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your WHOOSH! logo reimagined as a fast-moving car with personality! These dynamic branding concepts 
              feature your logo text styled like a speeding vehicle with cartoon eyes, perfect for automotive marketing.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mascotVariations.map((mascot) => (
                <Card key={mascot.id} className="comic-panel bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{mascot.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">PNG • 512x512</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Mascot Preview */}
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                      <img 
                        src={mascot.image} 
                        alt={mascot.name}
                        className="w-32 h-32 object-contain"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">{mascot.description}</p>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Perfect for:</h4>
                      <div className="flex flex-wrap gap-1">
                        {mascot.useCases.map((useCase, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Logo Branding Concepts */}
            <div className="mt-12">
              <Card className="comic-panel bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Logo Branding Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Design Principles:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• WHOOSH text styled as a dynamic, fast-moving car</li>
                        <li>• Cartoon eyes add personality and friendliness</li>
                        <li>• Speed lines and motion effects enhance movement</li>
                        <li>• Automotive styling reinforces car finance theme</li>
                        <li>• Maintain brand consistency across all variations</li>
                        <li>• Ensure readability at all sizes and contexts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technical Specifications:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Format: PNG with transparent background</li>
                        <li>• Resolution: 512x512 pixels (high quality)</li>
                        <li>• Car-styled typography with motion effects</li>
                        <li>• Scalable vector-style artwork</li>
                        <li>• Optimised for both digital and print use</li>
                        <li>• Comic book aesthetic with automotive flair</li>
                        <li>• Consistent color palette across all concepts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(adFormats).map(([key, platform]) => (
                <Card key={key} className="comic-panel bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platform.formats.map((format, index) => (
                        <div key={index} className="border-b pb-3 last:border-b-0">
                          <h4 className="font-semibold text-sm">{format.name}</h4>
                          <p className="text-sm text-muted-foreground">Size: {format.size}</p>
                          <p className="text-sm text-muted-foreground">Type: {format.type}</p>
                          <p className="text-xs text-muted-foreground mt-1">{format.specs}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FCA Compliance Guidelines */}
          <div className="mt-16">
            <Card className="comic-panel bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">FCA Compliance Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Required Elements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Representative APR prominently displayed</li>
                      <li>• "Representative" qualifier must be clear</li>
                      <li>• Example calculation showing monthly payments</li>
                      <li>• Total amount repayable</li>
                      <li>• "Subject to status" disclaimer</li>
                      <li>• FCA registration number</li>
                      <li>• "Terms and conditions apply"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Best Practices:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Keep APR text readable and prominent</li>
                      <li>• Use clear, jargon-free language</li>
                      <li>• Ensure mobile readability</li>
                      <li>• Include risk warnings where appropriate</li>
                      <li>• Make disclaimers easily accessible</li>
                      <li>• Regular compliance reviews</li>
                      <li>• Test across different devices</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All advertising materials must be approved by your compliance team before use. 
                    These examples are templates and should be customised with your actual rates, terms, and legal requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdsContent;