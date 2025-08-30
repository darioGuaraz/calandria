import React, { useEffect, useRef } from "react";
import "./Hero.css";
import logoHeader from "../../img/logo-letras-blanco.png";
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector("img");
            const description = entry.target.querySelector("h1");
            const cta = entry.target.querySelector(".hero-cta");

            setTimeout(() => title.classList.add("visible"), 300);
            setTimeout(() => description.classList.add("visible"), 800);
            setTimeout(() => cta.classList.add("visible"), 1300);
          } else {
            const elements =
              entry.target.querySelectorAll("img, h1, .hero-cta");
            elements.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <img src={logoHeader} alt="Calandria Logo" className="hero-logo" />

      <h1>Soluciones digitales y estrategias de marketing.</h1>
      <a
        href="https://wa.me/541160352388?text=Hola,%20vi%20tu%20pagina%20web%20y%20quiero%20mas%20informacion%20sobre%20el%20servicio%20y%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-cta"
      >
        Consultar por WhatsApp
      </a>
    </section>
  );
};

export default Hero;
