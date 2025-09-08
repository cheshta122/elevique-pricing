import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import AIImagesSection from "@/components/AIImagesSection"
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-hero bg-fixed -z-10"></div>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-accent rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <AIImagesSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-button animate-pulse-glow"></div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                eleVique
              </h1>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <span>© 2024 eleVique. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;