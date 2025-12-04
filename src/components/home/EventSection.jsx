"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function EventsSection() {
  const marqueeRef = useRef(null);

  const events = [
    { img: "/events/ArshGoyal.JPG", title: "Guest Lecture by Arsh Goyal", description: "An inspiring session with Arsh Goyal, sharing real-world tech insights and industry experience." },
    { img: "/events/BParak.jpg", title: "Bharat Parakrama", description: "A celebration of patriotism and valor with vibrant cultural performances and student participation." },
    { img: "/events/gusto.jpg", title: "Gusto – Annual Tech Fest", description: "A thrilling fest of technology, creativity, and innovation featuring workshops and competitions." },
    { img: "/events/IGIIRP.JPG", title: "Indira Global Industrial Research Program", description: "Encouraging collaboration between academia and industry for impactful research and innovation." },
    { img: "/events/MBAInduction.jpg", title: "MBA Induction Program", description: "The beginning of the management journey with insights from corporate leaders and alumni." },
    { img: "/events/Navratri.JPG", title: "Navratri Celebration", description: "A grand cultural evening filled with Garba, music, and colorful traditional festivities." },
    { img: "/events/SportsComplex.JPG", title: "IGSB Sports Complex", description: "A flagship event connecting visionaries, innovators, and learners from diverse industries." },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const cards = marquee.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
        card.classList.add("scale-up");
      });

      card.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
        card.classList.remove("scale-up");
      });
    });
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
        Academic Conferences & Campus Events
      </h2>

      <div className="relative w-full overflow-visible py-10">

        {/* TRIPLE DUPLICATION FOR PERFECT LOOP */}
        <div ref={marqueeRef} className="marquee flex px-6">
          {[...events, ...events, ...events].map((event, index) => (
            <div key={index} className="card-wrapper mr-6 flex-shrink-0">
              <div className="card w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-t-xl overflow-hidden">
                  <Image src={event.img} alt={event.title} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-base mb-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%); /* One-third shift */
          }
        }

        .marquee {
          animation: marqueeScroll 35s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .card-wrapper,
        .card {
          will-change: transform;
          transform: translateZ(0);
        }

        .scale-up {
          transform: scale(1.06) translateZ(0);
          background-color: #b2f5ea; 
          z-index: 20;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
        }
      `}</style>
    </section>
  );
}
