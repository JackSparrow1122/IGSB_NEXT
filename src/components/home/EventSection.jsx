"use client";

import Image from "next/image";
import React from "react";

export default function EventsSection() {
  const events = [
    {
      img: "/events/ArshGoyal.JPG",
      title: "Guest Lecture by Arsh Goyal",
      description:
        "An inspiring session with Arsh Goyal, sharing real-world tech insights and industry experience.",
    },
    {
      img: "/events/BParak.jpg",
      title: "Bharat Parakrama",
      description:
        "A celebration of patriotism and valor with vibrant cultural performances and student participation.",
    },
    
    {
      img: "/events/gusto.jpg",
      title: "Gusto – Annual Tech Fest",
      description:
        "A thrilling fest of technology, creativity, and innovation featuring workshops and competitions.",
    },
    {
      img: "/events/IGIIRP.JPG",
      title: "Indira Global Industrial Research Program",
      description:
        "Encouraging collaboration between academia and industry for impactful research and innovation.",
    },
    {
      img: "/events/MBAInduction.jpg",
      title: "MBA Induction Program",
      description:
        "The beginning of the management journey with insights from corporate leaders and alumni.",
    },
    {
      img: "/events/Navratri.JPG",
      title: "Navratri Celebration",
      description:
        "A grand cultural evening filled with Garba, music, and colorful traditional festivities.",
    },
    {
      img: "/events/SportsComplex.JPG",
      title: "ICEM Sports Complex",
      description:
        "A flagship event connecting visionaries, innovators, and learners from diverse industries.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 overflow-hidden">
      {/* ✅ Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
        Academic Conferences & Campus Events
      </h2>

      {/* ✅ Full-width marquee scroll */}
      <div className="relative w-full overflow-visible group">
        <div className="flex animate-marquee space-x-6 px-6 group-hover:pause">
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100"
            >
              <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-t-xl overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Gradient fade edges for smooth scroll */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>

      {/* 🔹 Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .group-hover\\:pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
