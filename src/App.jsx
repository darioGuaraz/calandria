import React from "react";
import "./assets/styles/global.css";
import Navbar from "./assets/components/navbar/Navbar";
import Hero from "./assets/components/hero/Hero";
import About from "./assets/components/about/About";
import Services from "./assets/components/services/Services";
import Contact from "./assets/components/contact/Contact";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
