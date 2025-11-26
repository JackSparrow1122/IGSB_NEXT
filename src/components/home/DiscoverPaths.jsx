"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiscoverPaths = () => {
  const sectionRef = useRef(null);

  // MBA Specializations
  const courses = [
    {
      name: "Human Resource Management",
      img: "/MBA1.jpg",
      link: "/MBA1",
    },
    {
      name: "Finance Management",
      img: "/MBA2.jpg",
      link: "/MBA2",
    },
    {
      name: "Operations & Supply Chain Management",
      img: "/MBA3.jpg",
      link: "/MBA3",
    },
    {
      name: "Marketing Management",
      img: "/MBA4.jpg",
      link: "/MBA4",
    },
  ];

  // === GSAP Animations ===
  useEffect(() => {
    const sec = sectionRef.current;

    // Fade in Heading
    gsap.fromTo(
      sec.querySelectorAll(".fade-head"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
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
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
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
    <div
      ref={sectionRef}
      className="bg-gray-50 py-6 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 fade-head">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            MBA Specializations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our industry-aligned MBA specializations designed for leadership excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.link}
              className="fade-card group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="text-white backdrop-blur-sm rounded-b-lg px-4 py-3 shadow-sm">
                  <h3 className="flex justify-center text-xs font-semibold text-white truncate text-center">
                    {course.name}
                  </h3>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
