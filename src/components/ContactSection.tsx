import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Facebook, ArrowUp } from "lucide-react";

const ContactSection = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow us on social media for the latest updates, behind-the-scenes content, and examples of our AI video creations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center items-start">
          {/* Contact Info */}
          <div className="glass-card rounded-3xl p-8 bg-white/10 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Connect with us</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/eleviquecreations"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gradient-cosmic/20 rounded-xl hover:bg-gradient-cosmic/30 transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="ml-2 text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61572559022754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gradient-cosmic/20 rounded-xl hover:bg-gradient-cosmic/30 transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                <span className="ml-2 text-sm font-medium">Facebook</span>
              </a>

              {/* Fixed Phone Section placed in WhatsApp's position */}
              {/* Fixed Phone Section */}
<div className="flex items-center justify-center gap-2 p-4 bg-muted/10 rounded-xl">
  <Phone className="w-6 h-6 text-muted-foreground" />
  <span className="text-sm font-medium text-muted-foreground">
    +91 72178 32613
  </span>
</div>


            </div>
          </div>

          {/* Quick Response */}
          <div className="glass-card rounded-3xl p-8 bg-white/10 backdrop-blur-md border border-white/10 text-center">
            <h4 className="text-xl font-bold mb-4 text-foreground">Quick Response</h4>
            <p className="text-muted-foreground mb-6">
              Need immediate assistance? WhatsApp us for the fastest response!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-button rounded-xl font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <Button
            className="bg-gradient-button hover:opacity-90 transition-all duration-300 flex items-center space-x-2"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-5 h-5" />
            <span>Back to Top</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
