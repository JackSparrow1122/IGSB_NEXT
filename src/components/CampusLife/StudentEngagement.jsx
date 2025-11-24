"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentEvents } from "@/static/campuslife/student-events";

/* ============================================================
   Compact Card for Small Events (Mini Card)
   ============================================================ */
function MiniEventCard({ event }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#023b5e] line-clamp-2">
          {event.title}
        </h3>
      </div>
    </div>
  );
}

/* ============================================================
   Full Event Card for Detailed Events
   Automatically handles: description, objective, topics, images
   ============================================================ */
export function StudentEvent({ event }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
        {event.title}
      </h2>

      {/* Description */}
      {event.description && event.description.length > 0 && (
        <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem]">
          {event.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      {/* Objective */}
      {event.objective && (
        <div className="bg-gray-50 p-4 rounded-lg border  border-gray-200">
          <h4 className="font-semibold text-[#023b5e] mb-2">Objective</h4>

          {Array.isArray(event.objective) ? (
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {event.objective.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{event.objective}</p>
          )}
        </div>
      )}

      {/* Topics */}
      {event.topics &&
        Array.isArray(event.topics) &&
        event.topics.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-[#023b5e] mb-2">
              Topics Covered
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {event.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        )}

      {/* Images */}
      {event.images && event.images.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {event.images.slice(0, 6).map((img, idx) => (
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

/* ============================================================
   Main Component – Smart Auto Layout
   ============================================================ */
export default function StudentWelfare() {
  const YEARS = Object.keys(studentEvents);
  const [selectedYear, setSelectedYear] = useState("AY-2024-25");

  // Helper to detect which events should be mini cards
  function isMiniCard(event) {
    return (
      (!event.description || event.description.length === 0) &&
      (!event.objective || event.objective.length === 0) &&
      (!event.topics || event.topics.length === 0) &&
      event.images &&
      event.images.length === 1
    );
  }

  const miniEvents = studentEvents[selectedYear].filter(isMiniCard);
  const fullEvents = studentEvents[selectedYear].filter(
    (event) => !isMiniCard(event)
  );

  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b">
        <h1 className="text-3xl font-semibold text-[#023b5e]">
          Student Engagement
        </h1>

        {/* Year Selector */}
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

      {/* Events Renderer */}
      <div className="space-y-12">
        {/* FULL EVENTS */}
        {fullEvents.length > 0 && (
          <div className="space-y-12">
            {fullEvents.map((event, idx) => (
              <StudentEvent key={idx} event={event} />
            ))}
          </div>
        )}

        {/* MINI GRID EVENTS */}
        {miniEvents.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniEvents.map((event, idx) => (
              <MiniEventCard key={idx} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
