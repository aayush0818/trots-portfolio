import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="px-gutter py-section bg-surface-sand">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl"
      >
        <h2 className="font-serif text-headline text-foreground mb-8">
          Get in Touch
        </h2>
        
        <div className="space-y-6">
          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Studio
            </p>
            <p className="text-body-lg text-foreground">
              Trots Architects
            </p>
          </div>

          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Location
            </p>
            <p className="text-body-lg text-foreground">
              Bengaluru, India
            </p>
          </div>

          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Email
            </p>
            <a
              href="mailto:studio@trotsarchitects.com"
              className="arch-link text-body-lg text-foreground inline-block"
            >
              studio@trotsarchitects.com
            </a>
          </div>

          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Phone
            </p>
            <a
              href="tel:+918012345678"
              className="arch-link text-body-lg text-foreground inline-block"
            >
              +91 80 1234 5678
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;