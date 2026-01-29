import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import trotsLogo from "@/assets/trots-logo.png";

// Curated hero images - landscape-friendly compositions
import gvknHero from "@/assets/gvkn-residence-hero.jpg";
import gvknTerrace from "@/assets/gvkn-terrace-1.jpg";
import gvknDining from "@/assets/gvkn-dining.jpg";
import basavaraj1 from "@/assets/basavaraj-1.jpg";
import basavaraj2 from "@/assets/basavaraj-2.jpg";

const heroImages = [
  { image: gvknHero, name: "GVKN Residence", location: "Bengaluru" },
  { image: basavaraj1, name: "Basavaraj Residence", location: "Bengaluru" },
  { image: gvknTerrace, name: "GVKN Residence", location: "Bengaluru" },
  { image: basavaraj2, name: "Basavaraj Residence", location: "Bengaluru" },
  { image: gvknDining, name: "GVKN Residence", location: "Bengaluru" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      x: direction < 0 ? 100 : -100,
    }),
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 8, ease: "linear" }}
            src={heroImages[currentIndex].image}
            alt={heroImages[currentIndex].name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Top Navigation */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 right-0 z-20 px-6 md:px-10 py-5 md:py-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={trotsLogo}
              alt="Trots Architects"
              className="w-10 md:w-12 h-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-serif text-base md:text-lg text-white tracking-wide">
              Trots Architects
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { name: "Work", path: "/works" },
              { name: "Studio", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
              >
                <Link
                  to={item.path}
                  className="relative text-xs uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Current project info - bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-24 md:bottom-16 left-6 md:left-10 z-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
              Featured Project
            </p>
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-1">
              {heroImages[currentIndex].name}
            </h2>
            <p className="text-sm text-white/70">
              {heroImages[currentIndex].location}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Bottom bar */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-6 right-6 md:left-10 md:right-10 z-20 flex items-end justify-between"
      >
        {/* Copyright - Left */}
        <p className="hidden md:block text-[11px] text-white/50 uppercase tracking-wider">
          © {new Date().getFullYear()} Trots Architects
        </p>

        {/* Navigation - Center */}
        <div className="flex items-center gap-3 md:gap-4 mx-auto md:mx-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="relative h-1 overflow-hidden"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-6 md:w-8 h-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`} />
                {index === currentIndex && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-white origin-left"
                  />
                )}
              </button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Social Icons - Right */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
