import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  const galleryImages = project.images.slice(1);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image with Title Overlay */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-8">
            <h1 className="font-serif text-3xl md:text-5xl text-white">
              {project.name}
            </h1>
          </div>
        </section>

        {/* Two Column Layout: Details + Featured Image */}
        <section className="px-8 md:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Left Column: Project Details */}
            <div>
              <Link
                to="/works"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Works
              </Link>

              <h2 className="font-serif text-xl mb-6 text-foreground">
                Project Details
              </h2>

              {/* Fact File */}
              <div className="space-y-3 mb-10 text-sm">
                <div className="flex">
                  <span className="w-32 text-muted-foreground uppercase tracking-wider text-xs">
                    Project Name
                  </span>
                  <span className="text-foreground">{project.name}</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-muted-foreground uppercase tracking-wider text-xs">
                    Project Type
                  </span>
                  <span className="text-foreground">{project.type}</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-muted-foreground uppercase tracking-wider text-xs">
                    Location
                  </span>
                  <span className="text-foreground">{project.location}</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-muted-foreground uppercase tracking-wider text-xs">
                    Architect
                  </span>
                  <span className="text-foreground">Trots Architects</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-muted-foreground uppercase tracking-wider text-xs">
                    Status
                  </span>
                  <span className="text-foreground">Completed</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Column: Featured Image */}
            {project.images[1] && (
              <div>
                <img
                  src={project.images[1]}
                  alt={`${project.name} - Featured`}
                  className="w-full h-auto"
                />
              </div>
            )}
          </motion.div>
        </section>

        {/* Image Gallery with Carousel */}
        {galleryImages.length > 0 && (
          <section className="px-8 md:px-16 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Main Image with Navigation */}
              <div className="relative mb-6">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`${project.name} - Image ${selectedImage + 2}`}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />
                
                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 transition-opacity ${
                        selectedImage === index
                          ? "opacity-100 ring-2 ring-foreground"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.name} - Thumbnail ${index + 2}`}
                        className="w-20 h-14 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
