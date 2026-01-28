import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = projects.map((p) => ({ image: p.heroImage, name: p.name, location: p.location }));

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
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-foreground/10" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Tagline */}
        <div className="px-gutter pt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-body-lg text-primary-foreground max-w-xl font-light"
          >
            Context-driven architecture rooted in experience, climate, and place.
          </motion.p>
        </div>

        {/* Bottom controls */}
        <div className="px-gutter pb-12 flex items-end justify-between">
          {/* Project info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-primary-foreground"
          >
            <h2 className="font-serif text-subhead">{heroImages[currentIndex].name}</h2>
            <p className="text-caption opacity-80">{heroImages[currentIndex].location}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {/* Dots */}
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

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
