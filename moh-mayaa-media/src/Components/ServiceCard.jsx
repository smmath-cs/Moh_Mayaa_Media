import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group shrink-0 w-full md:w-auto snap-center flex flex-col items-center text-center md:items-start md:text-left"
    >
      {/* Elongated Arch Container */}
      <div className="arch-frame w-full max-w-[280px] md:max-w-none">
        <div className="arch relative aspect-[3/4] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${service.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,6,7,0.35) 0%, transparent 45%)",
            }}
          />
          <span className="absolute top-3 right-4 font-display italic text-lg text-ivory/80">
            {service.n}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-[21px] text-ink mt-6 mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-ink-soft text-[15px] leading-[1.75] max-w-[300px] md:max-w-none">
        {service.text}
      </p>
    </motion.div>
  );
}
