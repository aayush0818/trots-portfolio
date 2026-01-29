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
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            Selected Work
          </h1>
        </motion.div>
      </section>

      {/* Projects Grid - Mobile optimized */}
      <main className="px-6 md:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link to={`/project/${project.id}`} className="group block relative overflow-hidden">
                {/* Image container */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Status badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <span className={`text-[10px] uppercase tracking-wider px-3 py-1.5 backdrop-blur-sm ${
                      project.status === "Completed" 
                        ? "bg-white/20 text-white" 
                        : "bg-white/10 text-white/80"
                    }`}>
                      {project.status}
                    </span>
                  </motion.div>
                </div>
                
                {/* Project Info - Overlaid */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">
                      {project.type}
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">
                      {project.name}
                    </h2>
                    <p className="text-sm text-white/70">
                      {project.location}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Works;
