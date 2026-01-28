import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 1000);
    // Begin exit transition
    const exitTimer = setTimeout(() => setIsExiting(true), 2400);
    // Complete intro
    const completeTimer = setTimeout(() => onComplete(), 3000);

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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              {/* Abstract architectural mark - geometric T shape */}
              <rect x="10" y="10" width="40" height="6" fill="currentColor" />
              <rect x="25" y="16" width="10" height="34" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Studio Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-xl tracking-wide text-foreground"
          >
            Trots Architects
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;