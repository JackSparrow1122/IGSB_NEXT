"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecruitersSection = () => {
  const pathname = usePathname();
  const sectionRef = useRef(null);

  const pageContent = {
    "/": {
      headline: "INDIRA DEGREE OPENS DOORS. WIDE.",
      body: "At Indira College of Engineering & Management, there is a strong focus on preparing every student to be industry ready. With numerous recruiters visiting our campus each year, our graduates gain access to a network of opportunities, resources, and the support needed to excel in a rapidly evolving job market.",
    },
    "/placement": {
      headline: "INDIRA DEGREE OPENS DOORS. WIDE.",
      body: "At Indira College of Engineering & Management, there is a strong focus on preparing every student to be industry ready. With numerous recruiters visiting our campus each year, our graduates gain access to a network of opportunities, resources, and the support needed to excel in a rapidly evolving job market.",
    },
    "/programs/mba": {
      headline: "INDIRA DEGREE OPENS DOORS. WIDE.",
      body: "At Indira College of Engineering & Management, there is a strong focus on preparing every student to be industry ready. With numerous recruiters visiting our campus each year, our graduates gain access to a network of opportunities, resources, and the support needed to excel in a rapidly evolving job market.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  const allLogos = Array.from({ length: 44 }, (_, i) => `/logos/logo${i + 1}.png`).filter(
    (_, index) => ![35, 37].includes(index + 1)
  );

  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      }
    );

    // ⚡ FASTER LOGO ANIMATION
    gsap.fromTo(
      section.querySelectorAll(".logo-item:not(.hidden-logo)"),
      { autoAlpha: 0, y: 20, x: 20 },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 0.55,              // faster
        ease: "power2.out",          // snappier
        stagger: { each: 0.025 },    // faster
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      section.querySelector(".circle-badge"),
      { autoAlpha: 0, scale: 0.7 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.1,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="fade-up text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {headline}
        </h2>

        <p className="fade-up text-gray-700 text-xs sm:text-sm max-w-5xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          {body}
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 
                        gap-x-2 sm:gap-x-3 gap-y-5 sm:gap-y-7 place-items-center relative">

          {reorderedLogos.map((logo, index) => {
            const shouldHide = [17, 24].includes(index);

            return (
              <div
                key={index}
                className={`logo-item flex items-center justify-center 
                  w-20 sm:w-24 md:w-28 h-14 sm:h-16 bg-white rounded-md shadow-sm hover:shadow-md 
                  transition-all duration-300

                  ${
                    shouldHide
                      ? "hidden-logo opacity-0 bg-transparent shadow-none border-none hover:shadow-none pointer-events-none"
                      : ""
                  }
                `}
              >
                <Image
                  src={logo}
                  alt={`Recruiter Logo ${index + 1}`}
                  width={100}
                  height={60}
                  className="object-contain max-w-[75%] max-h-[50px] sm:max-w-[80%] sm:max-h-[60px]"
                />
              </div>
            );
          })}

          <div className="circle-badge hidden sm:block absolute top-[49%] left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full 
                bg-[linear-gradient(145deg,#278da4_0%,#003c84_90%)] text-white 
                flex flex-col items-center justify-center shadow-xl 
                border-[4px] border-[#D4AF37]">
              <p className="text-lg md:text-2xl font-bold">650+</p>
              <p className="text-xs md:text-base font-medium">Corporates</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;
