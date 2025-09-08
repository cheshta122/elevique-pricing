import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Download, Eye } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={`space-y-8 ${className || ''}`}>
      <div className="text-center mb-12">
        <motion.h3 
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-aqua-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AI-Generated Visual Content
        </motion.h3>
        <p className="text-gray-600 text-lg">Cutting-edge artificial intelligence meets creative excellence</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group cursor-pointer"
          >
            <Card className="overflow-hidden backdrop-blur-xl bg-white/10 border-white/20 shadow-xl hover:shadow-aqua-400/30 transition-all duration-500">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`AI Generated Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-white"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-white"
                      onClick={() => window.open(image, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-aqua-400/50 rounded-lg transition-colors duration-300" />
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-1">AI Creation {index + 1}</h4>
                <p className="text-sm text-gray-600">Generated with advanced AI algorithms</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="AI Generated Image"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border-white/20 hover:bg-black/70 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      
    </div>
  );
}

export default ImageGallery;
