"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentInduction } from "@/static/campuslife/student-inductions.js";

/* ============================================================
   Mini Card (for short, image-only induction items)
   ============================================================ */
function MiniInductionCard({ item }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Image or fallback */}
      {item.images && item.images.length > 0 ? (
        <div className="relative w-full h-48">
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#023b5e] line-clamp-2">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

/* ============================================================
   Full Induction Card (renders description, objective, topics, images)
   ============================================================ */
export function InductionCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
        {item.title}
      </h2>

      {/* Description */}
      {item.description?.length > 0 && (
        <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem]">
          {item.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      {/* ================================
          Sessions With Side-By-Side Images
         ================================ */}
      {item.sessions && item.sessions.length > 0 && (
        <div className="space-y-6">
          <h4 className="font-semibold text-[#023b5e] text-xl">Sessions</h4>

          {item.sessions.map((session, idx) => {
            const imageForSession = item.images?.[idx];

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
              >
                {/* LEFT: Session Details */}
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-[#023b5e]">
                    {session.title}
                  </h5>

                  {session.speaker && (
                    <p className="text-sm font-medium text-gray-600">
                      {session.speaker}
                    </p>
                  )}

                  <p className="text-gray-700 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* RIGHT: Session Image */}
                {imageForSession && (
                  <div>
                    {imageForSession ? (
                      <div className="relative w-full h-56 rounded-lg overflow-hidden border border-gray-300 shadow">
                        <Image
                          src={imageForSession}
                          alt={session.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Objective */}
      {item.objective && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-[#023b5e] mb-2">Objective</h4>

          {Array.isArray(item.objective) ? (
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {item.objective.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{item.objective}</p>
          )}
        </div>
      )}

      {/* Topics */}
      {item.topics?.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-[#023b5e] mb-2">Topics Covered</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {item.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Images (ONLY for items WITH NO sessions) */}
      {!item.sessions && item.images?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {item.images.slice(0, 6).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-52 rounded-xl overflow-hidden shadow-md border border-gray-200"
            >
              <Image src={img} alt={item.title} fill className="object-cover" />
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
export default function StudentInduction() {
  const YEARS = Object.keys(studentInduction);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);

  const yearData = studentInduction[selectedYear];

  // Detect mini cards (simple, image-only)
  function isMini(item) {
    return (
      (!item.description || item.description.length === 0) &&
      (!item.objective || item.objective.length === 0) &&
      (!item.topics || item.topics.length === 0) &&
      item.images &&
      item.images.length <= 1
    );
  }

  const miniItems = yearData.filter(isMini);
  const fullItems = yearData.filter((item) => !isMini(item));

  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 pb-6 border-b">
        {/* Left Column – Title */}
        <h1 className="text-3xl font-semibold text-[#023b5e]">
          Student Induction Program
        </h1>

        {/* Right Column – Buttons */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {YEARS.map((year) => (
            <button
              key={year}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border text-sm
                ${
                  selectedYear === year
                    ? "bg-secondary text-white border-secondary shadow"
                    : "bg-white text-[#023b5e] border-gray-300 hover:bg-gray-100"
                }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Renderer */}
      <div className="space-y-12">
        {/* Full Cards */}
        {fullItems.length > 0 && (
          <div className="space-y-12">
            {fullItems.map((item, idx) => (
              <InductionCard key={idx} item={item} />
            ))}
          </div>
        )}

        {/* Mini Cards Grid */}
        {miniItems.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniItems.map((item, idx) => (
              <MiniInductionCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
