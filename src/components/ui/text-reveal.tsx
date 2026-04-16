"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

/**
 * TextReveal — animates each word in sequence as the element scrolls into view.
 * Respects `prefers-reduced-motion` automatically.
 */
export const TextReveal = ({ text, className }: TextRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", damping: 20, stiffness: 150 },
    },
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.04 * i,
      },
    }),
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("flex flex-wrap gap-x-2", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={`word-${index}`}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
