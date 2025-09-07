import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      type: 'video',
      title: 'AI Brand Video - Essential',
      thumbnail: '/placeholder.svg',
      duration: '0:25'
    },
    {
      type: 'video', 
      title: 'Product Integration - Impact',
      thumbnail: '/placeholder.svg',
      duration: '0:40'
    },
    {
      type: 'image',
      title: 'Signature Campaign Visual',
      thumbnail: '/placeholder.svg'
    },
    {
      type: 'image',
      title: 'Premium Brand Asset',
      thumbnail: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Creative Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the power of AI-driven creativity through our diverse portfolio of brand transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video bg-muted/20">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-sm text-white">
                      {item.duration}
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-button hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;