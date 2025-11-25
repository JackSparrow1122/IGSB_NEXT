"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramList = () => {
  const programs = [
    { name: "MBA – Human Resource Management", link: "/programs/mba/hr" },
    { name: "MBA – Finance", link: "/programs/mba/finance" },
    { name: "MBA – Operations & Supply Chain Management", link: "/programs/mba/operations" },
    { name: "MBA – Marketing Management", link: "/programs/mba/marketing" },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg p-4 sm:p-8 shadow-sm border border-gray-200">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        ACADEMIC <span className="text-secondary">YEAR 2026</span>
      </h2>

      {/* Program Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 text-gray-800 mb-8">
        {programs.map((item, index) => (
          <p key={index} className="flex items-start text-sm sm:text-base">
            <span className="text-secondary mr-2 font-bold">›</span>
            <Link
              href={item.link}
              className="hover:underline cursor-pointer hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </p>
        ))}
      </div>

      {/* Academic Image */}
      <div className="mt-4">
        <Image
          src="/academic.jpg"
          alt="Academic"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ProgramList;
