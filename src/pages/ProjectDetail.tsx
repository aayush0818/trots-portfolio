import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Image */}
        <section className="h-[70vh] min-h-[500px] relative">
          <img
            src={project.heroImage}
            alt={project.name}
            className="img-editorial"
          />
        </section>

        {/* Project Info */}
        <section className="px-gutter py-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Works
            </Link>

            <h1 className="font-serif text-display text-foreground mb-8">
              {project.name}
            </h1>

            {/* Fact File */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-block border-y border-divider py-8">
              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
                  Type
                </p>
                <p className="text-body text-foreground">{project.type}</p>
              </div>
              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
                  Location
                </p>
                <p className="text-body text-foreground">{project.location}</p>
              </div>
              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
                  Architect
                </p>
                <p className="text-body text-foreground">Trots Architects</p>
              </div>
              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
                  Status
                </p>
                <p className="text-body text-foreground">Completed</p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <section className="px-gutter pb-section">
            <div className="space-y-gutter">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <img
                    src={image}
                    alt={`${project.name} - Image ${index + 2}`}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;