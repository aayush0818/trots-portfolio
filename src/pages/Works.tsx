import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Works = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl md:text-6xl text-foreground"
        >
          Selected Work
        </motion.h1>
      </section>

      {/* Projects - Full Width Alternating Layout */}
      <main className="pb-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-1"
          >
            <Link to={`/project/${project.id}`} className="group block relative">
              {/* Full-width image */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              {/* Project Info - Overlaid at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">
                      {project.name}
                    </h2>
                    <p className="text-sm text-white/70">
                      {project.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-white/60">
                      {project.type}
                    </span>
                    <span className={`text-xs uppercase tracking-widest px-2 py-1 ${
                      project.status === "Completed" 
                        ? "text-white/80 border border-white/30" 
                        : "text-white/60 border border-white/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Works;
