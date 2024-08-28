import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './general/navbar/Navbar';
import Footer from './general/footer/Footer';
import LandingPage from './landing_page/LandingPage';
import ContactPage from './contacts/Contacts';
import MenuPage from './menu/MenuPage';

import AboutPage from './about/About';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);


function App() {
    return (
        <Router>
      <div className="App">

      <Navbar />

      <div className="container-wrapper">
      </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contactos" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/sobre_nos" element={<AboutPage />} />



        </Routes>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
