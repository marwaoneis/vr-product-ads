import React from "react";
import "./style.css";
import heroImage from "../../assets/hero-image.png";
import diagonalSlash1 from "../../assets/slash1.svg";
import diagonalSlash2 from "../../assets/slash2.svg";
import diagonalSlash3 from "../../assets/slash3.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={diagonalSlash1} alt="" class="diagonal-slash-1" />
        <p className="hero-main-text" data-text="Experience Ads">
          Experience Ads
        </p>
        <p className="hero-sub-text">in a New Dimension.</p>
      </div>
      <img src={heroImage} alt="VR Headset" className="hero-image" />
      <img src={diagonalSlash2} alt="" class="diagonal-slash-2" />
      <img src={diagonalSlash3} alt="" class="diagonal-slash-3" />
      <div className="circle circle-right"></div>
      <div className="circle circle-center"></div>
      <div className="circle circle-left"></div>
    </div>
  );
};

export default Hero;
