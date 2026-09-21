"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "./container";

export function PageHero({
  eyebrow,
  heading,
  subtext,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  subtext: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-navy-deepest py-20 sm:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-network.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-radial-[at_50%_35%] from-navy-glow/70 via-navy-deepest/90 via-60% to-navy-deepest" />
      </div>

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p variants={item} className="text-base text-white/80 sm:text-lg">
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 text-[28px] font-extrabold leading-tight text-white sm:text-5xl md:text-[54px] md:leading-[1.12]"
          >
            {heading}
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {subtext}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
