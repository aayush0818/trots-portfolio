import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import trotsLogo from "@/assets/trots-logo.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = projects.map((p) => ({ image: p.heroImage, name: p.name }));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Background Images */}
      {heroImages.map((item, index) => (
        <motion.div
          key={item.name}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="img-editorial"
          />
        </motion.div>
      ))}

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <img
          src={trotsLogo}
          alt="Trots Architects"
          className="w-16 h-auto brightness-0 invert"
        />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between">
        {/* Copyright - Left */}
        <p className="text-micro text-primary-foreground/80">
          © {new Date().getFullYear()} Trots Architects
        </p>

        {/* Navigation - Center */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-primary-foreground w-6"
                    : "bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Social Icons - Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
