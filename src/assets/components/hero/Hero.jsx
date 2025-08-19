import React, { useEffect, useRef } from "react";
import "./Hero.css";
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector("h1");
            const description = entry.target.querySelector("p");
            const cta = entry.target.querySelector(".hero-cta");

            setTimeout(() => title.classList.add("visible"), 300);
            setTimeout(() => description.classList.add("visible"), 800);
            setTimeout(() => cta.classList.add("visible"), 1300);
          } else {
            const elements = entry.target.querySelectorAll("h1, p, .hero-cta");
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
      {/*<img src={logo} alt="Visualent Logo" className="hero-logo" />*/}
      <h1>Calandria</h1>
      <p>
        Brindamos soluciones digitales a profesionales, empresas y negocios,
        adaptadas a sus necesidades y presupuesto. Potenciamos tu marca con
        estrategias de marketing y herramientas digitales a medida.
      </p>
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
