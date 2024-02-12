import React from "react";
import "./style.css";
import vrHeadsetImage from "../../assets/vr-headset.png";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-image-box">
        <img src={vrHeadsetImage} alt="VR Headset" />
      </div>
      <div className="about-content">
        <h2>What is AdVRise?</h2>
        <p>
          Virtual Reality Advertising (VR Ads) revolutionizes user engagement by
          transporting consumers into immersive brand experiences. Gone are the
          days of passive viewing; with VR Ads, users actively interact with
          brands in captivating 3D environments, enhancing brand recall and
          driving meaningful connections.
        </p>
        <div className="container">
          <button className="btn" data="I want to try!"></button>
        </div>
        <div className="ball-right"></div>
        <div className="ball-left"></div>
      </div>
    </div>
  );
};

export default AboutSection;
