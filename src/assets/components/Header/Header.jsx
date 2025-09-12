import React, { useEffect, useRef } from "react";
import "./Header.css";
import logoHeader from "../../img/logo-letras-blanco.png";
import logoWspFlotante from "../../img/wspico.png";
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector("img");
            const description = entry.target.querySelector("h1");

            setTimeout(() => title.classList.add("visible"), 300);
            setTimeout(() => description.classList.add("visible"), 800);
          } else {
            const elements = entry.target.querySelectorAll("img, h1");
            elements.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={headerRef} className="header" id="header">
      <div className="container-logo">
        <img src={logoHeader} alt="Calandria Logo" className="header-logo" />
      </div>
      <div className="container-text-button">
        <h1>
          Soluciones digitales <br /> & estrategias de <br /> marketing
        </h1>
      </div>
    </section>
  );
};

export default Header;
