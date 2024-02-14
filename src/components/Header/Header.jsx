import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        <Link to="#about" className="nav-link white-text bold">
          About
        </Link>
        <Link to="#team" className="nav-link white-text bold">
          Team
        </Link>
        <Link to="#contacts" className="nav-link white-text bold">
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
