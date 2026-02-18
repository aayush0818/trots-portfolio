import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, Instagram, Linkedin } from "lucide-react";
import trotsLogo from "@/assets/trots-logo.png";

// Curated hero images - landscape-friendly compositions
import gvknHero from "@/assets/gvkn-residence-hero.jpg";
import gvknTerrace from "@/assets/gvkn-terrace-1.jpg";
import basavaraj2 from "@/assets/basavaraj-2.jpg";
import carouselStaircase from "@/assets/carousel-staircase.png";
import carouselArtNiche from "@/assets/carousel-art-niche.png";
import carouselDining from "@/assets/carousel-dining.png";
import carouselBedroom from "@/assets/carousel-bedroom.png";
import carouselExterior from "@/assets/carousel-exterior.png";
import carouselDecorNiche from "@/assets/carousel-decor-niche.jpg";
import carouselStairwellTop from "@/assets/carousel-stairwell-top.jpg";
import carouselExteriorStreet from "@/assets/carousel-exterior-street.jpg";

const heroImages = [
  gvknHero,
  carouselStairwellTop,
  carouselStaircase,
  gvknTerrace,
  carouselDining,
  basavaraj2,
  carouselBedroom,
  carouselExteriorStreet,
  carouselArtNiche,
  carouselExterior,
  carouselDecorNiche,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 2500); // Faster: 2.5 seconds per slide
    return () => clearInterval(timer);
  }, [nextSlide]);

  const navItems = [
    { name: "Work", path: "/works" },
    { name: "Studio", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <section className="relative h-screen h-[100dvh] min-h-[500px] overflow-hidden bg-black">
      {/* Background Images - Smooth crossfade with slow zoom */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0 
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt="Architecture"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      {/* Navigation */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 md:px-12 py-4 sm:py-6"
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={trotsLogo}
              alt="Trots"
              className="w-10 sm:w-14 h-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span 
              className="text-sm sm:text-lg text-white tracking-wide"
              style={{ fontFamily: "'Sansation', sans-serif", fontWeight: 300 }}
            >
              Tro.ts Architects
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-1"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 md:hidden flex items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-2xl p-2"
            >
              ×
            </button>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl sm:text-3xl text-white"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar: Copyright, indicators, social icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between"
      >
        {/* Copyright */}
        <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/60">
          © {new Date().getFullYear()} Trots
        </p>

        {/* Slide indicators - centered on mobile, simplified */}
        <div className="flex gap-2 sm:gap-3 mx-auto sm:mx-0">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] transition-all duration-700 ${
                index === currentIndex 
                  ? "w-5 sm:w-8 bg-white" 
                  : "w-2 sm:w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href="https://www.instagram.com/trots.architects?igsh=MWowaGlpaHk3azhzOA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/company/tro-ts-architects/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
