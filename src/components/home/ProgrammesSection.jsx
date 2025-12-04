import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProgrammesSection() {
  const items = [
    { tag: "Human Resource Management", title: "Human Resource Management", img: "/MBA4.jpg" },
    { tag: "Finance Management", title: "Finance Management", img: "/MBA1.jpg" },
    { tag: "Operations & Supply Chain Management", title: "Operations & Supply Chain Management", img: "/MBA3.jpg", tall: true },
    { tag: "Marketing Management", title: "Marketing Management", img: "/MBA2.jpg" },
    { tag: "Business Analytics", title: "Business Analytics", img: "/MBA4.jpg" },
  ];

  // Human Resource Management
  // Finance Management
  // Operations & Supply Chain Management
  // Marketing Management
  // Business Analytics
  return (
    <div className="w-full bg-white py-16"> {/* FULL-WIDTH WHITE BACKGROUND */}
      <section className="w-full max-w-7xl mx-auto px-4">

        {/* ⭐ Heading Added */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-10">
          MBA Specializations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* FIRST ROW — Big card + Small card */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card {...items[0]} />
            </div>
            <div className="md:col-span-1">
              <Card {...items[1]} />
            </div>
          </div>

          {/* TALL RIGHT IMAGE */}
          <div className="row-span-2">
            <Card {...items[2]} tall />
          </div>

          {/* SECOND ROW — Small + Big */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card {...items[3]} />
            </div>
            <div className="md:col-span-2">
              <Card {...items[4]} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function Card({ img, tag, title, tall }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group ${
        tall ? "h-[540px]" : "h-[260px]"
      }`}
    >
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40"
      />

      {/* Aqua Hover Overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Tag */}
      <span className="absolute top-4 left-4 bg-teal-200 text-black text-xs font-semibold px-3 py-1 rounded-md z-20 group-hover:bg-white transition-colors duration-300">
        {tag}
      </span>

      {/* TEXT BLOCK */}
      <div className="absolute bottom-6 left-6 right-6 z-20">

        <h3 className="text-xl font-semibold transition-all duration-500 transform group-hover:-translate-y-1 text-white group-hover:text-black">
          {title}
        </h3>

        <p className="text-sm text-black opacity-0 max-h-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime fugiat excepturi magni corrupti quidem. Est?
        </p>

        <div className="flex items-center gap-1 mt-3 text-sm font-medium text-white group-hover:text-black transition-colors duration-300">
          <span>Know More</span>
          <ChevronRight size={18} />
        </div>

      </div>
    </div>
  );
}
