import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

interface Video {
  id: string;
  title: string;
}

interface VideoSectionProps {
  videos: Video[];
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos, className }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className={`space-y-8 ${className || ''}`}>
      <div className="text-center mb-12">
        <motion.h3 
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-aqua-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Success Stories & Case Studies
        </motion.h3>

        {/* Extra description line removed */}
        {/* If you want to show section.description, you can uncomment below */}
        {/* <p className="text-center text-[#90fbe4] max-w-2xl mx-auto mb-4 font-medium tracking-wide text-lg">
            {section.description}
        </p> */}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="overflow-hidden backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl hover:shadow-aqua-400/20 transition-all duration-500">
              <div className="relative aspect-video bg-gradient-to-br from-teal-500/20 to-aqua-400/20">
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer group/play">
                    <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors duration-300" />
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute z-10"
                      onClick={() => setActiveVideo(video.id)}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-600 to-aqua-400 flex items-center justify-center shadow-2xl group-hover/play:shadow-aqua-400/50 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{video.title}</h4>
                    <p className="text-gray-600">Watch our transformation process in action</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 ml-4 border-teal-200 hover:bg-teal-50"
                    onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 text-teal-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
