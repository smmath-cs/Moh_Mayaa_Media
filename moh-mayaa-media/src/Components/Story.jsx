import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import aboutStoryPhoto from "../assets/about-story.jpg";
import "./Story.css";

export default function Story() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section ref={sectionRef} className="story-section">
      <div className="story-grid">

        {/* LEFT: MAIN STATEMENT */}
        <div className="story-left">

          <motion.h1
            className="story-main-title"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Every
            <br />
            celebration
            <br />
            tells a story.
          </motion.h1>

        </div>


        {/* RIGHT: IMAGE + CARD */}
        <div className="story-visual">

          {/* IMAGE */}
          <motion.div
            className="story-image"
            initial={{
              opacity: 0,
              y: 100,
              scale: 1.04,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    y: 100,
                    scale: 1.04,
                  }
            }
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={aboutStoryPhoto}
              alt="A wedding celebration"
            />
          </motion.div>


          {/* CENTERED CARD */}
          <motion.div
            className="story-card"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 100,
                  }
            }
            transition={{
              duration: 0.95,
              delay: 1.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="story-card-eyebrow">
              THE MOH MAYAA APPROACH
            </p>

            <h2>
              Effortless celebrations,
              thoughtfully brought together.
            </h2>

            <p className="story-card-description">
              You live the moment.
              We take care of the rest.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}