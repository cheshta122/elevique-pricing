import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal/20 animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-aqua/30 animate-pulse-glow blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-secondary/20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-accent/25 animate-pulse-glow blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Main Hero Content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative">
                  Transform Your Brand
                  {/* Moving graphics for the text */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
                </span>
                <br />
                <span className="text-foreground relative">
                  with AI Powered Visuals Creation
                  {/* More moving graphics */}
                  <div className="absolute -bottom-2 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-0 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                No shoots, no crew, no locations — just high-converting, viral AI content that saves you lakhs in production costs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-button hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-glow px-8 py-6 text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              <Button 
                variant="secondary"
                size="lg" 
                className="bg-accent/20 text-accent hover:bg-accent/30 backdrop-blur-sm px-8 py-6 text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0', '_blank')}
              >
                Get Started 🚀
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Image */}
          <div className="relative">
            <div className="relative group cursor-pointer" onClick={() => window.open('https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0', '_blank')}>
              <div className="absolute inset-0 bg-gradient-button rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <img 
                src={heroImage} 
                alt="AI Video Creation" 
                className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6 z-30 text-center">
                <p className="text-lg font-semibold text-white mb-2">Click to Start Your Journey</p>
                <p className="text-sm text-white/80">Get your first AI video in 3-14 days</p>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 bg-secondary rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;