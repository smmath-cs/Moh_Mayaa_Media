import { motion } from "framer-motion";

import processBg from "../assets/process-bg.jpg";

const steps = [
  {
    title: "Tell Us Your Story",
    text: "Share your vision, your date, and your dream for the day.",
  },
  {
    title: "We Build Your Team",
    text: "We assemble the right mix of services, décor, staff, and photography.",
  },
  {
    title: "We Handle the Details",
    text: "Vendor coordination and guest hospitality, all managed.",
  },
  {
    title: "You Celebrate",
    text: "You show up, enjoy yourself, we take care of the rest.",
  },
];

// Container variant to sequence children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, // Delay between each child step starting (allows each step to finish)
      delayChildren: 0.2,   // Initial pause before step 1 begins
    },
  },
};

// Individual step variants
const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HowWeWork() {
  return (
    <section id="process" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${processBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1.5px) saturate(0.9)",
          transform: "scale(1.05)",
        }}
      />
      {/* Dark scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,6,7,0.75) 0%, rgba(15,6,7,0.6) 40%, rgba(15,6,7,0.78) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-5 md:inset-8 border border-gold/25 z-10" />



      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="mb-16 md:mb-24">
          

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[36px] md:text-[54px] text-ivory max-w-2xl leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            How we turn your vision into a seamless celebration.
          </motion.h2>
        </div>

        {/* Steps Grid with Sequential Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((s) => (
            <motion.div key={s.title} variants={stepVariants}>
              <h3
                className="font-display text-xl md:text-2xl text-ivory mb-2"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
              >
                {s.title}
              </h3>
              <p className="text-ivory/70 text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
