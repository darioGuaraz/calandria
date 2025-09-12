import React from "react";
import "./assets/styles/global.css";
import Navbar from "./assets/components/navbar/Navbar";
import Header from "./assets/components/Header/Header";
import WhatsAppBubble from "./assets/components/wathsappBubble/WhatsappBubble";
import About from "./assets/components/about/About";
import Services from "./assets/components/services/Services";
import Main from "./assets/components/main/Main";
import Clients from "./assets/components/clients/Clients";
import Contact from "./assets/components/contact/Contact";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <WhatsAppBubble />
      <About />
      <Services />
      <Main />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
