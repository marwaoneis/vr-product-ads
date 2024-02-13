import React, { useEffect } from "react";
import "./style.css";
import heroImage from "../../assets/hero-image.png";
import diagonalSlash1 from "../../assets/slash1.svg";
import diagonalSlash2 from "../../assets/slash2.svg";
import diagonalSlash3 from "../../assets/slash3.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (self.direction === -1) {
            reverseAnimation();
          }
        },
      },
    });

    // Forward animation
    tl.to(".hero-image", {
      x: "-50%",
      scale: 3,
      duration: 0.5,
      ease: "power1.inOut",
    })
      .to(
        ".hero-content",
        {
          xPercent: -100,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".circle-left, .triangle",
        {
          y: 100,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      );

    // Reverse animation
    const reverseAnimation = () => {
      const reverseTl = gsap.timeline();
      reverseTl
        .to(".hero-image", {
          x: "0%",
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(
          ".hero-content",
          {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".circle-left, .triangle",
          {
            y: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "<"
        );
    };

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="triangle"></div>
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
