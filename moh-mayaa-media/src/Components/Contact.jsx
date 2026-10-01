import { motion } from "framer-motion";

import contactBg from "../assets/contact-bg.jpg";
// Drop a moody photo into src/assets/contact-bg.jpg (candid dance floor,
// string lights, or a decor close-up work well) — or point this at an
// existing asset like hero-backdrop.jpg / decor.jpg to preview now.

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background photo, dimmed + softly blurred */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1.5px) saturate(0.9)",
          transform: "scale(1.05)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,6,7,0.85) 0%, rgba(15,6,7,0.72) 45%, rgba(15,6,7,0.88) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-5 md:inset-8 border border-gold/25 z-10" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 z-10 text-[11px] uppercase tracking-[0.3em] text-ivory/50"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Let's Talk
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[38px] md:text-[62px] leading-[1.12] text-ivory mb-8"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
        >
          Let's Plan Your
          <br />
          Celebration Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-ivory/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          Whether it's an intimate birthday or a grand wedding, tell us your
          story, we'll take care of the rest.
        </motion.p>

        <motion.a
          href="https://wa.me/918431041060?text=Hi%20Moh%20Mayaa%20Media,%20I'd%20like%20to%20plan%20a%20celebration!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="inline-flex items-center gap-2 px-10 py-4 text-[13px] uppercase tracking-[0.15em] bg-ivory text-oxblood hover:bg-gold-soft transition-colors duration-300 mb-16"
        >
          Get in Touch →
        </motion.a>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="hairline max-w-[140px] mx-auto mb-12 origin-center"
        />

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          <a
            href="tel:+918431041060"
            className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-soft transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8z"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm tracking-wide">84310 41060</span>
          </a>

          <a
            href="mailto:mohmayaamedia@gmail.com"
            className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-soft transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <rect x="3" y="5" width="18" height="14" rx="1.5" strokeWidth="1.3" />
              <path d="M3.5 6.5l8.5 6 8.5-6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm tracking-wide">mohmayaamedia@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/mohmayaamedia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-soft transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.3" />
              <circle cx="12" cy="12" r="3.6" strokeWidth="1.3" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-sm tracking-wide">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/mohmayamediaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-soft transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <path
                d="M15 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H9v3.5h2V21h3.5v-6.5H17l.7-3.5h-3.2V9c0-.3.2-.5.5-.5z"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm tracking-wide">Facebook</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
