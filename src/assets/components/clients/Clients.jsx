import React, { useEffect, useRef } from "react";

import "./Clients.css";
import client1 from "../../img/clients/client1.png";
import client2 from "../../img/clients/client2.png";
import client3 from "../../img/clients/client3.png";
import client4 from "../../img/clients/client4.png";
import client5 from "../../img/clients/client5.png";
import client6 from "../../img/clients/client6.png";
import client7 from "../../img/clients/client7.png";

const Clients = () => {
  return (
    <section className="clients" id="clients">
      <div className="container-titles-clients">
        <div className="title-ellos">
          <h2>Confiaron</h2>
        </div>
        <div className="title-en-nosotros">
          <h2>en nosotros</h2>
        </div>
      </div>
      <div className="clients-logos">
        <img src={client1} alt="Client 1" />
        <img src={client2} alt="Client 2" />
        <img src={client3} alt="Client 3" />
        <img src={client4} alt="Client 4" />
        <img src={client5} alt="Client 5" />
        <img src={client6} alt="Client 6" />
        <img src={client7} alt="Client 7" />
      </div>
    </section>
  );
};
export default Clients;
