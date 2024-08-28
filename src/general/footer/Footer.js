import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Importe o arquivo CSS para estilização
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <h2>Pizzaria Passione</h2>
        </div>
       
       <div className='footer-main'>
       <div className="footer-section contact-info">
          <h3>Contactos</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Altura, Faro - Portugal
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +351 - 96659986
            </li>
            
            <li>
              <FontAwesomeIcon icon={faClock} />
              Seg - Dom / 12:00 AM - 23:00 PM
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
          <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
                    <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                    <li className="nav-item"><Link to="/sobre_nos" className="nav-link">Acerca de Nós</Link></li>
            {
        
            }
          </ul>
        </div>

       </div>
       




        <div className="social-icons">
          <a href="https://www.facebook.com/restaurantemaremontealtura"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/restaurante_mar_e_monte/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <p className="footer-rights">&copy; 2024 Pizzaria Passione. Todos os direitos reservados.</p>


    </footer>
  );
};

export default Footer;
