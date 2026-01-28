import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
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

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 px-8 py-6 flex items-center justify-between">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={trotsLogo}
            alt="Trots Architects"
            className="w-12 h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="font-serif text-lg text-white tracking-wide">
            Trots Architects
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          <Link
            to="/works"
            className="text-caption text-white/80 hover:text-white transition-colors uppercase tracking-widest"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-caption text-white/80 hover:text-white transition-colors uppercase tracking-widest"
          >
            Studio
          </Link>
          <Link
            to="/contact"
            className="text-caption text-white/80 hover:text-white transition-colors uppercase tracking-widest"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between">
        {/* Copyright - Left */}
        <p className="text-micro text-white/70">
          © {new Date().getFullYear()} Trots Architects
        </p>

        {/* Navigation - Center */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
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
                    ? "bg-white w-6"
                    : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
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
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
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
