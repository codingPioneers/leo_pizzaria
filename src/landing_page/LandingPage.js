import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery'; 
import AboutSection from './components/about/AboutSection';
import Testimonials from './components/testimony/customer_reviews';
import Cards from './components/cards/Cards';
import MenuSection from './components/menu_section/menu_section';

const LandingPage = () => {
   
    return (
      <>
     <Header/>
     <Cards/>

     <div className="container-wrapper">
         <Testimonials/>
        </div>
         <MenuSection/>
         <div className="container-wrapper">


         <AboutSection/>
        </div>
      </>
    );
  };
  
  export default LandingPage;
  