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
    <div className="h-full flex flex-col bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        ACADEMIC <span className="text-secondary">YEAR 2026-27</span>
      </h2>

      {/* Programs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-900 mb-8">
        {programs.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="
              flex items-center group 
              text-sm sm:text-base 
              font-medium text-gray-800
              hover:text-secondary transition-all
            "
          >
            <span className="text-secondary text-lg mr-2 group-hover:translate-x-1 transition-all">›</span>
            {item.name}
          </Link>
        ))}
      </div>

      {/* Academic Image */}
      <div className="">
        <Image
          src="/academic.jpg"
          alt="Academic"
          width={800}
          height={400}
          className="w-full h-80 rounded-lg shadow-md object-cover object-center"
          priority
        />
      </div>
    </div>
  );
};

export default ProgramList;
