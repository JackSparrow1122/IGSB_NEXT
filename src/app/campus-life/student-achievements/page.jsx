"use client";

import React from "react";
import Image from "next/image";
import AchievementsComponent from "@/components/CampusLife/AchievementsComponent";

export default function AchievementsPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-achievements/Student-Achievement-Banner.jpg"
          alt="Achievements Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AchievementsComponent />
      </div>
    </div>
  );
}
