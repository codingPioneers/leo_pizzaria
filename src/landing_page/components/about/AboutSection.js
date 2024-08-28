import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que você está usando o react-router-dom para navegação
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faPizzaSlice, faCheese, faLeaf } from '@fortawesome/free-solid-svg-icons';

import './about.css';

import veg from './assets/about_veg.png';
import testImage from './assets/food5.jpg';
import img2 from './assets/food1.jpg'



const AboutSection = () => {
    return (
        <div className="about-section">
          <div className="about-left-column">
            <img src={testImage} alt="Food 1" className="food-image top-image" />
            <img src={img2} alt="Food 2" className="food-image bottom-image" />
            <img src={veg} alt="Food 3" className="food-image veg-image" />

          </div>
          <div className="about-right-column">
    <div className="mini-ver">Experiência comprovada</div>
    <h1>8 anos de Satisfação</h1>
    <p>
        Um refúgio acolhedor para os amantes da cozinha italiana.
        Especializa-se em pizzas de massa fina, pastas e saladas deliciosas. A Pizzaria Passione oferece
        uma experiência gastronômica inigualável com seu forno a lenha.
        
        Conheça como tudo começou <Link to="/sobre_nos">aqui</Link>.
    </p>
        {
            /*
                <div className="cards">
        <div className="card">
            <FontAwesomeIcon icon={faFire} className="card-icon" />
            <strong>Forno a Lenha</strong>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faPizzaSlice} className="card-icon" />
            <strong>Pizza Massa Fina</strong>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faCheese} className="card-icon" />
            <strong>Mozzarela de Búfala</strong>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faLeaf} className="card-icon" />
            <strong>Ingredientes Frescos</strong>
        </div>
    </div>
            */
        }
</div>

        </div>
      );
    };

export default AboutSection;
