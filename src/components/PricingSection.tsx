import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Rocket } from "lucide-react";
import PricingModal from './PricingModal';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExplore = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Essential",
      subtitle: "Rapid, polished AI ad",
      duration: "up to 25 sec",
      price: "₹3,500",
      icon: <Rocket className="w-6 h-6" />,
      popular: false,
      features: [
        "Realistic AI characters",
        "Clean edit",
        "Brand intro & messaging",
        "Professional voiceover + BG music",
        "Single product highlight",
        "End-card logo placement",
        "1 Free revision"
      ],
      packages: [
        { videos: 3, price: "₹10,500" },
        { videos: 5, price: "₹17,000" },
        { videos: 10, price: "₹32,000" }
      ]
    },
    {
      name: "Impact",
      subtitle: "Brand film with premium product integration",
      duration: "up to 40 sec",
      price: "₹5,000",
      icon: <Star className="w-6 h-6" />,
      popular: true,
      features: [
        "Realistic AI characters + premium elements",
        "Advanced edit with tasteful transitions",
        "Story-led script engineered for reach",
        "Professional voiceover + BG music",
        "End-to-end product integration across scenes",
        "Advanced logo animation",
        "2 Free revisions",
        "VFX effects",
        "4:5 Instagram export"
      ],
      packages: [
        { videos: 3, price: "₹15,000" },
        { videos: 5, price: "₹24,500" },
        { videos: 10, price: "₹47,000" }
      ]
    },
    {
      name: "Signature",
      subtitle: "Flagship luxury brand film — full cinematic",
      duration: "30-60 sec",
      price: "₹30,000",
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      features: [
        "TV-grade visuals & finishing",
        "Premium cinematic edit",
        "Full narrative arcs & storytelling",
        "Professional voiceover + BG music",
        "Complete brand integration across shots",
        "Campaign brand kit",
        "3 Free revisions",
        "Complex, dynamic camera moves",
        "3-5 custom HD/3D images",
        "Dedicated project manager & oversight"
      ],
      packages: [
        { videos: 1, price: "Starting ₹30,000" },
        { videos: "3/5/10", price: "Price on request" }
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-20 px-6 overflow-hidden">
      
      {/* ✅ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background-video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* ✅ Overlay to darken video slightly */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              eleVique — Pricing Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your brand with AI-powered video creation. No shoots, no crew — just high-converting viral content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card rounded-3xl p-8 relative group hover:scale-105 transition-all duration-300 flex flex-col ${
                plan.popular ? 'ring-2 ring-primary/50 animate-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-button px-6 py-2 rounded-full text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-button' : 'bg-gradient-cosmic'
                }`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{plan.subtitle}</p>
                <p className="text-primary text-sm mb-4">Duration: {plan.duration}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Starting {plan.price}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {plan.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="flex justify-between items-center py-2 px-4 bg-muted/20 rounded-lg">
                    <span className="text-sm font-medium">{pkg.videos} Video{pkg.videos !== 1 ? 's' : ''}</span>
                    <span className="text-sm font-bold text-primary">{pkg.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex-grow"></div>

              <Button 
                className="w-full bg-gradient-button hover:opacity-90 transition-all duration-300 mt-auto"
                size="lg"
                onClick={() => handleExplore(plan)}
              >
                Explore
              </Button>
            </div>
          ))}
        </div>

        <PricingModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plan={selectedPlan}
        />
      </div>
    </section>
  );
};

export default PricingSection;
