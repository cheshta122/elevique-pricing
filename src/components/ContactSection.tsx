import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Phone, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand with AI-powered videos? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="mt-2 bg-muted/20 border-white/10 focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2 bg-muted/20 border-white/10 focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="mt-2 bg-muted/20 border-white/10 focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-button hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect with us</h3>
              <p className="text-muted-foreground mb-8">
                Follow us on social media for the latest updates, behind-the-scenes content, and examples of our AI video creations.
              </p>

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
                  href="https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gradient-cosmic/20 rounded-xl hover:bg-gradient-cosmic/30 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  <span className="ml-2 text-sm font-medium">WhatsApp</span>
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

                <div className="flex items-center justify-center p-4 bg-muted/10 rounded-xl">
                  <Phone className="w-6 h-6 text-muted-foreground" />
                  <span className="ml-2 text-sm font-medium text-muted-foreground">+91 72178 32613</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 text-center">
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
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
              
              <p className="text-sm text-muted-foreground mt-4">
                We typically respond within 2-4 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;