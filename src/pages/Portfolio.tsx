import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from "@/components/ui/button";
import { Play, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'essential', name: 'Essential' },
    { id: 'impact', name: 'Impact' },
    { id: 'signature', name: 'Signature' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'essential',
      type: 'video',
      title: 'Rapid AI Ad - Tech Startup',
      duration: '0:25',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      category: 'essential',
      type: 'video',
      title: 'Product Launch Video',
      duration: '0:22',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      category: 'impact',
      type: 'video',
      title: 'Brand Story - Fashion',
      duration: '0:40',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      category: 'impact',
      type: 'video',
      title: 'Premium Product Integration',
      duration: '0:38',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 5,
      category: 'signature',
      type: 'video',
      title: 'Luxury Brand Film',
      duration: '0:60',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 6,
      category: 'signature',
      type: 'video',
      title: 'Cinematic Brand Story',
      duration: '0:55',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 7,
      category: 'essential',
      type: 'image',
      title: 'AI Generated Brand Asset',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 8,
      category: 'impact',
      type: 'image',
      title: 'Premium Visual Campaign',
      thumbnail: '/placeholder.svg'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-hero bg-fixed -z-10"></div>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Creative
              </span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Explore our diverse collection of AI-powered brand transformations across Essential, Impact, and Signature categories
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`${
                    activeCategory === category.id 
                      ? 'bg-gradient-button' 
                      : 'border-primary/20 text-primary hover:bg-primary/10'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
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
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.category === 'essential' ? 'bg-secondary/80 text-secondary-foreground' :
                        item.category === 'impact' ? 'bg-primary/80 text-primary-foreground' :
                        'bg-accent/80 text-accent-foreground'
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;