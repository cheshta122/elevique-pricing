import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot, ImageIcon } from "lucide-react";

const AIImagesSection = () => {
  const imagePackages = [
    {
      count: 5,
      defaultPrice: "₹ 3,750",
      customPrice: "₹ 6,000"
    },
    {
      count: 10,
      defaultPrice: "₹ 7,000",
      customPrice: "₹ 10,000"
    },
    {
      count: 15,
      defaultPrice: "₹ 9,000",
      customPrice: "₹ 13,500"
    },
    {
      count: 20,
      defaultPrice: "₹ 10,000",
      customPrice: "₹ 16,000"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-cosmic flex items-center justify-center animate-float">
              <Bot className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              AI IMAGES
            </span>
            <span className="text-foreground"> PACKAGES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional AI-generated images for your brand with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {imagePackages.map((pkg, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cosmic flex items-center justify-center group-hover:animate-float">
                  <ImageIcon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.count}</div>
                <div className="text-muted-foreground text-sm">Images</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-muted/10 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Default Templates</div>
                  <div className="text-2xl font-bold text-foreground">{pkg.defaultPrice}</div>
                </div>
                <div className="p-4 bg-gradient-cosmic/20 rounded-xl border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">Custom Concepts</div>
                  <div className="text-2xl font-bold text-primary">{pkg.customPrice}</div>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-button hover:opacity-90 transition-all duration-300"
                size="lg"
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIImagesSection;