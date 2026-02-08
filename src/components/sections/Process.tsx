import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Understanding & Discovery",
    description:
      "Deep engagement with clients to understand vision, lifestyle, functional needs, and aspirations.",
  },
  {
    number: "02",
    title: "Contextual Analysis",
    description:
      "Site study, climate response, spatial flow, and environmental considerations.",
  },
  {
    number: "03",
    title: "Concept Development",
    description:
      "Translating ideas into clear design concepts inspired by nature, light, and movement.",
  },
  {
    number: "04",
    title: "Design Development",
    description:
      "Detailed architectural and interior planning with material and spatial coherence.",
  },
  {
    number: "05",
    title: "Execution Support",
    description:
      "Design coordination and on-site involvement to ensure faithful realization of intent.",
  },
];

const Process = () => {
  return (
    <section className="px-gutter py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-block max-w-2xl"
      >
        <h2 className="font-serif text-headline text-foreground mb-4">
          Design Approach
        </h2>
        <p className="text-body text-muted-foreground">
          Our design process is context-driven and human-centric, responding to 
          climate, topography, lifestyle, and cultural narratives.
        </p>
      </motion.div>

      <div className="space-y-0 border-t border-divider">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="grid grid-cols-12 gap-4 py-8 border-b border-divider"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="text-micro text-muted-foreground">
                {step.number}
              </span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-serif text-subhead text-foreground">
                {step.title}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-body text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
