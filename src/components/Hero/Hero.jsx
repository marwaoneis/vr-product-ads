import React, { useEffect } from "react";
import "./style.css";
import heroImage from "../../assets/hero-image.png";
import diagonalSlash1 from "../../assets/slash1.svg";
import diagonalSlash2 from "../../assets/slash2.svg";
import diagonalSlash3 from "../../assets/slash3.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlRight = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tlRight.to(".circle-right", {
      rotationY: 360,
      transformPerspective: 500,
      ease: "none",
    });

    const tlCenter = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tlCenter.to(".circle-center", {
      rotationX: 360,
      transformPerspective: 500,
      ease: "none",
    });

    const tlLeft = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tlLeft.to(".circle-left", {
      rotationY: -360,
      transformPerspective: 500,
      ease: "none",
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={diagonalSlash1} alt="" class="diagonal-slash-1" />
        <h2 className="hero-main-text">Experience Ads</h2>
        <h2 className="hero-sub-text">in a New Dimension.</h2>
      </div>
      <img src={heroImage} alt="VR Headset" className="hero-image" />
      <img src={diagonalSlash2} alt="" class="diagonal-slash-2" />
      <img src={diagonalSlash3} alt="" class="diagonal-slash-3" />
      <div className="circle-right"></div>
      <div className="circle-center"></div>
      <div className="circle-left"></div>
    </div>
  );
};

export default Hero;
