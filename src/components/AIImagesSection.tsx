import React from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

const imagePackages = [
  { count: 5, defaultPrice: 3750, customPrice: 6000 },
  { count: 10, defaultPrice: 7000, customPrice: 10000 },
  { count: 15, defaultPrice: 9000, customPrice: 13500 },
  { count: 20, defaultPrice: 10000, customPrice: 16000 },
];

export default function AIImagesSection() {
  return (
    <section id="ai-images" className="relative py-20 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background-video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to darken video slightly */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        

        {/* Table Form for Packages */}
        <div className="glass-card rounded-3xl p-6 relative group hover:scale-105 transition-all duration-300 mx-auto max-w-7xl animate-fadeIn delay-400">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#39ffd5]/20 to-[#90fbe4]/20 flex items-center justify-center animate-float">
              <ImageIcon className="w-8 h-8 text-[#39ffd5]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Image Packages</h3>
            <p className="text-muted-foreground text-sm mb-2">Choose from multiple AI image plans</p>
          </div>

         <div className="overflow-hidden rounded-xl border border-gray-700/50 mb-4 animate-fadeIn max-w-4xl mx-auto">
  <table className="w-full text-left">
    <thead>
      <tr className="bg-gray-900/50 border-b border-gray-700/50">
        <th className="p-3 text-gray-200 font-semibold">Package</th>
        <th className="p-3 text-gray-200 font-semibold text-center">Images</th>
        <th className="p-3 text-gray-200 font-semibold text-center">Default Templates</th>
        <th className="p-3 text-gray-200 font-semibold text-center">Custom Concepts</th>
      </tr>
    </thead>
    <tbody>
      {imagePackages.map((pkg, index) => (
        <tr
          key={index}
          className="bg-gray-900/30 border-b border-gray-700/30 hover:bg-gray-800/40 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <td className="p-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#39ffd5]/30 flex items-center justify-center animate-float">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
          </td>
          <td className="p-3 text-center text-sm">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#39ffd5]/20 border border-[#39ffd5]/40">
              {pkg.count} 
            </span>
          </td>
          <td className="p-3 text-center text-white font-semibold text-sm">₹ {pkg.defaultPrice.toLocaleString()}</td>
          <td className="p-3 text-center text-[#39ffd5] font-semibold text-sm animate-glow">
            ₹ {pkg.customPrice.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          

          {/* Centered Explore Button with Animation */}
<div className="flex justify-center mt-6 animate-fadeIn delay-600">
  <Button
    asChild
    className="px-6 py-2 bg-gradient-to-r from-[#39ffd5] to-[#90fbe4] text-black font-semibold rounded-lg 
               transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:brightness-110"
    size="sm"
  >
    <a
      href="https://elevique.in/ai-photos/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center"
    >
      Explore
    </a>
  </Button>
</div>

        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%,100% { text-shadow: 0 0 5px rgba(57,255,213,0.3); }
          50% { text-shadow: 0 0 15px rgba(57,255,213,0.6); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}
      </style>
    </section>
  );
}
