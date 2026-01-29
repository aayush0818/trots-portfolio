import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
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
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={trotsLogo}
            alt="Trots Architects"
            className="w-10 h-auto"
            style={{ 
              filter: isDarkBackground ? "brightness(0) invert(1)" : "none" 
            }}
          />
          <span className={`font-serif text-lg tracking-wide ${
            isDarkBackground ? "text-white" : "text-foreground"
          }`}>
            Trots Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-caption uppercase tracking-widest transition-colors ${
                isDarkBackground 
                  ? "text-white/80 hover:text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 ${isDarkBackground ? "text-white" : "text-foreground"}`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
              className={`block w-full h-px origin-left ${
                isDarkBackground ? "bg-white" : "bg-foreground"
              }`}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className={`block w-full h-px ${
                isDarkBackground ? "bg-white" : "bg-foreground"
              }`}
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
              className={`block w-full h-px origin-left ${
                isDarkBackground ? "bg-white" : "bg-foreground"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={`md:hidden overflow-hidden backdrop-blur-sm ${
          isDarkBackground ? "bg-black/90" : "bg-background/95"
        }`}
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-subhead font-serif ${
                isDarkBackground ? "text-white" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
