"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
}

interface VideoSectionProps {
  videos?: Video[];
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos, className }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sampleVideos: Video[] = [
    { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up" },
    { id: "3JZ_D3ELwOQ", title: "Ed Sheeran - Shape of You" },
    { id: "L_jWHffIx5E", title: "Smash Mouth - All Star" },
    { id: "kXYiU_JCYtU", title: "Linkin Park - Numb" },
    { id: "fJ9rUzIMcZQ", title: "Queen – Bohemian Rhapsody" },
    { id: "eVTXPUF4Oz4", title: "Evanescence - Bring Me To Life" },
    { id: "hTWKbfoikeg", title: "Nirvana - Smells Like Teen Spirit" },
    { id: "ktvTqknDobU", title: "Imagine Dragons - Radioactive" },
  ];

  const videoList = videos || sampleVideos;

  // Calculate dynamic drag width
  useEffect(() => {
    if (containerRef.current) {
      const totalScrollWidth = containerRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      setDragWidth(totalScrollWidth - visibleWidth);
    }
  }, [videoList]);

  return (
    <div className={`space-y-8 relative ${className || ''}`}>
      <div className="text-center mb-6">
        <motion.h3
          className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-aqua-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Success Stories & Case Studies
        </motion.h3>
      </div>

      {/* Sliding bar container */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 cursor-grab px-4 py-2 overflow-hidden"
        drag="x"
        dragConstraints={{ left: -dragWidth, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {videoList.map((video, index) => (
          <motion.div
            key={video.id}
            className="min-w-[250px] flex-shrink-0"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="relative overflow-hidden backdrop-blur-xl bg-white/10 border-white/20 shadow-lg transition-all duration-300">
              <div
                className="relative aspect-video bg-gradient-to-br from-teal-500/20 to-aqua-400/20 cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/20"
                      animate={{ opacity: hoveredIndex === index ? 0.3 : 0.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-aqua-400 flex items-center justify-center shadow-lg"
                        animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm text-gray-800 mb-1">{video.title}</h4>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-teal-200 hover:bg-teal-50 text-xs"
                  onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
                >
                  Watch on YouTube <ExternalLink className="ml-1 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoSection;
