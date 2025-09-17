"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import AIImagesSection from "@/components/AIImagesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
}

const Index = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    async function fetchPortfolio() {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      setPortfolio(data);
    }
    fetchPortfolio();
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-hero bg-fixed -z-10"></div>

      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-accent rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        
        <div id="pricing">
          <PricingSection />
        </div>
        <AIImagesSection />
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <FAQSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="container mx-auto px-6 h-full">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 h-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              {/* Logo image */}
              <img 
                src="/logo.png" // apna logo path
                alt="eleVique Logo"
                className="h-16 w-auto object-contain
                  drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
                  transition-all duration-500"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <span>© 2025 eleVique. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
