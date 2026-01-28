import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Works = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="px-gutter pb-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-block"
          >
            <h1 className="font-serif text-display text-foreground">
              Works
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-block">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Works;