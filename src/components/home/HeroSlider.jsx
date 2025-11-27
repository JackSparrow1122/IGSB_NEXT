"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const HeroSlider = () => {
  // 👉 Load banners directly from /public/banners
  const desktopImages = [
    "/banners/BANNER1.jpg",
    "/banners/BANNER2.jpg",
    "/banners/BANNER3.jpg",
    "/banners/BANNER4.jpg",
    "/banners/BANNER5.jpg",
  ];

  const mobileImages = [
    "/banners/placement-banner1.jpg",
    "/banners/placement-banner2.jpg",
    "/banners/ICEMBANNER6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = desktopImages.length;

    if (currentIndex === totalSlides - 1) {
      setPreviousIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setPreviousIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setPreviousIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full min-h-[50vh] h-[50vh] sm:min-h-[88vh] sm:h-[88vh] overflow-hidden isolate">
      {/* ---------------- DESKTOP SLIDER ---------------- */}
      <div className="hidden md:block relative w-full h-full">
        {[...desktopImages, desktopImages[0]].map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentIndex === i
                ? "opacity-100 scale-100"
                : previousIndex === i
                ? "opacity-0 scale-100"
                : "opacity-0 scale-102"
            }`}
            style={{
              transform: `scale(${
                currentIndex === i ? 1 : previousIndex === i ? 1 : 1.02
              })`,
              zIndex: currentIndex === i ? 20 : previousIndex === i ? 10 : 0,
            }}
          >
            <Image
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
              width={1600}
              height={700}
              unoptimized
              priority={i === 0}
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-30">
          {desktopImages.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all ${
                currentIndex % desktopImages.length === i
                  ? "w-8 bg-gray-300"
                  : "w-2 bg-gray-500/60"
              }`}
            >
              {currentIndex % desktopImages.length === i && (
                <span className="absolute top-0 left-0 h-full w-0 bg-secondary animate-progressFill"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- MOBILE SLIDER ---------------- */}
      <div className="block md:hidden relative w-full h-full">
        {[...mobileImages, mobileImages[0]].map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentIndex === i
                ? "opacity-100 scale-100"
                : previousIndex === i
                ? "opacity-0 scale-100"
                : "opacity-0 scale-102"
            }`}
            style={{
              transform: `scale(${
                currentIndex === i ? 1 : previousIndex === i ? 1 : 1.02
              })`,
              zIndex: currentIndex === i ? 20 : previousIndex === i ? 10 : 0,
            }}
          >
            <Image
              src={img}
              alt="mobile banner"
              className="w-full h-full object-cover"
              width={600}
              height={400}
              quality={100}
              unoptimized
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* ---------------- CSS ANIMATIONS ---------------- */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progressFill {
          animation: progressFill 5s linear forwards;
        }

        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
