import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

import hampersImg from "../assets/services/hampers.jpg";
import manpowerImg from "../assets/services/manpower.jpg";
import photographyImg from "../assets/services/photography.jpg";
import decorImg from "../assets/services/decor.jpg";
import birthdayImg from "../assets/services/birthday.jpg";
import shadowImg from "../assets/services/shadow.jpg";
import preWeddingImg from "../assets/services/pre-wedding.jpg";
import guestImg from "../assets/services/guest-management.jpg";

const SERVICES = [
  {
    n: "01",
    title: "Celebration Hampers",
    text: "Thoughtfully curated gift hampers for weddings, birthdays, corporate events, festivals, and personal milestones.",
    img: hampersImg,
  },
  {
    n: "02",
    title: "Manpower Services",
    text: "Trained, uniformed, and reliable event staff, ushers, servers, coordinators, and support crew.",
    img: manpowerImg,
  },
  {
    n: "03",
    title: "Photography & Videography",
    text: "Candid, cinematic, heartfelt storytelling, traditional coverage, drone shots, same day edits.",
    img: photographyImg,
  },
  {
    n: "04",
    title: "Shadow Services",
    text: "A dedicated personal assistant by your side throughout the event, managing last minute needs.",
    img: shadowImg,
  },
  {
    n: "05",
    title: "Event Decor",
    text: "Custom themes, floral setups, lighting design, and statement backdrops, celebration styling.",
    img: decorImg,
  },
  {
    n: "06",
    title: "Birthday Parties",
    text: "Kids' parties, milestone birthdays, surprise celebrations that are themed, styled, and executed with care.",
    img: birthdayImg,
  },
  {
    n: "07",
    title: "Pre Wedding Shoots",
    text: "Locations, styling, storytelling, and direction of photos and films that feel like you.",
    img: preWeddingImg,
  },
  {
    n: "08",
    title: "Guest Management",
    text: "RSVP tracking, seating arrangements, welcome desks, and on-ground hospitality.",
    img: guestImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ivory py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] uppercase tracking-[0.2em] text-oxblood mb-6"
          >
            What We Handle
          </motion.p>

     <motion.h2
  className="font-display text-[38px] md:text-[54px] leading-[1.12] text-ink max-w-3xl mx-auto md:mx-0"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  {"One team. Zero vendors to chase.".split(" ").map((word, wordIndex) => (
    <span
      key={wordIndex}
      className="inline-block whitespace-nowrap mr-[0.25em]"
    >
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          className="inline-block"
          variants={{
            hidden: {
              y: 0,
            },
            visible: {
              y: [0, -8, 0],
              transition: {
                duration: 0.5,
                delay: (wordIndex * 5 + charIndex) * 0.025,
                ease: "easeInOut",
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  ))}
</motion.h2>
        </div>
      </div>

      {/* Mobile: 1 centered card per page view. Desktop: 4-column grid */}
      <div className="flex md:grid md:grid-cols-4 gap-x-0 md:gap-x-8 gap-y-16 md:gap-y-20 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-[6vw] md:px-16 pb-4 md:pb-0 max-w-7xl mx-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SERVICES.map((service, i) => (
          <div key={service.n} className="w-full shrink-0 snap-center px-4 md:px-0 md:w-auto">
            <ServiceCard service={service} index={i} />
          </div>
        ))}
      </div>

      {/* Mobile scroll hint */}
      <p className="md:hidden text-center text-xs uppercase tracking-[0.15em] text-ink-soft/50 mt-8">
        Swipe to explore →
      </p>
    </section>
  );
}
