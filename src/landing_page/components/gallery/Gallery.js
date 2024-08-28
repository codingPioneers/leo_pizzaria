

import React from 'react';
import './gallery.css'; // Importe o arquivo CSS de estilos


import foto1 from '../../../assets/food1.jpg';
import foto2 from '../../../assets/food2.jpg';
import foto3 from '../../../assets/food3.jpg';
import foto4 from '../../../assets/food4.jpg';
import foto5 from '../../../assets/food5.jpg';
import foto6 from '../../../assets/food6.jpg';
import foto7 from '../../../assets/food7.jpg';
import foto8 from '../../../assets/food8.jpg';
import foto9 from '../../../assets/food9.jpg';

import foto10 from '../../../assets/food12.jpg';
import foto11 from '../../../assets/food13.jpg';
import foto12 from '../../../assets/food14.jpg';






const images = [
 foto1,foto2,foto4, foto10,foto11, foto12,foto5,foto6, foto7, foto8, foto9
];



const Gallery = () => {
  const columns = 4;
  const imagesPerColumn = Math.ceil(images.length / columns);

  const groupedImages = [];
  for (let i = 0; i < columns; i++) {
    groupedImages.push(images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn));
  }

  return (
    <div className="gallery-container" data-aos="fade-up">
      <div className="gallery-grid">
        {groupedImages.map((column, index) => (
          <div className="gallery-column" key={index}>
            {column.map((image, imgIndex) => (
              <div key={imgIndex} data-aos="zoom-in" data-aos-delay={`${imgIndex * 100}`}>
                <img className="gallery-image" src={image} alt={`Gallery Image ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Gallery;



const secondGallery = () => {
  const columns = 4;
  const imagesPerColumn = Math.ceil(images.length / columns);

  const groupedImages = [];
  for (let i = 0; i < columns; i++) {
    groupedImages.push(images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn));
  }

  return (
    <div className="gallery-container" data-aos="fade-up">
      <div className="gallery-grid">
        {groupedImages.map((column, index) => (
          <div className="gallery-column" key={index}>
            {column.map((image, imgIndex) => (
              <div key={imgIndex} data-aos="zoom-in" data-aos-delay={`${imgIndex * 100}`}>
                <img className="gallery-image" src={image} alt={`Gallery Image ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


