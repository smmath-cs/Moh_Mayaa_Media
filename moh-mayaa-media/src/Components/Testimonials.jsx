import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "They didn't just manage our wedding — they made sure we actually got to enjoy it.",
    name: "Wedding Client",
    initial: "W",
    theme: "oxblood",
  },
  {
    quote:
      "The shadow service was a game-changer. I didn't have to think about a single thing all day.",
    name: "Birthday Host",
    initial: "B",
    theme: "ivory",
  },
];

const THEMES = {
  oxblood: {
    bg: "bg-oxblood",
    text: "text-ivory",
    subtext: "text-ivory/60",
    quoteMark: "text-gold/30",
    avatarBg: "bg-gold-soft/15",
    avatarText: "text-gold-soft",
    avatarBorder: "border-gold/50",
    hairline: "bg-gold/40",
  },
  ivory: {
    bg: "bg-ivory-deep",
    text: "text-ink",
    subtext: "text-ink-soft/70",
    quoteMark: "text-oxblood/15",
    avatarBg: "bg-oxblood/[0.06]",
    avatarText: "text-oxblood",
    avatarBorder: "border-oxblood/30",
    hairline: "bg-oxblood/25",
  },
};

function TestimonialCard({ t, index }) {
  const theme = THEMES[t.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative overflow-hidden p-10 md:p-12 ${theme.bg} ${theme.text}`}
    >
      {/* giant ghost quote mark */}
      <span
        className={`absolute -top-0 right-6 font-display text-[140px] leading-none select-none pointer-events-none ${theme.quoteMark}`}
        aria-hidden="true"
      >
        &rdquo;
      </span>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
        className="relative z-10 font-display italic text-[22px] md:text-[27px] leading-[1.5] mb-8"
      >
        &ldquo;{t.quote}&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.35 }}
        className={`relative z-10 h-px w-12 mb-5 origin-left ${theme.hairline}`}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
        className={`relative z-10 text-[12px] uppercase tracking-[0.2em] ${theme.subtext}`}
      >
        &mdash; {t.name}
      </motion.p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 bg-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16 md:mb-20"
        >
          <div className="corner-mark" />
          <p className="text-[13px] uppercase tracking-[0.2em] text-oxblood">
            What Families Say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}