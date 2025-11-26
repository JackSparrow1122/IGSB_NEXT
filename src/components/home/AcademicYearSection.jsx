"use client";

import React, { useEffect, useRef } from "react";
import ProgramList from "./ProgramList";
import ApplyForm from "./ApplyForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AcademicYearSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;

    if (!sec) return;

    // Fade-in heading or text blocks
    gsap.fromTo(
      sec.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Left Content (ProgramList) — fade from left
    gsap.fromTo(
      sec.querySelectorAll(".fade-left"),
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".left-content"),
          start: "top 90%",
          once: true,
        },
      }
    );

    // Right Content (ApplyForm) — fade from right
    gsap.fromTo(
      sec.querySelectorAll(".fade-right"),
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".right-content"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16">
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 lg:grid-cols-10
          gap-12
          px-4 sm:px-6 lg:px-0
        "
      >
        {/* LEFT: Program List (70%) */}
        <div className="col-span-7 w-full h-full left-content fade-left">
          <ProgramList />
        </div>

        {/* RIGHT: Apply Form (30%) */}
        <div className="col-span-3 w-full h-full flex right-content fade-right">
          <div className="w-full h-full">
            <ApplyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicYearSection;
