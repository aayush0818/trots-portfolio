import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link to={`/project/${project.id}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <img
            src={project.heroImage}
            alt={project.name}
            className="img-editorial transition-transform duration-slower ease-arch group-hover:scale-105"
          />
        </div>
        <div className="flex justify-between items-baseline">
          <h3 className="font-serif text-subhead text-foreground">
            {project.name}
          </h3>
          <span className="text-caption text-muted-foreground">
            {project.location}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;