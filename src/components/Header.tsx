import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import trotsLogo from "@/assets/trots-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Pages with dark/image backgrounds use white text
  const isDarkBackground = location.pathname === "/" || location.pathname.startsWith("/project/");
  
  const navItems = [
    { name: "Work", path: "/works" },
    { name: "Studio", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isDarkBackground ? "bg-black/40 backdrop-blur-sm" : "bg-background/95 backdrop-blur-sm"
    }`}>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-center justify-between px-6 md:px-10 py-5"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={trotsLogo}
            alt="Trots Architects"
            className="w-14 h-auto"
            style={{ 
              filter: isDarkBackground ? "brightness(0) invert(1)" : "none" 
            }}
          />
          <span className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
            isDarkBackground ? "text-white" : "text-foreground"
          }`}>
            Trots Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to={item.path}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 group ${
                  isDarkBackground 
                    ? "text-white/90 hover:text-white" 
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  isDarkBackground ? "bg-white" : "bg-foreground"
                }`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 z-50 ${isDarkBackground && !isMenuOpen ? "text-white" : "text-foreground"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-background z-40 md:hidden"
            style={{ position: 'fixed', width: '100vw', height: '100vh' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-4xl text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Contact info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Get in touch</p>
                <a href="mailto:studio@trotsarchitects.com" className="text-sm text-foreground">
                  studio@trotsarchitects.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
