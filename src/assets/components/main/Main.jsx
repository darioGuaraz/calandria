import React from "react";
import "./Main.css";

import videoDev from "../../img/videoDev.mp4";
import videoMkt from "../../img/videoMarketing.mp4";
import videoMultimedia from "../../img/videoMultimedia.mp4";

const Main = () => {
  return (
    <section className="main">
      <h2>Calandria te ayuda a volar</h2>
      <div className="mainservices">
        <div className="text-content">
          <h3>Desarrollo Web</h3>
          <p>
            Desarrollamos soluciones digitales a medida que combinan diseño
            centrado en el usuario con programación robusta y escalable. Creamos
            sitios web y aplicaciones utilizando código de tecnologías modernas
            como React y Vue, lo que garantiza un rendimiento óptimo y una base
            sólida para el crecimiento futuro, que pueda volar junto a tu
            negocio. No solo buscamos la funcionalidad, sino también una
            experiencia significativa que conecte con las personas que lo
            utilizan.
          </p>
        </div>
        <div className="img-content">
          <video
            src={videoDev}
            autoPlay
            loop
            muted
            playsInline
            className="videoDev"
          />
        </div>
      </div>
      <div className="mainservices">
        <div className="text-content">
          <h3>Marketing Digital</h3>
          <p>
            Brindamos un servicio integral de marketing digital diseñado para
            aumentar la visibilidad y el crecimiento de tu marca. Combinamos
            estrategias de redes sociales, publicidad online, y contenidos
            creativos para conectar con tu público objetivo, generar más
            clientes potenciales y fortalecer la presencia
            digital de tu negocio.
          </p>
        </div>
        <div className="img-content">
          <video
            src={videoMkt}
            autoPlay
            loop
            muted
            playsInline
            className="videoDev"
          />
        </div>
      </div>
      <div className="mainservices">
        <div className="text-content">
          <h3>Producción Audiovisual</h3>
          <p>
            Desarrollamos producciones audiovisuales que transmiten la esencia
            de tu marca con creatividad y calidad. Realizamos videos
            institucionales, publicitarios y contenidos para redes sociales,
            cuidando cada detalle de la narrativa, la imagen y el sonido para
            generar impacto, atraer audiencias y potenciar la comunicación
            visual de tu negocio.
          </p>
        </div>
        <div className="img-content">
          <video
            src={videoMultimedia}
            autoPlay
            loop
            muted
            playsInline
            className="videoDev"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
