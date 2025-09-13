"use client";

import React, { useState, useRef, useEffect } from "react";
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

interface ApiItem {
  id: string;
  title: string;
  type: "video" | "image";
  media_url: string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("essential");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const essentialRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  const [portfolioSections, setPortfolioSections] = useState<Section[]>([
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
  ]);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch("/api/portfolio");
        const data: ApiItem[] = await res.json();

        const updatedSections = [...portfolioSections];

        data.forEach((item) => {
          const section = updatedSections.find((s) =>
            item.type === "video" && s.videos ? s.id === s.id : s.images
          );

          if (section) {
            if (item.type === "video") {
              section.videos = section.videos
                ? [...section.videos, { id: item.id, title: item.title, url: item.media_url }]
                : [{ id: item.id, title: item.title, url: item.media_url }];
            }
            if (item.type === "image") {
              section.images = section.images ? [...section.images, item.media_url] : [item.media_url];
            }
          }
        });

        setPortfolioSections(updatedSections);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }

    fetchPortfolio();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getYouTubeThumbnail = (url: string): string => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return "/placeholder.svg";
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#001a1a] font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src="/background.jpeg" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#006472]/60 via-black/70 to-[#39ffd5]/40 animate-gradient-move" />
      </div>

      {/* Floating blobs */}
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
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#006472]/10 rounded-full blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 z-5 pointer-events-none bg-grid-pattern opacity-10"></div>

      {/* Section badges */}
      <div className="relative z-20 text-center py-6 flex justify-center gap-4 flex-wrap">
        {portfolioSections.map((section) => (
          <Badge
            key={section.id}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection(section.ref)}
          >
            {section.title}
          </Badge>
        ))}
      </div>

      {/* Sections */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid gap-20 relative z-20">
        {portfolioSections.map((section) => (
          <motion.div
            key={section.id}
            ref={section.ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-white mb-6 flex items-center gap-3 relative overflow-hidden"
            >
              <section.icon />
              {section.title}
              <motion.div
                className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.h2>
            <p className="text-muted-foreground mb-6">{section.description}</p>

            {section.videos && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {section.videos.map((video, idx) => {
                  const thumbnail = getYouTubeThumbnail(video.url);
                  return (
                    <motion.div
                      key={video.id || idx}
                      className="relative group cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => window.open(video.url, "_blank")}
                      initial={{ scale: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="relative aspect-video bg-gray-800">
                        <img src={thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#39ffd5]/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle className="w-12 h-12 text-[#39ffd5] opacity-90 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <h3 className="mt-2 text-white font-semibold text-center group-hover:text-[#39ffd5] transition-colors">
                        {video.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {section.images && <ImageGallery images={section.images} />}
          </motion.div>
        ))}
      </section>

      {/* Floating Bot */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="p-4 bg-[#39ffd5]/20 backdrop-blur-md rounded-full hover:scale-110 transition-transform">
          <Bot className="w-6 h-6 text-[#006472]" />
        </button>
      </motion.div>

      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 20s ease infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(#39ffd5 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
