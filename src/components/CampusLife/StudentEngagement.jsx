"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentEvents } from "@/static/campuslife/student-events";

function MiniEventCard({ event }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#023b5e] line-clamp-2">
          {event.title}
        </h3>
      </div>
    </div>
  );
}

export function StudentEvent({ event }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
        {event.title}
      </h2>

      <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem]">
        {event.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {event.images?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {event.images.slice(0, 5).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-52 rounded-xl overflow-hidden shadow-md border border-gray-200"
            >
              <Image
                src={img}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StudentWelfare() {
  const YEARS = Object.keys(studentEvents);
  const [selectedYear, setSelectedYear] = useState("AY-2024-25");

  return (
    <div className="space-y-12 w-full">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b">
        <h1 className="text-3xl font-semibold text-[#023b5e]">
          Student Engagement
        </h1>

        <div className="flex gap-3 flex-wrap">
          {YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg border transition font-medium ${
                selectedYear === year
                  ? "bg-secondary text-white border-secondary shadow-md"
                  : "bg-white text-[#023b5e] border-gray-300 hover:bg-gray-100"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* Full layout for descriptive events */}
        <div className="space-y-12">
          {studentEvents[selectedYear]
            .filter((event) => event.description.length > 0)
            .map((event, idx) => (
              <StudentEvent key={idx} event={event} />
            ))}
        </div>

        {/* Grid layout for no-description events */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentEvents[selectedYear]
            .filter((event) => event.description.length === 0)
            .map((event, idx) => (
              <MiniEventCard key={idx} event={event} />
            ))}
        </div>
      </div>
    </div>
  );
}
