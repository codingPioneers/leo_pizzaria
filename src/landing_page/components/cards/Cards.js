// src/components/Cards.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faPizzaSlice, faCheese, faLeaf } from '@fortawesome/free-solid-svg-icons';

import './cards.css';

const Cards = () => {
    return (
       <>
     <div className='cards-container'>
     <h1>O melhor para sí!</h1>

<div className="cards">

    <div className="card">
        <FontAwesomeIcon icon={faFire} className="card-icon" />
        <strong>Forno a Lenha</strong>
    </div>
    <div className="card">
        <div className='icon-section'>
        <FontAwesomeIcon icon={faPizzaSlice} className="card-icon" />
        </div>
        <div className='card-text'>
        <strong >Pizza Massa Fina</strong>

        </div>
    </div>
    <div className="card">
        <FontAwesomeIcon icon={faCheese} className="card-icon" />
        <strong>Mozzarela de Búfala</strong>
    </div>
    <div className="card">
    <div className='icon-section'>
        <FontAwesomeIcon icon={faLeaf} className="card-icon" />
        </div>
        <div className='card-text'>
        <strong>Ingredientes Frescos</strong>
        </div>

    </div>
</div>
     </div>
</>
    );
};

export default Cards;
