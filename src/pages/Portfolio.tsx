"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Sparkles, Bot, type LucideIcon, PlayCircle } from "lucide-react"

interface Video {
  id: string
  title: string
  url: string
}

interface Section {
  id: string
  title: string
  icon: LucideIcon
  description: string
  ref: React.RefObject<HTMLDivElement>
  videos?: Video[]
  images?: string[]
}

interface ApiItem {
  id: string
  title: string
  type: "video" | "image"
  media_url: string
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("essential")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const essentialRef = useRef<HTMLDivElement>(null)
  const impactRef = useRef<HTMLDivElement>(null)
  const signatureRef = useRef<HTMLDivElement>(null)
  const aiRef = useRef<HTMLDivElement>(null)

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
        { id: "video5", title: "Essential Video 5", url: "https://youtu.be/wY_ESA9IckY?si=I39aZZNa6pkGKEgP" },
        { id: "video6", title: "Essential Video 6", url: "https://youtu.be/uozLKnvfXuk?si=nDFDTMwgUgb-4zM4" },
        { id: "video7", title: "Essential Video 7", url: "https://youtu.be/Ojsr1aJ2oko?si=6MY8iDHseVWpMWSD" },
      ],
    },
    {
      id: "impact",
      title: "Impact",
      icon: Zap,
      description: "Revolutionary solutions that transform businesses completely",
      ref: impactRef,
      videos: [
        { id: "video8", title: "Impact Video 1", url: "https://youtu.be/qwIQ0fdW8Dc?si=_Y5IB1K2s80EAYP7" },
        { id: "video9", title: "Impact Video 2", url: "https://youtu.be/cRaZvU_zBEs?si=xh5TLqyYGeUcRnB5" },
        { id: "video10", title: "Impact Video 3", url: "https://youtu.be/Rc-6Mr_cXLU?si=l1mHCuugCJLqJw4_" },
        { id: "video11", title: "Impact Video 4", url: "https://youtu.be/9lZgKxmObUg?si=j0up1BlGRh7IBJqd" },
        { id: "video12", title: "Impact Video 5", url: "https://youtu.be/qzxm7bcvm5E?si=PNHTdwOUPGdc-kJm" },
        { id: "video13", title: "Impact Video 6", url: "https://youtu.be/EvF8XauMGq0?si=PNq_K3LY_hDqm0C5" },
        { id: "video14", title: "Impact Video 7", url: "https://youtu.be/WRF-yre1Cyw?si=WIFESlLOySyEdSed" },
      ],
    },
    {
      id: "signature",
      title: "Signature",
      icon: Sparkles,
      description: "Premium experiences crafted with attention to every detail",
      ref: signatureRef,
      videos: [
        { id: "video15", title: "Signature Video 1", url: "https://youtu.be/Qq9NzrMpWw8?si=rz2E29tCS2QJ64UB" },
        { id: "video16", title: "Signature Video 2", url: "https://youtu.be/L2SPqda_kSQ?si=1Fue3algw2nUkcip" },
        { id: "video17", title: "Signature Video 3", url: "https://youtu.be/kfNN-n93-ho?si=T-m6x3jajVOwBGCR" },
        { id: "video18", title: "Signature Video 4", url: "https://youtu.be/KtU1ZogD0MY?si=EYP7aVxh3G5gscjS" },
        { id: "video19", title: "Signature Video 5", url: "https://youtu.be/g_KfFz_5XrA?si=daJ056LlS3Q9t3q-" },
        { id: "video20", title: "Signature Video 6", url: "https://youtu.be/Scxbta8XWNo?si=ENRnY1PhPCbaqAig" },
        { id: "video21", title: "Signature Video 7", url: "https://youtu.be/Qq9NzrMpWw8?si=dwwmxb8gbW5hpJ5E" },
      ],
    },
    {
      id: "ai-generated",
      title: "AI Generated Images",
      icon: Bot,
      description: "Cutting-edge AI-powered visual content and automation",
      ref: aiRef,
      images:[
      "/portfolio-images/3.jpg",
      "/portfolio-images/4.jpg",
      "/portfolio-images/5.jpg",
      "/portfolio-images/6.jpg",
      "/portfolio-images/LUX 1.jpg",
      "/portfolio-images/LUX 2.jpg",
      "/portfolio-images/LUX 3.jpg",
      "/portfolio-images/LUX 4.jpg",
      "/portfolio-images/LUX 5.jpg",
      "/portfolio-images/LUX 6.jpg",
      "/portfolio-images/LUX 7.jpg",
      "/portfolio-images/LUX 8.jpg",
      "/portfolio-images/LUX 9.jpg",
      "/portfolio-images/LUX 10.jpg",
      "/portfolio-images/LUX 11.jpg",


      ],
    },
  ])

  const HorizontalScrollSection = ({ section }: { section: Section }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
      const container = containerRef.current
      if (!container) return

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft
        const maxScroll = container.scrollWidth - container.clientWidth
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0
        setScrollProgress(progress)
      }

      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }, [])

    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault()
      const container = containerRef.current
      if (container) {
        container.scrollLeft += e.deltaY
      }
    }

    return (
      <motion.div
        ref={section.ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <motion.h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3 relative overflow-hidden px-6">
          <section.icon />
          {section.title}
          <motion.div
            className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.h2>
        <p className="text-muted-foreground mb-6 px-6">{section.description}</p>

        <div
          ref={containerRef}
          onWheel={handleWheel}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {section.videos?.map((video, idx) => {
            const thumbnail = getYouTubeThumbnail(video.url)
            return (
              <motion.div
                key={video.id || idx}
                className="relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 snap-start"
                onClick={() => window.open(video.url, "_blank")}
                initial={{ scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ width: "280px", height: "157px" }}
              >
                <div className="relative w-full h-full bg-gray-800">
                  <img src={thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#39ffd5]/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-[#39ffd5] opacity-90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="text-white font-semibold text-sm group-hover:text-[#39ffd5] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {section.images?.map((image, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 snap-start"
              initial={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ width: "200px", height: "300px" }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`AI Generated ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <h3 className="text-white font-semibold text-sm group-hover:text-[#39ffd5] transition-colors">
                  AI Generated Image {idx + 1}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-6 mt-4">
          <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-400 to-green-400 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              className="absolute top-1/2 w-3 h-3 bg-gradient-to-r from-teal-400 to-green-400 rounded-full shadow-lg transform -translate-y-1/2"
              style={{
                left: `${scrollProgress * 100}%`,
                boxShadow: "0 0 10px rgba(20, 184, 166, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </motion.div>
    )
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const getYouTubeThumbnail = (url: string): string => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/)
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    }
    return "/placeholder.svg"
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#001a1a] font-sans">
      <div className="fixed inset-0 z-0">
        <img src="/background.jpeg" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#006472]/60 via-black/70 to-[#39ffd5]/40 animate-gradient-move" />
      </div>

      <div className="fixed inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#39ffd5]/20 rounded-full blur-3xl"
          animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#90fbe4]/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#006472]/10 rounded-full blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 60, ease: "linear" }}
        />
      </div>

      <div className="fixed inset-0 z-5 pointer-events-none bg-grid-pattern opacity-10"></div>

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

      <section className="py-10 max-w-full mx-auto relative z-20">
        {portfolioSections.map((section) => (
          <HorizontalScrollSection key={section.id} section={section} />
        ))}
      </section>

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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
