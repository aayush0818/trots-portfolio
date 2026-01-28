import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const SelectedWorks = () => {
  // Show first 4 projects
  const selectedProjects = projects.slice(0, 4);

  return (
    <section className="px-gutter py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-block"
      >
        <h2 className="font-serif text-headline text-foreground">
          Selected Works
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-block">
        {selectedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-block text-center"
      >
        <Link
          to="/works"
          className="arch-link text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default SelectedWorks;