import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10 h-16">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-2 h-full">
            {/* Logo image */}
            <img 
              src="/logo.png" // apna logo path
              alt="eleVique Logo"
              className="h-16 w-auto object-contain
             drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
             transition-all duration-500"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 h-full">
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Pricing
            </a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Portfolio
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              FAQ
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
