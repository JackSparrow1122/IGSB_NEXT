"use client";
import React, { useState } from "react";
import Image from "next/image";
import { certifications } from "@/static/campuslife/student-certifications";

/* ============================================================
   Compact Card for Small Certifications (Mini Card)
   ============================================================ */
function MiniCertificate({ certification }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Image only if present */}
      {certification.images && certification.images.length > 0 ? (
        <div className="relative w-full h-48">
          <Image
            src={certification.images[0]}
            alt={certification.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#023b5e] line-clamp-2">
          {certification.title}
        </h3>
      </div>
    </div>
  );
}

/* ============================================================
   Full Certification Card (auto-renders all fields)
   ============================================================ */
export function Certificate({ certification }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#023b5e] leading-snug">
        {certification.title}
      </h2>

      {/* Description */}
      {certification.description?.length > 0 && (
        <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem]">
          {certification.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      {/* Objective */}
      {certification.objective && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-[#023b5e] mb-2">Objective</h4>

          {Array.isArray(certification.objective) ? (
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {certification.objective.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{certification.objective}</p>
          )}
        </div>
      )}

      {/* Topics */}
      {certification.topics?.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-[#023b5e] mb-2">Topics Covered</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {certification.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Images */}
      {certification.images?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {certification.images.slice(0, 6).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-52 rounded-xl overflow-hidden shadow-md border border-gray-200"
            >
              <Image
                src={img}
                alt={certification.title}
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
   Main Component – Smart Auto Layout Based on Data
   ============================================================ */
export default function StudentCertification() {
  const YEARS = Object.keys(certifications);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]); // default first year dynamically

  // detect mini card
  function isMiniCard(certification) {
    return (
      (!certification.description || certification.description.length === 0) &&
      (!certification.objective || certification.objective.length === 0) &&
      (!certification.topics || certification.topics.length === 0) &&
      certification.images &&
      certification.images.length === 1
    );
  }

  const yearData = certifications[selectedYear];

  const miniCerts = yearData.filter(isMiniCard);
  const fullCerts = yearData.filter((c) => !isMiniCard(c));

  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b">
        <h1 className="text-3xl font-semibold text-[#023b5e]">
          Student Certifications
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

      {/* Renderer */}
      <div className="space-y-12">
        {/* FULL CARDS */}
        {fullCerts.length > 0 && (
          <div className="space-y-12">
            {fullCerts.map((cert, idx) => (
              <Certificate key={idx} certification={cert} />
            ))}
          </div>
        )}

        {/* MINI CARDS GRID */}
        {miniCerts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniCerts.map((cert, idx) => (
              <MiniCertificate key={idx} certification={cert} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
