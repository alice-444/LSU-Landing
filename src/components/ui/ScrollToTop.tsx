import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <motion.div
            className="absolute inset-0 rounded-full bg-linear-to-r from-[#FFB647] to-[#FF9500] opacity-30 blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-linear-to-r from-[#C9A0DC] to-[#FFB647] opacity-20 blur-2xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="relative w-16 h-16 bg-linear-to-br from-[#FFB647] via-[#FF9500] to-[#FF6B35] text-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden group border-4 border-white/50"
            aria-label="Remonter en haut de la page"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-white/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-7 h-7 relative z-10 drop-shadow-lg" />
            </motion.div>

            <motion.div
              className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
