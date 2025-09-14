import React from 'react';
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/image.png";
import hero1Image from "@/assets/image1.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal/20 animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-aqua/30 animate-pulse-glow blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-secondary/20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-accent/25 animate-pulse-glow blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative">
                  <br />
                  Transform Your 
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
                </span>
                <br />
                <span className="text-foreground relative">
                  Brand with AI Powered Visuals Creation
                  <div className="absolute -bottom-2 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-0 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                No shoots, no crew, no locations — just high-converting, viral AI content that saves you lakhs in production costs.
              </p>
            </div>

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
                Get Started 
              </Button>
            </div>
          </div>

         {/* Right Side - Interactive Images */}
<div 
  className="relative group cursor-pointer" 
  onClick={() => window.open('https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0', '_blank')}
>
  <div className="grid grid-cols-2 gap-6 items-center justify-center h-40 sm:h-[500px]">
    <img 
      src={heroImage} 
      alt="AI Video Creation 1" 
      className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105"
    />
    <img 
      src={hero1Image} 
      alt="AI Video Creation 2" 
      className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105"
    />
  </div>

  <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
  
  <div className="absolute bottom-6 left-6 right-6 z-30 text-center">
    <p className="text-lg font-semibold text-white mb-2">Click to Start Your Journey</p>
    <p className="text-sm text-white/80">Get your first AI video in 3-14 days</p>
  </div>

  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow opacity-80"></div>
  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
  <div className="absolute top-1/3 -left-8 w-4 h-4 bg-secondary rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.8s' }}></div>
</div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;  