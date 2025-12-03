"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom Tailwind/CSS for subtle background animation
const customStyles = `
  @keyframes subtle-pulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.03);
    }
    50% {
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.06);
    }
  }
  .animate-subtle-pulse {
    animation: subtle-pulse 5s ease-in-out infinite;
  }
`;

const DiscoverPaths = () => {
  const sectionRef = useRef(null);

  // MBA Specializations
  const courses = [
    {
      name: "Human Resource Management",
      img: "/MBA1.jpg",
      link: "/programs/mba",
    },
    {
      name: "Finance Management",
      img: "/MBA2.jpg",
      link: "/programs/mba",
    },
    {
      name: "Operations & Supply Chain Management",
      img: "/MBA3.jpg",
      link: "/programs/mba",
    },
    {
      name: "Marketing Management",
      img: "/MBA4.jpg",
      link: "/programs/mba",
    },
    {
      name: "Business Analytics",
      img: "/MBA4.jpg",
      link: "/programs/mba",
    },
  ];

  // === GSAP Animations ===
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    // Fade in Heading
    gsap.fromTo(
      sec.querySelectorAll(".fade-head"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Cards stagger animation
    gsap.fromTo(
      sec.querySelectorAll(".fade-card"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sec.querySelector(".cards-wrapper"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Inject custom CSS for the subtle background pulse */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div
        ref={sectionRef}
        // Applying the subtle background animation and enhancing the background
        className="bg-white py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden animate-subtle-pulse"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-left mb-8 sm:mb-16 fade-head">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
              MBA Specializations
            </h2>
          </div>

          {/* Grid */}
          <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <Link
                key={index}
                href={course.link}
                className="fade-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 
                          hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-300 transform-gpu" // Subtle pop-out animation
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                  <Image
                    src={course.img}
                    alt={course.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient (slightly darker for better text contrast) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-100 transition-opacity duration-300" />
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="text-white backdrop-blur-md px-4 py-3 sm:py-4 transition-all duration-300">
                    <h3 className="flex justify-center text-sm sm:text-base font-bold text-white tracking-wide text-center">
                      {course.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};

export default DiscoverPaths;
