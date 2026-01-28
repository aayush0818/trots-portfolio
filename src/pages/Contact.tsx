import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="px-gutter pb-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-block"
          >
            <h1 className="font-serif text-display text-foreground">
              Contact
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-12"
            >
              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-3">
                  Studio
                </p>
                <p className="font-serif text-headline text-foreground">
                  Trots Architects
                </p>
              </div>

              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-3">
                  Location
                </p>
                <p className="text-body-lg text-foreground">
                  Bengaluru, Karnataka<br />
                  India
                </p>
              </div>

              <div>
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-3">
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
                <p className="text-micro uppercase tracking-widest text-muted-foreground mb-3">
                  Phone
                </p>
                <a
                  href="tel:+918012345678"
                  className="arch-link text-body-lg text-foreground inline-block"
                >
                  +91 80 1234 5678
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:pt-12"
            >
              <p className="text-body text-muted-foreground max-w-md">
                For project inquiries, collaborations, or general questions,
                please reach out. We're interested in meaningful conversations
                about architecture, context, and craft.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;