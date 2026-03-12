import "./styles/globals.css";

import Navbar      from "./components/sections/Navbar";
import Hero        from "./components/sections/Hero";
import WhyUs       from "./components/sections/WhyUs";
import Services    from "./components/sections/Services";
import Projects    from "./components/sections/Projects";
import Testimonial from "./components/sections/Testimonial";
import Team        from "./components/sections/Team";
import FAQ         from "./components/sections/FAQ";
import Contact     from "./components/sections/Contact";
import Footer      from "./components/sections/Footer";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  return (
    <div style={{ fontFamily: "var(--font)", background: "var(--light)", color: "var(--dark)" }}>
      <Navbar      scrollTo={scrollTo} />
      <Hero        scrollTo={scrollTo} />
      <WhyUs />
      <Services />
      <Projects />
      <Testimonial />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
