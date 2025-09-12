// WhatsAppBubble.jsx
import React from "react";
import logoWspFlotante from "../../img/wspico.png";
import "./WhatsappBubble.css";

const WhatsAppBubble = () => (
  <a
    href="https://wa.me/541135834703?text=Hola,%20vi%20tu%20pagina%20web%20y%20quiero%20mas%20informacion%20sobre%20el%20servicio%20y%20productos."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-bubble"
  >
    <img src={logoWspFlotante} alt="WhatsApp" />
  </a>
);

export default WhatsAppBubble;
