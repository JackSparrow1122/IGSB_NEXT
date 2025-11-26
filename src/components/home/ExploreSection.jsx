"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "NAAC Accredited", img: "/NAAC.webp" },
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    // Fade-in only for paragraph + logos (slower)
    gsap.fromTo(
      section.querySelectorAll(".fade-target"),
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,           // ⬅️ slower fade
        ease: "power3.out",
        stagger: 0.2,            // ⬅️ slower stagger
        scrollTrigger: {
          trigger: section,
          start: "top 80%",      // triggers a bit later, smoother
          once: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto pt-10 pb-10 space-y-8"
    >
      {/* ------------------ ROW 1: HEADING (LEFT) — NO ANIMATION ------------------ */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%]">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Explore Your Potential with
          </h2>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003366] mt-1 leading-tight">
            INDIRA GLOBAL SCHOOL OF BUSINESS
          </h2>
        </div>
        <div></div>
      </div>

      {/* ------------------ ROW 2: TEXT + LOGOS ------------------ */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">

        {/* LEFT: PARAGRAPH — fade in */}
        <div>
          <p className="fade-target text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
            Located near Pune, Indira Global School of Business one of the
            leading NAAC-accredited MBA institution that offers a rich blend of
            management education and research driven learning. Choose from
            industry focused specializations, learn from research active faculty,
            and gain practical insights through case studies, projects, and data
            driven analysis, while accessing strong placements and opportunities
            to participate in seminars, conferences, and research initiatives.
          </p>
        </div>

        {/* RIGHT: LOGOS — fade in */}
        <div className="flex gap-6 justify-start lg:justify-center items-start">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="fade-target flex items-center transition-transform duration-300 hover:scale-105"
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
  );
};

export default ExploreSection;
