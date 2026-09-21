"use client";

import { motion, useReducedMotion } from "motion/react";

type MotionButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function MotionButton({ href, className, children }: MotionButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.97 }}
    >
      {children}
    </motion.a>
  );
}
