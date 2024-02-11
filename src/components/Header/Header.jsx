import React from "react";
import "./style.css";
import logoImage from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header flex">
      <div className="logo-container flex column">
        <img src={logoImage} alt="AdVRise Logo" className="logo-image" />
        <div className="logo-text white-text">
          Ad<span className="logo-vr">VR</span>ise
        </div>
      </div>
      <nav className="navigation flex">
        <a href="#about" className="nav-link white-text bold">
          About
        </a>
        <a href="#tryvr" className="nav-link white-text bold">
          Try VR
        </a>
        <a href="#team" className="nav-link white-text bold">
          Team
        </a>
        <a href="#contacts" className="nav-link white-text bold">
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Header;
