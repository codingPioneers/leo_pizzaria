import React, { useState, useEffect } from 'react';
import './header.css';
import heroVideo from '../../../assets/hero_video.mov';
import mobileHeroVideo from '../../../assets/mobile-hero-video.mp4';
import logoSlogan from '../../../assets/logo_slogan.png'; // Ensure this path is correct

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? mobileHeroVideo : heroVideo;

  return (
    <div className="hero-container">
      {/* Using dangerouslySetInnerHTML to embed the video with specific attributes */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <video
            class="hero-video"
            autoplay
            loop
            muted
            playsinline
            controls="false"
            disablePictureInPicture
            oncontextmenu="return false"
          >
            <source src="${videoSrc}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        `,
        }}
      ></div>
      {/* Overlay div */}
      <div className="overlay">
        <img src={logoSlogan} alt="Logo Slogan" className="logo-slogan" />
      </div>
    </div>
  );
};

export default Header;
