import React from 'react';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import menuHeader from '../assets/food13.jpg';
import Footer from '../general/footer/Footer';

const ContactPage = () => {
  return (
    <div className="page-container">
      <div className="contacts-header-overlay">
        <div className="contacts-header-text">Contactos</div>
      </div>
      
      <div className='container-wrapper'>
        <div className="contact-section">
          <div className="contact-container">
            <h2>Estamos cá</h2>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <div className="contact-page-info">
                Altura, Faro - Portugal <br />
                R. da Alagoa, 8950-411 Altura, Portugal
              </div>
            </div>
          </div>
          <div className="contact-container">
            <h2>Fale connosco</h2>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div className="contact-page-info">+351 922 240 440</div>
            </div>
          </div>
          <div className="contact-container">
            <h2>Horário</h2>
            <div className="contact-item">
              <FontAwesomeIcon icon={faClock} className="contact-icon" />
              <div className="contact-page-info">
                Seg-Dom <br />
                12h-16h <br />
                19h-23h
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
