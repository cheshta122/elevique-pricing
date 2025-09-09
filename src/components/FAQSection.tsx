import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes eleVique's AI videos different from traditional video production?",
      answer: "Our AI-powered approach eliminates the need for expensive shoots, crew, and locations while delivering cinematic quality results. We create realistic AI characters and scenarios that look professional and engaging, saving you lakhs in production costs while maintaining broadcast-quality standards."
    },
    {
      question: "How long does it take to create an AI video?",
      answer: "Our turnaround times vary by package: Essential videos typically take 3-5 business days, Impact videos take 5-7 business days, and Signature videos take 7-14 business days. We provide regular updates throughout the process and ensure you're involved in key approval stages."
    },
    {
      question: "Can I request revisions to my video?",
      answer: "Absolutely! Each package includes free revisions: Essential (1 revision), Impact (2 revisions), and Signature (3 revisions). We want to ensure you're completely satisfied with the final result. Additional revisions beyond the included count are available at a nominal fee."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "We'll need your brand assets (logo, product images/references), key messaging or script ideas, and any specific visual preferences. Our team will guide you through a detailed brief to ensure we capture your brand's essence perfectly in the AI-generated content."
    },
    {
      question: "Are the AI videos suitable for all social media platforms?",
      answer: "Yes! We optimize videos for various platforms including Instagram (including 4:5 ratio for Impact and Signature packages), Facebook, YouTube, LinkedIn, and more. We can provide multiple format exports to ensure your content looks perfect across all your marketing channels."
    },
    {
      question: "How do you ensure the AI characters look realistic and on-brand?",
      answer: "We use cutting-edge AI technology combined with careful art direction to create characters that align with your brand identity. Our team fine-tunes every detail from appearance to expressions, ensuring the AI characters feel authentic and represent your brand values effectively."
    }
  ];

  return (
    <section id="faq" className="relative py-20 px-6 overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        src="/background-video1.mp4"   // Replace with your video file path
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-cosmic flex items-center justify-center animate-float">
            <HelpCircle className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI video creation process
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 bg-black/60 backdrop-blur-md">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl px-6 glass-morphism bg-black/50"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 text-lg font-medium py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-button rounded-xl font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
