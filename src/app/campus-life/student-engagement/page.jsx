import React from "react";
import Image from "next/image";
import StudentWelfare from "@/components/CampusLife/StudentEngagement";

export default function StudentWelfarePage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-engagement/student-engagement-banner.webp"
          alt="Student Engagement Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <StudentWelfare />
      </div>
    </div>
  );
}
