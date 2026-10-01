import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroBackdrop from "../assets/hero-backdrop.jpg";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backdropBlur = useTransform(scrollYProgress, [0, 0.4], [0, 4]);
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.15]);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          y: backdropY,
          scale: backdropScale,
          filter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          backgroundImage: heroBackdrop
            ? `url(${heroBackdrop})`
            : "linear-gradient(160deg, #7A2A38, #8F3B48, #B8925A)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,6,7,0.88) 0%, rgba(15,6,7,0.72) 30%, rgba(15,6,7,0.35) 55%, rgba(15,6,7,0.05) 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(15,6,7,0.55) 0%, transparent 25%)",
        }}
      />

      <div className="pointer-events-none absolute inset-5 md:inset-8 border border-gold/30 z-10" />

      <div
        className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 z-10 text-[11px] uppercase tracking-[0.3em] text-ivory/50"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Moh Mayaa Media
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 min-h-screen flex flex-col justify-center pt-20">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[36px] leading-[1.14] md:text-[54px] md:leading-[1.1] text-ivory mb-7"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Your Celebration,<br />Completely Taken Care Of.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-ivory/85 text-base md:text-lg leading-relaxed mb-10"
          >
            <span className="md:hidden">
              Your one stop solution for every kind of celebration.
            </span>
            <span className="hidden md:inline">
              From the first hamper to the last dance, Moh Mayaa Media is the
              one-stop solution for every kind of celebration.
            </span>
          </motion.p>

          {/* Desktop CTA — stays in normal flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-[13px] uppercase tracking-[0.12em] bg-ivory text-[#3E1119] hover:bg-gold-soft transition-colors"
            >
              Bring Your Vision to Life →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile CTA — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:hidden absolute bottom-8 left-6 right-6 z-10"
      >
        <a
          href="#contact"
          className="flex items-center justify-center w-full px-8 py-4 text-[13px] uppercase tracking-[0.12em] bg-ivory text-[#3E1119] hover:bg-gold-soft transition-colors"
        >
          Bring Your Vision to Life →
        </a>
      </motion.div>
    </section>
  );
}
