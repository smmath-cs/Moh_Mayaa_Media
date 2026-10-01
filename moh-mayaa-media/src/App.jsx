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
      <Services />
      <Founder />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}