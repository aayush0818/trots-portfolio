import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5"
          >
            Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(2rem,6vw,4rem)] text-foreground leading-[1.15] max-w-4xl"
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
          alt="Trots Architects"
          className="w-full h-full object-cover"
          src="/lovable-uploads/c655d491-e7f2-47c8-8f97-1b9791d0c7cb.jpg"
        />
      </motion.section>

      {/* About the Firm */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              About
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
              Trots Architects was established in 2020 as a multidisciplinary 
              practice rooted in contextual sensitivity and experiential design.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-end space-y-5"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              The studio believes that architecture extends beyond built form, 
              shaping experiences through space, light, materiality, climate, and nature.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Each project is approached as a response to its surroundings—where 
              built and unbuilt elements merge seamlessly to create spaces that 
              feel intuitive, grounded, and enduring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Full Width Statement */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-surface-warm">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
          >
            Philosophy
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-foreground leading-[1.3] mb-16"
          >
            Architecture must be experienced, not just seen.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Spaces have the power to influence emotions, behaviour, and well-being. 
                Every project is approached as unique, shaped by its context, user needs, 
                and environmental conditions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Rather than imposing a singular style, we allow design to evolve 
                organically—guided by site, light, wind, materials, and human movement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Simplicity, clarity, and authenticity form the foundation of our work, 
                enhanced by thoughtful detailing and contemporary innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic"
          >
            "Architecture talks through water, wind, light, sky and earth. 
            It is like fragrance, one carries at the end, which is most intangible 
            beyond explanation, beyond any kind of rationale through mind."
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground not-italic"
          >
            — Geoffrey Bawa
          </motion.cite>
        </div>
      </section>

      {/* Second Image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] md:h-[70vh]"
      >
        <img
          alt="Interior"
          className="w-full h-full object-cover"
          src="/lovable-uploads/192d3737-4e83-46ab-8dd3-bb0ce887237a.jpg"
        />
      </motion.section>

      {/* Design Approach */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
                Approach
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                Context-driven and human-centric design.
              </h3>
            </div>
            <div className="flex flex-col justify-end space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                We respond to both micro and macro factors—from climate and topography 
                to lifestyle and cultural narratives. By integrating architecture, interiors, 
                landscape, and lighting as one cohesive whole, we ensure harmony across all scales.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We draw inspiration from traditional concepts and craftsmanship while 
                continuously exploring modern materials, techniques, and technologies.
              </p>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {[
              { num: "01", title: "Discovery", desc: "Understanding vision, lifestyle, and functional needs" },
              { num: "02", title: "Context", desc: "Site study, climate response, environmental considerations" },
              { num: "03", title: "Concept", desc: "Ideas inspired by nature, light, and movement" },
              { num: "04", title: "Design", desc: "Detailed planning with material coherence" },
              { num: "05", title: "Execution", desc: "On-site coordination ensuring faithful realization" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-border pt-6"
              >
                <span className="text-xs text-muted-foreground font-mono">
                  {step.num}
                </span>
                <h4 className="font-serif text-lg text-foreground mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-14"
          >
            Services
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-serif text-xl text-foreground mb-6">
                Architectural Design
              </h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>Residential & Commercial Architecture</li>
                <li>Gated Development (Villa & Row Houses)</li>
                <li>Plotted Development</li>
                <li>Apartments</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-serif text-xl text-foreground mb-6">
                Interior Design
              </h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>Design Consultation & Concept Development</li>
                <li>End-to-End Design Coordination</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-14"
          >
            Team
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Nandesh GK
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Studio Head
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                An alumnus of Dayananda Sagar College of Architecture, Nandesh completed 
                his Bachelor of Architecture in 2017. His design interest lies in creating 
                context-responsive architecture that balances functionality, materiality, 
                and spatial clarity. He is passionate about shaping built environments 
                sensitive to climate and human experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Nikitha GS
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Studio Head
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Nikitha completed her Bachelor of Architecture from SJB School of 
                Architecture and Planning in 2019, and earned her Master's in Urban Design 
                from BMS School of Architecture in 2022. Her design interest lies in 
                understanding cities and spaces across multiple scales, with a strong focus 
                on people-centric and sustainable design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Note */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-surface-warm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Founded in 2020, the studio's work reflects continuous evolution through 
            diverse project typologies, challenges, and site conditions—enabling a 
            mature and sensitive design response.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
