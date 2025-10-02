import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation show={showNav} />
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
