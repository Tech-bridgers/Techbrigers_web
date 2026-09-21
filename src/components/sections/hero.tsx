"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "../container";
import { MotionButton } from "../motion/motion-button";

const STATS = [
  { value: "4+", label: "Years of Experience" },
  { value: "5+", label: "Successful Launches" },
  { value: "4+", label: "Core Service Lines" },
  { value: "100%", label: "Client Satisfaction" },
];

export function Hero() {
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
    <section id="home" className="relative overflow-hidden bg-navy-deepest pb-16 pt-20 sm:pb-20 sm:pt-24">
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
          <motion.p
            variants={item}
            className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase"
          >
            Digital Product Studio
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 text-[23px] font-extrabold leading-tight text-white sm:text-5xl md:text-[54px] md:leading-[1.12]"
          >
            Transforming Complex Ideas
            <br /> Into High-Performance
            <br /> Digital Products
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Tech Bridgers partners with ambitious brands and venture-backed
            startups to engineer modern websites, custom software, and
            robust mobile applications that scale.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <MotionButton
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark sm:px-6 sm:py-3.5"
            >
              Start a project
            </MotionButton>
            <MotionButton
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:px-6 sm:py-3.5"
            >
              View our work
            </MotionButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: shouldReduceMotion ? 0 : 0.45,
          }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-y-10 rounded-3xl bg-white px-8 py-10 shadow-xl shadow-black/20 sm:mt-20 sm:px-12 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-navy sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
