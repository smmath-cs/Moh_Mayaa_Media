import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import manojT from "../assets/manoj.png";

export default function Founder() {
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const paragraphs = [
    "Manoj spent years building a career in tech solving problems, meeting deadlines, living by logic and structure. Eventually, he realised the moments he looked forward to most weren't in front of a screen, but at weddings, celebrations, and gatherings where people came together.",
    "That realisation led him to leave his tech career and pursue event management. That became Moh Mayaa Media, he built around one simple idea: you shouldn't have to juggle ten vendors to plan one meaningful day.",
    "His technical background gives him a strong problem solving and organizational mindset which now applied to creating experiences instead of writing code.",
  ];

  return (
    <section
      id="founder"
      className="relative py-24 md:py-36 px-6 md:px-10 bg-oxblood text-ivory overflow-hidden"
    >
      {/* ambient background texture */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #E8CD9E 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 w-[420px] h-[420px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E8CD9E 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-y-8 md:gap-x-14 md:gap-y-0 items-center relative">
        {/* 1. HEADER (Mobile Order 1, Desktop Right Col Row 1) */}
        <div className="order-1 md:order-2 md:col-span-7 relative w-full">
          {/* ghost word behind the copy */}
          <span
            className="hidden md:block absolute -top-10 -left-4 font-display italic text-[140px] leading-none text-ivory/[0.05] select-none pointer-events-none"
            aria-hidden="true"
          >
            Manoj
          </span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center gap-4 mb-6"
          >

            <p className="text-[13px] uppercase tracking-[0.2em] text-gold-soft">
              The Founder
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative font-display text-[34px] md:text-[46px] leading-tight mb-4"
          >
            Manoj S Tripathi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[13px] uppercase tracking-[0.15em] text-gold-soft/70 mb-0 md:mb-8"
          >
            Co-Founder, Moh Mayaa Media
          </motion.p>
        </div>

        {/* 2. PHOTO (Mobile Order 2, Desktop Left Col Spanning Rows) */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 md:col-span-5 md:row-span-2 w-full my-4 md:my-0"
        >
          <div className="arch-frame max-w-sm mx-auto">
            <div className="arch aspect-[3/4] w-full overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{
                  y: photoY,
                  background: `url(${manojT}) center/cover no-repeat`,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* 3. PARAGRAPHS (Mobile Order 3, Desktop Right Col Row 2) */}
        <div className="order-3 md:order-3 md:col-span-7 relative w-full">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15 }}
              className="relative text-[15px] md:text-base leading-[1.9] text-ivory/85 mb-5 last:mb-0"
            >
              {i === 1 ? (
                <>
                  That realisation led him to leave his tech career and pursue event
                  management. That became Moh Mayaa Media, built around one simple
                  idea:<br />
                  {" "}
                  <em className="font-display italic text-ivory">
                    you shouldn't have to juggle ten vendors to plan one meaningful day.
                  </em>
                </>
              ) : (
                text
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
