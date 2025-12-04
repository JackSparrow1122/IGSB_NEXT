"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiscoverSection = () => {
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      image: "/industry.JPG",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      image: "/IGSB/Research/FDP/2FDP.jpg",
    },
    {
      title: "Corporate Partnerships & Recruitment",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from recruitment drives, on-campus placements, and access to employers seeking ICEM talent.",
      image: "/CorporateRelations.JPG",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative py-24 px-6 lg:px-16 overflow-visible 
        bg-secondary
      "
    >
      <div className="relative max-w-7xl mx-auto text-center z-10">

        <h2 className="fade-up text-3xl lg:text-3xl font-extrabold text-white mb-2">
          At Indira College, you will discover an
        </h2>

        <h2
          className="fade-up text-3xl lg:text-4xl font-extrabold mb-14 
            text-white  leading-snug"
        >
          Energy that runs through Everything and Everyone.
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {cards.map((card, index) => (
            <div key={index} className="relative group fade-up">

              {/* ❌ Removed Glow Offset */}
              {/* (This div is now deleted) */}

              {/* Main Card */}
              <div
                className="
  relative z-10 p-5 rounded-xl 
  bg-white/90 group-hover:bg-[#A7F3D0]/90 backdrop-blur-xl 
  border border-white/15 
  shadow-[0_8px_35px_rgba(0,0,0,0.45)]
  transition-all duration-300
  group-hover:-translate-y-2 group-hover:-translate-x-2 
  group-hover:shadow-xl
  flex flex-col
  h-[500px]
"

              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={260}
                  className="
                    object-cover w-full h-56
                    rounded-lg mb-4
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                <h3 className="text-gray-800 font-semibold text-lg mb-2 text-left">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed text-justify flex-grow">
                  {card.description}
                </p>

                <button
                  className="
                    flex items-center gap-2 
                    text-gray-700 
                    text-sm font-medium 
                    hover:text-white 
                    transition mt-3
                  "
                >
                  Know more ↗
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;