"use client";
import React from "react";
import Image from "next/image";

export default function BannerSlider({ activeSection }) {
  // ✅ Static local images (object mapping)
  const desktopImages = {
    Sports: "/Facilities/FacilitiesSports.jpg",
    Transport: "/Facilities/FacilitiesGymTransport.jpg",
    Canteen: "/Facilities/FacilitiesCanteen.jpg",
    Hostel: "/Facilities/FacilitiesHostel.jpg",
    Library: "/Facilities/FacilitiesLibrary.jpg",
    Gym: "/Facilities/FacilitiesGymTransport.jpg",
    "Primary Health Centre": "/Facilities/FacilitiesGymTransport.jpg",
  };

  const mobileImages = {
    Sports: "/Facilities/FacilitiesSports.jpg",
    Transport: "/Facilities/FacilitiesGymTransport.jpg",
    Canteen: "/Facilities/FacilitiesCanteen.jpg",
    Hostel: "/Facilities/FacilitiesHostel.jpg",
    Library: "/Facilities/FacilitiesLibrary.jpg",
    Gym: "/Facilities/FacilitiesGymTransport.jpg",
    "Primary Health Centre": "/Facilities/FacilitiesGymTransport.jpg",
  };

  // ✅ Get correct image paths safely
  const desktopImage =
    desktopImages[activeSection] || desktopImages["Sports"];
  const mobileImage = mobileImages[activeSection] || mobileImages["Sports"];

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      {/* ✅ Desktop Banner */}
      <div className="hidden md:block w-full">
        <div className="relative flex-shrink-0 w-full">
          <Image
            src={desktopImage}
            alt={`${activeSection || "Sports"} Facility`}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* ✅ Mobile Banner */}
      <div className="block md:hidden w-full">
        <div className="relative flex-shrink-0 w-full">
          <Image
            src={mobileImage}
            alt={`${activeSection || "Sports"} Facility`}
            width={1080}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* ✅ Optional CSS animations (kept for future use) */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
            opacity: 0.8;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        .animate-progressFill {
          animation: progressFill 4.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
