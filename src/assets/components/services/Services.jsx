import React, { useEffect, useRef } from "react";
import "./Services.css";

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const categories =
            entry.target.getElementsByClassName("service-category");
          if (entry.isIntersecting) {
            Array.from(categories).forEach((category, index) => {
              setTimeout(() => {
                category.classList.add("visible");
              }, index * 200);
            });
          } else {
            Array.from(categories).forEach((category) => {
              category.classList.remove("visible");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={servicesRef} id="services" className="services">
      <h2>Servicios Especializados</h2>
      <div className="services-grid">
        <div className="service-category">
          <h3>Desarrollo Web</h3>
          <ul>
            <li>Landing Pages personalizadas</li>
            <li>Desarrollo de E-Commerce</li>
            <li>Análisis de sistemas y levantamiento de requerimientos</li>
            <li>Aplicaciones a medida para resolver necesidades específicas</li>
            <li>Soluciones digitales escalables</li>
            <li>Diseño de interfaces (UI) y experiencia de usuario (UX)</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Marketing digital</h3>
          <ul>
            <li>Gestión de redes sociales (Community Management)</li>
            <li>Publicidad digital: Google Ads & Meta Ads</li>
            <li>Email Marketing</li>
            <li>Data Analytics y estrategia de datos</li>
            <li>Posicionamiento SEO</li>
            <li>Branding y diseño de identidad visual</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Producción Audiovisual</h3>
          <ul>
            <li>Fotografía profesional</li>
            <li>Producción y edición de video</li>
            <li>Locución y voice-over</li>
            <li>Composición y producción musical</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
