"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const animatedCardsRef = useRef([]);
  const hasAnimatedRef = useRef(false);

  // ➤ Trigger number counting + fade animation using GSAP
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimatedRef.current) {
          animateNumbers();
          animateCards();
          hasAnimatedRef.current = true;
        }
      },
    });
  }, []);

  // ➤ Count animation logic
  const animateNumbers = () => {
    const targets = [27, 8.16, 350, 100];
    const duration = 2000;
    const frameRate = 30;

    targets.forEach((target, i) => {
      let value = 0;
      const increment = target / (duration / frameRate);

      const interval = setInterval(() => {
        value += increment;
        if (value >= target) {
          value = target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = parseFloat(value.toFixed(2));
          return newCounts;
        });
      }, frameRate);
    });
  };

  // ➤ GSAP fade + directional animation
  const animateCards = () => {
    const directions = ["-40px", "0px", "40px", "40px"];

    animatedCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: directions[index] },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.15,
        }
      );
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-text">
          Our Impact in Numbers
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Highest Package", value: `₹${counts[0].toFixed(0)} LPA` },
            { label: "Average Package", value: `₹${counts[1].toFixed(2)} LPA` },
            {
              label: "Recruiting Companies",
              value: `${Math.floor(counts[2])}+`,
            },
            {
              label: "Placement Assistance",
              value: `${Math.floor(counts[3])}%`,
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (animatedCardsRef.current[index] = el)}
              className="bg-white border border-blue-100 shadow-md p-8 rounded-xl opacity-0 transform hover:scale-105 hover:shadow-xl transition-all"
            >
              <h3 className="text-4xl font-bold text-secondary mb-2">
                {item.value}
              </h3>
              <p className="text-lg font-semibold text-secondary">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
