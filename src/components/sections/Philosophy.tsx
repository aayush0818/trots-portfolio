import { motion } from "framer-motion";
import gvknInterior from "@/assets/gvkn-interior.jpg";

const Philosophy = () => {
  return (
    <section className="px-gutter py-section bg-surface-warm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-block items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="aspect-[3/4] overflow-hidden order-2 lg:order-1"
        >
          <img
            src={gvknInterior}
            alt="Interior architecture"
            className="img-editorial"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-1 lg:order-2 lg:pl-block"
        >
          <h2 className="font-serif text-headline text-foreground mb-8">
            Studio Philosophy
          </h2>
          <div className="space-y-6 text-body text-muted-foreground">
            <p>
              Trots Architects was established in 2020 as a multidisciplinary
              practice rooted in contextual sensitivity and experiential design.
            </p>
            <p>
              The studio believes architecture extends beyond built form, shaping
              experience through space, light, materiality, climate, and nature.
            </p>
            <p>
              Each project responds to its surroundings, allowing built and unbuilt
              elements to merge seamlessly, creating spaces that feel intuitive,
              grounded, and enduring.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;