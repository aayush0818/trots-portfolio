import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gvknInterior from "@/assets/gvkn-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-gutter pb-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-block"
          >
            <h1 className="font-serif text-display text-foreground">
              About
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-block">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={gvknInterior}
                alt="Trots Architects studio work"
                className="img-editorial"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:pt-12"
            >
              <h2 className="font-serif text-headline text-foreground mb-8">
                The Studio
              </h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Trots Architects was established in 2020 as a multidisciplinary
                  architecture practice based in Bengaluru, India. The studio is
                  rooted in contextual sensitivity and experiential design.
                </p>
                <p>
                  We believe architecture extends beyond built form, shaping
                  experience through space, light, materiality, climate, and
                  nature. Our approach prioritizes the integration of context,
                  human experience, and environmental response.
                </p>
                <p>
                  Each project responds to its unique surroundings, allowing
                  built and unbuilt elements to merge seamlessly, creating spaces
                  that feel intuitive, grounded, and enduring.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-gutter py-section bg-surface-warm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-block"
          >
            <h2 className="font-serif text-headline text-foreground">
              The Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-block max-w-4xl">
            {/* Nandesh */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="font-serif text-subhead text-foreground mb-2">
                Nandesh GK
              </h3>
              <p className="text-micro uppercase tracking-widest text-muted-foreground mb-4">
                Studio Head
              </p>
              <div className="space-y-3 text-body text-muted-foreground">
                <p>
                  Bachelor of Architecture, Dayananda Sagar College of
                  Architecture, 2017.
                </p>
                <p>
                  Focus on context-responsive architecture balancing
                  functionality, materiality, and spatial clarity.
                </p>
              </div>
            </motion.div>

            {/* Nikitha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="font-serif text-subhead text-foreground mb-2">
                Nikitha GS
              </h3>
              <p className="text-micro uppercase tracking-widest text-muted-foreground mb-4">
                Studio Head
              </p>
              <div className="space-y-3 text-body text-muted-foreground">
                <p>
                  Bachelor of Architecture, SJB School of Architecture and
                  Planning, 2019. Master's in Urban Design, BMS School of
                  Architecture, 2022.
                </p>
                <p>
                  Focus on people-centric, sustainable, and urban-scale design.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;