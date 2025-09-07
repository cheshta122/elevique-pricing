import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-button animate-pulse-glow"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              eleVique
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
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
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex border-primary/20 text-primary hover:bg-primary/10"
              onClick={() => window.location.href = '/signin'}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;