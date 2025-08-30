import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Calandria Logo" className="navbar-logo" />
        </a>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            ¿Quiénes Somos?
          </a>
          <a href="#services" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#clients" onClick={closeMenu}>
            Clientes
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
