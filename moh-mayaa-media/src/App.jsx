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
      <section className="relative w-full overflow-hidden my-16 md:my-24">
        {/* Video / Image Container with Overlay */}
        <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
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

          {/* Oxblood Tint Overlay */}
          <div className="absolute inset-0 bg-oxblood/60 backdrop-blur-[1px]" />

          {/* Centered Overlay Text */}
          <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-2">
            <span className="text-gold-light text-xs md:text-sm uppercase tracking-[0.3em]">
              CELEBRATIONS
            </span>
            <strong className="font-display text-ivory text-3xl md:text-6xl font-normal tracking-wide">
              Made to be remembered.
            </strong>
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
