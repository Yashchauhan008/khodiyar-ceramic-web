import React from "react";
import { motion } from "framer-motion";

export const RevealText = ({ text, className = "", delay = 0, style = {}, triggerOnScroll = true }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", ...style }}
      variants={container}
      initial="hidden"
      // CONDITIONAL TRIGGER:
      // If it's a hero section (triggerOnScroll=false), animate immediately.
      // Otherwise, wait until it's in view.
      animate={!triggerOnScroll ? "visible" : undefined}
      whileInView={triggerOnScroll ? "visible" : undefined}
      viewport={triggerOnScroll ? { once: true, amount: 0.2 } : undefined}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RevealText;