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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              eleVique — AI Images Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional AI-generated images for your brand with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {imagePackages.map((pkg, index) => {
            // WhatsApp link for this package
            const whatsappLink = `https://api.whatsapp.com/send/?phone=917217832613&text=I'm%20interested%20in%20the%20${pkg.count}%20AI%20images%20package&type=phone_number&app_absent=0`;

            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 relative group hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#39ffd5]/20 to-[#90fbe4]/20 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-[#39ffd5]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Image Package</h3>
                  <p className="text-muted-foreground text-sm mb-2">{pkg.count} AI images</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                    <p className="text-gray-300 text-sm mb-1">Default Templates</p>
                    <p className="text-white text-xl font-bold">₹ {pkg.defaultPrice.toLocaleString()}</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-[#39ffd5]/30">
                    <p className="text-gray-300 text-sm mb-1">Custom Concepts</p>
                    <p className="text-[#39ffd5] text-xl font-bold">₹ {pkg.customPrice.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex-grow"></div>

                {/* ✅ Fixed WhatsApp Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-button hover:opacity-90 transition-all duration-300 mt-auto"
                  size="lg"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center"
                  >
                    Explore
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
