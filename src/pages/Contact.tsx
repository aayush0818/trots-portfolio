import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePageTitle } from "@/hooks/usePageTitle";

const Contact = () => {
  usePageTitle("Contact — Get in Touch");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_inquiries").insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      if (error) throw error;
      toast({
        title: "Message sent",
        description: "We'll be in touch soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-20 md:pb-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 md:mb-32">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[clamp(2.5rem,8vw,5rem)] text-foreground leading-[1.1]"
            >
              Let's talk
            </motion.h1>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:trotsarchitects@gmail.com"
                    className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors"
                  >
                    trotsarchitects@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                    Phone
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919663476666"
                      className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors block"
                    >
                      Nandesh — +91 96634 76666
                    </a>
                    <a
                      href="tel:+919738742605"
                      className="font-serif text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors block"
                    >
                      Nikitha — +91 97387 42605
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                    Address
                  </p>
                  <p className="font-serif text-xl md:text-2xl text-foreground">
                    15, 4th Cross, 2nd Block<br />
                    BSK 1st Stage<br />
                    Bangalore 560050
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                    Follow
                  </p>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://www.instagram.com/trots.architects?igsh=MWowaGlpaHk3azhzOA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-serif text-lg md:text-xl">Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/tro-ts-architects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-serif text-lg md:text-xl">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  For project inquiries, collaborations, or general questions—
                  we're interested in meaningful conversations about architecture, 
                  context, and craft.
                </p>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 h-14 text-lg md:text-xl text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 h-14 text-lg md:text-xl text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 text-lg md:text-xl text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-4 text-foreground disabled:opacity-50"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em]">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
