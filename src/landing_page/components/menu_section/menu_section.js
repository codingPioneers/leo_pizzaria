import React from 'react';
import './/menu_section.css'; // Import the CSS file

import foodPhoto from '../../../assets/menu_section.jpg'

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="menu-content">
        <div className="menu-text">
          <h3 className="menu-subtitle">Conheça o nosso</h3>
          <h2 className="menu-title">Menu</h2>
          <p className="menu-description">
            O nosso menu é rico em variedade, e aqui encontrará excelentes carnes e peixes e combinações gastronómicas de alto nível. Para quem prefere um estilo vegetariano, temos também pratos com muita qualidade.
          </p>
          <p className="menu-description">
            Mas não dedicámos a nossa atenção apenas aos pratos principais. Irá também encontrar entradas peculiarmente boas, sobremesas mágicas, e uma vasta seleção de vinhos, gins, digestivos, e outras bebidas alcoólicas.
          </p>
          <a href="/menu" className="menu-button">Ver menu</a>
        </div>
        <div className="menu-image">
          <img src={foodPhoto} alt="Prato delicioso" />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
