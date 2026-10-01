import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import logo from "../assets/logo.png";

const links = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Founder", href: "#founder" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating wrapper (only the pill itself is clickable) */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3.5 md:px-7 pointer-events-none"
      >
        {/* The pill (using a 3-column grid on desktop to center the links perfectly) */}
        <div className="pointer-events-auto w-full max-w-7xl mx-auto h-[68px] md:h-[72px] px-5 md:px-8 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] rounded-full bg-ivory/90 backdrop-blur-md border border-gold/30 shadow-[0_15px_40px_rgba(110,31,46,0.12)]">

          {/* Logo (Left Column) */}
          <a href="#home" className="flex items-center gap-3 md:justify-self-start">
            <img
              src={logo}
              alt="Moh Mayaa Media"
              className="h-12 md:h-14 w-auto scale-125 origin-left"
            />
          </a>

          {/* Navigation Links (Center Column) */}
          <nav className="hidden md:flex items-center gap-9 text-[13px] uppercase tracking-[0.12em] text-ink-soft">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline hover:text-oxblood transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (Right Column) */}
          <a
            href="#contact"
            className="hidden md:inline-block md:justify-self-end text-[13px] uppercase tracking-[0.1em] border border-oxblood text-oxblood px-5 py-2.5 rounded-full hover:bg-oxblood hover:text-ivory transition-colors"
          >
            Plan My Celebration
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-8 h-6 flex flex-col justify-between"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 10.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-px w-full bg-ink"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-px w-full bg-ink"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -10.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-px w-full bg-ink"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-oxblood md:hidden flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="font-display text-2xl text-ivory hover:text-gold-soft transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: links.length * 0.06 }}
              className="mt-4 text-[13px] uppercase tracking-[0.1em] border border-ivory/60 text-ivory px-6 py-3 rounded-full hover:bg-ivory/10 transition-colors"
            >
              Plan My Celebration
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
