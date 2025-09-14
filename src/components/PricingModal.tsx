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

  // ✅ Helper function to extract YouTube thumbnails
  const getYouTubeThumbnail = (url: string): string => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return "/placeholder.svg"; // fallback
  };

  const portfolioVideos = (() => {
    if (plan.name === 'Essential') {
      return [
        { title: "Essential Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/QTcSLYvHHFc?si=LE2IYqKBo3VQDu5L"), duration: '0:25', videoSrc: "https://youtu.be/QTcSLYvHHFc?si=LE2IYqKBo3VQDu5L" },
        { title: "Essential Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/e5p44ED1UpM?si=hRgpAmpWQpHq4t4K"), duration: '0:20', videoSrc: "https://youtu.be/e5p44ED1UpM?si=hRgpAmpWQpHq4t4K" },
        { title: "Essential Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/7X4aG9nK1l4?si=3oOJ7r-W9ZBtMais"), duration: '0:30', videoSrc: "https://youtu.be/7X4aG9nK1l4?si=3oOJ7r-W9ZBtMais" },
        { title: "Essential Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/n-gsp7mfDoo?si=P99Uu04GJ9AwRRzh"), duration: '0:28', videoSrc: "https://youtu.be/n-gsp7mfDoo?si=P99Uu04GJ9AwRRzh" },
        { title: "Essential Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/O9Q06AIOrfQ?si=4whzvHNIXvkGU9N_"), duration: '0:25', videoSrc: "https://youtu.be/O9Q06AIOrfQ?si=4whzvHNIXvkGU9N_" },
      ];
    } else if (plan.name === 'Impact') {
      return [
        { title: "Impact Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/qwIQ0fdW8Dc?si=_Y5IB1K2s80EAYP7"), duration: '0:40', videoSrc: "https://youtu.be/qwIQ0fdW8Dc?si=_Y5IB1K2s80EAYP7" },
        { title: "Impact Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/cRaZvU_zBEs?si=xh5TLqyYGeUcRnB5"), duration: '0:35', videoSrc: "https://youtu.be/cRaZvU_zBEs?si=xh5TLqyYGeUcRnB5" },
        { title: "Impact Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/Rc-6Mr_cXLU?si=l1mHCuugCJLqJw4_"), duration: '0:45', videoSrc: "https://youtu.be/Rc-6Mr_cXLU?si=l1mHCuugCJLqJw4_" },
        { title: "Impact Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/9lZgKxmObUg?si=j0up1BlGRh7IBJqd"), duration: '0:38', videoSrc: "https://youtu.be/9lZgKxmObUg?si=j0up1BlGRh7IBJqd" },
        { title: "Impact Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/SfukyiCQRog?si=ZFoMe-n9vRq0-wMh"), duration: '0:50', videoSrc: "https://youtu.be/SfukyiCQRog?si=ZFoMe-n9vRq0-wMh" },
      ];
    } else if (plan.name === 'Signature') {
      return [
        { title: "Signature Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/Qq9NzrMpWw8?si=rz2E29tCS2QJ64UB"), duration: '0:60', videoSrc: "https://youtu.be/Qq9NzrMpWw8?si=rz2E29tCS2QJ64UB" },
        { title: "Signature Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/L2SPqda_kSQ?si=1Fue3algw2nUkcip"), duration: '0:50', videoSrc: "https://youtu.be/L2SPqda_kSQ?si=1Fue3algw2nUkcip" },
        { title: "Signature Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/kfNN-n93-ho?si=T-m6x3jajVOwBGCR"), duration: '0:45', videoSrc: "https://youtu.be/kfNN-n93-ho?si=T-m6x3jajVOwBGCR" },
        { title: "Signature Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/KtU1ZogD0MY?si=EYP7aVxh3G5gscjS"), duration: '0:55', videoSrc: "https://youtu.be/KtU1ZogD0MY?si=EYP7aVxh3G5gscjS" },
        { title: "Signature Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/0l9afgluciQ?si=A0LNgpWGRkHDm-yf"), duration: '0:50', videoSrc: "https://youtu.be/0l9afgluciQ?si=A0LNgpWGRkHDm-yf" },
      ];
    } else {
      return [];
    }
  })();

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
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {portfolioVideos.map((video, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(video.videoSrc, "_blank")}
                >
                  <div className="relative aspect-video bg-muted/20">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-2">
                    <h5 className="text-xs font-medium text-foreground">{video.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full bg-muted/20 hover:bg-muted/30 text-foreground mb-4"
              onClick={() => {
                onClose(); // Close the modal first
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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
