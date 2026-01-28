import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-gutter py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
          >
            <rect x="10" y="10" width="40" height="6" fill="currentColor" />
            <rect x="25" y="16" width="10" height="34" fill="currentColor" />
          </svg>
          <span className="font-serif text-lg text-foreground">
            Trots Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="arch-link text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-slow"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
              className="block w-full h-px bg-foreground origin-left"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block w-full h-px bg-foreground"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
              className="block w-full h-px bg-foreground origin-left"
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
        className="md:hidden overflow-hidden bg-background border-t border-divider"
      >
        <div className="px-gutter py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-subhead font-serif text-foreground"
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