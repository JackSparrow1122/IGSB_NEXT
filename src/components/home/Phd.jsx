import React from "react";
import { ChevronRight } from "lucide-react";

export default function PhdSection() {
  const items = [
    { tag: "PHD", title: "PhD in Finance ", img: "/MBA1.jpg" },
    { tag: "PHD", title: "PhD in Marketing", img: "/MBA2.jpg" },
    { tag: "PHD", title: "PhD in Business Analytics", img: "/MBA3.jpg" },
    { tag: "PHD", title: "PhD in Human Resource", img: "/MBA4.jpg" },
  ];

    // Human Resource Management
  // Finance Management
  // Operations & Supply Chain Management
  // Marketing Management
  // Business Analytics

  return (
    <div className="w-full bg-white py-16">
      <section className="w-full max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-10">
          PhD Research Programmes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT TALL CARD */}
          <div className="md:row-span-2">
            <Card {...items[0]} tall />
          </div>

          {/* RIGHT UPPER BIG CARD */}
          <div className="md:col-span-2">
            <Card {...items[1]} big />
          </div>

          {/* RIGHT LOWER TWO SMALL CARDS */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card {...items[2]} />
            <Card {...items[3]} />
          </div>

        </div>
      </section>
    </div>
  );
}

/* ---------- CARD COMPONENT ---------- */

function Card({ img, tag, title, tall, big }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group 
        ${tall ? "h-[545px]" : big ? "h-[260px]" : "h-[260px]"}
        bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
    >

      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Tag */}
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md z-20">
        {tag}
      </span>

      {/* Text Content */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-xl font-semibold text-white transition-all duration-500 transform group-hover:-translate-y-1">
          {title}
        </h3>

        <p className="text-sm text-white opacity-0 max-h-0 overflow-hidden 
          group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
          Explore advanced PhD research opportunities across specializations.
        </p>

        <div className="flex items-center gap-1 mt-3 text-sm font-medium text-white">
          <span>Know More</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
