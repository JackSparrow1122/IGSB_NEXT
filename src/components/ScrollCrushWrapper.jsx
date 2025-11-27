"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCrushWrapper({ Hero, children }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const heroHeight = hero.offsetHeight;

    // Safe ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=600",           // 🔥 FIXED LENGTH (prevents collapsing)
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      hero,
      { height: heroHeight },
      { height: heroHeight * 0.45, ease: "none" }
    );

    // ❗ Force recalculation when images finish loading
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={heroRef} className="w-full">
        {Hero}
      </div>

      <div className="relative z-20 pt-5">
        {children}
      </div>
    </div>
  );
}
