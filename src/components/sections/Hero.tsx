import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const Hero = () => {
  const featuredProject = projects[0];

  return (
    <section className="relative h-screen min-h-[600px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredProject.heroImage}
          alt={featuredProject.name}
          className="img-editorial"
        />
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-gutter pb-section w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-body-lg text-primary-foreground max-w-xl font-light"
        >
          Context-driven architecture rooted in experience, climate, and place.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;