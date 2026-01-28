import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import trotsLogo from "@/assets/trots-logo.png";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 1200);
    // Begin exit transition
    const exitTimer = setTimeout(() => setIsExiting(true), 2600);
    // Complete intro
    const completeTimer = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <img
              src={trotsLogo}
              alt="Trots Architects"
              className="w-24 h-auto"
            />
          </motion.div>

          {/* Studio Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 10 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h1 className="font-serif text-2xl tracking-wide text-foreground">
              Trots Architects
            </h1>
            <p className="mt-2 text-micro uppercase tracking-widest text-muted-foreground">
              Context-Driven Architecture
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
