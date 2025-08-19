import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const items = entry.target.getElementsByClassName("contact-item");
            Array.from(items).forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 200);
            });
          } else {
            entry.target.classList.remove("visible");
            const items = entry.target.getElementsByClassName("contact-item");
            Array.from(items).forEach((item) => {
              item.classList.remove("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="contact">
      <h2>Contacto</h2>
      <div className="contact-content">
        <p className="contact-intro">
          ¿Querés hacer una consulta o agendar una cita? Estamos para ayudarte.
        </p>
        <div className="contact-links">
          <a
            href="mailto:contacto.calandria@gmail.com?subject=Consulta%20Calandria&body=Hola,%20vi%20su%20pagina%20web%20y%20quisiera%20mas%20informacion%20sobre%20sus%20servicios"
            className="contact-item email"
          >
            📧 contacto.calandria@gmail.com
          </a>
          <a
            href="https://wa.me/541135834703?text=Hola,%20vi%20tu%20pagina%20web%20y%20quiero%20mas%20informacion%20sobre%20sus%20servicio."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item whatsapp"
          >
            📱 WhatsApp: +54 11-3583-4703
          </a>
          <p className="contact-item">☎️ Teléfono: +54 11-3583-4703</p>
          <a
            href="https://www.instagram.com/agenciacalandria?igsh=MWp5c2N2bHFpYWZzaQ=="
            className="contact-item instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram: @agenciacalandria
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
