import React from "react";
import "./style.css";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-main-text" data-text="Experience Ads">
          Experience Ads
        </p>
        <p className="hero-sub-text">in a New Dimension.</p>
      </div>
      <img src={heroImage} alt="VR Headset" className="hero-image" />
      <div className="circle"></div>
    </div>
  );
};

export default Hero;
