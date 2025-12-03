"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    // ================================
    // 1️⃣ TEXT & HEADING FADE-IN
    // ================================
    gsap.fromTo(
      section.querySelectorAll(".fade-text"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );

    // ================================
    // 2️⃣ LOGOS – STAGGER RIGHT ➜ LEFT
    // ================================
    gsap.fromTo(
      section.querySelectorAll(".fade-logo"),
      { autoAlpha: 0, x: 60 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: {
          each: 0.25,
          from: "end", // 👉 Right-to-left
        },
        scrollTrigger: {
          trigger: section.querySelector(".logos-wrapper"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 pt-20 pb-10 "
    >
      <div className="max-w-7xl mx-auto space-y-5">

        {/* HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] fade-text">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              Explore Your Potential At
            </h2>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-secondary mt-1 leading-tight">
              INDIRA GLOBAL SCHOOL OF BUSINESS
            </h2>
          </div>
        </div>

        {/* TEXT + LOGOS */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">

          {/* TEXT */}
          <div className="fade-text">
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              Located near Pune, Indira Global School of Business one of the
              leading NAAC-accredited MBA institution that offers a rich blend
              of management education and research driven learning. Choose from
              industry focused specializations, learn from research active
              faculty, and gain practical insights through case studies,
              projects, and data driven analysis, while accessing strong
              placements and opportunities to participate in seminars,
              conferences, and research initiatives.
            </p>
          </div>

          {/* LOGOS */}
          <div className="logos-wrapper flex gap-6 justify-start lg:justify-center items-start">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="fade-logo flex items-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={150}
                  height={150}
                  className="object-contain drop-shadow"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreSection;
