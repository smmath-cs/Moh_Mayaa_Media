import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Story from "./Components/Story";
import Services from "./Components/Services";
import Founder from "./Components/Founder";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />

      {/* =========================
          VISUAL BREAK SECTION
      ========================== */}
      <section className="relative w-full overflow-hidden my-12 md:my-16">
        {/* Video / Image Container */}
        <div className="relative w-full h-[65vh] md:h-[80vh] flex items-end">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/celebration.mp4" type="video/mp4" />
          </video>

          {/* Subtle Dark Gradient Overlay (Gives the dark background look without hiding lanterns) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Bottom-Left Aligned Text Block */}
          <div className="relative z-10 px-8 md:px-16 pb-12 md:pb-16 max-w-2xl text-left">
            <span className="block text-yellow-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
              CELEBRATIONS
            </span>
            <h2 className="font-display text-ivory text-4xl sm:text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight">
              Made to be <br />
              remembered.
            </h2>
          </div>
        </div>
      </section>

      <Services />
      <Founder />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
