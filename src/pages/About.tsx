import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gvknStaircase from "@/assets/gvkn-staircase-1.jpg";

const About = () => {
  const processSteps = [
    {
      number: "01",
      title: "Understanding & Discovery",
      description: "Deep engagement to understand vision, lifestyle, and functional needs.",
    },
    {
      number: "02",
      title: "Contextual Analysis",
      description: "Site, climate, movement, and environmental response.",
    },
    {
      number: "03",
      title: "Concept Development",
      description: "Ideas translated to spatial concepts inspired by light, nature, movement.",
    },
    {
      number: "04",
      title: "Design Development",
      description: "Detailed architectural and interior planning with material clarity.",
    },
    {
      number: "05",
      title: "Execution Support",
      description: "Design coordination and site involvement to ensure intent realized.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Full bleed image with title */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={gvknStaircase}
            alt="Trots Architects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-4xl md:text-6xl text-white"
          >
            Studio
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Philosophy
            </p>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-tight mb-8">
              Architecture extends beyond built form, shaping experience through 
              space, light, materiality, climate, and nature.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Trots Architects was established in 2020 as a multidisciplinary practice 
              based in Bengaluru. We prioritize the integration of context, human experience, 
              and environmental response. Each project responds to its unique surroundings, 
              allowing built and unbuilt elements to merge seamlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 md:px-16 py-20 md:py-32 border-t border-border">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-12"
        >
          Team
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
          {/* Nandesh */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
              Nandesh GK
            </h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Principal Architect
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.Arch, Dayananda Sagar College of Architecture, 2017. 
              Focus on context-responsive architecture balancing functionality, 
              materiality, and spatial clarity.
            </p>
          </motion.div>

          {/* Nikitha */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
              Nikitha GS
            </h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Principal Architect
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.Arch, SJB School of Architecture, 2019. M.UD, BMS School of Architecture, 2022. 
              Focus on people-centric, sustainable, and urban-scale design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-8 md:px-16 py-20 md:py-32 border-t border-border">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-12"
        >
          Approach
        </motion.p>

        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="py-8 border-b border-border flex gap-8 items-baseline"
            >
              <span className="text-xs text-muted-foreground font-mono w-8">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
