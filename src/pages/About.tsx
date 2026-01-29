import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gvknStaircase from "@/assets/gvkn-staircase-1.jpg";
import gvknLiving from "@/assets/gvkn-living.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6"
          >
            Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,8vw,5rem)] text-foreground leading-[1.1] max-w-4xl"
          >
            Architecture shaped by context, light & human experience
          </motion.h1>
        </div>
      </section>

      {/* Full bleed image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] md:h-[70vh]"
      >
        <img
          src={gvknStaircase}
          alt="Trots Architects"
          className="w-full h-full object-cover"
        />
      </motion.section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">
              Philosophy
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
              Trots Architects was established in 2020 as a multidisciplinary 
              practice based in Bengaluru. We prioritize the integration of 
              context, human experience, and environmental response.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-muted-foreground leading-relaxed">
              Each project responds to its unique surroundings, allowing built 
              and unbuilt elements to merge seamlessly. Our work extends beyond 
              built form, shaping experience through space, light, materiality, 
              climate, and nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-16"
          >
            People
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                Nandesh GK
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Principal Architect
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                B.Arch, Dayananda Sagar College of Architecture, 2017. 
                Focus on context-responsive architecture balancing functionality, 
                materiality, and spatial clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                Nikitha GS
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Principal Architect
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                B.Arch, SJB School of Architecture, 2019. M.UD, BMS School of 
                Architecture, 2022. Focus on people-centric, sustainable, and 
                urban-scale design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] md:h-[60vh]"
      >
        <img
          src={gvknLiving}
          alt="Interior"
          className="w-full h-full object-cover"
        />
      </motion.section>

      {/* Approach */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-16"
          >
            Approach
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {[
              { num: "01", title: "Discovery", desc: "Understanding vision, lifestyle, functional needs" },
              { num: "02", title: "Context", desc: "Site, climate, movement, environmental response" },
              { num: "03", title: "Concept", desc: "Spatial ideas inspired by light, nature, movement" },
              { num: "04", title: "Design", desc: "Detailed planning with material clarity" },
              { num: "05", title: "Execution", desc: "Coordination to ensure intent realized" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-border pt-6"
              >
                <span className="text-[10px] text-muted-foreground font-mono">
                  {step.num}
                </span>
                <h4 className="font-serif text-lg text-foreground mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
