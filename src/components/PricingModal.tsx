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
        { title: "Essential Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/KcxpWlm6X_s?si=yH2ukjRmi78Sf5ZU"), duration: '0:25', videoSrc: "https://youtu.be/KcxpWlm6X_s?si=yH2ukjRmi78Sf5ZU" },
        { title: "Essential Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/bVC0ywdZHKw?si=NfB200o-WPJh-rOi"), duration: '0:20', videoSrc: "https://youtu.be/bVC0ywdZHKw?si=NfB200o-WPJh-rOi" },
        { title: "Essential Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/YJcyWflvmU0?si=B4_wD3mU-LQX2B4U"), duration: '0:30', videoSrc: "https://youtu.be/YJcyWflvmU0?si=B4_wD3mU-LQX2B4U" },
        { title: "Essential Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/wY_ESA9IckY?si=W7e1gcpo9Z5H6DMY"), duration: '0:28', videoSrc: "https://youtu.be/wY_ESA9IckY?si=W7e1gcpo9Z5H6DMY" },
        { title: "Essential Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/e5p44ED1UpM?si=idGlafK6rXlPNjJT"), duration: '0:25', videoSrc: "https://youtu.be/e5p44ED1UpM?si=idGlafK6rXlPNjJT" },
      ];
    } else if (plan.name === 'Impact') {
      return [
        { title: "Impact Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/Zc-fnwJMY2Q?si=30k8M5Oc_Vj0-RIV"), duration: '0:40', videoSrc: "https://youtu.be/Zc-fnwJMY2Q?si=30k8M5Oc_Vj0-RIV" },
        { title: "Impact Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/HZ1Tg_U1OIg?si=NKg5APFFikiuMES_"), duration: '0:35', videoSrc: "https://youtu.be/HZ1Tg_U1OIg?si=NKg5APFFikiuMES_" },
        { title: "Impact Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/LBm3Jg9h-68?si=xIb0w5dBGmiUectV"), duration: '0:45', videoSrc: "https://youtu.be/LBm3Jg9h-68?si=xIb0w5dBGmiUectV" },
        { title: "Impact Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/LZxyXDyI1EU?si=VIAM3scVOnWx0GrW"), duration: '0:38', videoSrc: "https://youtu.be/LZxyXDyI1EU?si=VIAM3scVOnWx0GrW" },
        { title: "Impact Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/gm8VMyZG6vE?si=uCAIuJUgqBBTQTo6"), duration: '0:50', videoSrc: "https://youtu.be/gm8VMyZG6vE?si=uCAIuJUgqBBTQTo6" },
      ];
    } else if (plan.name === 'Signature') {
      return [
        { title: "Signature Video 1", thumbnail: getYouTubeThumbnail("https://youtu.be/g_KfFz_5XrA?si=k-r_XfmRrgPutQTp"), duration: '0:60', videoSrc: "https://youtu.be/g_KfFz_5XrA?si=k-r_XfmRrgPutQTp" },
        { title: "Signature Video 2", thumbnail: getYouTubeThumbnail("https://youtu.be/KtU1ZogD0MY?si=7ZJOg6rzyHNNMfL1"), duration: '0:50', videoSrc: "https://youtu.be/KtU1ZogD0MY?si=7ZJOg6rzyHNNMfL1" },
        { title: "Signature Video 3", thumbnail: getYouTubeThumbnail("https://youtu.be/xS8HD6e3kBw?si=kZEfDscMh5qbon6k"), duration: '0:45', videoSrc: "https://youtu.be/xS8HD6e3kBw?si=kZEfDscMh5qbon6k" },
        { title: "Signature Video 4", thumbnail: getYouTubeThumbnail("https://youtu.be/kfNN-n93-ho?si=aRC_eKBd1RgxBuXX"), duration: '0:55', videoSrc: "https://youtu.be/kfNN-n93-ho?si=aRC_eKBd1RgxBuXX" },
        { title: "Signature Video 5", thumbnail: getYouTubeThumbnail("https://youtu.be/Qq9NzrMpWw8?si=_fh0raSqLRKCOGSE"), duration: '0:50', videoSrc: "https://youtu.be/Qq9NzrMpWw8?si=_fh0raSqLRKCOGSE" },
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
          {/* Portfolio Videos – now placed first */}
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
                onClose();
                window.open('https://elevique.in/ai-video/', '_blank');
              }}
            >
              View All Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Package Details – now placed second */}
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

            <Button
              className="w-full bg-gradient-button hover:opacity-90 mt-6"
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

