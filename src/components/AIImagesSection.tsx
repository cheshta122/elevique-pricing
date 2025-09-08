"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"

const imagePackages = [
  { count: 5, defaultPrice: 3750, customPrice: 6000 },
  { count: 10, defaultPrice: 7000, customPrice: 10000 },
  { count: 15, defaultPrice: 9000, customPrice: 13500 },
  { count: 20, defaultPrice: 10000, customPrice: 16000 },
]

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=917217832613&text=I'm%20interested%20in%20your%20AI%20Images%20packages&type=phone_number&app_absent=0"

export default function AIImagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="ai-images" className="relative overflow-hidden min-h-screen flex items-stretch">
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(57,255,213,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,213,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-stretch">

        {/* Left Side - Image only */}
        <div className="relative w-1/2 hidden md:block">
          <motion.img
            src="/image1.png"
            alt="Background Image 1"
            initial={{ y: 0 }}
            animate={{ y: [0, 40, 0] }}   // Increased movement for more noticeable animation
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-100px] left-0 w-full h-[calc(100%+200px)] object-cover opacity-40 pointer-events-none" // Darker opacity
          />
        </div>

        {/* Right Side - Pricing and content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 relative overflow-hidden">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12 relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-sans">
              AI IMAGES
              <span className="block text-[#39ffd5] mt-2">PACKAGES</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-lg">
              Professional AI-generated images for your brand with cutting-edge technology
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl relative z-10">
            {imagePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative"
              >
                <Card className="relative bg-black/60 border-[#39ffd5]/20 backdrop-blur-sm overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#39ffd5]/20 via-transparent to-[#39ffd5]/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      background:
                        hoveredCard === index
                          ? "linear-gradient(45deg, rgba(57,255,213,0.2), rgba(57,255,213,0.1), rgba(57,255,213,0.2))"
                          : "linear-gradient(45deg, transparent, transparent, transparent)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <CardContent className="p-6 relative z-10">
                    <div className="text-center mb-6">
                      <motion.div
                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#39ffd5]/20 to-[#90fbe4]/20 flex items-center justify-center group-hover:animate-pulse"
                      >
                        <ImageIcon className="w-8 h-8 text-[#39ffd5]" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl font-bold text-[#39ffd5] mb-2"
                      >
                        {pkg.count}
                      </motion.div>
                      <p className="text-white text-sm uppercase tracking-wider">Images</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                        <p className="text-gray-300 text-sm mb-1">Default Templates</p>
                        <p className="text-white text-xl font-bold">
                          ₹ {pkg.defaultPrice.toLocaleString()}
                        </p>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-4 border border-[#39ffd5]/30">
                        <p className="text-gray-300 text-sm mb-1">Custom Concepts</p>
                        <p className="text-[#39ffd5] text-xl font-bold">
                          ₹ {pkg.customPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-[#39ffd5] to-[#90fbe4] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#39ffd5]/25 hover:from-[#90fbe4] hover:to-[#39ffd5]"
                      >
                        Buy Now
                      </motion.button>
                    </a>
                  </CardContent>

                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#39ffd5] opacity-50" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#39ffd5] opacity-50" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#39ffd5] opacity-50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#39ffd5] opacity-50" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
