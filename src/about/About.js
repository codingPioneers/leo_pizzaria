import React, { useEffect } from 'react';
import Footer from '../general/footer/Footer';
import hero from '../assets/food12.jpg'; // Presumindo que esta é uma imagem da pizzaria
import logo from '../assets/menu_section.jpg'; // Presumindo que este é o logotipo da pizzaria
import './about.css'; // Presumindo um arquivo CSS separado para estilizar a página Sobre

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Seção Hero para a página sobre */}
      <div className="about-hero-container">
        <img src={hero} alt="Hero" className="about-hero-image" />
        <div className="about-ero-overlay">
        </div>
      </div>

      {/* Seção principal de conteúdo */}
      <div className="about-content">
        <div className="about-text">
          <p className="intro-text">Um Pouco Sobre Nós</p>
          <h1>A Nossa História</h1>
          <p>
            Há mais de 7 anos, a nossa pizzaria traz com paixão o sabor da autêntica pizza italiana diretamente para a sua mesa. 
            Acreditamos que uma ótima pizza começa com ótimos ingredientes, e é por isso que selecionamos os ingredientes mais finos e frescos disponíveis.
            Cada pizza é feita com carinho, desde a massa feita à mão até às coberturas cuidadosamente escolhidas.
          </p>
          <p>
            Na nossa pizzaria, não é apenas sobre a comida; é sobre criar um ambiente acolhedor onde todos se sentem em casa. 
            A nossa equipa está sempre pronta com um sorriso, garantindo que cada visita seja uma experiência deliciosa.
            Venha juntar-se a nós e saborear a diferença que a paixão e a qualidade fazem. Buon Appetito!
          </p>
        </div>
      </div>

      {/* Seção de rodapé */}
    </>
  );
};

export default AboutPage;
