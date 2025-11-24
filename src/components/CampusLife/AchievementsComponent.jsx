"use client";

import React, { useState } from "react";
import Image from "next/image";
import { achievements } from "@/static/campuslife/student-achievements.js";

/* ============================
   Full Width Left–Right Card
   ============================ */
function AchievementCard({ item }) {
  const hasMultipleImages = item.images && item.images.length > 1;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      {/* For single image: Text on left, image on right */}
      {!hasMultipleImages && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE – TEXT */}
          <div className="space-y-4 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
              {item.title}
            </h2>

            {item.description?.length > 0 && (
              <div className="space-y-3 text-gray-700 leading-relaxed text-[1.05rem]">
                {item.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE – SINGLE IMAGE */}
          <div className="order-1 lg:order-2">
            {item.images && item.images.length === 1 ? (
              <div className="relative w-full h-52 rounded-xl overflow-hidden ">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-contain rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            ) : (
              <div className="w-full h-52 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
        </div>
      )}

      {/* For multiple images: Text first, then images below */}
      {hasMultipleImages && (
        <div className="space-y-8">
          {/* TEXT CONTENT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
              {item.title}
            </h2>

            {item.description?.length > 0 && (
              <div className="space-y-3 text-gray-700 leading-relaxed text-[1.05rem]">
                {item.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
          </div>

          {/* IMAGES BELOW */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {item.images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-56 rounded-xl overflow-hidden  "
              >
                <Image
                  src={img}
                  alt={`${item.title} - Image ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================
   Main Component
   ============================ */
export default function AchievementsComponent() {
  const YEARS = Object.keys(achievements);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);

  const yearData = achievements[selectedYear];

  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b">
        <h1 className="text-3xl font-semibold text-[#023b5e]">
          Student Achievements
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

      {/* Achievement Cards */}
      <div className="space-y-12">
        {yearData.map((item, idx) => (
          <AchievementCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
