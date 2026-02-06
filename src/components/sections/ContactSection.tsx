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
              Address
            </p>
            <p className="text-body-lg text-foreground">
              15, 4th Cross, 2nd Block<br />
              BSK 1st Stage, Bangalore 560050
            </p>
          </div>

          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Email
            </p>
            <a
              href="mailto:trotsarchitects@gmail.com"
              className="arch-link text-body-lg text-foreground inline-block"
            >
              trotsarchitects@gmail.com
            </a>
          </div>

          <div>
            <p className="text-micro uppercase tracking-widest text-muted-foreground mb-2">
              Phone
            </p>
            <div className="space-y-1">
              <a
                href="tel:+919663476666"
                className="arch-link text-body-lg text-foreground block"
              >
                Nandesh — +91 96634 76666
              </a>
              <a
                href="tel:+919738742605"
                className="arch-link text-body-lg text-foreground block"
              >
                Nikitha — +91 97387 42605
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;