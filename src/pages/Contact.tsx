import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import gvknWindow from "@/assets/gvkn-window.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Image Section - Hidden on mobile, fixed on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:block lg:w-1/2 h-screen fixed left-0 top-0"
        >
          <img
            src={gvknWindow}
            alt="Trots Architects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 lg:ml-[50%] min-h-screen px-6 md:px-12 lg:px-16 py-24 md:py-32 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-lg mx-auto lg:mx-0 w-full"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Contact
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Have a project in mind? We'd love to hear about it. 
                Fill out the form below and we'll get back to you.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-transparent border-border/60 focus:border-foreground transition-colors h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-transparent border-border/60 focus:border-foreground transition-colors h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="bg-transparent border-border/60 focus:border-foreground transition-colors h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Project Type
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-12 px-3 bg-transparent border border-border/60 focus:border-foreground transition-colors text-foreground text-sm"
                  >
                    <option value="" className="bg-background">Select type</option>
                    <option value="residential" className="bg-background">Residential</option>
                    <option value="commercial" className="bg-background">Commercial</option>
                    <option value="interior" className="bg-background">Interior Design</option>
                    <option value="renovation" className="bg-background">Renovation</option>
                    <option value="other" className="bg-background">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-transparent border-border/60 focus:border-foreground transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-widest font-medium transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                    <a href="mailto:studio@trotsarchitects.com" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                      studio@trotsarchitects.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+918012345678" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                      +91 80 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                    <p className="text-sm text-foreground">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
