import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Check } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    subtitle: string;
    duration: string;
    price: string;
    features: string[];
    packages: { videos: string | number; price: string }[];
  } | null;
}

const PricingModal = ({ isOpen, onClose, plan }: PricingModalProps) => {
  if (!plan) return null;

  const portfolioVideos = [
    {
      title: `${plan.name} Package - Sample 1`,
      thumbnail: '/placeholder.svg',
      duration: plan.name === 'Essential' ? '0:25' : plan.name === 'Impact' ? '0:40' : '0:60'
    },
    {
      title: `${plan.name} Package - Sample 2`, 
      thumbnail: '/placeholder.svg',
      duration: plan.name === 'Essential' ? '0:20' : plan.name === 'Impact' ? '0:35' : '0:45'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-morphism border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {plan.name} Package Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Package Details */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.subtitle}</h3>
              <p className="text-primary mb-2">Duration: {plan.duration}</p>
              <p className="text-2xl font-bold text-foreground">Starting {plan.price}</p>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-foreground">What's Included:</h4>
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Package Options:</h4>
              {plan.packages.map((pkg, index) => (
                <div key={index} className="flex justify-between items-center py-2 px-4 bg-muted/20 rounded-lg">
                  <span className="text-sm font-medium">{pkg.videos} Video{pkg.videos !== 1 ? 's' : ''}</span>
                  <span className="text-sm font-bold text-primary">{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Videos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sample Works - {plan.name}</h4>
            <div className="space-y-4 mb-6">
              {portfolioVideos.map((video, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                >
                  <div className="relative aspect-video bg-muted/20">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h5 className="text-sm font-medium text-foreground">{video.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full bg-muted/20 hover:bg-muted/30 text-foreground mb-4"
              onClick={() => window.location.href = '/portfolio'}
            >
              View All Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              className="w-full bg-gradient-button hover:opacity-90"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0', '_blank')}
            >
              Get Started - {plan.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;