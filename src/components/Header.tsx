import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import trotsLogo from "@/assets/trots-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className="w-12 h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="font-serif text-lg text-white tracking-wide">
            Trots Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-caption text-white/80 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
              className="block w-full h-px bg-white origin-left"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block w-full h-px bg-white"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
              className="block w-full h-px bg-white origin-left"
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
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-sm"
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-subhead font-serif text-white"
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
