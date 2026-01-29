import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gvknWindow from "@/assets/gvkn-window.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Split layout - Image left, content right */}
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:w-1/2 h-[50vh] lg:h-screen lg:fixed lg:left-0 lg:top-0"
        >
          <img
            src={gvknWindow}
            alt="Trots Architects"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <div className="lg:w-1/2 lg:ml-[50%] min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-16">
              Get in Touch
            </h1>

            <div className="space-y-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Email
                </p>
                <a
                  href="mailto:studio@trotsarchitects.com"
                  className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  studio@trotsarchitects.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Phone
                </p>
                <a
                  href="tel:+918012345678"
                  className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Location
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground">
                  Bengaluru, India
                </p>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                For project inquiries, collaborations, or general questions, 
                reach out. We're interested in meaningful conversations about 
                architecture, context, and craft.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
