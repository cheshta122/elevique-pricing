import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, LucideIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

interface PortfolioItem {
  type: 'video' | 'image';
  title: string;
  thumbnail: string;
  videoSrc?: string;
  duration?: string;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items?: string[];
}

interface PortfolioSectionProps {
  section?: Section;
  showTitle?: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ section, showTitle = true }) => {
  const portfolioItems: PortfolioItem[] = [
    { type: 'video', title: `AI Brand Video - ${section?.title}`, thumbnail: '/placeholder.svg', videoSrc: '/sample1.mp4', duration: '0:25' },
    { type: 'video', title: `Product Integration - ${section?.title}`, thumbnail: '/placeholder.svg', videoSrc: '/sample2.mp4', duration: '0:40' },
    { type: 'video', title: `${section?.title} Campaign Visual`, thumbnail: '/placeholder.svg', videoSrc: '/sample3.mp4' },
    { type: 'video', title: `Premium ${section?.title} Asset`, thumbnail: '/placeholder.svg', videoSrc: '/sample4.mp4' },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* ✅ Background Video instead of Image */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        src="/background-video.mp4" // ✅ Your video file placed in the public folder
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              animate={{ 
                textShadow: [
                  "0 0 12px rgba(0,100,114,0.7)",
                  "0 0 18px rgba(57,255,213,0.7)",
                  "0 0 14px rgba(144,251,228,0.7)",
                  "0 0 16px rgba(255,255,255,0.7)",
                ], 
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
              className="text-4xl md:text-5xl font-extrabold mb-4 
                         bg-gradient-to-r from-[#006472] via-[#39ffd5] to-[#90fbe4] 
                         bg-clip-text text-transparent"
            >
              Where Ideas Meet Innovation
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "140px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-[#006472] to-[#39ffd5] rounded-full mx-auto mb-6"
            />

            {section?.description && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse of our creative work and projects delivered with passion.
              </p>
            )}
          </motion.div>
        )}

        {/* ✅ Portfolio Items with Video */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video bg-muted/20">
                {item.type === 'video' && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                )}

                {item.type === 'video' && (
                  <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#39ffd5]/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#006472] ml-1" />
                      </div>
                    </div>
                    {item.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-sm text-white">
                        {item.duration}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-[#006472] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" className="bg-gradient-to-r from-[#006472] via-[#39ffd5] to-[#90fbe4] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

