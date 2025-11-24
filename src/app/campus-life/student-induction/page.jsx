import React from "react";
import Image from "next/image";
import StudentInduction from "@/components/CampusLife/StudentInduction";

export default function StudentInductionPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-induction/Students-Induction-Banner.jpg"
          alt="Student Engagement Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <StudentInduction />
      </div>
    </div>
  );
}
