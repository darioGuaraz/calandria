import React, { useEffect, useRef } from "react";
import "./Header.css";
import logoHeader from "../../img/logo-letras-blanco.png";
import tarjetaCalandria from "../../img/tarjeta-calandria.png";

import headerFondo from "../../img/header-fondo.mp4";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const logo = entry.target.querySelector(".header-logo");
          const title = entry.target.querySelector(".title");
          if (entry.isIntersecting) {
            setTimeout(() => logo && logo.classList.add("visible"), 300);
            setTimeout(() => title && title.classList.add("visible"), 800);
          } else {
            if (logo) logo.classList.remove("visible");
            if (title) title.classList.remove("visible");
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
      <video
        src={headerFondo}
        autoPlay
        loop
        muted
        playsInline
        className="video-header"
      ></video>
      <div className="container-general">
        <div className="tarjeta-img">
          <img src={tarjetaCalandria} alt="" />
        </div>
        <div className="container-logo">
          <img src={logoHeader} alt="Calandria Logo" className="header-logo" />
          <div className="container-text">
            <h1 className="title">
              Soluciones digitales <br /> & estrategias de <br /> marketing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
