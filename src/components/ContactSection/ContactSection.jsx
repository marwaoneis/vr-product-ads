import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const ContactComponent = () => {
  return (
    <div className="contact-container flex column">
      <div className="grid">
        <div className="logo-container flex column">
          <img src={logo} alt="AdVRise Logo" className="logo-image" />
          <div className="logo-text white-text">
            Ad<span className="logo-vr">VR</span>ise
          </div>
        </div>
        <h2>Contacts</h2>
      </div>
      <div className="footer">
        <div className="contact-info">
          <div className="contact-details">
            <p>Phone: +48 429 94 21 209</p>
            <p>E-mail: contact@vrity.com</p>
          </div>
          <div className="social-media">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
          </div>
        </div>
        <div className="contact-content">
          <p>Address: Marszałka Focha 63, 85-090 Bydgoszcz, Poland</p>
          <p>Schedule: 10:00 - 20:00, everyday</p>
        </div>
        <div className="contact-content">
          <p>Cooperation: cooperation@vrity.com</p>
          <p>Privacy policy: vrity privacy policy 2022</p>
        </div>
        <div className="footer-ball"></div>
      </div>
    </div>
  );
};

export default ContactComponent;
