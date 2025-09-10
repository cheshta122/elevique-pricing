"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Sparkles, Bot, LucideIcon, PlayCircle } from "lucide-react";

import ImageGallery from "@/components/ImageGallery";

interface Video {
  id: string;
  title: string;
  url: string;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  ref: React.RefObject<HTMLDivElement>;
  videos?: Video[];
  images?: string[];
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("essential");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const essentialRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  const portfolioSections: Section[] = [
    {
      id: "essential",
      title: "Essential",
      icon: Star,
      description: "Core solutions that form the foundation of digital excellence",
      ref: essentialRef,
      videos: [
        { id: "video1", title: "Essential Video 1", url: "https://youtu.be/QTcSLYvHHFc?si=LE2IYqKBo3VQDu5L" },
        { id: "video2", title: "Essential Video 2", url: "https://youtu.be/e5p44ED1UpM?si=hRgpAmpWQpHq4t4K" },
        { id: "video3", title: "Essential Video 3", url: "https://youtu.be/n-gsp7mfDoo?si=P99Uu04GJ9AwRRzh" },
        { id: "video4", title: "Essential Video 4", url: "https://youtu.be/O9Q06AIOrfQ?si=4whzvHNIXvkGU9N_" },
      ],
    },
    {
      id: "impact",
      title: "Impact",
      icon: Zap,
      description: "Revolutionary solutions that transform businesses completely",
      ref: impactRef,
      videos: [
        { id: "video5", title: "Impact Video 1", url: "https://youtu.be/qwIQ0fdW8Dc?si=_Y5IB1K2s80EAYP7" },
        { id: "video6", title: "Impact Video 2", url: "https://youtu.be/cRaZvU_zBEs?si=xh5TLqyYGeUcRnB5" },
        { id: "video7", title: "Impact Video 3", url: "https://youtu.be/Rc-6Mr_cXLU?si=l1mHCuugCJLqJw4_" },
        { id: "video8", title: "Impact Video 4", url: "https://youtu.be/9lZgKxmObUg?si=j0up1BlGRh7IBJqd" },
      ],
    },
    {
      id: "signature",
      title: "Signature",
      icon: Sparkles,
      description: "Premium experiences crafted with attention to every detail",
      ref: signatureRef,
      videos: [
        { id: "video9", title: "Signature Video 1", url: "https://youtu.be/Qq9NzrMpWw8?si=rz2E29tCS2QJ64UB" },
        { id: "video10", title: "Signature Video 2", url: "https://youtu.be/L2SPqda_kSQ?si=1Fue3algw2nUkcip" },
        { id: "video11", title: "Signature Video 3", url: "https://youtu.be/kfNN-n93-ho?si=T-m6x3jajVOwBGCR" },
        { id: "video12", title: "Signature Video 4", url: "https://youtu.be/KtU1ZogD0MY?si=EYP7aVxh3G5gscjS" },
      ],
    },
    {
      id: "ai-generated",
      title: "AI Generated Images",
      icon: Bot,
      description: "Cutting-edge AI-powered visual content and automation",
      ref: aiRef,
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1676573409812-1596cfa3ab2f?w=500&h=400&fit=crop",
      ],
    },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#001a1a] font-sans">
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#006472]/60 via-black/70 to-[#39ffd5]/40 animate-gradient-move" />
      </div>

      <div className="fixed inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#39ffd5]/20 rounded-full blur-3xl"
          animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#90fbe4]/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 text-center py-6">
        {portfolioSections.map((section) => (
          <Badge
            key={section.id}
            className={`px-6 py-2 text-sm font-medium cursor-pointer m-2 transition-all duration-300 transform hover:scale-105 ${
              activeSection === section.id
                ? "bg-gradient-to-r from-[#006472] to-[#39ffd5] text-white shadow-lg"
                : "bg-white/20 backdrop-blur-md text-[#90fbe4] hover:bg-white/30"
            }`}
            onClick={() => {
              setActiveSection(section.id);
              scrollToSection(section.ref);
            }}
          >
            <section.icon className="w-4 h-4 mr-2" />
            {section.title}
          </Badge>
        ))}
      </div>

      <section className="py-10 px-6 max-w-6xl mx-auto grid gap-10 relative z-20">
        {portfolioSections.map((section, i) => (
          <motion.div
            key={section.id}
            ref={section.ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#39ffd5] via-[#90fbe4] to-white bg-clip-text text-transparent animate-gradient-x">
                {section.title}
              </span>
            </h2>

            <p className="text-center text-[#90fbe4] max-w-2xl mx-auto mb-4 font-medium tracking-wide text-lg">
              {section.description}
            </p>

            {section.videos && (
              <div className="relative z-10 py-4 overflow-x-auto overflow-y-hidden scrollbar-custom">
                <div className="flex gap-6 whitespace-nowrap px-2">
                  {section.videos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="inline-block min-w-[250px]"
                    >
                      <div
                        onClick={() => window.open(video.url, "_blank")}
                        className="relative bg-black/60 border-[#39ffd5]/20 backdrop-blur-sm overflow-hidden group rounded-lg p-4 cursor-pointer"
                      >
                        <motion.div
                          animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center justify-center h-full space-y-4"
                        >
                          <PlayCircle className="w-12 h-12 text-[#39ffd5]" />
                          <h3 className="text-white text-lg font-semibold text-center">
                            {video.title}
                          </h3>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {section.images && <ImageGallery images={section.images} />}

            <div className="mt-4 text-center">
              <button
                className="px-8 py-3 rounded-lg bg-[#006472] text-white hover:bg-[#39ffd5] transition-all shadow-lg hover:shadow-[#39ffd5]/40 font-semibold"
                onClick={() => {
                  const pricingSection = document.getElementById("pricing");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#pricing";
                  }
                }}
              >
                Pricing
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.div
        className="fixed bottom-8 right-8 z-30"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#006472] to-[#39ffd5] shadow-2xl hover:shadow-[#90fbe4]/50 transition-all duration-300 transform hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Bot className="w-6 h-6" />
        </button>
      </motion.div>

      <style>{`
        @keyframes gradient-move {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 12s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: #006472;
          border-radius: 4px;
        }
        .scrollbar-custom {
          scrollbar-color: #006472 transparent;
          scrollbar-width: thin;
        }
      `}</style>
    </div>
  );
}
