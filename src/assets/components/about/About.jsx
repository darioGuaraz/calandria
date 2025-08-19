import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about">
      <h2>¿Quiénes Somos?</h2>
      <div className="about-content">
        <p>
          En Calandria transformamos ideas en experiencias digitales que generan
          impacto real. Somos una agencia que combina tecnología, creatividad y
          estrategia para impulsar el crecimiento de profesionales, negocios y
          empresas. Integramos desarrollo tecnológico, marketing estratégico y
          producción creativa para ofrecer soluciones completas, adaptadas a
          cada necesidad. Desarrollamos sitios web a medida e implementamos
          estrategias de marketing digital para que el mundo te conozca. ​​Somos
          estrategas, desarrolladores, diseñadores, realizadores y, sobre todo,
          narradores de identidades En Calandria entendemos que cada proyecto es
          único. Nos mueve el desafío de impulsar tu marca para que vuele alto,
          con personalidad, claridad y propósito.
        </p>
      </div>
    </section>
  );
};

export default About;
