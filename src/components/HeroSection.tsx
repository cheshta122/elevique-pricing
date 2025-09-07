import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cosmic-purple/20 animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-neon-cyan/30 animate-pulse-glow blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-cosmic-blue/20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-accent/25 animate-pulse-glow blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Transform Your Brand
            </span>
            <br />
            <span className="text-foreground">
              with AI Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Visuals Creation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            No shoots, no crew, no locations — just high-converting, viral AI content that saves you lakhs in production costs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-button hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-glow px-8 py-6 text-lg"
          >
            View Pricing
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg"
          >
            View Portfolio
          </Button>
          <Button 
            variant="secondary"
            size="lg" 
            className="bg-accent/20 text-accent hover:bg-accent/30 backdrop-blur-sm px-8 py-6 text-lg"
          >
            Get Started 🚀
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cosmic flex items-center justify-center group-hover:animate-float">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">AI-Powered Creation</h3>
            <p className="text-muted-foreground">
              Cutting-edge AI technology creates realistic characters and scenarios
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cosmic flex items-center justify-center group-hover:animate-float" style={{ animationDelay: '0.5s' }}>
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Lightning Fast</h3>
            <p className="text-muted-foreground">
              From brief to final video in 3-14 days, depending on complexity
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cosmic flex items-center justify-center group-hover:animate-float" style={{ animationDelay: '1s' }}>
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary">Cost Effective</h3>
            <p className="text-muted-foreground">
              Save lakhs compared to traditional video production
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;