import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import storyPhoto from "../assets/story.jpg";

export default function Story() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const paragraphs = [
    "Every celebration tells a story. A birthday isn't just cake and balloons — it's a child growing up right before your eyes. A wedding isn't just rituals and rings — it's two families becoming one.",
    "Moh Mayaa means the illusion of love — and that's exactly what we believe every celebration should feel like: effortless, magical, and completely yours to enjoy, not manage.",
    "We don't just plan events. We hold space for your story to unfold — and we capture it, decorate it, staff it, and manage it, so all you have to do is live it.",
  ];

  return (
    <section ref={sectionRef} id="story" className="relative bg-ivory-deep overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[80vh]">
        {/* LEFT — text */}
        <div className="relative flex items-center px-6 md:pl-20 md:pr-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.3em] text-oxblood/50"
            style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
          >
            Why Moh Mayaa Media
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-[13px] uppercase tracking-[0.2em] text-oxblood mb-6 md:hidden"
            >
              Why Moh Mayaa Media
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="font-display italic text-[28px] md:text-[38px] leading-[1.35] text-ink mb-8"
            >
              "Moh Mayaa Media is born from the illusion of love, woven into moments you live forever."
            </motion.h2>

            {/* Mobile-only photo, sits between quote and paragraphs */}
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="md:hidden mb-8 -mx-6"
            >
              <div
                className="h-[240px] w-full"
                style={{
                  backgroundImage: `url(${storyPhoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.15 }}
                className="text-ink-soft text-[16px] leading-[1.9] mb-5 last:mb-0"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* RIGHT — desktop-only bleeding photo with parallax */}
        <div className="hidden md:block relative min-h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ opacity: { duration: 1 } }}
            className="absolute inset-0"
            style={{
              y: photoY,
              scale: photoScale,
              backgroundImage: `url(${storyPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gold/30 z-10" />
        </div>
      </div>
    </section>
  );
}
