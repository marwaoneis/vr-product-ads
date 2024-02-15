import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import heroImage from "../../assets/hero-image1.png";
import newImage from "../../assets/new-image.png";
import diagonalSlash1 from "../../assets/slash1.svg";
import diagonalSlash2 from "../../assets/slash2.svg";
import diagonalSlash3 from "../../assets/slash3.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroContainerRef = useRef();
  const heroImageRef = useRef();
  const heroContentRef = useRef();
  const newImageRef = useRef();
  const [overflowHidden, setOverflowHidden] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight}px`,
        scrub: 1,
        pin: true,
        onEnter: () => setOverflowHidden(true),
        onLeaveBack: () => setOverflowHidden(false),
        onLeave: () => resetContainerHeight(),
      },
    });

    tl.to(
      ".triangle, .circle-right, .circle-center, .circle-left",
      {
        autoAlpha: 0,
        ease: "none",
      },
      0
    )
      .to(
        heroContentRef.current,
        {
          xPercent: -100,
          autoAlpha: 0,
          ease: "none",
        },
        0
      )
      .to(
        heroImageRef.current,
        {
          xPercent: -50,
          scale: 7,
          ease: "none",
          transformOrigin: "50% 25%",
        },
        0
      )
      .to(
        newImageRef.current,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "none",
        },
        "<"
      )
      .to(
        heroImageRef.current,
        {
          autoAlpha: 0,
          duration: 0.01,
        },
        ">"
      )
      .to(
        ".triangle, .circle-right, .circle-center, .circle-left",
        {
          autoAlpha: 0,
          ease: "none",
          immediateRender: false,
        },
        ">"
      );

    function resetContainerHeight() {
      ScrollTrigger.matchMedia({
        // On mobile devices
        "(max-width: 768px)": function () {
          const pinSpacer = document.querySelector(".pin-spacer");
          // Reset pin-spacer height
          if (pinSpacer) {
            gsap.set(pinSpacer, { height: 0 });
          }
        },
      });
      // Reset the hero container height
      gsap.set(heroContainerRef.current, { clearProps: "height" });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      setOverflowHidden(false);
      resetContainerHeight();
    };
  }, []);

  return (
    <div
      ref={heroContainerRef}
      className={`hero-container ${overflowHidden ? "overflow-hidden" : ""}`}
    >
      <div className="triangle"></div>
      <div ref={heroContentRef} className="hero-content">
        <img src={diagonalSlash1} alt="" class="diagonal-slash-1" />
        <h2 className="hero-main-text">Experience Ads</h2>
        <h2 className="hero-sub-text">in a New Dimension.</h2>
      </div>
      <img
        ref={heroImageRef}
        src={heroImage}
        alt="VR Headset"
        className="hero-image"
      />
      <img
        ref={newImageRef}
        src={newImage}
        alt="New Image"
        className="new-image"
      />
      <img src={diagonalSlash2} alt="" class="diagonal-slash-2" />
      <img src={diagonalSlash3} alt="" class="diagonal-slash-3" />
      <div className="circle-right"></div>
      <div className="circle-center"></div>
      <div className="circle-left"></div>
    </div>
  );
};

export default Hero;
