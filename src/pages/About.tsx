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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Full bleed image */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[400px]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={gvknStaircase}
            alt="Trots Architects"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-3">About</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white">
              Studio
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-16 py-16 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl"
        >
          <motion.p 
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Philosophy
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8"
          >
            Architecture extends beyond built form, shaping experience through 
            space, light, materiality, climate, and nature.
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            Trots Architects was established in 2020 as a multidisciplinary practice 
            based in Bengaluru. We prioritize the integration of context, human experience, 
            and environmental response. Each project responds to its unique surroundings, 
            allowing built and unbuilt elements to merge seamlessly.
          </motion.p>
        </motion.div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-16 py-16 md:py-28 bg-secondary/30">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 md:mb-16"
        >
          Team
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl">
          {/* Nandesh */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="group"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-500">
                Nandesh GK
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Principal Architect
              </p>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              B.Arch, Dayananda Sagar College of Architecture, 2017. 
              Focus on context-responsive architecture balancing functionality, 
              materiality, and spatial clarity.
            </p>
          </motion.div>

          {/* Nikitha */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="group"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-500">
                Nikitha GS
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Principal Architect
              </p>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              B.Arch, SJB School of Architecture, 2019. M.UD, BMS School of Architecture, 2022. 
              Focus on people-centric, sustainable, and urban-scale design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-16 py-16 md:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 md:mb-16"
        >
          Approach
        </motion.p>

        <div className="max-w-4xl">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group py-6 md:py-8 border-b border-border flex gap-6 md:gap-10 items-baseline hover:bg-secondary/20 transition-colors duration-300 -mx-6 px-6 md:-mx-8 md:px-8"
            >
              <span className="text-xs text-muted-foreground font-mono w-8 shrink-0">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-300">
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
