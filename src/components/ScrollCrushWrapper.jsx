"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCrushWrapper({ Hero, children }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    // Capture original height
    const originalHeight = hero.offsetHeight;

    gsap.fromTo(
      hero,
      { height: originalHeight },
      {
        height: originalHeight * 0.55, // ❗ collapse vertically ONLY
        borderRadius: "40px",
        filter: "blur(1.5px)",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Optional: shadow effect
    gsap.to(hero, {
      boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative">

      {/* HERO (height will collapse only) */}
      <div
        ref={heroRef}
        className="overflow-hidden will-change-transform will-change-height"
        style={{ width: "100%" }} // ensure width stays full
      >
        {Hero}
      </div>

      {/* Other sections follow naturally */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
